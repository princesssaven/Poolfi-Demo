import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    email: text("email").notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull().default(""),
    pseudonym: text("pseudonym").notNull(),
    pseudonymCanonical: text("pseudonym_canonical").notNull(),
    image: text("image"),
    bio: text("bio").notNull().default(""),
    phone: text("phone").notNull().default(""),
    emailNotifications: boolean("email_notifications").notNull().default(true),
    poolReminders: boolean("pool_reminders").notNull().default(true),
    withdrawalAlerts: boolean("withdrawal_alerts").notNull().default(true),
    marketingEmails: boolean("marketing_emails").notNull().default(false),
    passwordHash: text("password_hash"),
    pinHash: text("pin_hash"),
    googleId: text("google_id"),
    depositMemo: text("deposit_memo").unique().notNull().default(sql`floor(random() * 900000000 + 100000000)::text`),
    emailVerifiedAt: timestamp("email_verified_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("users_email_idx").on(table.email),
    uniqueIndex("users_google_id_idx").on(table.googleId),
    uniqueIndex("users_pseudonym_canonical_idx").on(table.pseudonymCanonical),
    uniqueIndex("users_deposit_memo_idx").on(table.depositMemo),
  ]
);

export const pendingSignups = pgTable(
  "pending_signups",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    email: text("email").notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull().default(""),
    pseudonym: text("pseudonym").notNull(),
    pseudonymCanonical: text("pseudonym_canonical").notNull(),
    passwordHash: text("password_hash").notNull(),
    verificationCodeHash: text("verification_code_hash").notNull(),
    verificationCodeLastSentAt: timestamp("verification_code_last_sent_at", {
      withTimezone: true,
    }).notNull(),
    verifiedAt: timestamp("verified_at", { withTimezone: true }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("pending_signups_email_idx").on(table.email),
    uniqueIndex("pending_signups_pseudonym_canonical_idx").on(
      table.pseudonymCanonical
    ),
  ]
);

export const passwordResetTokens = pgTable(
  "password_reset_tokens",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("user_id").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    usedAt: timestamp("used_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("password_reset_tokens_token_hash_idx").on(table.tokenHash)]
);

export const pools = pgTable(
  "pools",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    ownerId: text("owner_id").notNull(),
    slug: text("slug").notNull(),
    type: text("type").notNull().default("goal"),
    name: text("name").notNull(),
    description: text("description").notNull().default(""),
    category: text("category").notNull(),
    targetAmount: integer("target_amount").notNull(),
    perPersonAmount: integer("per_person_amount").notNull(),
    startDate: timestamp("start_date", { withTimezone: true }).notNull(),
    deadline: timestamp("deadline", { withTimezone: true }).notNull(),
    status: text("status").notNull().default("active"),
    takeAllAtClose: boolean("take_all_at_close").notNull().default(false),
    milestoneWithdrawals: boolean("milestone_withdrawals").notNull().default(true),
    milestones: jsonb("milestones")
      .$type<Array<{ percentage: string; label: string }>>()
      .notNull()
      .default(sql`'[]'::jsonb`),
    autoClose: boolean("auto_close").notNull().default(false),
    allowAnonymous: boolean("allow_anonymous").notNull().default(false),
    autoReminders: boolean("auto_reminders").notNull().default(false),
    paused: boolean("paused").notNull().default(false),
    identityFields: jsonb("identity_fields")
      .$type<string[]>()
      .notNull()
      .default(sql`'[]'::jsonb`),
    customFields: jsonb("custom_fields")
      .$type<string[]>()
      .notNull()
      .default(sql`'[]'::jsonb`),
    shareCode: text("share_code").notNull(),
    closedAt: timestamp("closed_at", { withTimezone: true }),
    cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("pools_slug_idx").on(table.slug)]
);

export const poolMembers = pgTable("pool_members", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  poolId: text("pool_id").notNull(),
  name: text("name").notNull(),
  phone: text("phone").notNull().default(""),
  customFieldValue: text("custom_field_value").notNull().default(""),
  status: text("status").notNull().default("pending"),
  invitedAt: timestamp("invited_at", { withTimezone: true }).notNull().defaultNow(),
  paidAt: timestamp("paid_at", { withTimezone: true }),
});

export const notifications = pgTable("notifications", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").notNull(),
  poolId: text("pool_id"),
  kind: text("kind").notNull(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  linkHref: text("link_href"),
  readAt: timestamp("read_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const poolActivities = pgTable("pool_activities", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  poolId: text("pool_id").notNull(),
  actorUserId: text("actor_user_id"),
  kind: text("kind").notNull(),
  message: text("message").notNull(),
  meta: jsonb("meta").$type<Record<string, string | number | boolean | null>>(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type DatabaseUser = typeof users.$inferSelect;
export type DatabasePendingSignup = typeof pendingSignups.$inferSelect;
export type DatabasePool = typeof pools.$inferSelect;
export type DatabasePoolMember = typeof poolMembers.$inferSelect;
