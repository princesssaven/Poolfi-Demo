UPDATE "pool_members"
SET "status" = 'expected'
WHERE "status" = 'pending'
  AND "contributor_user_id" IS NULL;--> statement-breakpoint
ALTER TABLE "pool_members" ALTER COLUMN "status" SET DEFAULT 'expected';
