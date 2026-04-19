import { NextRequest, NextResponse } from "next/server";
import {
  findPasswordResetTokenByHash,
  markPasswordResetTokenUsed,
  updateUserPassword,
} from "@/src/lib/auth/store";
import { hashSecret, hashToken } from "@/src/lib/auth/server";
import { isDatabaseConfigured } from "@/src/lib/db";

function getValidTokenError() {
  return NextResponse.json(
    { message: "That reset link is invalid or has expired." },
    { status: 400 }
  );
}

async function getActiveResetToken(rawToken: string) {
  const token = await findPasswordResetTokenByHash(hashToken(rawToken));

  if (!token) {
    return null;
  }

  if (token.usedAt || token.expiresAt.getTime() < Date.now()) {
    return null;
  }

  return token;
}

export async function GET(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to enable password resets." },
      { status: 503 }
    );
  }

  const rawToken = request.nextUrl.searchParams.get("token") ?? "";

  if (!rawToken) {
    return getValidTokenError();
  }

  const token = await getActiveResetToken(rawToken);

  if (!token) {
    return getValidTokenError();
  }

  return NextResponse.json({ ok: true });
}

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to enable password resets." },
      { status: 503 }
    );
  }

  const body = (await request.json()) as Partial<{
    password: string;
    token: string;
  }>;
  const rawToken = body.token?.trim() ?? "";
  const password = body.password?.trim() ?? "";

  if (!rawToken) {
    return getValidTokenError();
  }

  if (password.length < 8) {
    return NextResponse.json(
      { message: "Use a password with at least 8 characters." },
      { status: 400 }
    );
  }

  const token = await getActiveResetToken(rawToken);

  if (!token) {
    return getValidTokenError();
  }

  await updateUserPassword(token.userId, await hashSecret(password));
  await markPasswordResetTokenUsed(token.id);

  return NextResponse.json({ ok: true });
}
