import { eq, sql } from "drizzle-orm";
import { getDb } from "@/src/lib/db";
import { users, deposits, notifications } from "@/src/lib/db/schema";
import { stellarConfig } from "@/src/lib/stellar/client";

interface StellarPayment {
  id: string;
  transaction_hash: string;
  from: string;
  to: string;
  amount: string;
  asset_code?: string;
  asset_type: string;
  memo?: string;
  memo_type?: string;
  created_at: string;
}

/**
 * Fetches recent payments to the PoolFi receiver address from Stellar Horizon,
 * matches them to users via Memo ID, and credits their wallet balance.
 */
export async function processIncomingPayments(): Promise<{
  processed: number;
  skipped: number;
  errors: string[];
}> {
  const receiverAddress = stellarConfig.receiverAddress;

  if (!receiverAddress) {
    return { processed: 0, skipped: 0, errors: ["STELLAR_RECEIVER_ADDRESS is not configured."] };
  }

  const errors: string[] = [];
  let processed = 0;
  let skipped = 0;

  try {
    // Fetch recent payments to our address from the Horizon API
    const horizonUrl = stellarConfig.horizonUrl;
    const response = await fetch(
      `${horizonUrl}/accounts/${receiverAddress}/payments?order=desc&limit=50`,
      { next: { revalidate: 0 } }
    );

    if (!response.ok) {
      return {
        processed: 0,
        skipped: 0,
        errors: [`Horizon API returned ${response.status}: ${await response.text()}`],
      };
    }

    const data = await response.json();
    const records = data._embedded?.records ?? [];

    for (const record of records) {
      // Only process "payment" type operations where WE are the receiver
      if (record.type !== "payment" || record.to !== receiverAddress) {
        skipped++;
        continue;
      }

      const payment: StellarPayment = record;
      const txHash = payment.transaction_hash;

      // Check if we already processed this transaction
      const [existing] = await getDb()
        .select({ id: deposits.id })
        .from(deposits)
        .where(eq(deposits.stellarTxHash, txHash))
        .limit(1);

      if (existing) {
        skipped++;
        continue;
      }

      // Fetch the full transaction to get the memo
      const txResponse = await fetch(`${horizonUrl}/transactions/${txHash}`);
      if (!txResponse.ok) {
        errors.push(`Failed to fetch transaction ${txHash}`);
        continue;
      }

      const tx = await txResponse.json();
      const memo = tx.memo || "";

      if (!memo) {
        errors.push(`Transaction ${txHash} has no memo — cannot attribute to a user.`);
        skipped++;
        continue;
      }

      // Find the user with this deposit memo
      const [user] = await getDb()
        .select({ id: users.id, firstName: users.firstName })
        .from(users)
        .where(eq(users.depositMemo, memo))
        .limit(1);

      if (!user) {
        errors.push(`No user found with memo "${memo}" for transaction ${txHash}.`);
        skipped++;
        continue;
      }

      const amount = payment.amount;
      const asset = payment.asset_code || "XLM";

      // Record the deposit
      await getDb().insert(deposits).values({
        userId: user.id,
        stellarTxHash: txHash,
        amount,
        asset,
        memo,
        sourceAccount: payment.from,
        status: "confirmed",
      });

      // Credit the user's wallet balance
      await getDb()
        .update(users)
        .set({
          walletBalance: sql`${users.walletBalance}::numeric + ${amount}::numeric`,
          updatedAt: new Date(),
        })
        .where(eq(users.id, user.id));

      // Send a notification
      await getDb().insert(notifications).values({
        userId: user.id,
        kind: "deposit_received",
        title: "Deposit Received",
        body: `${amount} ${asset} has been credited to your PoolFi wallet.`,
        linkHref: "/",
      });

      processed++;
      console.log(`✅ Credited ${amount} ${asset} to user ${user.firstName} (memo: ${memo})`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    errors.push(`Listener error: ${message}`);
  }

  return { processed, skipped, errors };
}
