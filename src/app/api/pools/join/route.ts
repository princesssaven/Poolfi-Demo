import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { joinPoolPayLater } from "@/src/lib/pools/store";

export async function POST(request: Request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Database is not configured." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  let body: { poolId?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { poolId } = body;

  if (!poolId || typeof poolId !== "string") {
    return NextResponse.json(
      { message: "poolId is required." },
      { status: 400 }
    );
  }

  const result = await joinPoolPayLater({
    userId: user.id,
    userName: `${user.firstName} ${user.lastName}`.trim() || user.pseudonym,
    poolId,
  });

  if (!result.success) {
    return NextResponse.json(
      { message: result.error },
      { status: 422 }
    );
  }

  return NextResponse.json({ data: { joined: true } });
}
