import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { contributeToPool } from "@/src/lib/pools/store";

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

  let body: { poolId?: string; amountNgn?: number; anonymous?: boolean };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { poolId, amountNgn, anonymous } = body;

  if (!poolId || typeof poolId !== "string") {
    return NextResponse.json(
      { message: "poolId is required." },
      { status: 400 }
    );
  }

  if (!amountNgn || typeof amountNgn !== "number" || amountNgn <= 0) {
    return NextResponse.json(
      { message: "amountNgn must be a positive number." },
      { status: 400 }
    );
  }

  const result = await contributeToPool({
    userId: user.id,
    userName: `${user.firstName} ${user.lastName}`.trim() || user.pseudonym,
    poolId,
    amountNgn,
    anonymous: anonymous ?? false,
  });

  if (!result.success) {
    return NextResponse.json(
      { message: result.error, availableNgn: "availableNgn" in result ? result.availableNgn : undefined },
      { status: 422 }
    );
  }

  return NextResponse.json({
    data: {
      newBalanceNgn: result.newBalanceNgn,
      contributedNgn: result.contributedNgn,
    },
  });
}
