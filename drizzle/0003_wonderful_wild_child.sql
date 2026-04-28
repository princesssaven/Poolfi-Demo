CREATE TABLE "deposits" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"stellar_tx_hash" text NOT NULL,
	"amount" numeric(20, 7) NOT NULL,
	"asset" text DEFAULT 'USDC' NOT NULL,
	"memo" text NOT NULL,
	"source_account" text,
	"status" text DEFAULT 'confirmed' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pool_members" ADD COLUMN "contributor_user_id" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "problem" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "money_usage" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "location" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "beneficiaries" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "evidence_urls" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "approvers_count" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "reference_link" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "wallet_balance" numeric(20, 7) DEFAULT '0' NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "deposits_stellar_tx_hash_idx" ON "deposits" USING btree ("stellar_tx_hash");