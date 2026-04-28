import { NextResponse } from "next/server";
import { and, desc, eq, inArray } from "drizzle-orm";
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

function buildInitials(name: string) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("") || "?"
  );
}

function buildContributorColor(index: number, isAnonymous: boolean) {
  if (isAnonymous) {
    return "#d0d5dd";
  }

  return ["#3159f1", "#12b76a", "#7c3aed", "#0891b2", "#e11d48", "#16a34a"][
    index % 6
  ];
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

    const paidMembers = members.filter((member) => member.status === "paid");
    const contributorCount = paidMembers.length;

    const activities = await getDb()
      .select()
      .from(poolActivities)
      .where(eq(poolActivities.poolId, pool.id))
      .orderBy(desc(poolActivities.createdAt))
      .limit(5);

    const contributionActivities = await getDb()
      .select()
      .from(poolActivities)
      .where(
        and(
          eq(poolActivities.poolId, pool.id),
          eq(poolActivities.kind, "member_paid")
        )
      )
      .orderBy(desc(poolActivities.createdAt));

    const contributorUserIds = contributionActivities
      .map((activity) => activity.actorUserId)
      .filter((userId): userId is string => Boolean(userId));

    const contributorUsers = contributorUserIds.length
      ? await getDb()
          .select({
            firstName: users.firstName,
            id: users.id,
            lastName: users.lastName,
            pseudonym: users.pseudonym,
          })
          .from(users)
          .where(inArray(users.id, contributorUserIds))
      : [];
    const contributorUsersById = new Map(
      contributorUsers.map((user) => [user.id, user])
    );

    const [owner] = await getDb()
      .select({ firstName: users.firstName, lastName: users.lastName, pseudonym: users.pseudonym })
      .from(users)
      .where(eq(users.id, pool.ownerId))
      .limit(1);

    const contributionTotal = contributionActivities.reduce((total, activity) => {
      const meta = activity.meta ?? {};
      const amount =
        typeof meta.amountNgn === "number" && Number.isFinite(meta.amountNgn)
          ? meta.amountNgn
          : 0;

      return total + amount;
    }, 0);
    const fallbackRaised = contributorCount * pool.perPersonAmount;
    const raised = contributionTotal > 0 ? contributionTotal : fallbackRaised;

    const recentContributors =
      contributionActivities.length > 0
        ? contributionActivities.map((activity, index) => {
            const meta = activity.meta ?? {};
            const anonymous = meta.anonymous === true;
            const user = activity.actorUserId
              ? contributorUsersById.get(activity.actorUserId)
              : undefined;
            const displayName = anonymous
              ? "Anonymous"
              : buildOwnerName(user ?? null);
            const amount =
              typeof meta.amountNgn === "number" &&
              Number.isFinite(meta.amountNgn)
                ? meta.amountNgn
                : pool.perPersonAmount;

            return {
              amount,
              anonymous,
              color: buildContributorColor(index, anonymous),
              handle: anonymous
                ? "Hidden contributor"
                : user?.pseudonym
                  ? `@${user.pseudonym}`
                  : "Contributor",
              id: activity.id,
              initials: anonymous ? "?" : buildInitials(displayName),
              name: displayName,
              time: activity.createdAt.toISOString(),
              userId: activity.actorUserId,
            };
          })
        : paidMembers.map((member, index) => {
            const anonymous = member.name.toLowerCase().includes("anonymous");
            const displayName = anonymous ? "Anonymous" : member.name;

            return {
              amount: pool.perPersonAmount,
              anonymous,
              color: buildContributorColor(index, anonymous),
              handle: anonymous
                ? "Hidden contributor"
                : member.customFieldValue || member.phone || "Contributor",
              id: member.id,
              initials: anonymous ? "?" : buildInitials(displayName),
              name: displayName,
              time: (member.paidAt ?? member.invitedAt).toISOString(),
              userId: null,
            };
          });

    return NextResponse.json({
      data: {
        pool: {
          ...pool,
          contributorCount,
          raised,
          ownerName: buildOwnerName(owner ?? null),
          deadline: pool.deadline.toISOString(),
          startDate: pool.startDate.toISOString(),
          createdAt: pool.createdAt.toISOString(),
          closedAt: pool.closedAt?.toISOString() ?? null,
          cancelledAt: pool.cancelledAt?.toISOString() ?? null,
        },
        members: members.map((member) => ({
          ...member,
          invitedAt: member.invitedAt.toISOString(),
          paidAt: member.paidAt?.toISOString() ?? null,
        })),
        activities: activities.map((activity) => ({
          ...activity,
          createdAt: activity.createdAt.toISOString(),
        })),
        recentContributors,
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
