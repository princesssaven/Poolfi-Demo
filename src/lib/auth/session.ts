export const AUTH_COOKIE_NAMES = {
  pendingSignup: "poolfi_pending_signup",
  session: "poolfi_session",
} as const;

const DEFAULT_COOKIE_OPTIONS = {
  httpOnly: true,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

const PENDING_SIGNUP_MAX_AGE = 60 * 30;
const SESSION_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

interface SessionAccountLike {
  id: string;
  firstName: string;
  lastName: string;
  pseudonym: string;
  email: string;
}

export interface PendingSignupSession {
  email: string;
  firstName: string;
  id: string;
  pseudonym: string;
  verified: boolean;
}

export interface PendingSignupState {
  firstName: string;
  lastName: string;
  pseudonym: string;
  email: string;
  verified: boolean;
}

export interface SessionUser {
  id: string;
  firstName: string;
  lastName: string;
  pseudonym: string;
  email: string;
  signedInAt: string;
}

function encodeCookiePayload(value: unknown) {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
}

function decodeCookiePayload<T>(value: string | undefined) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(value, "base64url").toString("utf8")) as T;
  } catch {
    return null;
  }
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function normalizePseudonym(value: string) {
  return value.trim().replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20);
}

export function normalizePseudonymKey(value: string) {
  return normalizePseudonym(value).toLowerCase();
}

export function readPendingSignupCookie(value: string | undefined) {
  return decodeCookiePayload<PendingSignupSession>(value);
}

export function readSessionCookie(value: string | undefined) {
  return decodeCookiePayload<SessionUser>(value);
}

export function buildPendingSignupCookie(pendingSignup: PendingSignupSession) {
  return {
    ...DEFAULT_COOKIE_OPTIONS,
    maxAge: PENDING_SIGNUP_MAX_AGE,
    name: AUTH_COOKIE_NAMES.pendingSignup,
    value: encodeCookiePayload(pendingSignup),
  };
}

export function buildSessionCookie(sessionUser: SessionUser) {
  return {
    ...DEFAULT_COOKIE_OPTIONS,
    maxAge: SESSION_COOKIE_MAX_AGE,
    name: AUTH_COOKIE_NAMES.session,
    value: encodeCookiePayload(sessionUser),
  };
}

export function buildClearedCookie(name: string) {
  return {
    ...DEFAULT_COOKIE_OPTIONS,
    maxAge: 0,
    name,
    value: "",
  };
}

export function createSessionUser(account: SessionAccountLike): SessionUser {
  return {
    email: account.email,
    firstName: account.firstName,
    id: account.id,
    lastName: account.lastName,
    pseudonym: account.pseudonym,
    signedInAt: new Date().toISOString(),
  };
}

export function isPendingSignupVerified(
  pendingSignup: PendingSignupSession | null
) {
  return Boolean(pendingSignup?.verified);
}

export function sanitizeRedirectPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}
