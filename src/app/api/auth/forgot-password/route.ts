import { NextRequest, NextResponse } from "next/server";
import { findUserByEmail } from "@/src/lib/auth/store";
import { createOpaqueToken, hashToken } from "@/src/lib/auth/server";
import { createPasswordResetToken } from "@/src/lib/auth/store";
import { isDatabaseConfigured } from "@/src/lib/db";
import {
  isEmailConfigured,
  sendPasswordResetEmail,
} from "@/src/lib/email/service";

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to enable password resets." },
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

  const body = (await request.json()) as Partial<{ email: string }>;
  const email = body.email?.trim().toLowerCase() ?? "";

  if (!email) {
    return NextResponse.json(
      { message: "Enter the email address tied to your account." },
      { status: 400 }
    );
  }

  const user = await findUserByEmail(email);

  if (!user) {
    return NextResponse.json({ ok: true });
  }

  const token = createOpaqueToken();
  await createPasswordResetToken(
    user.id,
    hashToken(token),
    new Date(Date.now() + 60 * 60 * 1000)
  );

  const resetUrl = new URL("/reset-password", request.nextUrl.origin);
  resetUrl.searchParams.set("token", token);

  try {
    await sendPasswordResetEmail(user.email, resetUrl.toString());
  } catch (error) {
    console.error("Failed to send password reset email", error);

    return NextResponse.json(
      {
        message:
          "We couldn't send a reset email right now. Please try again in a moment.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
