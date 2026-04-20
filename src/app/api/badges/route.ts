import { NextResponse } from "next/server";
import { eq, isNull, and, count } from "drizzle-orm";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured, getDb } from "@/src/lib/db";
import { notifications, pools } from "@/src/lib/db/schema";

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ unreadNotifications: 0, activePools: 0 });
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ unreadNotifications: 0, activePools: 0 });
  }

  const db = getDb();

  const [notifResult] = await db
    .select({ value: count() })
    .from(notifications)
    .where(
      and(
        eq(notifications.userId, user.id),
        isNull(notifications.readAt)
      )
    );

  const [poolResult] = await db
    .select({ value: count() })
    .from(pools)
    .where(
      and(
        eq(pools.ownerId, user.id),
        eq(pools.status, "active")
      )
    );

  return NextResponse.json({
    unreadNotifications: notifResult?.value ?? 0,
    activePools: poolResult?.value ?? 0,
  });
}
