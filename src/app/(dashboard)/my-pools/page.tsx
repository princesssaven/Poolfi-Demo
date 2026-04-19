"use client";

import { useEffect, useState } from "react";
import SummaryChips from "@/src/components/pools/SummaryChips";
import PoolCard from "@/src/components/pools/PoolCard";
import CompletedPools from "@/src/components/pools/CompletedPools";
import type { CompletedPoolData, PoolCardData } from "@/src/data/mockData";

interface MyPoolsData {
  completedPools: CompletedPoolData[];
  pools: PoolCardData[];
  summary: Array<{
    label: string;
    subtitle: string;
    value: string;
    valueColor?: string;
  }>;
}

const emptyState: MyPoolsData = {
  completedPools: [],
  pools: [],
  summary: [],
};

export default function MyPoolsPage() {
  const [data, setData] = useState<MyPoolsData>(emptyState);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadPools = async () => {
      const response = await fetch("/api/pools/mine", {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as
        | { data?: MyPoolsData; message?: string }
        | null;

      if (!isMounted) {
        return;
      }

      if (!response.ok || !payload?.data) {
        setErrorMessage(payload?.message ?? "We couldn't load your pools yet.");
        return;
      }

      setData(payload.data);
    };

    void loadPools();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full max-w-[1120px]">
      {errorMessage ? (
        <div className="mb-6 rounded-[18px] border border-danger/20 bg-danger/5 px-4 py-3 text-sm font-medium text-danger">
          {errorMessage}
        </div>
      ) : null}

      <SummaryChips chips={data.summary} />

      {/* Pools I Manage */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-heading text-base font-bold text-text-dark">
            Pools I Manage
          </h2>
          <span className="font-heading text-[11px] font-bold text-primary border border-primary/30 rounded-full px-3 py-0.5">
            Admin
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {data.pools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>
      </div>

      {/* Completed Pools */}
      <CompletedPools pools={data.completedPools} />
    </div>
  );
}
