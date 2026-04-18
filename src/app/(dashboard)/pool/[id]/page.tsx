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
import NotificationIcon from "@/src/assets/icons/notification.svg";
import SettingsIcon from "@/src/assets/icons/settings.svg";

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
      <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="font-heading text-lg font-bold tracking-[-0.3px] text-text-dark">
            Good morning,Saven👋
          </h1>
          <p className="text-[11.5px] text-text-muted mt-0.5">
            Wednesday, Feb 18, 2026
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {pool.isCompleted ? (
            <>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:bg-gray-100 transition-colors"
                aria-label="Notifications"
              >
                <NotificationIcon className="w-5 h-5 text-text-muted" />
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:bg-gray-100 transition-colors"
                aria-label="Settings"
              >
                <SettingsIcon className="w-5 h-5 text-text-muted" />
              </button>
              <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-primary-dark transition-colors">
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
        <div className="mb-4 flex flex-col gap-4 rounded-xl bg-success p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              {pool.releaseBanner.title}
            </h3>
            <p className="text-xs text-white/80 font-semibold mt-1">
              {pool.releaseBanner.description}
            </p>
          </div>
          <button className="shrink-0 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-success transition-colors hover:bg-gray-100">
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
