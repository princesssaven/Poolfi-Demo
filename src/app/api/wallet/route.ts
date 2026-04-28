import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { getExchangeRate } from "@/src/lib/busha/client";
import { getDb, isDatabaseConfigured } from "@/src/lib/db";
import { deposits, poolActivities, users } from "@/src/lib/db/schema";

const FALLBACK_USDC_TO_NGN_RATE = 1500;

function formatActivityMessage(message: string) {
  return message.replace(/\s+/g, " ").trim();
}

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load wallet data." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const db = getDb();

  const [userRecord, userDeposits, contributionActivities, liveRate] =
    await Promise.all([
      db
        .select({
          depositMemo: users.depositMemo,
          walletBalance: users.walletBalance,
        })
        .from(users)
        .where(eq(users.id, user.id))
        .limit(1)
        .then((rows) => rows[0]),
      db
        .select()
        .from(deposits)
        .where(eq(deposits.userId, user.id))
        .orderBy(desc(deposits.createdAt))
        .limit(20),
      db
        .select()
        .from(poolActivities)
        .where(eq(poolActivities.actorUserId, user.id))
        .orderBy(desc(poolActivities.createdAt))
        .limit(20),
      getExchangeRate("USDC", "NGN"),
    ]);

  const rate = liveRate ?? FALLBACK_USDC_TO_NGN_RATE;
  const walletBalanceUsdc = Number(userRecord?.walletBalance ?? 0);
  const walletBalanceNgn = walletBalanceUsdc * rate;

  const depositTransactions = userDeposits.map((deposit) => {
    const amountUsdc = Number(deposit.amount);

    return {
      amountNgn: amountUsdc * rate,
      amountUsdc,
      asset: deposit.asset,
      createdAt: deposit.createdAt.toISOString(),
      description: `Deposit ${deposit.status}`,
      id: deposit.id,
      status: deposit.status,
      title: "Wallet funded",
      type: "credit" as const,
    };
  });

  const contributionTransactions = contributionActivities
    .filter((activity) => activity.kind === "member_paid")
    .map((activity) => {
      const amountNgn =
        typeof activity.meta?.amountNgn === "number"
          ? activity.meta.amountNgn
          : 0;

      return {
        amountNgn,
        amountUsdc: amountNgn / rate,
        asset: "NGN",
        createdAt: activity.createdAt.toISOString(),
        description: formatActivityMessage(activity.message),
        id: activity.id,
        status: "confirmed",
        title: "Pool contribution",
        type: "debit" as const,
      };
    });

  const transactions = [...depositTransactions, ...contributionTransactions]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 25);

  return NextResponse.json({
    data: {
      depositMemo: userRecord?.depositMemo ?? user.depositMemo,
      exchangeRate: rate,
      transactions,
      walletBalanceNgn,
      walletBalanceUsdc,
    },
  });
}
