import { NextRequest, NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { findUserByPseudonym, updateUserProfile } from "@/src/lib/auth/store";
import { normalizeAppUser } from "@/src/lib/auth/user";
import { normalizePseudonym } from "@/src/lib/auth/session";
import { isDatabaseConfigured } from "@/src/lib/db";

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load account settings." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  return NextResponse.json({
    settings: {
      bio: user.bio,
      email: user.email,
      emailNotifications: user.emailNotifications,
      firstName: user.firstName,
      lastName: user.lastName,
      marketingEmails: user.marketingEmails,
      phone: user.phone,
      poolReminders: user.poolReminders,
      pseudonym: user.pseudonym,
      withdrawalAlerts: user.withdrawalAlerts,
    },
    user: normalizeAppUser(user),
  });
}

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to save account settings." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json()) as Partial<{
    bio: string;
    emailNotifications: boolean;
    firstName: string;
    lastName: string;
    marketingEmails: boolean;
    phone: string;
    poolReminders: boolean;
    pseudonym: string;
    withdrawalAlerts: boolean;
  }>;

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const pseudonym = normalizePseudonym(body.pseudonym ?? "");

  if (!firstName || !lastName || !pseudonym) {
    return NextResponse.json(
      { message: "First name, last name, and PoolFi username are required." },
      { status: 400 }
    );
  }

  if (pseudonym.length < 3) {
    return NextResponse.json(
      { message: "Your PoolFi username must be at least 3 characters long." },
      { status: 400 }
    );
  }

  const existingUser = await findUserByPseudonym(pseudonym);

  if (existingUser && existingUser.id !== user.id) {
    return NextResponse.json(
      { message: "That PoolFi username is already taken." },
      { status: 409 }
    );
  }

  const updatedUser = await updateUserProfile(user.id, {
    bio: body.bio,
    emailNotifications: Boolean(body.emailNotifications),
    firstName,
    lastName,
    marketingEmails: Boolean(body.marketingEmails),
    phone: body.phone,
    poolReminders: Boolean(body.poolReminders),
    pseudonym,
    withdrawalAlerts: Boolean(body.withdrawalAlerts),
  });

  return NextResponse.json({
    ok: true,
    settings: updatedUser
      ? {
          bio: updatedUser.bio,
          email: updatedUser.email,
          emailNotifications: updatedUser.emailNotifications,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          marketingEmails: updatedUser.marketingEmails,
          phone: updatedUser.phone,
          poolReminders: updatedUser.poolReminders,
          pseudonym: updatedUser.pseudonym,
          withdrawalAlerts: updatedUser.withdrawalAlerts,
        }
      : null,
    user: normalizeAppUser(updatedUser),
  });
}
