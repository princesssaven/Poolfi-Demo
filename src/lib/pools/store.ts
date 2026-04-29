import { and, desc, eq, isNull, sql } from "drizzle-orm";
import { getDb } from "@/src/lib/db";
import {
  notifications,
  poolActivities,
  poolMembers,
  pools,
  users,
  type DatabasePool,
  type DatabasePoolMember,
} from "@/src/lib/db/schema";
import { getExchangeRate } from "@/src/lib/busha/client";

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
  // Impact specific
  problem?: string;
  moneyUsage?: string;
  location?: string;
  beneficiaries?: string;
  evidenceUrls?: string[];
  approversCount?: string;
  referenceLink?: string;
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
  return `₦${amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Fallback exchange rate for USDC to NGN if Busha API fails or is not configured
const FALLBACK_USDC_TO_NGN_RATE = 1500;

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
  const expectedCount = members.filter((member) => member.status === "expected").length;
  const totalMembers = members.length;
  const pendingCount = Math.max(totalMembers - paidCount - expectedCount, 0);
  const raised = paidCount * pool.perPersonAmount;

  return {
    expectedCount,
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
      // Impact fields
      problem: input.problem,
      moneyUsage: input.moneyUsage,
      location: input.location,
      beneficiaries: input.beneficiaries,
      evidenceUrls: input.evidenceUrls ?? [],
      approversCount: input.approversCount,
      referenceLink: input.referenceLink,
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
    poolLink: `/p/${pool.slug}`,
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

export async function markNotificationsReadForUser(userId: string) {
  await getDb()
    .update(notifications)
    .set({ readAt: new Date() })
    .where(
      and(eq(notifications.userId, userId), isNull(notifications.readAt))
    );
}

export async function markNotificationReadById(notificationId: string, userId: string) {
  await getDb()
    .update(notifications)
    .set({ readAt: new Date() })
    .where(
      and(
        eq(notifications.id, notificationId),
        eq(notifications.userId, userId),
        isNull(notifications.readAt)
      )
    );
}

export async function getImpactPoolsViewData() {
  const impactPools = await getDb()
    .select()
    .from(pools)
    .where(eq(pools.type, "impact"))
    .orderBy(desc(pools.createdAt));

  const memberLists = impactPools.length
    ? await Promise.all(impactPools.map((pool) => getMembersForPool(pool.id)))
    : [];

  return impactPools.map((pool, index) => {
    const members = memberLists[index] ?? [];
    const paidCount = members.filter((member) => member.status === "paid").length;

    return {
      beneficiaries: pool.beneficiaries ?? undefined,
      category: pool.category,
      contributorCount: paidCount,
      deadline: pool.deadline.toISOString(),
      description: pool.description,
      evidenceUrls: pool.evidenceUrls,
      id: pool.id,
      location: pool.location ?? undefined,
      name: pool.name,
      perPersonAmount: pool.perPersonAmount,
      problem: pool.problem ?? undefined,
      raised: paidCount * pool.perPersonAmount,
      status: pool.status,
      targetAmount: pool.targetAmount,
    };
  });
}

export async function getHomeDashboardData(userId: string) {
  const ownedPools = await getPoolsOwnedByUser(userId);
  const poolIds = ownedPools.map((pool) => pool.id);
  const allMembers = poolIds.length
    ? await Promise.all(poolIds.map((poolId) => getMembersForPool(poolId)))
    : [];
  const recentNotifications = await getNotificationsForUser(userId);

  const [userRecord, liveRate] = await Promise.all([
    getDb()
      .select({ walletBalance: users.walletBalance })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1)
      .then(res => res[0]),
    getExchangeRate("USDC", "NGN")
  ]);

  const currentRate = liveRate ?? FALLBACK_USDC_TO_NGN_RATE;
  const rawWalletBalance = parseFloat(userRecord?.walletBalance ?? "0");
  const walletBalanceNgn = rawWalletBalance * currentRate;

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

  // Fetch all contributions made by this user
  const userContributions = await getDb()
    .select({
      poolId: poolMembers.poolId,
      amount: pools.perPersonAmount,
      poolStatus: pools.status,
    })
    .from(poolMembers)
    .innerJoin(pools, eq(poolMembers.poolId, pools.id))
    .where(
      and(
        eq(poolMembers.contributorUserId, userId),
        eq(poolMembers.status, "paid")
      )
    );

  const lockedFromOwnedPools = ownedPools.reduce((total, pool, index) => {
    if (pool.status !== "active") {
      return total;
    }
    return total + getPoolMetrics(pool, allMembers[index] ?? []).raised;
  }, 0);

  const lockedFromContributions = userContributions.reduce((total, contribution) => {
    // Only count contributions to pools the user doesn't own (to avoid double counting)
    // and where the pool is still active
    const isOwned = ownedPools.some((p) => p.id === contribution.poolId);
    if (!isOwned && contribution.poolStatus === "active") {
      return total + contribution.amount;
    }
    return total;
  }, 0);

  const locked = lockedFromOwnedPools + lockedFromContributions;

  let availableFromOwnedPools = ownedPools.reduce((total, pool, index) => {
    if (pool.status !== "completed") {
      return total;
    }
    return total + getPoolMetrics(pool, allMembers[index] ?? []).raised;
  }, 0);

  // Add the user's converted USDC wallet balance to the available NGN balance
  const available = availableFromOwnedPools + walletBalanceNgn;

  const activeOwned = ownedPools.filter((pool) => pool.status === "active").length;
  const activeJoined = userContributions.filter((c) => 
    c.poolStatus === "active" && !ownedPools.some(p => p.id === c.poolId)
  ).length;
  
  const completedOwned = ownedPools.filter((pool) => pool.status === "completed").length;
  const completedJoined = userContributions.filter((c) => 
    c.poolStatus === "completed" && !ownedPools.some(p => p.id === c.poolId)
  ).length;

  return {
    activities: recentNotifications.slice(0, 6).map((notification) => ({
      amount: notification.kind === "pool_created" ? "Pool update" : undefined,
      amountType: "info" as const,
      emoji: "🔔",
      time: formatActivityTime(notification.createdAt),
      title: notification.title,
    })),
    balance: {
      activePools: activeOwned + activeJoined,
      available,
      completedPools: completedOwned + completedJoined,
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
          : member.status === "expected"
            ? `${member.customFieldValue || member.phone || "Member"} · Expected`
            : `${member.customFieldValue || member.phone || "Member"} · Pending`,
      initials: buildInitials(member.name),
      name: member.name,
      status: member.status === "paid" ? "paid" : member.status === "expected" ? "expected" : "pending",
    })),
    expectedCount: metrics.expectedCount,
    paidCount: metrics.paidCount,
    pendingCount: metrics.pendingCount,
    perPerson: `${formatCurrency(pool.perPersonAmount)} per person`,
    poolLink: `/p/${pool.slug}`,
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

export async function contributeToPool(input: {
  userId: string;
  userName: string;
  poolId: string;
  amountNgn: number;
  anonymous: boolean;
}) {
  const db = getDb();

  // 1. Look up the pool
  const [pool] = await db
    .select()
    .from(pools)
    .where(eq(pools.id, input.poolId))
    .limit(1);

  if (!pool) {
    return { success: false, error: "Pool not found." } as const;
  }

  if (pool.status !== "active") {
    return { success: false, error: "This pool is no longer accepting contributions." } as const;
  }

  if (pool.paused) {
    return { success: false, error: "Contributions to this pool are currently paused." } as const;
  }

  // 2. Get exchange rate and user balance
  const [liveRate, userRecord] = await Promise.all([
    getExchangeRate("USDC", "NGN"),
    db
      .select({ walletBalance: users.walletBalance })
      .from(users)
      .where(eq(users.id, input.userId))
      .limit(1)
      .then((res) => res[0]),
  ]);

  if (!userRecord) {
    return { success: false, error: "User not found." } as const;
  }

  const currentRate = liveRate ?? FALLBACK_USDC_TO_NGN_RATE;
  const rawWalletUsdc = parseFloat(userRecord.walletBalance);
  const walletBalanceNgn = rawWalletUsdc * currentRate;

  if (input.amountNgn <= 0) {
    return { success: false, error: "Contribution amount must be greater than zero." } as const;
  }

  if (input.amountNgn > walletBalanceNgn) {
    return {
      success: false,
      error: "Insufficient balance. Please add funds to your wallet first.",
      availableNgn: walletBalanceNgn,
    } as const;
  }

  // 3. Convert NGN to USDC for the wallet deduction
  const usdcToDeduct = (input.amountNgn / currentRate).toFixed(7);

  // 4. Deduct wallet balance
  await db
    .update(users)
    .set({
      walletBalance: sql`${users.walletBalance}::numeric - ${usdcToDeduct}::numeric`,
      updatedAt: new Date(),
    })
    .where(eq(users.id, input.userId));

  // 5. Mark contributor as paid (update existing or insert new)
  const displayName = input.anonymous ? "Anonymous Contributor" : input.userName;

  const [existingMember] = await db
    .select()
    .from(poolMembers)
    .where(
      and(
        eq(poolMembers.poolId, input.poolId),
        eq(poolMembers.contributorUserId, input.userId)
      )
    )
    .limit(1);

  if (existingMember) {
    await db
      .update(poolMembers)
      .set({ status: "paid", paidAt: new Date(), name: displayName })
      .where(eq(poolMembers.id, existingMember.id));
  } else {
    await db.insert(poolMembers).values({
      poolId: input.poolId,
      name: displayName,
      phone: "",
      customFieldValue: "",
      contributorUserId: input.userId,
      status: "paid",
      paidAt: new Date(),
    });
  }

  // 6. Log activity + notification
  const contributionLabel = formatCurrency(input.amountNgn);

  await Promise.all([
    createPoolActivity({
      actorUserId: input.userId,
      kind: "member_paid",
      message: `${displayName} contributed ${contributionLabel}`,
      meta: {
        amountNgn: input.amountNgn,
        anonymous: input.anonymous,
      },
      poolId: input.poolId,
    }),
    createNotification({
      body: `You contributed ${contributionLabel} to ${pool.name}. Thank you for your support!`,
      kind: "contribution_made",
      linkHref: `/impact-contribution`,
      poolId: input.poolId,
      title: "Contribution successful",
      userId: input.userId,
    }),
  ]);

  // 7. Return updated balance
  const [updatedUser] = await db
    .select({ walletBalance: users.walletBalance })
    .from(users)
    .where(eq(users.id, input.userId))
    .limit(1);

  const updatedBalanceNgn = parseFloat(updatedUser?.walletBalance ?? "0") * currentRate;

  return {
    success: true,
    newBalanceNgn: updatedBalanceNgn,
    contributedNgn: input.amountNgn,
  } as const;
}

export async function joinPoolPayLater(input: {
  userId: string;
  userName: string;
  poolId: string;
}) {
  const db = getDb();

  const [pool] = await db
    .select()
    .from(pools)
    .where(eq(pools.id, input.poolId))
    .limit(1);

  if (!pool) {
    return { success: false, error: "Pool not found." } as const;
  }

  if (pool.status !== "active") {
    return { success: false, error: "This pool is no longer accepting members." } as const;
  }

  // Check if user is already a member
  const [existingMember] = await db
    .select()
    .from(poolMembers)
    .where(
      and(
        eq(poolMembers.poolId, input.poolId),
        eq(poolMembers.contributorUserId, input.userId)
      )
    )
    .limit(1);

  if (existingMember) {
    if (existingMember.status === "paid") {
      return { success: false, error: "You have already paid for this pool." } as const;
    }
    // Update from expected to pending
    await db
      .update(poolMembers)
      .set({ status: "pending" })
      .where(eq(poolMembers.id, existingMember.id));
  } else {
    // Insert as pending (user wasn't pre-added but joined via link)
    await db.insert(poolMembers).values({
      poolId: input.poolId,
      name: input.userName,
      phone: "",
      customFieldValue: "",
      contributorUserId: input.userId,
      status: "pending",
    });
  }

  await Promise.all([
    createPoolActivity({
      actorUserId: input.userId,
      kind: "member_joined",
      message: `${input.userName} joined the pool (pay later)`,
      poolId: input.poolId,
    }),
    createNotification({
      body: `You joined ${pool.name}. You can pay anytime before the deadline.`,
      kind: "pool_joined",
      linkHref: `/impact-contribution?poolId=${input.poolId}`,
      poolId: input.poolId,
      title: "You joined a pool",
      userId: input.userId,
    }),
  ]);

  return { success: true } as const;
}
