CREATE TABLE "notifications" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"pool_id" text,
	"kind" text NOT NULL,
	"title" text NOT NULL,
	"body" text NOT NULL,
	"link_href" text,
	"read_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "password_reset_tokens" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"token_hash" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"used_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pending_signups" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text DEFAULT '' NOT NULL,
	"pseudonym" text NOT NULL,
	"pseudonym_canonical" text NOT NULL,
	"password_hash" text NOT NULL,
	"verification_code_hash" text NOT NULL,
	"verification_code_last_sent_at" timestamp with time zone NOT NULL,
	"verified_at" timestamp with time zone,
	"expires_at" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pool_activities" (
	"id" text PRIMARY KEY NOT NULL,
	"pool_id" text NOT NULL,
	"actor_user_id" text,
	"kind" text NOT NULL,
	"message" text NOT NULL,
	"meta" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pool_members" (
	"id" text PRIMARY KEY NOT NULL,
	"pool_id" text NOT NULL,
	"name" text NOT NULL,
	"phone" text DEFAULT '' NOT NULL,
	"custom_field_value" text DEFAULT '' NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"invited_at" timestamp with time zone DEFAULT now() NOT NULL,
	"paid_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "pools" (
	"id" text PRIMARY KEY NOT NULL,
	"owner_id" text NOT NULL,
	"slug" text NOT NULL,
	"type" text DEFAULT 'goal' NOT NULL,
	"name" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"category" text NOT NULL,
	"target_amount" integer NOT NULL,
	"per_person_amount" integer NOT NULL,
	"start_date" timestamp with time zone NOT NULL,
	"deadline" timestamp with time zone NOT NULL,
	"status" text DEFAULT 'active' NOT NULL,
	"take_all_at_close" boolean DEFAULT false NOT NULL,
	"milestone_withdrawals" boolean DEFAULT true NOT NULL,
	"milestones" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"auto_close" boolean DEFAULT false NOT NULL,
	"allow_anonymous" boolean DEFAULT false NOT NULL,
	"auto_reminders" boolean DEFAULT false NOT NULL,
	"paused" boolean DEFAULT false NOT NULL,
	"identity_fields" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"custom_fields" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"share_code" text NOT NULL,
	"closed_at" timestamp with time zone,
	"cancelled_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bio" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "phone" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email_notifications" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "pool_reminders" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "withdrawal_alerts" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "marketing_emails" boolean DEFAULT false NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "password_reset_tokens_token_hash_idx" ON "password_reset_tokens" USING btree ("token_hash");--> statement-breakpoint
CREATE UNIQUE INDEX "pending_signups_email_idx" ON "pending_signups" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX "pending_signups_pseudonym_canonical_idx" ON "pending_signups" USING btree ("pseudonym_canonical");--> statement-breakpoint
CREATE UNIQUE INDEX "pools_slug_idx" ON "pools" USING btree ("slug");