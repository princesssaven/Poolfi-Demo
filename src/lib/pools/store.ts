import { desc, eq } from "drizzle-orm";
import { getDb } from "@/src/lib/db";
import {
  notifications,
  poolActivities,
  poolMembers,
  pools,
  type DatabasePool,
  type DatabasePoolMember,
} from "@/src/lib/db/schema";

interface CreatePoolInput {
  autoClose: boolean;
  autoReminders: boolean;
  customFields: string[];
  deadline: Date;
  description: string;
  identityFields: string[];
  members: Array<{ custom: string; name: string; phone: string }>;
  milestoneWithdrawals: boolean;
  milestones: Array<{ label: string; percentage: string }>;
  name: string;
  ownerId: string;
  perPersonAmount: number;
  startDate: Date;
  takeAllAtClose: boolean;
  targetAmount: number;
  category: string;
  allowAnonymous: boolean;
  type?: "goal" | "impact";
}

interface UpdatePoolSettingsInput {
  autoReminders: boolean;
  deadline: Date;
  perPersonAmount: number;
}

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

function slugifyPoolName(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function formatDate(value: Date) {
  return value.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatActivityTime(value: Date) {
  return value.toLocaleString("en-GB", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
  });
}

function getDaysLeft(deadline: Date) {
  const millisecondsRemaining = deadline.getTime() - Date.now();
  return Math.max(0, Math.ceil(millisecondsRemaining / (1000 * 60 * 60 * 24)));
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
  const colors = [
    "#1b4fd8",
    "#12b76a",
    "#f79009",
    "#6b7280",
    "#7c3aed",
    "#0f766e",
  ];
  return colors[index % colors.length];
}

function buildShareCode() {
  return crypto.randomUUID().slice(0, 5).toLowerCase();
}

function buildPoolSlug(name: string) {
  const slugBase = slugifyPoolName(name) || "poolfi-pool";
  const shareCode = buildShareCode();

  return {
    shareCode,
    slug: `${slugBase}-${shareCode}`,
  };
}

function getPoolMetrics(pool: DatabasePool, members: DatabasePoolMember[]) {
  const paidCount = members.filter((member) => member.status === "paid").length;
  const totalMembers = members.length;
  const pendingCount = Math.max(totalMembers - paidCount, 0);
  const raised = paidCount * pool.perPersonAmount;

  return {
    paidCount,
    pendingCount,
    raised,
    totalMembers,
  };
}

async function createNotification(input: {
  body: string;
  kind: string;
  linkHref?: string | null;
  poolId?: string | null;
  title: string;
  userId: string;
}) {
  const [notification] = await getDb()
    .insert(notifications)
    .values({
      body: input.body,
      kind: input.kind,
      linkHref: input.linkHref ?? null,
      poolId: input.poolId ?? null,
      title: input.title,
      userId: input.userId,
    })
    .returning();

  return notification;
}

async function createPoolActivity(input: {
  actorUserId?: string | null;
  kind: string;
  message: string;
  meta?: Record<string, string | number | boolean | null>;
  poolId: string;
}) {
  const [activity] = await getDb()
    .insert(poolActivities)
    .values({
      actorUserId: input.actorUserId ?? null,
      kind: input.kind,
      message: input.message,
      meta: input.meta,
      poolId: input.poolId,
    })
    .returning();

  return activity;
}

export async function createPool(input: CreatePoolInput) {
  const { shareCode, slug } = buildPoolSlug(input.name);
  const [pool] = await getDb()
    .insert(pools)
    .values({
      allowAnonymous: input.allowAnonymous,
      autoClose: input.autoClose,
      autoReminders: input.autoReminders,
      category: input.category,
      customFields: input.customFields,
      deadline: input.deadline,
      description: input.description.trim(),
      identityFields: input.identityFields,
      milestoneWithdrawals: input.milestoneWithdrawals,
      milestones: input.milestones,
      name: input.name.trim(),
      ownerId: input.ownerId,
      perPersonAmount: input.perPersonAmount,
      shareCode,
      slug,
      startDate: input.startDate,
      takeAllAtClose: input.takeAllAtClose,
      targetAmount: input.targetAmount,
      type: input.type ?? "goal",
      updatedAt: new Date(),
    })
    .returning();

  if (input.members.length > 0) {
    await getDb().insert(poolMembers).values(
      input.members.map((member) => ({
        customFieldValue: member.custom.trim(),
        name: member.name.trim(),
        phone: member.phone.trim(),
        poolId: pool.id,
      }))
    );
  }

  await Promise.all([
    createPoolActivity({
      actorUserId: input.ownerId,
      kind: "pool_created",
      message: `Pool created — ${input.members.length} member slots pre-loaded`,
      meta: {
        members: input.members.length,
        targetAmount: input.targetAmount,
      },
      poolId: pool.id,
    }),
    createNotification({
      body: `${pool.name} is live and ready to share.`,
      kind: "pool_created",
      linkHref: `/pool/${pool.id}`,
      poolId: pool.id,
      title: "Your pool is live",
      userId: input.ownerId,
    }),
  ]);

  return {
    id: pool.id,
    poolLink: `poolfi.app/pool/${pool.slug}`,
    slug: pool.slug,
  };
}

export async function getPoolsOwnedByUser(userId: string) {
  return getDb()
    .select()
    .from(pools)
    .where(eq(pools.ownerId, userId))
    .orderBy(desc(pools.createdAt));
}

export async function getPoolByIdForOwner(poolId: string, ownerId: string) {
  const [pool] = await getDb()
    .select()
    .from(pools)
    .where(eq(pools.id, poolId))
    .limit(1);

  if (!pool || pool.ownerId !== ownerId) {
    return null;
  }

  return pool;
}

export async function getMembersForPool(poolId: string) {
  return getDb()
    .select()
    .from(poolMembers)
    .where(eq(poolMembers.poolId, poolId))
    .orderBy(desc(poolMembers.invitedAt));
}

export async function getActivitiesForPool(poolId: string) {
  return getDb()
    .select()
    .from(poolActivities)
    .where(eq(poolActivities.poolId, poolId))
    .orderBy(desc(poolActivities.createdAt));
}

export async function getNotificationsForUser(userId: string) {
  return getDb()
    .select()
    .from(notifications)
    .where(eq(notifications.userId, userId))
    .orderBy(desc(notifications.createdAt));
}

export async function getHomeDashboardData(userId: string) {
  const ownedPools = await getPoolsOwnedByUser(userId);
  const poolIds = ownedPools.map((pool) => pool.id);
  const allMembers = poolIds.length
    ? await Promise.all(poolIds.map((poolId) => getMembersForPool(poolId)))
    : [];
  const recentNotifications = await getNotificationsForUser(userId);

  const poolSummaries = ownedPools.map((pool, index) => {
    const members = allMembers[index] ?? [];
    const metrics = getPoolMetrics(pool, members);
    const categoryMeta = getCategoryMeta(pool.category);

    return {
      closesIn:
        pool.status === "completed"
          ? `Completed ${formatDate(pool.closedAt ?? pool.deadline)}`
          : pool.paused
            ? "Contributions paused"
            : `Closes in ${getDaysLeft(pool.deadline)} day${getDaysLeft(pool.deadline) === 1 ? "" : "s"}`,
      csvReady: metrics.totalMembers > 0,
      emoji: categoryMeta.emoji,
      id: pool.id,
      paidCount: metrics.paidCount,
      raised: metrics.raised,
      role: "Admin",
      target: pool.targetAmount,
      title: pool.name,
      totalCount: metrics.totalMembers,
      unpaidCount: metrics.pendingCount,
    };
  });

  const locked = ownedPools.reduce((total, pool, index) => {
    if (pool.status !== "active") {
      return total;
    }

    return total + getPoolMetrics(pool, allMembers[index] ?? []).raised;
  }, 0);

  const available = ownedPools.reduce((total, pool, index) => {
    if (pool.status !== "completed") {
      return total;
    }

    return total + getPoolMetrics(pool, allMembers[index] ?? []).raised;
  }, 0);

  return {
    activities: recentNotifications.slice(0, 6).map((notification) => ({
      amount: notification.kind === "pool_created" ? "Pool update" : undefined,
      amountType: "info" as const,
      emoji: "🔔",
      time: formatActivityTime(notification.createdAt),
      title: notification.title,
    })),
    balance: {
      activePools: ownedPools.filter((pool) => pool.status === "active").length,
      available,
      completedPools: ownedPools.filter((pool) => pool.status === "completed").length,
      locked,
      totalBalance: locked + available,
    },
    pools: poolSummaries,
  };
}

export async function getMyPoolsViewData(userId: string) {
  const ownedPools = await getPoolsOwnedByUser(userId);
  const memberLists = await Promise.all(
    ownedPools.map((pool) => getMembersForPool(pool.id))
  );

  const cards = ownedPools.map((pool, index) => {
    const members = memberLists[index] ?? [];
    const metrics = getPoolMetrics(pool, members);
    const categoryMeta = getCategoryMeta(pool.category);
    const isCompleted = pool.status === "completed";

    return {
      category: `${categoryMeta.emoji} ${categoryMeta.label} · ${metrics.totalMembers} members invited`,
      contribution: undefined,
      footer: {
        left: isCompleted
          ? `✅ Completed ${formatDate(pool.closedAt ?? pool.deadline)}`
          : pool.paused
            ? "⏸ Contributions paused"
            : `⏰ ${getDaysLeft(pool.deadline)} day${getDaysLeft(pool.deadline) === 1 ? "" : "s"} left`,
        right: isCompleted ? "View Report" : "Manage Pool →",
        rightIsLink: true,
      },
      id: pool.id,
      raised: metrics.raised,
      role: "admin" as const,
      stats: [
        { label: "Paid", value: String(metrics.paidCount) },
        {
          highlight: metrics.pendingCount > 0,
          label: "Pending",
          value: String(metrics.pendingCount),
        },
        {
          label: "Per person",
          value: formatCurrency(pool.perPersonAmount),
        },
      ],
      status: isCompleted ? ("completed" as const) : ("active" as const),
      stripeColor: isCompleted ? ("green" as const) : ("blue" as const),
      target: pool.targetAmount,
      title: pool.name,
    };
  });

  const completedPools = ownedPools
    .filter((pool) => pool.status === "completed")
    .map((pool) => {
      const members =
        memberLists[ownedPools.findIndex((ownedPool) => ownedPool.id === pool.id)] ??
        [];
      const metrics = getPoolMetrics(pool, members);
      const categoryMeta = getCategoryMeta(pool.category);

      return {
        amount: formatCurrency(metrics.raised),
        details: `Admin · Completed ${formatDate(
          pool.closedAt ?? pool.deadline
        )} · ${metrics.totalMembers} members`,
        emoji: categoryMeta.emoji,
        title: pool.name,
      };
    });

  const activeMoney = ownedPools.reduce((total, pool, index) => {
    if (pool.status !== "active") {
      return total;
    }

    return total + getPoolMetrics(pool, memberLists[index] ?? []).raised;
  }, 0);

  const totalRaised = ownedPools.reduce(
    (total, pool, index) =>
      total + getPoolMetrics(pool, memberLists[index] ?? []).raised,
    0
  );

  return {
    completedPools,
    pools: cards,
    summary: [
      {
        label: "Total Pools",
        subtitle: `${ownedPools.filter((pool) => pool.status === "active").length} active · ${
          ownedPools.filter((pool) => pool.status === "completed").length
        } completed`,
        value: String(ownedPools.length),
      },
      {
        label: "Money in Pools",
        subtitle: "Currently locked",
        value: formatCurrency(activeMoney),
        valueColor: "text-warning",
      },
      {
        label: "Total Raised",
        subtitle: "Across all pools",
        value: formatCurrency(totalRaised),
        valueColor: "text-success",
      },
      {
        label: "As Admin",
        subtitle: "Pools you created",
        value: `${ownedPools.length} pools`,
      },
    ],
  };
}

export async function getPoolDashboardViewData(poolId: string, ownerId: string) {
  const pool = await getPoolByIdForOwner(poolId, ownerId);

  if (!pool) {
    return null;
  }

  const members = await getMembersForPool(pool.id);
  const activities = await getActivitiesForPool(pool.id);
  const metrics = getPoolMetrics(pool, members);
  const categoryMeta = getCategoryMeta(pool.category);
  const isCompleted = pool.status === "completed";

  return {
    activities: activities.map((activity) => ({
      dotColor:
        activity.kind === "reminders_sent"
          ? "#1b4fd8"
          : activity.kind === "pool_closed"
            ? "#12b76a"
            : activity.kind === "pool_cancelled"
              ? "#f04438"
              : "#1b4fd8",
      isBold:
        activity.kind === "member_paid" ||
        activity.kind === "pool_closed" ||
        activity.kind === "pool_cancelled",
      mainText: activity.message,
      timeText: formatActivityTime(activity.createdAt),
    })),
    category: `${categoryMeta.emoji} ${categoryMeta.label}`,
    closesDate: `Closes ${formatDate(pool.deadline)}`,
    daysLeft: getDaysLeft(pool.deadline),
    id: pool.id,
    isCompleted,
    members: members.map((member, index) => ({
      bgColor: buildMemberColor(index),
      info:
        member.status === "paid" && member.paidAt
          ? `${member.customFieldValue || member.phone || "Member"} · Paid ${formatDate(
              member.paidAt
            )}`
          : `${member.customFieldValue || member.phone || "Member"} · Pending`,
      initials: buildInitials(member.name),
      name: member.name,
      status: member.status === "paid" ? "paid" : "pending",
    })),
    paidCount: metrics.paidCount,
    pendingCount: metrics.pendingCount,
    perPerson: `${formatCurrency(pool.perPersonAmount)} per person`,
    poolLink: `poolfi.app/pool/${pool.slug}`,
    raised: metrics.raised,
    releaseAmount: formatCurrency(metrics.raised),
    releaseBanner: isCompleted
      ? {
          description: `${pool.name} has been closed and the current balance is ready for export or payout review.`,
          title: "Pool closed successfully.",
        }
      : undefined,
    settings: {
      autoReminders: pool.autoReminders,
      deadline: pool.deadline.toISOString().slice(0, 10),
      paused: pool.paused,
      perPersonAmount: String(pool.perPersonAmount),
      status: pool.status,
      takeAllAtClose: pool.takeAllAtClose,
    },
    target: pool.targetAmount,
    title: pool.name,
    totalMembers: metrics.totalMembers,
  };
}

export async function updatePoolSettings(
  poolId: string,
  ownerId: string,
  input: UpdatePoolSettingsInput
) {
  const pool = await getPoolByIdForOwner(poolId, ownerId);

  if (!pool) {
    return null;
  }

  const [updatedPool] = await getDb()
    .update(pools)
    .set({
      autoReminders: input.autoReminders,
      deadline: input.deadline,
      perPersonAmount: input.perPersonAmount,
      updatedAt: new Date(),
    })
    .where(eq(pools.id, pool.id))
    .returning();

  await Promise.all([
    createPoolActivity({
      actorUserId: ownerId,
      kind: "settings_updated",
      message: `Pool settings updated — amount per person is now ${formatCurrency(
        input.perPersonAmount
      )}`,
      poolId: pool.id,
    }),
    createNotification({
      body: `${updatedPool.name} settings were updated.`,
      kind: "settings_updated",
      linkHref: `/pool/${updatedPool.id}`,
      poolId: updatedPool.id,
      title: "Pool settings updated",
      userId: ownerId,
    }),
  ]);

  return updatedPool;
}

export async function sendPoolReminders(poolId: string, ownerId: string) {
  const pool = await getPoolByIdForOwner(poolId, ownerId);

  if (!pool) {
    return null;
  }

  const members = await getMembersForPool(poolId);
  const pendingCount = members.filter((member) => member.status !== "paid").length;

  await Promise.all([
    createPoolActivity({
      actorUserId: ownerId,
      kind: "reminders_sent",
      message: `${pendingCount} reminder message${pendingCount === 1 ? "" : "s"} sent to unpaid members`,
      meta: { pendingCount },
      poolId,
    }),
    createNotification({
      body: `PoolFi queued ${pendingCount} reminder message${pendingCount === 1 ? "" : "s"} for unpaid members in ${pool.name}.`,
      kind: "reminders_sent",
      linkHref: `/pool/${pool.id}`,
      poolId,
      title: "Reminders sent",
      userId: ownerId,
    }),
  ]);

  return {
    pendingCount,
  };
}

export async function updatePoolStatus(
  poolId: string,
  ownerId: string,
  action: "cancel" | "close" | "pause" | "resume"
) {
  const pool = await getPoolByIdForOwner(poolId, ownerId);

  if (!pool) {
    return null;
  }

  const nextState =
    action === "close"
      ? {
          closedAt: new Date(),
          paused: false,
          status: "completed",
          updatedAt: new Date(),
        }
      : action === "cancel"
        ? {
            cancelledAt: new Date(),
            paused: false,
            status: "cancelled",
            updatedAt: new Date(),
          }
        : action === "pause"
          ? {
              paused: true,
              updatedAt: new Date(),
            }
          : {
              paused: false,
              updatedAt: new Date(),
            };

  const [updatedPool] = await getDb()
    .update(pools)
    .set(nextState)
    .where(eq(pools.id, pool.id))
    .returning();

  const activityMessage =
    action === "close"
      ? "Pool closed and marked ready for payout review"
      : action === "cancel"
        ? "Pool cancelled and marked for contributor refunds"
        : action === "pause"
          ? "Contributions paused for this pool"
          : "Contributions resumed for this pool";

  const notificationTitle =
    action === "close"
      ? "Pool closed"
      : action === "cancel"
        ? "Pool cancelled"
        : action === "pause"
          ? "Pool paused"
          : "Pool resumed";

  await Promise.all([
    createPoolActivity({
      actorUserId: ownerId,
      kind: `pool_${action}`,
      message: activityMessage,
      poolId,
    }),
    createNotification({
      body: `${updatedPool.name} was updated: ${activityMessage.toLowerCase()}.`,
      kind: `pool_${action}`,
      linkHref: `/pool/${updatedPool.id}`,
      poolId,
      title: notificationTitle,
      userId: ownerId,
    }),
  ]);

  return updatedPool;
}
