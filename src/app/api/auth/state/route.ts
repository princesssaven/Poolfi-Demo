import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  AUTH_COOKIE_NAMES,
  readPendingSignupCookie,
  readSessionCookie,
} from "@/src/lib/auth/session";
import {
  findPendingSignupById,
  findUserByEmail,
  findUserById,
  toPendingSignupState,
} from "@/src/lib/auth/store";
import { normalizeAppUser } from "@/src/lib/auth/user";
import { isDatabaseConfigured } from "@/src/lib/db";

export async function GET(request: NextRequest) {
  const authSession = await auth();
  const pendingSignupSession = readPendingSignupCookie(
    request.cookies.get(AUTH_COOKIE_NAMES.pendingSignup)?.value
  );
  const session = readSessionCookie(
    request.cookies.get(AUTH_COOKIE_NAMES.session)?.value
  );
  const pendingSignup =
    pendingSignupSession && isDatabaseConfigured()
      ? await findPendingSignupById(pendingSignupSession.id)
      : null;
  const customSessionUser =
    session && isDatabaseConfigured()
      ? (await findUserById(session.id)) ?? (await findUserByEmail(session.email))
      : session;
  const authSessionUser =
    authSession?.user?.email && isDatabaseConfigured()
      ? (await findUserByEmail(authSession.user.email)) ?? authSession.user
      : authSession?.user ?? null;

  return NextResponse.json({
    authenticated: Boolean(customSessionUser || authSessionUser),
    pendingSignup: pendingSignup
      ? toPendingSignupState(pendingSignup)
      : null,
    user: normalizeAppUser(customSessionUser ?? authSessionUser ?? null),
  });
}
