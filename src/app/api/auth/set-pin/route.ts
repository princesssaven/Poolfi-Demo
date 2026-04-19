import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAMES,
  buildClearedCookie,
  buildSessionCookie,
  createSessionUser,
  readPendingSignupCookie,
  isPendingSignupVerified,
} from "@/src/lib/auth/session";
import {
  createCredentialUser,
  deletePendingSignup,
  findUserByEmail,
  findPendingSignupById,
  findUserByPseudonym,
  isUniqueConstraintError,
  toSessionAccount,
} from "@/src/lib/auth/store";
import { hashSecret } from "@/src/lib/auth/server";
import { isDatabaseConfigured } from "@/src/lib/db";

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to finish account setup." },
      { status: 503 }
    );
  }

  const pendingSignupSession = readPendingSignupCookie(
    request.cookies.get(AUTH_COOKIE_NAMES.pendingSignup)?.value
  );

  if (!pendingSignupSession) {
    return NextResponse.json(
      { message: "Start with sign up before creating a transaction PIN." },
      { status: 400 }
    );
  }

  if (!isPendingSignupVerified(pendingSignupSession)) {
    return NextResponse.json(
      { message: "Verify your email before setting your transaction PIN." },
      { status: 400 }
    );
  }

  const pendingSignup = await findPendingSignupById(pendingSignupSession.id);

  if (!pendingSignup) {
    return NextResponse.json(
      { message: "Your sign-up session expired. Start again to continue." },
      { status: 400 }
    );
  }

  if (!pendingSignup.verifiedAt) {
    return NextResponse.json(
      { message: "Verify your email before setting your transaction PIN." },
      { status: 400 }
    );
  }

  const body = (await request.json()) as Partial<{ pin: string }>;
  const pin = body.pin?.trim() ?? "";

  if (!/^\d{4}$/.test(pin)) {
    return NextResponse.json(
      { message: "Your transaction PIN must be exactly 4 digits." },
      { status: 400 }
    );
  }

  const [existingEmailUser, existingPseudonymUser] = await Promise.all([
    findUserByEmail(pendingSignup.email),
    findUserByPseudonym(pendingSignup.pseudonym),
  ]);

  if (existingEmailUser) {
    return NextResponse.json(
      { message: "That account already exists. Try signing in instead." },
      { status: 409 }
    );
  }

  if (existingPseudonymUser) {
    return NextResponse.json(
      {
        message:
          "That PoolFi username was just claimed. Head back to sign up and choose another one.",
      },
      { status: 409 }
    );
  }

  try {
    const nextUser = await createCredentialUser({
      email: pendingSignup.email,
      emailVerifiedAt: new Date(pendingSignup.verifiedAt!),
      firstName: pendingSignup.firstName,
      lastName: pendingSignup.lastName,
      passwordHash: pendingSignup.passwordHash,
      pinHash: await hashSecret(pin),
      pseudonym: pendingSignup.pseudonym,
    });

    const response = NextResponse.json({ ok: true });

    response.cookies.set(buildSessionCookie(createSessionUser(toSessionAccount(nextUser))));
    response.cookies.set(buildClearedCookie(AUTH_COOKIE_NAMES.pendingSignup));
    await deletePendingSignup(pendingSignup.id);

    return response;
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      return NextResponse.json(
        {
          message:
            "That email or PoolFi username is already in use. Try signing in instead.",
        },
        { status: 409 }
      );
    }

    console.error("Failed to create credential user", error);

    return NextResponse.json(
      { message: "We couldn't finish account setup right now. Try again." },
      { status: 500 }
    );
  }
}
