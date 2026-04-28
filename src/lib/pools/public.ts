import { eq } from "drizzle-orm";
import { getDb } from "@/src/lib/db";
import {
  poolMembers,
  pools,
  users,
  type DatabasePool,
  type DatabasePoolMember,
} from "@/src/lib/db/schema";

function getCategoryMeta(category: string) {
  switch (category) {
    case "education":
      return { emoji: "🎓", label: "Education" };
    case "welfare":
      return { emoji: "🎗️", label: "Welfare" };
    case "wedding":
      return { emoji: "💍", label: "Wedding" };
    case "community":
      return { emoji: "💧", label: "Community" };
    default:
      return { emoji: "🌊", label: "General" };
  }
}

function formatDate(value: Date) {
  return value.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getDaysLeft(deadline: Date) {
  const millisecondsRemaining = deadline.getTime() - Date.now();
  return Math.max(0, Math.ceil(millisecondsRemaining / (1000 * 60 * 60 * 24)));
}

function getPoolMetrics(pool: DatabasePool, members: DatabasePoolMember[]) {
  const paidCount = members.filter((member) => member.status === "paid").length;
  const totalMembers = members.length;
  const pendingCount = Math.max(totalMembers - paidCount, 0);
  const raised = paidCount * pool.perPersonAmount;

  return { paidCount, pendingCount, raised, totalMembers };
}

export async function getPublicPoolBySlug(slug: string) {
  const [result] = await getDb()
    .select({
      pool: pools,
      firstName: users.firstName,
      lastName: users.lastName,
    })
    .from(pools)
    .leftJoin(users, eq(pools.ownerId, users.id))
    .where(eq(pools.slug, slug))
    .limit(1);

  if (!result || !result.pool) {
    return null;
  }

  const { pool, firstName, lastName } = result;
  const adminName =
    [firstName, lastName].filter(Boolean).join(" ") || "Anonymous";

  const members = await getDb()
    .select()
    .from(poolMembers)
    .where(eq(poolMembers.poolId, pool.id));

  const metrics = getPoolMetrics(pool, members);
  const categoryMeta = getCategoryMeta(pool.category);

  return {
    adminName,
    category: `${categoryMeta.emoji} ${categoryMeta.label}`,
    closesDate: formatDate(pool.deadline),
    daysLeft: getDaysLeft(pool.deadline),
    description: pool.description,
    id: pool.id,
    isCompleted: pool.status === "completed",
    name: pool.name,
    paidCount: metrics.paidCount,
    pendingCount: metrics.pendingCount,
    perPersonAmount: pool.perPersonAmount,
    raised: metrics.raised,
    targetAmount: pool.targetAmount,
    totalMembers: metrics.totalMembers,
  };
}
