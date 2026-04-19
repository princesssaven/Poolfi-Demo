import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAMES,
  buildPendingSignupCookie,
  readPendingSignupCookie,
} from "@/src/lib/auth/session";
import {
  findPendingSignupById,
  refreshPendingSignupCode,
} from "@/src/lib/auth/store";
import { createNumericCode, hashToken } from "@/src/lib/auth/server";
import { isDatabaseConfigured } from "@/src/lib/db";
import {
  isEmailConfigured,
  sendVerificationCodeEmail,
} from "@/src/lib/email/service";

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to resend verification codes." },
      { status: 503 }
    );
  }

  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        message:
          "Email delivery isn't configured yet. Add RESEND_API_KEY and EMAIL_FROM first.",
      },
      { status: 503 }
    );
  }

  const pendingSignupSession = readPendingSignupCookie(
    request.cookies.get(AUTH_COOKIE_NAMES.pendingSignup)?.value
  );

  if (!pendingSignupSession) {
    return NextResponse.json(
      { message: "Start with sign up before requesting another code." },
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

  if (
    pendingSignup.verificationCodeLastSentAt.getTime() >
    Date.now() - 30 * 1000
  ) {
    return NextResponse.json(
      { message: "Please wait a few seconds before requesting another code." },
      { status: 429 }
    );
  }

  const verificationCode = createNumericCode();
  const refreshedSignup = await refreshPendingSignupCode(
    pendingSignup.id,
    hashToken(verificationCode),
    new Date(),
    new Date(Date.now() + 15 * 60 * 1000)
  );

  try {
    await sendVerificationCodeEmail(pendingSignup.email, verificationCode);
  } catch (error) {
    console.error("Failed to resend verification email", error);

    return NextResponse.json(
      {
        message:
          "We couldn't resend your verification email right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }

  const response = NextResponse.json({
    ok: true,
  });

  response.cookies.set(
    buildPendingSignupCookie({
      email: pendingSignup.email,
      firstName: pendingSignup.firstName,
      id: pendingSignup.id,
      pseudonym: pendingSignup.pseudonym,
      verified: Boolean(refreshedSignup?.verifiedAt),
    })
  );

  return response;
}
