import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAMES, buildClearedCookie } from "@/src/lib/auth/session";

export async function POST() {
  const response = NextResponse.json({ ok: true });

  response.cookies.set(buildClearedCookie(AUTH_COOKIE_NAMES.session));
  response.cookies.set(buildClearedCookie(AUTH_COOKIE_NAMES.pendingSignup));

  return response;
}
