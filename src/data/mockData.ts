// ==================== HOME PAGE DATA ====================

export const homeDataPopulated = {
  balance: {
    totalBalance: 47500.0,
    available: 32500.0,
    locked: 15000.0,
    activePools: 3,
    completedPools: 1,
  },
  pools: [
    {
      emoji: "🎓",
      title: "300L Class Dues — 2nd Semester",
      role: "Admin",
      paidCount: 312,
      totalCount: 400,
      closesIn: "Closes in 5 days",
      raised: 312000,
      target: 400000,
      unpaidCount: 88,
      csvReady: true,
    },
  ],
  activities: [
    {
      emoji: "💳",
      title: "Wallet funded",
      time: "Today · 9:14am",
      amount: "+₦20,000",
      amountType: "credit" as const,
    },
    {
      emoji: "🎓",
      title: "Class Dues contribution",
      time: "Today · 9:16am",
      amount: "-₦1,000",
      amountType: "debit" as const,
    },
    {
      emoji: "🔔",
      title: "Amaka paid her dues",
      time: "Yesterday · 3:42pm",
      amount: "Pool update",
      amountType: "info" as const,
    },
    {
      emoji: "💍",
      title: "Wedding pool joined",
      time: "Feb 16 · 11:00am",
      amount: "-₦5,000",
      amountType: "debit" as const,
    },
  ],
  featuredPool: {
    title: "Clean Water for Oguta Community, Imo State",
    description:
      "Help build a functioning borehole for 3,000+ residents who currently walk 2km daily for water.",
    raised: 670000,
    target: 1000000,
  },
};

export const homeDataEmpty = {
  balance: {
    totalBalance: 0,
    available: 0,
    locked: 0,
    activePools: 0,
    completedPools: 0,
  },
  pools: [],
  activities: [],
  featuredPool: {
    title: "Clean Water for Oguta Community, Imo State",
    description:
      "Help build a functioning borehole for 3,000+ residents who currently walk 2km daily for water.",
    raised: 670000,
    target: 1000000,
  },
};

// ==================== MY POOLS PAGE DATA ====================

export type PoolRole = "admin" | "contributor" | "impact";
export type PoolStatus = "active" | "completed";

export interface PoolCardData {
  id: string;
  role: PoolRole;
  title: string;
  category: string;
  status: PoolStatus;
  raised: number;
  target: number;
  stats: { label: string; value: string; highlight?: boolean }[];
  footer: { left: string; right: string; rightIsLink?: boolean };
  contribution?: string;
  stripeColor: "blue" | "green" | "teal" | "emerald";
}

export interface CompletedPoolData {
  emoji: string;
  title: string;
  details: string;
  amount: string;
}

export const myPoolsData = {
  summary: [
    { label: "Total Pools", value: "6", subtitle: "4 active · 2 completed" },
    {
      label: "Money in Pools",
      value: "₦16,000",
      subtitle: "Currently locked",
      valueColor: "text-warning",
    },
    {
      label: "Total Contributed",
      value: "₦28,500",
      subtitle: "Across all pools",
      valueColor: "text-success",
    },
    {
      label: "As Admin",
      value: "2 pools",
      subtitle: "1 active · 1 completed",
    },
  ],
  pools: [
    {
      id: "1",
      role: "admin" as PoolRole,
      title: "300L Class Dues — 2nd Semester",
      category: "🎓 Education · 400 members invited",
      status: "active" as PoolStatus,
      raised: 313000,
      target: 400000,
      stats: [
        { label: "Paid", value: "313" },
        { label: "Pending", value: "87", highlight: true },
        { label: "Per person", value: "₦1,000" },
      ],
      footer: {
        left: "⏰ 5 days left",
        right: "Manage Pool →",
        rightIsLink: true,
      },
      stripeColor: "blue" as const,
    },
    {
      id: "2",
      role: "admin" as PoolRole,
      title: "Dept Welfare Fund — January 2026",
      category: "🎗️ Welfare · 45 members invited",
      status: "completed" as PoolStatus,
      raised: 90000,
      target: 90000,
      stats: [
        { label: "Paid", value: "45" },
        { label: "Released", value: "₦90,000", highlight: true },
        { label: "Per person", value: "₦2,000" },
      ],
      footer: {
        left: "✅ Completed Jan 31, 2026",
        right: "View Report",
      },
      stripeColor: "green" as const,
    },
    {
      id: "3",
      role: "contributor" as PoolRole,
      title: "Amaka's Wedding — March 2026",
      category: "💍 Wedding · Admin: Chidi Nwosu",
      status: "active" as PoolStatus,
      raised: 240000,
      target: 500000,
      stats: [
        { label: "Contributors", value: "48" },
        { label: "Left", value: "32 days", highlight: true },
      ],
      contribution: "✓ You contributed ₦5,000",
      footer: {
        left: "📅 Closes Mar 22, 2026",
        right: "View Pool →",
        rightIsLink: true,
      },
      stripeColor: "blue" as const,
    },
    {
      id: "4",
      role: "impact" as PoolRole,
      title: "Clean Water Borehole — Oguta, Imo",
      category: "💧 Water & Sanitation · By Chukwuemeka Dike",
      status: "active" as PoolStatus,
      raised: 670000,
      target: 1000000,
      stats: [
        { label: "Contributors", value: "342" },
        { label: "Approver status", value: "Selected 🔐", highlight: true },
      ],
      contribution: "✓ You contributed ₦1,000 · BlueLagoon#4821",
      footer: {
        left: "🔐 Approval pending your vote",
        right: "Review →",
        rightIsLink: true,
      },
      stripeColor: "teal" as const,
    },
  ],
  completedPools: [
    {
      emoji: "🎓",
      title: "100L Dept Registration Dues",
      details: "Contributor · Completed Jan 15, 2026 · Admin: CSC Dept Council",
      amount: "₦2,500",
    },
    {
      emoji: "🎉",
      title: "Bukola's Surprise Party",
      details: "Contributor · Completed Dec 20, 2025 · Admin: Yemi Balogun",
      amount: "₦2,500",
    },
  ],
};
