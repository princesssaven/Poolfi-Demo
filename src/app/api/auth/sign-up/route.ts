import { NextRequest, NextResponse } from "next/server";
import {
  buildPendingSignupCookie,
  normalizeEmail,
  normalizePseudonym,
} from "@/src/lib/auth/session";
import {
  findUserByEmail,
  findUserByPseudonym,
  upsertPendingSignup,
} from "@/src/lib/auth/store";
import {
  createNumericCode,
  hashSecret,
  hashToken,
} from "@/src/lib/auth/server";
import { isDatabaseConfigured } from "@/src/lib/db";
import {
  isEmailConfigured,
  sendVerificationCodeEmail,
} from "@/src/lib/email/service";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to enable account storage." },
      { status: 503 }
    );
  }

  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        message:
          "Email delivery isn't configured yet. Add GMAIL_USER and GMAIL_APP_PASSWORD to send verification emails.",
      },
      { status: 503 }
    );
  }

  const body = (await request.json()) as Partial<{
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    pseudonym: string;
  }>;

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const pseudonym = normalizePseudonym(body.pseudonym ?? "");
  const email = normalizeEmail(body.email ?? "");
  const password = body.password?.trim() ?? "";

  if (!firstName || !lastName || !pseudonym || !email || !password) {
    return NextResponse.json(
      { message: "Complete every field to create your account." },
      { status: 400 }
    );
  }

  if (pseudonym.length < 3) {
    return NextResponse.json(
      { message: "Your PoolFi username must be at least 3 characters long." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Enter a valid email address." },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { message: "Use a password with at least 8 characters." },
      { status: 400 }
    );
  }

  const [existingEmailUser, existingPseudonymUser] = await Promise.all([
    findUserByEmail(email),
    findUserByPseudonym(pseudonym),
  ]);

  if (existingEmailUser || existingPseudonymUser) {
    return NextResponse.json(
      {
        message:
          "That email or PoolFi username is already in use. Try signing in instead.",
      },
      { status: 409 }
    );
  }

  const verificationCode = createNumericCode();
  const pendingSignup = await upsertPendingSignup({
    email,
    expiresAt: new Date(Date.now() + 15 * 60 * 1000),
    firstName,
    lastName,
    passwordHash: await hashSecret(password),
    pseudonym,
    verificationCodeHash: hashToken(verificationCode),
    verificationCodeLastSentAt: new Date(),
  });

  try {
    await sendVerificationCodeEmail(email, verificationCode);
  } catch (error) {
    console.error("Failed to send signup verification email", error);

    return NextResponse.json(
      {
        message:
          "We couldn't send your verification email right now. Please try again in a moment.",
      },
      { status: 502 }
    );
  }

  const response = NextResponse.json({
    email,
    ok: true,
  });

  response.cookies.set(
    buildPendingSignupCookie({
      email: pendingSignup.email,
      firstName: pendingSignup.firstName,
      id: pendingSignup.id,
      pseudonym: pendingSignup.pseudonym,
      verified: false,
    })
  );

  return response;
}
