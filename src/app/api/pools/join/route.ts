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

  let body: {
    identityValues?: Record<string, string>;
    poolId?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { identityValues, poolId } = body;

  if (!poolId || typeof poolId !== "string") {
    return NextResponse.json(
      { message: "poolId is required." },
      { status: 400 }
    );
  }

  if (
    !identityValues ||
    typeof identityValues !== "object" ||
    Array.isArray(identityValues)
  ) {
    return NextResponse.json(
      { message: "Identity details are required." },
      { status: 400 }
    );
  }

  const result = await joinPoolPayLater({
    identityValues,
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
