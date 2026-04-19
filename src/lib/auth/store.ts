import { and, desc, eq, isNull, or } from "drizzle-orm";
import { getDb } from "@/src/lib/db";
import {
  passwordResetTokens,
  pendingSignups,
  users,
  type DatabasePendingSignup,
  type DatabaseUser,
} from "@/src/lib/db/schema";
import {
  normalizeEmail,
  normalizePseudonym,
  normalizePseudonymKey,
} from "@/src/lib/auth/session";

interface CreateCredentialUserInput {
  email: string;
  emailVerifiedAt: Date;
  firstName: string;
  lastName: string;
  passwordHash: string;
  pinHash: string;
  pseudonym: string;
}

interface UpsertGoogleUserInput {
  email: string;
  googleId: string;
  image?: string | null;
  name?: string | null;
}

interface UpsertPendingSignupInput {
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  pseudonym: string;
  verificationCodeHash: string;
  verificationCodeLastSentAt: Date;
  expiresAt: Date;
}

interface UpdateUserProfileInput {
  bio?: string;
  emailNotifications?: boolean;
  firstName: string;
  lastName: string;
  marketingEmails?: boolean;
  phone?: string;
  poolReminders?: boolean;
  pseudonym: string;
  withdrawalAlerts?: boolean;
}

function getNameParts(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

function ensurePseudonymBase(value: string) {
  const normalized = normalizePseudonym(value);

  if (normalized.length >= 3) {
    return normalized;
  }

  return `${normalized || "PoolFi"}User`.slice(0, 20);
}

function buildPseudonymCandidate(base: string, attempt: number) {
  if (attempt === 0) {
    return base;
  }

  const suffix = `${attempt + 1}`;
  return `${base.slice(0, 20 - suffix.length)}${suffix}`;
}

export async function findUserByEmail(email: string) {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    return null;
  }

  const [user] = await getDb()
    .select()
    .from(users)
    .where(eq(users.email, normalizedEmail))
    .limit(1);

  return user ?? null;
}

export async function findUserById(id: string) {
  if (!id) {
    return null;
  }

  const [user] = await getDb()
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return user ?? null;
}

export async function findUsersByIds(ids: string[]) {
  if (ids.length === 0) {
    return [];
  }

  return getDb().select().from(users).where(or(...ids.map((id) => eq(users.id, id))));
}

export async function findUserByPseudonym(pseudonym: string) {
  const pseudonymKey = normalizePseudonymKey(pseudonym);

  if (!pseudonymKey) {
    return null;
  }

  const [user] = await getDb()
    .select()
    .from(users)
    .where(eq(users.pseudonymCanonical, pseudonymKey))
    .limit(1);

  return user ?? null;
}

export async function findUserByLogin(login: string) {
  const normalizedEmail = normalizeEmail(login);
  const pseudonymKey = normalizePseudonymKey(login);

  if (!normalizedEmail && !pseudonymKey) {
    return null;
  }

  const [user] = await getDb()
    .select()
    .from(users)
    .where(
      or(
        eq(users.email, normalizedEmail),
        eq(users.pseudonymCanonical, pseudonymKey)
      )
    )
    .limit(1);

  return user ?? null;
}

export async function resolveAvailablePseudonym(
  input: string,
  excludeUserId?: string
) {
  const base = ensurePseudonymBase(input);

  for (let attempt = 0; attempt < 100; attempt += 1) {
    const candidate = buildPseudonymCandidate(base, attempt);
    const existingUser = await findUserByPseudonym(candidate);

    if (!existingUser || existingUser.id === excludeUserId) {
      return candidate;
    }
  }

  const randomSuffix = crypto.randomUUID().slice(0, 4);
  return `${base.slice(0, 20 - randomSuffix.length)}${randomSuffix}`;
}

export async function createCredentialUser(input: CreateCredentialUserInput) {
  const [user] = await getDb()
    .insert(users)
    .values({
      email: normalizeEmail(input.email),
      emailVerifiedAt: input.emailVerifiedAt,
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      passwordHash: input.passwordHash,
      pinHash: input.pinHash,
      pseudonym: input.pseudonym,
      pseudonymCanonical: normalizePseudonymKey(input.pseudonym),
      updatedAt: new Date(),
    })
    .returning();

  return user;
}

export async function updateUserProfile(
  userId: string,
  input: UpdateUserProfileInput
) {
  const pseudonym = normalizePseudonym(input.pseudonym);

  const [user] = await getDb()
    .update(users)
    .set({
      bio: input.bio?.trim() ?? "",
      emailNotifications: input.emailNotifications ?? true,
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      marketingEmails: input.marketingEmails ?? false,
      phone: input.phone?.trim() ?? "",
      poolReminders: input.poolReminders ?? true,
      pseudonym,
      pseudonymCanonical: normalizePseudonymKey(pseudonym),
      updatedAt: new Date(),
      withdrawalAlerts: input.withdrawalAlerts ?? true,
    })
    .where(eq(users.id, userId))
    .returning();

  return user ?? null;
}

export async function updateUserPassword(userId: string, passwordHash: string) {
  const [user] = await getDb()
    .update(users)
    .set({
      passwordHash,
      updatedAt: new Date(),
    })
    .where(eq(users.id, userId))
    .returning();

  return user ?? null;
}

export async function upsertGoogleUser(input: UpsertGoogleUserInput) {
  const normalizedEmail = normalizeEmail(input.email);
  const existingUser = await findUserByEmail(normalizedEmail);
  const nameParts = getNameParts(input.name ?? "");

  if (existingUser) {
    const fallbackPseudonym =
      existingUser.pseudonym ||
      (await resolveAvailablePseudonym(
        input.name || normalizedEmail.split("@")[0] || "PoolFiUser",
        existingUser.id
      ));

    const [updatedUser] = await getDb()
      .update(users)
      .set({
        emailVerifiedAt: existingUser.emailVerifiedAt ?? new Date(),
        firstName:
          existingUser.firstName ||
          nameParts.firstName ||
          fallbackPseudonym,
        googleId: input.googleId,
        image: input.image ?? existingUser.image,
        lastName: existingUser.lastName || nameParts.lastName,
        pseudonym: fallbackPseudonym,
        pseudonymCanonical: normalizePseudonymKey(fallbackPseudonym),
        updatedAt: new Date(),
      })
      .where(eq(users.id, existingUser.id))
      .returning();

    return updatedUser;
  }

  const generatedPseudonym = await resolveAvailablePseudonym(
    input.name || normalizedEmail.split("@")[0] || "PoolFiUser"
  );

  const [createdUser] = await getDb()
    .insert(users)
    .values({
      email: normalizedEmail,
      emailVerifiedAt: new Date(),
      firstName: nameParts.firstName || generatedPseudonym,
      googleId: input.googleId,
      image: input.image ?? null,
      lastName: nameParts.lastName,
      pseudonym: generatedPseudonym,
      pseudonymCanonical: normalizePseudonymKey(generatedPseudonym),
      updatedAt: new Date(),
    })
    .returning();

  return createdUser;
}

export async function findPendingSignupById(id: string) {
  if (!id) {
    return null;
  }

  const [pendingSignup] = await getDb()
    .select()
    .from(pendingSignups)
    .where(eq(pendingSignups.id, id))
    .limit(1);

  return pendingSignup ?? null;
}

export async function findPendingSignupByEmail(email: string) {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    return null;
  }

  const [pendingSignup] = await getDb()
    .select()
    .from(pendingSignups)
    .where(eq(pendingSignups.email, normalizedEmail))
    .limit(1);

  return pendingSignup ?? null;
}

export async function upsertPendingSignup(input: UpsertPendingSignupInput) {
  const normalizedEmail = normalizeEmail(input.email);
  const pseudonym = normalizePseudonym(input.pseudonym);
  const existingPendingSignup = await findPendingSignupByEmail(normalizedEmail);

  if (existingPendingSignup) {
    const [updatedSignup] = await getDb()
      .update(pendingSignups)
      .set({
        expiresAt: input.expiresAt,
        firstName: input.firstName.trim(),
        lastName: input.lastName.trim(),
        passwordHash: input.passwordHash,
        pseudonym,
        pseudonymCanonical: normalizePseudonymKey(pseudonym),
        updatedAt: new Date(),
        verificationCodeHash: input.verificationCodeHash,
        verificationCodeLastSentAt: input.verificationCodeLastSentAt,
        verifiedAt: null,
      })
      .where(eq(pendingSignups.id, existingPendingSignup.id))
      .returning();

    return updatedSignup;
  }

  const [pendingSignup] = await getDb()
    .insert(pendingSignups)
    .values({
      email: normalizedEmail,
      expiresAt: input.expiresAt,
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      passwordHash: input.passwordHash,
      pseudonym,
      pseudonymCanonical: normalizePseudonymKey(pseudonym),
      updatedAt: new Date(),
      verificationCodeHash: input.verificationCodeHash,
      verificationCodeLastSentAt: input.verificationCodeLastSentAt,
    })
    .returning();

  return pendingSignup;
}

export async function refreshPendingSignupCode(
  pendingSignupId: string,
  verificationCodeHash: string,
  verificationCodeLastSentAt: Date,
  expiresAt: Date
) {
  const [pendingSignup] = await getDb()
    .update(pendingSignups)
    .set({
      expiresAt,
      updatedAt: new Date(),
      verificationCodeHash,
      verificationCodeLastSentAt,
    })
    .where(eq(pendingSignups.id, pendingSignupId))
    .returning();

  return pendingSignup ?? null;
}

export async function markPendingSignupVerified(pendingSignupId: string) {
  const [pendingSignup] = await getDb()
    .update(pendingSignups)
    .set({
      updatedAt: new Date(),
      verifiedAt: new Date(),
    })
    .where(eq(pendingSignups.id, pendingSignupId))
    .returning();

  return pendingSignup ?? null;
}

export async function deletePendingSignup(pendingSignupId: string) {
  await getDb()
    .delete(pendingSignups)
    .where(eq(pendingSignups.id, pendingSignupId));
}

export async function createPasswordResetToken(
  userId: string,
  tokenHash: string,
  expiresAt: Date
) {
  await getDb()
    .delete(passwordResetTokens)
    .where(eq(passwordResetTokens.userId, userId));

  const [token] = await getDb()
    .insert(passwordResetTokens)
    .values({
      expiresAt,
      tokenHash,
      userId,
    })
    .returning();

  return token;
}

export async function findPasswordResetTokenByHash(tokenHash: string) {
  const [token] = await getDb()
    .select()
    .from(passwordResetTokens)
    .where(eq(passwordResetTokens.tokenHash, tokenHash))
    .limit(1);

  return token ?? null;
}

export async function getLatestActivePasswordResetTokenForUser(userId: string) {
  const [token] = await getDb()
    .select()
    .from(passwordResetTokens)
    .where(
      and(eq(passwordResetTokens.userId, userId), isNull(passwordResetTokens.usedAt))
    )
    .orderBy(desc(passwordResetTokens.createdAt))
    .limit(1);

  return token ?? null;
}

export async function markPasswordResetTokenUsed(tokenId: string) {
  const [token] = await getDb()
    .update(passwordResetTokens)
    .set({
      usedAt: new Date(),
    })
    .where(eq(passwordResetTokens.id, tokenId))
    .returning();

  return token ?? null;
}

export function isUniqueConstraintError(error: unknown) {
  return Boolean(
    error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "23505"
  );
}

export function toSessionAccount(user: DatabaseUser) {
  return {
    email: user.email,
    firstName: user.firstName,
    id: user.id,
    lastName: user.lastName,
    pseudonym: user.pseudonym,
  };
}

export function toPendingSignupState(
  pendingSignup: DatabasePendingSignup
): {
  email: string;
  firstName: string;
  pseudonym: string;
  verified: boolean;
} {
  return {
    email: pendingSignup.email,
    firstName: pendingSignup.firstName,
    pseudonym: pendingSignup.pseudonym,
    verified: Boolean(pendingSignup.verifiedAt),
  };
}
