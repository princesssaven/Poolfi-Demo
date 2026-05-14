import { Keypair, TransactionBuilder } from "@stellar/stellar-sdk";
import { getExchangeRate } from "@/src/lib/busha/client";
import { stellarConfig } from "@/src/lib/stellar/client";

const FALLBACK_USDC_TO_NGN_RATE = 1500;
const STROOP_DECIMALS = 10_000_000;

const USDC_ISSUERS = {
  PUBLIC: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
  TESTNET: "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5",
} as const;

export type TrustlessWorkEscrowType = "single-release" | "multi-release";

type JsonObject = Record<string, unknown>;

interface TrustlessWorkConfig {
  apiKey: string;
  baseUrl: string;
  platformAddress: string;
  secretKey: string;
}

interface TrustlessWorkRoles {
  approver: string;
  disputeResolver: string;
  platformAddress: string;
  receiver: string;
  releaseSigner: string;
  serviceProvider: string;
}

export interface InitEscrowInput {
  milestoneWithdrawals: boolean;
  milestones: Array<{ label: string; percentage: string }>;
  poolDescription: string;
  poolId: string;
  poolName: string;
  poolType?: "goal" | "impact";
  targetAmountNgn: number;
}

export interface TrustlessWorkActionResult {
  contractId?: string;
  raw: JsonObject;
  status?: string;
  txHash?: string;
}

export interface InitializePoolEscrowResult extends TrustlessWorkActionResult {
  contractId: string;
  escrowType: TrustlessWorkEscrowType;
}

function getTrustlessWorkConfig(): TrustlessWorkConfig {
  const apiKey = process.env.TRUSTLESS_WORK_API_KEY?.trim();
  const platformAddress =
    process.env.TRUSTLESS_WORK_PLATFORM_ADDRESS?.trim() ||
    stellarConfig.receiverAddress?.trim();
  const secretKey = process.env.TRUSTLESS_WORK_SIGNER_SECRET_KEY?.trim() || stellarConfig.secretKey?.trim();

  if (!apiKey) {
    throw new Error("TRUSTLESS_WORK_API_KEY is not configured");
  }

  if (!platformAddress) {
    throw new Error(
      "TRUSTLESS_WORK_PLATFORM_ADDRESS or NEXT_PUBLIC_STELLAR_RECEIVER_ADDRESS is not configured"
    );
  }

  if (!secretKey) {
    throw new Error("TRUSTLESS_WORK_SIGNER_SECRET_KEY or STELLAR_SECRET_KEY is not configured");
  }

  return {
    apiKey,
    baseUrl: (process.env.TRUSTLESS_WORK_API_URL || "https://dev.api.trustlesswork.com").replace(/\/+$/, ""),
    platformAddress,
    secretKey,
  };
}

export function isTrustlessWorkConfigured() {
  return Boolean(
    process.env.TRUSTLESS_WORK_API_KEY?.trim() &&
      (process.env.TRUSTLESS_WORK_PLATFORM_ADDRESS?.trim() ||
        stellarConfig.receiverAddress?.trim()) &&
      (process.env.TRUSTLESS_WORK_SIGNER_SECRET_KEY?.trim() ||
        stellarConfig.secretKey?.trim())
  );
}

function trustlessWorkHeaders(apiKey: string) {
  return {
    Accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  };
}

function getTrustlessWorkRoles(platformAddress: string): TrustlessWorkRoles {
  return {
    approver: process.env.TRUSTLESS_WORK_APPROVER_ADDRESS?.trim() || platformAddress,
    disputeResolver:
      process.env.TRUSTLESS_WORK_DISPUTE_RESOLVER_ADDRESS?.trim() || platformAddress,
    platformAddress,
    receiver: process.env.TRUSTLESS_WORK_RECEIVER_ADDRESS?.trim() || platformAddress,
    releaseSigner: process.env.TRUSTLESS_WORK_RELEASE_SIGNER_ADDRESS?.trim() || platformAddress,
    serviceProvider:
      process.env.TRUSTLESS_WORK_SERVICE_PROVIDER_ADDRESS?.trim() || platformAddress,
  };
}

function getUsdcIssuer() {
  const configuredIssuer = process.env.TRUSTLESS_WORK_USDC_ISSUER?.trim();

  if (configuredIssuer) {
    return configuredIssuer;
  }

  return process.env.STELLAR_NETWORK === "PUBLIC" ? USDC_ISSUERS.PUBLIC : USDC_ISSUERS.TESTNET;
}

function getTrustline() {
  return {
    address: getUsdcIssuer(),
    decimals: STROOP_DECIMALS,
    symbol: "USDC",
  };
}

function getPlatformFeePercent() {
  const rawValue = process.env.TRUSTLESS_WORK_PLATFORM_FEE_PERCENT ?? "1";
  const platformFee = Number(rawValue);

  if (!Number.isFinite(platformFee) || platformFee < 0) {
    return 0;
  }

  return Math.min(platformFee, 99);
}

function parsePercentage(value: string) {
  const parsed = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) && parsed > 0 ? Math.min(parsed, 100) : null;
}

function toTokenAmount(value: number) {
  return Number(value.toFixed(7));
}

async function convertNgnToUsdc(amountNgn: number) {
  const liveRate = await getExchangeRate("USDC", "NGN");
  const rate = liveRate ?? FALLBACK_USDC_TO_NGN_RATE;

  return toTokenAmount(amountNgn / rate);
}

function getEscrowType(input: InitEscrowInput): TrustlessWorkEscrowType {
  if (input.poolType === "impact") {
    return "multi-release";
  }

  return input.milestoneWithdrawals && input.milestones.length > 1
    ? "multi-release"
    : "single-release";
}

function getMilestoneDescriptions(input: InitEscrowInput) {
  const descriptions = input.milestones
    .map((milestone) => milestone.label.trim())
    .filter(Boolean);

  return descriptions.length > 0 ? descriptions : ["Pool completed"];
}

function getMultiReleaseMilestones(
  milestones: InitEscrowInput["milestones"],
  totalAmount: number
) {
  const usableMilestones = milestones.length > 0 ? milestones : [{ label: "Pool completed", percentage: "100%" }];
  const parsedPercentages = usableMilestones.map((milestone) => parsePercentage(milestone.percentage));
  const hasValidPercentages = parsedPercentages.every((percentage) => percentage !== null);

  if (!hasValidPercentages) {
    const evenAmount = toTokenAmount(totalAmount / usableMilestones.length);

    return usableMilestones.map((milestone, index) => ({
      amount:
        index === usableMilestones.length - 1
          ? toTokenAmount(totalAmount - evenAmount * (usableMilestones.length - 1))
          : evenAmount,
      description: milestone.label.trim() || `Milestone ${index + 1}`,
    }));
  }

  let previousPercentage = 0;
  let allocatedAmount = 0;

  return usableMilestones.map((milestone, index) => {
    const currentPercentage = parsedPercentages[index] ?? 100;
    const percentageDelta =
      index === usableMilestones.length - 1
        ? Math.max(100 - previousPercentage, 0)
        : Math.max(currentPercentage - previousPercentage, 0);
    const isLast = index === usableMilestones.length - 1;
    const amount = isLast
      ? toTokenAmount(totalAmount - allocatedAmount)
      : toTokenAmount((totalAmount * percentageDelta) / 100);

    previousPercentage = Math.max(previousPercentage, currentPercentage);
    allocatedAmount += amount;

    return {
      amount,
      description: milestone.label.trim() || `Milestone ${index + 1}`,
    };
  });
}

async function trustlessWorkPost<T extends JsonObject>(
  path: string,
  body: JsonObject
): Promise<T> {
  const config = getTrustlessWorkConfig();
  const response = await fetch(`${config.baseUrl}${path}`, {
    body: JSON.stringify(body),
    headers: trustlessWorkHeaders(config.apiKey),
    method: "POST",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Trustless Work ${path} failed (${response.status}): ${errorBody}`);
  }

  return (await response.json()) as T;
}

function getUnsignedTransaction(response: JsonObject) {
  const unsignedTransaction = response.unsignedTransaction;

  if (typeof unsignedTransaction !== "string" || unsignedTransaction.length === 0) {
    throw new Error(
      `Trustless Work response did not include unsignedTransaction: ${JSON.stringify(response)}`
    );
  }

  return unsignedTransaction;
}

function signXdr(unsignedTransaction: string) {
  const { secretKey } = getTrustlessWorkConfig();
  const keypair = Keypair.fromSecret(secretKey);
  const transaction = TransactionBuilder.fromXDR(
    unsignedTransaction,
    stellarConfig.networkPassphrase
  );

  transaction.sign(keypair);

  return transaction.toEnvelope().toXDR("base64");
}

function findStringByKey(value: unknown, keys: string[]): string | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  for (const [key, nestedValue] of Object.entries(value)) {
    if (keys.includes(key) && typeof nestedValue === "string" && nestedValue.length > 0) {
      return nestedValue;
    }

    const match = findStringByKey(nestedValue, keys);
    if (match) {
      return match;
    }
  }

  return undefined;
}

function normalizeActionResult(response: JsonObject): TrustlessWorkActionResult {
  return {
    contractId: findStringByKey(response, ["contractId", "contract_id", "escrow", "id"]),
    raw: response,
    status: typeof response.status === "string" ? response.status : undefined,
    txHash: findStringByKey(response, ["txHash", "hash", "transactionHash", "transaction_hash"]),
  };
}

async function executeServerSignedAction(
  path: string,
  body: JsonObject,
  options: { returnEscrowData?: boolean } = {}
) {
  const unsignedResponse = await trustlessWorkPost<JsonObject>(path, body);
  const signedXdr = signXdr(getUnsignedTransaction(unsignedResponse));
  const sendResponse = await trustlessWorkPost<JsonObject>("/helper/send-transaction", {
    returnEscrowDataIsRequired: Boolean(options.returnEscrowData),
    signedXdr,
  });

  return normalizeActionResult(sendResponse);
}

export async function initializePoolEscrow(
  input: InitEscrowInput
): Promise<InitializePoolEscrowResult> {
  const config = getTrustlessWorkConfig();
  const escrowType = getEscrowType(input);
  const roles = getTrustlessWorkRoles(config.platformAddress);
  const amount = await convertNgnToUsdc(input.targetAmountNgn);
  const milestones =
    escrowType === "multi-release"
      ? getMultiReleaseMilestones(input.milestones, amount)
      : getMilestoneDescriptions(input).map((description) => ({ description }));

  const deployBody = {
    amount: escrowType === "single-release" ? amount : undefined,
    description:
      input.poolDescription.trim() || `PoolFi ${input.poolType ?? "goal"} pool: ${input.poolName}`,
    engagementId: input.poolId,
    milestones,
    platformFee: getPlatformFeePercent(),
    roles,
    signer: config.platformAddress,
    title: input.poolName,
    trustline: getTrustline(),
  };

  const result = await executeServerSignedAction(`/deployer/${escrowType}`, deployBody, {
    returnEscrowData: true,
  });

  if (!result.contractId) {
    throw new Error(
      `Trustless Work deploy returned no contract ID: ${JSON.stringify(result.raw)}`
    );
  }

  return {
    ...result,
    contractId: result.contractId,
    escrowType,
  };
}

export async function fundPoolEscrow(input: {
  amountNgn: number;
  contractId: string;
  escrowType: TrustlessWorkEscrowType;
}) {
  const config = getTrustlessWorkConfig();
  const amount = await convertNgnToUsdc(input.amountNgn);

  return executeServerSignedAction(`/escrow/${input.escrowType}/fund-escrow`, {
    amount,
    contractId: input.contractId,
    signer: config.platformAddress,
  });
}

export async function releasePoolEscrow(input: {
  contractId: string;
  escrowType: TrustlessWorkEscrowType;
  milestoneCount: number;
}) {
  const config = getTrustlessWorkConfig();
  const roles = getTrustlessWorkRoles(config.platformAddress);
  const milestoneCount = Math.max(input.milestoneCount, 1);
  const results: TrustlessWorkActionResult[] = [];

  for (let index = 1; index <= milestoneCount; index += 1) {
    results.push(
      await executeServerSignedAction(
        `/escrow/${input.escrowType}/change-milestone-status`,
        {
          contractId: input.contractId,
          milestoneIndex: String(index),
          newEvidence: "PoolFi pool was closed by the pool owner.",
          newStatus: "Completed",
          serviceProvider: roles.serviceProvider,
        }
      )
    );

    results.push(
      await executeServerSignedAction(`/escrow/${input.escrowType}/approve-milestone`, {
        approver: roles.approver,
        contractId: input.contractId,
        milestoneIndex: String(index),
      })
    );

    if (input.escrowType === "multi-release") {
      results.push(
        await executeServerSignedAction("/escrow/multi-release/release-milestone-funds", {
          contractId: input.contractId,
          milestoneIndex: String(index),
          releaseSigner: roles.releaseSigner,
        })
      );
    }
  }

  if (input.escrowType === "single-release") {
    results.push(
      await executeServerSignedAction("/escrow/single-release/release-funds", {
        contractId: input.contractId,
        releaseSigner: roles.releaseSigner,
      })
    );
  }

  return results;
}

