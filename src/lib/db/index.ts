import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/src/lib/db/schema";

function createDatabase() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set.");
  }

  const client = postgres(databaseUrl, {
    prepare: false,
    max: 1,
    idle_timeout: 20,
  });

  return drizzle({
    client,
    schema,
  });
}

type Database = ReturnType<typeof createDatabase>;

const globalForDatabase = globalThis as typeof globalThis & {
  poolfiDatabase?: Database;
};

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function isDatabaseConnectionError(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }

  const candidate = error as {
    cause?: unknown;
    code?: unknown;
    errno?: unknown;
    message?: unknown;
  };
  const code = typeof candidate.code === "string" ? candidate.code : "";
  const errno = typeof candidate.errno === "string" ? candidate.errno : "";
  const message = typeof candidate.message === "string" ? candidate.message : "";
  const connectionCodes = new Set([
    "EAI_AGAIN",
    "ECONNREFUSED",
    "ECONNRESET",
    "ENOTFOUND",
    "ETIMEDOUT",
  ]);

  return (
    connectionCodes.has(code) ||
    connectionCodes.has(errno) ||
    message.includes("getaddrinfo") ||
    isDatabaseConnectionError(candidate.cause)
  );
}

export function getDb() {
  if (!globalForDatabase.poolfiDatabase) {
    globalForDatabase.poolfiDatabase = createDatabase();
  }

  return globalForDatabase.poolfiDatabase;
}
