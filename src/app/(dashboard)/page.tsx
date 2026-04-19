"use client";

import { useEffect, useState } from "react";
import BalanceCard from "@/src/components/home/BalanceCard";
import YourPools from "@/src/components/home/YourPools";
import ImpactSpotlight from "@/src/components/home/ImpactSpotlight";
import RecentActivitySidebar from "@/src/components/home/RecentActivitySidebar";
import AddMoneyModal from "@/src/components/create-pool/AddMoneyModal";

interface HomeDashboardData {
  activities: Array<{
    amount?: string;
    amountType?: "credit" | "debit" | "info";
    emoji: string;
    time: string;
    title: string;
  }>;
  balance: {
    activePools: number;
    available: number;
    completedPools: number;
    locked: number;
    totalBalance: number;
  };
  pools: Array<{
    closesIn: string;
    csvReady: boolean;
    emoji: string;
    id: string;
    paidCount: number;
    raised: number;
    role: string;
    target: number;
    title: string;
    totalCount: number;
    unpaidCount: number;
  }>;
}

const emptyHomeData: HomeDashboardData = {
  activities: [],
  balance: {
    activePools: 0,
    available: 0,
    completedPools: 0,
    locked: 0,
    totalBalance: 0,
  },
  pools: [],
};

const featuredPool = {
  description:
    "Help build a functioning borehole for 3,000+ residents who currently walk 2km daily for water.",
  raised: 670000,
  target: 1000000,
  title: "Clean Water for Oguta Community, Imo State",
};

export default function HomePage() {
  const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);
  const [data, setData] = useState<HomeDashboardData>(emptyHomeData);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadHomeData = async () => {
      const response = await fetch("/api/dashboard/home", {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as
        | { data?: HomeDashboardData; message?: string }
        | null;

      if (!isMounted) {
        return;
      }

      if (!response.ok || !payload?.data) {
        setErrorMessage(
          payload?.message ?? "We couldn't load your dashboard yet."
        );
        return;
      }

      setData(payload.data);
    };

    void loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {errorMessage ? (
        <div className="mb-6 rounded-[18px] border border-danger/20 bg-danger/5 px-4 py-3 text-sm font-medium text-danger">
          {errorMessage}
        </div>
      ) : null}

      <BalanceCard
        {...data.balance}
        onAddFunds={() => setIsAddMoneyOpen(true)}
      />

      <div className="flex flex-col gap-6 xl:flex-row">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          <YourPools pools={data.pools} />
        </div>

        {/* Right column */}
        <div className="flex w-full shrink-0 flex-col gap-6 xl:w-[384px]">
          <ImpactSpotlight pool={featuredPool} />
          <RecentActivitySidebar activities={data.activities} />
        </div>
      </div>

      <AddMoneyModal
        isOpen={isAddMoneyOpen}
        onClose={() => setIsAddMoneyOpen(false)}
      />
    </div>
  );
}
