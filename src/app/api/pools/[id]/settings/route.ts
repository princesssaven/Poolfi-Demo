import { NextRequest, NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { updatePoolSettings } from "@/src/lib/pools/store";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to update pools." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json()) as Partial<{
    autoReminders: boolean;
    deadline: string;
    perPersonAmount: string;
  }>;
  const perPersonAmount = Number(body.perPersonAmount ?? "");

  if (!body.deadline || !Number.isFinite(perPersonAmount) || perPersonAmount <= 0) {
    return NextResponse.json(
      { message: "Provide a valid deadline and contribution amount." },
      { status: 400 }
    );
  }

  const { id } = await params;
  const pool = await updatePoolSettings(id, user.id, {
    autoReminders: Boolean(body.autoReminders),
    deadline: new Date(body.deadline),
    perPersonAmount: Math.round(perPersonAmount),
  });

  if (!pool) {
    return NextResponse.json({ message: "Pool not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
