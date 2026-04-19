import { createHash, randomBytes, randomInt } from "node:crypto";
import { compare, hash } from "bcryptjs";

const HASH_ROUNDS = 12;

export async function hashSecret(value: string) {
  return hash(value, HASH_ROUNDS);
}

export async function verifySecret(value: string, hashedValue: string) {
  return compare(value, hashedValue);
}

export function createNumericCode(length = 6) {
  return Array.from({ length }, () => randomInt(0, 10)).join("");
}

export function createOpaqueToken(size = 32) {
  return randomBytes(size).toString("base64url");
}

export function hashToken(value: string) {
  return createHash("sha256").update(value).digest("hex");
}
