import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { sendPoolReminders } from "@/src/lib/pools/store";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to send reminders." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const result = await sendPoolReminders(id, user.id);

  if (!result) {
    return NextResponse.json({ message: "Pool not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, pendingCount: result.pendingCount });
}
