import { NextRequest, NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { updatePoolStatus } from "@/src/lib/pools/store";

export async function POST(
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
    action: "cancel" | "close" | "pause" | "resume";
  }>;

  if (!body.action) {
    return NextResponse.json(
      { message: "Choose a valid pool action." },
      { status: 400 }
    );
  }

  const { id } = await params;
  let pool;

  try {
    pool = await updatePoolStatus(id, user.id, body.action);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Pool status update failed.",
      },
      { status: 502 }
    );
  }

  if (!pool) {
    return NextResponse.json({ message: "Pool not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
