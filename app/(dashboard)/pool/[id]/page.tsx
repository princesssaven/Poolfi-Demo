"use client";

import { use } from "react";
import PoolHeader from "@/src/components/pool-dashboard/PoolHeader";
import ProgressSection from "@/src/components/pool-dashboard/ProgressSection";
import MembersSection from "@/src/components/pool-dashboard/MembersSection";
import {
  activePoolDashboard,
  completedPoolDashboard,
} from "@/src/data/poolDashboardData";
import DownloadIcon from "@/src/assets/icons/download.svg";

function getPoolData(id: string) {
  if (id === "2") return completedPoolDashboard;
  return activePoolDashboard;
}

export default function PoolDashboardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const pool = getPoolData(id);

  const stats = [
    {
      label: "Total Raised",
      value: `₦${pool.raised.toLocaleString("en-NG")}`,
      subtitle: `of ₦${pool.target.toLocaleString("en-NG")} target`,
      dotColor: "#34d399",
      valueColor: "text-emerald-light",
    },
    {
      label: "Contributors",
      value: String(pool.paidCount),
      subtitle: "Paid",
      dotColor: "#ffffff",
    },
    {
      label: "Pending",
      value: String(pool.pendingCount),
      subtitle: "Haven't paid",
      dotColor: "#fcd34d",
      valueColor: pool.pendingCount > 0 ? "text-yellow" : "text-white",
    },
    {
      label: "Deadline",
      value: String(pool.daysLeft),
      subtitle: "Days Left",
      dotColor: "#ffffff",
    },
  ];

  return (
    <div>
      {/* Top bar */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-lg font-bold tracking-[-0.3px] text-text-dark">
            Good morning,Saven👋
          </h1>
          <p className="text-[11.5px] text-text-muted mt-0.5">
            Wednesday, Feb 18, 2026
          </p>
        </div>
        <div className="flex items-center gap-3">
          {pool.isCompleted ? (
            <>
              <button
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Notifications"
              >
                🔔
              </button>
              <button
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Settings"
              >
                ⚙️
              </button>
              <button className="flex items-center gap-2 border border-border text-text-dark px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-gray-50 transition-colors">
                <DownloadIcon className="w-5 h-5" />
                Export CSV
              </button>
            </>
          ) : (
            <>
              <button className="border border-primary text-primary px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-primary-light transition-colors">
                Share Link
              </button>
              <button className="flex items-center gap-2 bg-text-dark text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:opacity-90 transition-opacity">
                <DownloadIcon className="w-5 h-5" />
                Export CSV
              </button>
            </>
          )}
        </div>
      </header>

      {/* Release Banner (completed pools) */}
      {pool.releaseBanner && (
        <div className="flex items-center justify-between bg-success rounded-xl p-5 mb-4">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              {pool.releaseBanner.title}
            </h3>
            <p className="text-xs text-white/80 font-semibold mt-1">
              {pool.releaseBanner.description}
            </p>
          </div>
          <button className="bg-white text-success px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-gray-100 transition-colors shrink-0">
            Release {pool.releaseAmount}
          </button>
        </div>
      )}

      {/* Pool Header Card */}
      <PoolHeader
        title={pool.title}
        closesDate={pool.closesDate}
        perPerson={pool.perPerson}
        category={pool.category}
        stats={stats}
      />

      {/* Progress */}
      <div className="mt-6">
        <ProgressSection
          raised={pool.raised}
          target={pool.target}
          paidCount={pool.paidCount}
          totalYetToPay={pool.pendingCount}
          isCompleted={pool.isCompleted}
        />
      </div>

      {/* Members */}
      <div className="mt-4">
        <MembersSection
          totalMembers={pool.totalMembers}
          paidCount={pool.paidCount}
          pendingCount={pool.pendingCount}
          members={pool.members}
          poolName={pool.title}
          perPerson={pool.perPerson}
          closesDate={pool.closesDate}
          category={pool.category}
          raised={pool.raised}
          target={pool.target}
          isCompleted={pool.isCompleted}
        />
      </div>
    </div>
  );
}
