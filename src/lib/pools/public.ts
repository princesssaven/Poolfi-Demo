import { desc, eq } from "drizzle-orm";
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
  const expectedCount = members.filter((member) => member.status === "expected").length;
  const totalMembers = members.length;
  const pendingCount = Math.max(totalMembers - paidCount - expectedCount, 0);
  const raised = paidCount * pool.perPersonAmount;

  return { expectedCount, paidCount, pendingCount, raised, totalMembers };
}

function formatMemberDate(value: Date) {
  return value.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function buildInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "PF";
}

function buildMemberColor(index: number) {
  const colors = ["#1b4fd8", "#12b76a", "#f79009", "#6b7280", "#7c3aed", "#0f766e"];
  return colors[index % colors.length];
}

export async function getPublicPoolBySlug(slug: string) {
  const [result] = await getDb()
    .select({
      pool: pools,
      firstName: users.firstName,
      lastName: users.lastName,
      pseudonym: users.pseudonym,
    })
    .from(pools)
    .leftJoin(users, eq(pools.ownerId, users.id))
    .where(eq(pools.slug, slug))
    .limit(1);

  if (!result || !result.pool) {
    return null;
  }

  const { pool, firstName, lastName, pseudonym } = result;
  const adminName =
    [firstName, lastName].filter(Boolean).join(" ") || pseudonym || "Creator";

  const members = await getDb()
    .select()
    .from(poolMembers)
    .where(eq(poolMembers.poolId, pool.id))
    .orderBy(desc(poolMembers.invitedAt));

  const metrics = getPoolMetrics(pool, members);
  const categoryMeta = getCategoryMeta(pool.category);

  return {
    adminName,
    category: `${categoryMeta.emoji} ${categoryMeta.label}`,
    closesDate: formatDate(pool.deadline),
    daysLeft: getDaysLeft(pool.deadline),
    description: pool.description,
    expectedCount: metrics.expectedCount,
    id: pool.id,
    isCompleted: pool.status === "completed",
    members: members.map((member, index) => ({
      bgColor: buildMemberColor(index),
      isCreator: member.contributorUserId === pool.ownerId,
      info:
        member.status === "paid" && member.paidAt
          ? `${member.customFieldValue || member.phone || "Member"} · Paid ${formatMemberDate(
              member.paidAt
            )}`
          : member.status === "expected"
            ? `${member.customFieldValue || member.phone || "Member"} · Expected`
            : `${member.customFieldValue || member.phone || "Member"} · Pending`,
      initials: buildInitials(member.name),
      name: member.name,
      status: member.status === "paid" ? "paid" : member.status === "expected" ? "expected" : "pending",
    })),
    name: pool.name,
    paidCount: metrics.paidCount,
    pendingCount: metrics.pendingCount,
    perPersonAmount: pool.perPersonAmount,
    poolLink: `/p/${pool.slug}`,
    raised: metrics.raised,
    targetAmount: pool.targetAmount,
    totalMembers: metrics.totalMembers,
  };
}
