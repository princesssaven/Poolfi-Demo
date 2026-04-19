import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAMES,
  buildPendingSignupCookie,
  readPendingSignupCookie,
} from "@/src/lib/auth/session";
import {
  findPendingSignupById,
  markPendingSignupVerified,
} from "@/src/lib/auth/store";
import { hashToken } from "@/src/lib/auth/server";
import { isDatabaseConfigured } from "@/src/lib/db";

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to verify signups." },
      { status: 503 }
    );
  }

  const pendingSignupSession = readPendingSignupCookie(
    request.cookies.get(AUTH_COOKIE_NAMES.pendingSignup)?.value
  );

  if (!pendingSignupSession) {
    return NextResponse.json(
      { message: "Start with sign up so we know where to send your code." },
      { status: 400 }
    );
  }

  const body = (await request.json()) as Partial<{ code: string }>;
  const code = body.code?.trim() ?? "";

  if (code.length !== 6) {
    return NextResponse.json(
      { message: "Enter the full 6-digit verification code." },
      { status: 400 }
    );
  }

  const pendingSignup = await findPendingSignupById(pendingSignupSession.id);

  if (!pendingSignup) {
    return NextResponse.json(
      { message: "Your sign-up session expired. Start again to get a new code." },
      { status: 400 }
    );
  }

  if (pendingSignup.verifiedAt) {
    return NextResponse.json({ ok: true });
  }

  if (pendingSignup.expiresAt.getTime() < Date.now()) {
    return NextResponse.json(
      { message: "That verification code expired. Request a new one." },
      { status: 400 }
    );
  }

  if (hashToken(code) !== pendingSignup.verificationCodeHash) {
    return NextResponse.json(
      { message: "That code doesn't match. Double-check and try again." },
      { status: 400 }
    );
  }

  await markPendingSignupVerified(pendingSignup.id);

  const response = NextResponse.json({ ok: true });

  response.cookies.set(
    buildPendingSignupCookie({
      email: pendingSignup.email,
      firstName: pendingSignup.firstName,
      id: pendingSignup.id,
      pseudonym: pendingSignup.pseudonym,
      verified: true,
    })
  );

  return response;
}
