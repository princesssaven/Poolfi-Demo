import postgres from 'postgres';

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const sql = postgres(url);

async function run() {
  try {
    console.log("Adding contributor_user_id column to pool_members...");
    await sql`ALTER TABLE pool_members ADD COLUMN IF NOT EXISTS contributor_user_id TEXT;`;
    console.log("Success!");
  } catch (e) {
    console.error("Error:", e.message);
  } finally {
    await sql.end();
  }
}

run();
