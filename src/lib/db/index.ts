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

export function getDb() {
  if (!globalForDatabase.poolfiDatabase) {
    globalForDatabase.poolfiDatabase = createDatabase();
  }

  return globalForDatabase.poolfiDatabase;
}
