import postgres from 'postgres';

const url = process.env.DATABASE_URL;
console.log("Connecting to:", url.replace(/:[^:@]*@/, ':***@'));
const sql = postgres(url, { max: 1, idle_timeout: 1 });
sql`SELECT 1`.then(() => { console.log("Success!"); process.exit(0); }).catch(e => { console.error("Error:", e.message); process.exit(1); });
