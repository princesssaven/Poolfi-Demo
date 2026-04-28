import { and, desc, eq, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { getDb, isDatabaseConfigured } from "@/src/lib/db";
import { notifications, poolActivities } from "@/src/lib/db/schema";
import {
  getPoolByIdForOwner,
  getPoolsOwnedByUser,
} from "@/src/lib/pools/store";

function parseAmount(value: unknown) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "string") {
    return Number(value.replace(/[^0-9.]/g, ""));
  }

  return 0;
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function serializeWithdrawal(activity: typeof poolActivities.$inferSelect) {
  const meta = activity.meta ?? {};

  return {
    amountNgn: typeof meta.amountNgn === "number" ? meta.amountNgn : 0,
    createdAt: activity.createdAt.toISOString(),
    evidence: typeof meta.evidence === "string" ? meta.evidence : "",
    id: activity.id,
    poolId: activity.poolId,
    purpose: typeof meta.purpose === "string" ? meta.purpose : activity.message,
    recipient: typeof meta.recipient === "string" ? meta.recipient : "",
    status: typeof meta.status === "string" ? meta.status : "pending",
  };
}

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load withdrawals." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const ownedPools = await getPoolsOwnedByUser(user.id);
  const poolIds = ownedPools.map((pool) => pool.id);

  if (poolIds.length === 0) {
    return NextResponse.json({ pools: [], withdrawals: [] });
  }

  const activities = await getDb()
    .select()
    .from(poolActivities)
    .where(
      and(
        inArray(poolActivities.poolId, poolIds),
        eq(poolActivities.kind, "withdrawal_requested")
      )
    )
    .orderBy(desc(poolActivities.createdAt));

  return NextResponse.json({
    pools: ownedPools.map((pool) => ({
      id: pool.id,
      name: pool.name,
      status: pool.status,
    })),
    withdrawals: activities.map(serializeWithdrawal),
  });
}

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

  const body = (await request.json().catch(() => null)) as
    | {
        amountNgn?: number | string;
        evidence?: string;
        poolId?: string;
        purpose?: string;
        recipient?: string;
      }
    | null;

  const poolId = body?.poolId?.trim();
  const purpose = body?.purpose?.trim();
  const recipient = body?.recipient?.trim() ?? "";
  const evidence = body?.evidence?.trim() ?? "";
  const amountNgn = parseAmount(body?.amountNgn);

  if (!poolId) {
    return NextResponse.json({ message: "Choose a pool." }, { status: 400 });
  }

  if (!purpose) {
    return NextResponse.json(
      { message: "Describe what this withdrawal is for." },
      { status: 400 }
    );
  }

  if (amountNgn <= 0) {
    return NextResponse.json(
      { message: "Enter a valid withdrawal amount." },
      { status: 400 }
    );
  }

  const pool = await getPoolByIdForOwner(poolId, user.id);

  if (!pool) {
    return NextResponse.json({ message: "Pool not found." }, { status: 404 });
  }

  const [activity] = await getDb()
    .insert(poolActivities)
    .values({
      actorUserId: user.id,
      kind: "withdrawal_requested",
      message: `Withdrawal requested for ${formatCurrency(amountNgn)} from ${pool.name}`,
      meta: {
        amountNgn,
        evidence,
        purpose,
        recipient,
        status: "pending",
      },
      poolId: pool.id,
    })
    .returning();

  await getDb().insert(notifications).values({
    body: `${formatCurrency(amountNgn)} withdrawal request was created for ${pool.name}.`,
    kind: "withdrawal_requested",
    linkHref: "/withdrawals/details",
    poolId: pool.id,
    title: "Withdrawal request created",
    userId: user.id,
  });

  return NextResponse.json({ withdrawal: serializeWithdrawal(activity) });
}
