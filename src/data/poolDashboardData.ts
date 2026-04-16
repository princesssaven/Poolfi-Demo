// ==================== POOL ADMIN DASHBOARD DATA ====================

export interface PoolDashboardMember {
  initials: string;
  name: string;
  info: string;
  status: "paid" | "pending";
  bgColor: string;
}

export interface PoolDashboardData {
  id: string;
  title: string;
  closesDate: string;
  perPerson: string;
  category: string;
  raised: number;
  target: number;
  paidCount: number;
  pendingCount: number;
  totalMembers: number;
  daysLeft: number;
  members: PoolDashboardMember[];
  isCompleted: boolean;
  releaseAmount?: string;
  releaseBanner?: {
    title: string;
    description: string;
  };
}

const sharedMembers: PoolDashboardMember[] = [
  {
    initials: "EO",
    name: "Emeka Obi",
    info: "CSC/2022/031 · Paid Feb 18",
    status: "paid",
    bgColor: "#1b4fd8",
  },
  {
    initials: "CN",
    name: "Chidi Nwosu",
    info: "CSC/2022/014 · Paid Feb 18",
    status: "paid",
    bgColor: "#12b76a",
  },
  {
    initials: "AE",
    name: "Amaka Eze",
    info: "ENG/2022/089 · Paid Feb 17",
    status: "paid",
    bgColor: "#f79009",
  },
  {
    initials: "FO",
    name: "Femi Okonkwo",
    info: "CHE/2022/068. Paid Feb 17",
    status: "paid",
    bgColor: "#6b7280",
  },
  {
    initials: "BA",
    name: "Bisi Adeleke",
    info: "MTH/2022/029 . Paid Feb 16",
    status: "paid",
    bgColor: "#7c3aed",
  },
  {
    initials: "UI",
    name: "Uche Ibe",
    info: "PHY/2022/045 · Paid Feb 15",
    status: "paid",
    bgColor: "#e5e8ef",
  },
];

export const activePoolDashboard: PoolDashboardData = {
  id: "1",
  title: "300L Class Dues — 2nd Semester 2025/26",
  closesDate: "Closes Feb 28, 2026",
  perPerson: "₦1,000 per person",
  category: "🎓 Education",
  raised: 312000,
  target: 400000,
  paidCount: 313,
  pendingCount: 87,
  totalMembers: 400,
  daysLeft: 5,
  members: sharedMembers,
  isCompleted: false,
};

export const completedPoolDashboard: PoolDashboardData = {
  id: "2",
  title: "Dept Welfare Fund — January 2026",
  closesDate: "Closes Jan 31, 2026",
  perPerson: "₦2,000 per person",
  category: "🎗️ Welfare",
  raised: 90000,
  target: 90000,
  paidCount: 45,
  pendingCount: 0,
  totalMembers: 90,
  daysLeft: 0,
  members: sharedMembers,
  isCompleted: true,
  releaseAmount: "₦90,000",
  releaseBanner: {
    title: "Goal Reached! Ready to release.",
    description:
      "Aso-Ebi Collection — all 160 members paid. ₦600,000 awaiting release to admin wallet.",
  },
};
