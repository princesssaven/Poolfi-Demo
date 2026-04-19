import { NextRequest, NextResponse } from "next/server";
import {
  buildSessionCookie,
  createSessionUser,
} from "@/src/lib/auth/session";
import { findUserByLogin, toSessionAccount } from "@/src/lib/auth/store";
import { verifySecret } from "@/src/lib/auth/server";
import { isDatabaseConfigured } from "@/src/lib/db";

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to enable sign in." },
      { status: 503 }
    );
  }

  const body = (await request.json()) as Partial<{
    emailOrPhone: string;
    password: string;
  }>;

  const login = body.emailOrPhone?.trim() ?? "";
  const password = body.password?.trim() ?? "";

  if (!login || !password) {
    return NextResponse.json(
      { message: "Enter your email or username and password to continue." },
      { status: 400 }
    );
  }

  const matchingUser = await findUserByLogin(login);
  const isValidPassword =
    matchingUser?.passwordHash &&
    (await verifySecret(password, matchingUser.passwordHash));

  if (!matchingUser || !isValidPassword) {
    return NextResponse.json(
      { message: "We couldn't match those credentials. Try again." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set(buildSessionCookie(createSessionUser(toSessionAccount(matchingUser))));

  return response;
}
