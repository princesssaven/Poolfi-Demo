import { Horizon, Networks } from "@stellar/stellar-sdk";

/**
 * SOURCE OF TRUTH FOR STELLAR
 * To switch to mainnet:
 * 1. Update .env.local STELLAR_HORIZON_URL to "https://horizon.stellar.org"
 * 2. Update .env.local STELLAR_NETWORK to "PUBLIC"
 */

const HORIZON_URL = process.env.STELLAR_HORIZON_URL || "https://horizon-testnet.stellar.org";
const NETWORK_PASSPHRASE = process.env.STELLAR_NETWORK === "PUBLIC" 
  ? Networks.PUBLIC 
  : Networks.TESTNET;

export const stellarServer = new Horizon.Server(HORIZON_URL);

export const stellarConfig = {
  horizonUrl: HORIZON_URL,
  networkPassphrase: NETWORK_PASSPHRASE,
  receiverAddress: process.env.NEXT_PUBLIC_STELLAR_RECEIVER_ADDRESS,
  // Never expose secret key to the client
  secretKey: process.env.STELLAR_SECRET_KEY,
};
