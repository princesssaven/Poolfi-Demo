import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { getDb, isDatabaseConfigured } from "@/src/lib/db";
import { poolActivities, poolMembers, pools, users } from "@/src/lib/db/schema";

function buildOwnerName(owner: { firstName: string; lastName: string; pseudonym: string } | null) {
  if (!owner) {
    return "Creator";
  }

  const firstName = owner.firstName?.trim();
  const lastName = owner.lastName?.trim();
  const pseudonym = owner.pseudonym?.trim();

  if (firstName || lastName) {
    return [firstName, lastName].filter(Boolean).join(" ");
  }

  return pseudonym || "Creator";
}

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load impact pool data." },
      { status: 503 }
    );
  }

  try {
    const [pool] = await getDb()
      .select()
      .from(pools)
      .where(eq(pools.type, "impact"))
      .orderBy(desc(pools.createdAt))
      .limit(1);

    if (!pool) {
      return NextResponse.json(
        { message: "No impact pools found." },
        { status: 404 }
      );
    }

    const members = await getDb()
      .select()
      .from(poolMembers)
      .where(eq(poolMembers.poolId, pool.id))
      .orderBy(desc(poolMembers.paidAt));

    const activities = await getDb()
      .select()
      .from(poolActivities)
      .where(eq(poolActivities.poolId, pool.id))
      .orderBy(desc(poolActivities.createdAt))
      .limit(5);

    const [owner] = await getDb()
      .select({ firstName: users.firstName, lastName: users.lastName, pseudonym: users.pseudonym })
      .from(users)
      .where(eq(users.id, pool.ownerId))
      .limit(1);

    return NextResponse.json({
      data: {
        pool: {
          ...pool,
          ownerName: buildOwnerName(owner ?? null),
          deadline: pool.deadline.toISOString(),
          startDate: pool.startDate.toISOString(),
          createdAt: pool.createdAt.toISOString(),
          closedAt: pool.closedAt?.toISOString() ?? null,
          cancelledAt: pool.cancelledAt?.toISOString() ?? null,
        },
        members,
        activities,
      },
    });
  } catch (error) {
    console.error("Error fetching impact pool details:", error);
    return NextResponse.json(
      { message: "Failed to load impact pool details." },
      { status: 500 }
    );
  }
}
