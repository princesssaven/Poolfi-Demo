This is a PoolFi MVP built with [Next.js](https://nextjs.org), Auth.js, and a Supabase-ready PostgreSQL database layer via Drizzle.

## Local Setup

1. Create `.env.local` from `.env.example`.
2. Add a Supabase pooled Postgres connection string to `DATABASE_URL`.
3. Add your auth values:
   - `AUTH_SECRET`
   - `AUTH_GOOGLE_ID`
   - `AUTH_GOOGLE_SECRET`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_REPLY_TO` (optional)
4. Push the schema to your database:

```bash
npm run db:push
```

5. Start the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Notes

- Use the `Transaction pooler` connection string from Supabase for `DATABASE_URL`.
- Keep the `?sslmode=require` query string in that URL.
- After schema changes, either run `npm run db:push` for a fast MVP sync or `npm run db:generate` to create a SQL migration.

## Google OAuth Redirects

Add these in Google Cloud Console:

- Local: `http://localhost:3000/api/auth/callback/google`
- Production: `https://your-domain.com/api/auth/callback/google`

## Database Scripts

- `npm run db:generate` generates Drizzle SQL migrations from the schema.
- `npm run db:migrate` applies generated migrations.
- `npm run db:push` pushes the current schema directly to the database.
- `npm run db:studio` opens Drizzle Studio.

## Current MVP Auth Flow

- Email sign-up persists users in Postgres after verification and PIN setup.
- Verification codes and password reset links are sent through Resend.
- Email sign-in checks the same users table with bcrypt-hashed credentials.
- Google sign-in upserts users into the same table before opening a session.
- Account settings persist to the users table.
- Goal pool creation, pool settings, reminders, notifications, and pool status changes now use database-backed routes.
