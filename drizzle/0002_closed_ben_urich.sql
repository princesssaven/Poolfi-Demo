ALTER TABLE "users" ADD COLUMN "deposit_memo" text DEFAULT floor(random() * 900000000 + 100000000)::text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "users_deposit_memo_idx" ON "users" USING btree ("deposit_memo");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_deposit_memo_unique" UNIQUE("deposit_memo");