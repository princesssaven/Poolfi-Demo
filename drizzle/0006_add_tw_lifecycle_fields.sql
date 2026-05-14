ALTER TABLE "pools" ADD COLUMN "tw_escrow_type" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "tw_escrow_status" text DEFAULT 'not_created' NOT NULL;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "tw_last_error" text;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "tw_last_synced_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "pools" ADD COLUMN "tw_last_tx_hash" text;
