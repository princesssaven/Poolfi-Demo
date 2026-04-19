"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import PoolHeader from "@/src/components/pool-dashboard/PoolHeader";
import ProgressSection from "@/src/components/pool-dashboard/ProgressSection";
import MembersSection from "@/src/components/pool-dashboard/MembersSection";
import DownloadIcon from "@/src/assets/icons/download.svg";

interface PoolActivityItem {
  dotColor: string;
  isBold: boolean;
  mainText: string;
  timeText: string;
}

interface PoolMember {
  bgColor: string;
  info: string;
  initials: string;
  name: string;
  status: "paid" | "pending";
}

interface PoolResponse {
  activities: PoolActivityItem[];
  category: string;
  closesDate: string;
  daysLeft: number;
  id: string;
  isCompleted: boolean;
  members: PoolMember[];
  paidCount: number;
  pendingCount: number;
  perPerson: string;
  poolLink: string;
  raised: number;
  releaseAmount?: string;
  releaseBanner?: {
    description: string;
    title: string;
  };
  settings: {
    autoReminders: boolean;
    deadline: string;
    paused: boolean;
    perPersonAmount: string;
    status: string;
    takeAllAtClose: boolean;
  };
  target: number;
  title: string;
  totalMembers: number;
}

export default function PoolDashboardPage() {
  const params = useParams<{ id: string }>();
  const poolId = params?.id ?? "";
  const [pool, setPool] = useState<PoolResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [isSendingReminders, setIsSendingReminders] = useState(false);
  const [actionPending, setActionPending] = useState<
    "cancel" | "close" | "pause" | "resume" | null
  >(null);

  const loadPool = async () => {
    if (!poolId) {
      return;
    }

    const response = await fetch(`/api/pools/${poolId}`, {
      cache: "no-store",
    });
    const payload = (await response.json().catch(() => null)) as
      | { message?: string; pool?: PoolResponse | null }
      | null;

    if (!response.ok || !payload?.pool) {
      setErrorMessage(payload?.message ?? "We couldn't load this pool.");
      setIsLoading(false);
      return;
    }

    setPool(payload.pool);
    setIsLoading(false);
  };

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      if (!poolId) {
        return;
      }

      const response = await fetch(`/api/pools/${poolId}`, {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as
        | { message?: string; pool?: PoolResponse | null }
        | null;

      if (!isMounted) {
        return;
      }

      if (!response.ok || !payload?.pool) {
        setErrorMessage(payload?.message ?? "We couldn't load this pool.");
        setIsLoading(false);
        return;
      }

      setPool(payload.pool);
      setIsLoading(false);
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, [poolId]);

  const stats = useMemo(() => {
    if (!pool) {
      return [];
    }

    return [
      {
        dotColor: "#34d399",
        label: "Total Raised",
        subtitle: `of ₦${pool.target.toLocaleString("en-NG")} target`,
        value: `₦${pool.raised.toLocaleString("en-NG")}`,
        valueColor: "text-emerald-light",
      },
      {
        dotColor: "#ffffff",
        label: "Contributors",
        subtitle: "Paid",
        value: String(pool.paidCount),
      },
      {
        dotColor: "#fcd34d",
        label: "Pending",
        subtitle: "Haven't paid",
        value: String(pool.pendingCount),
        valueColor: pool.pendingCount > 0 ? "text-yellow" : "text-white",
      },
      {
        dotColor: "#ffffff",
        label: "Deadline",
        subtitle: "Days Left",
        value: String(pool.daysLeft),
      },
    ];
  }, [pool]);

  const handleSaveSettings = async (input: {
    autoReminders: boolean;
    deadline: string;
    perPersonAmount: string;
  }) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsSavingSettings(true);

    const response = await fetch(`/api/pools/${poolId}/settings`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(payload?.message ?? "We couldn't update this pool yet.");
      setIsSavingSettings(false);
      return;
    }

    setSuccessMessage("Pool settings updated.");
    await loadPool();
    setIsSavingSettings(false);
  };

  const handleSendReminders = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsSendingReminders(true);

    const response = await fetch(`/api/pools/${poolId}/reminders`, {
      method: "POST",
    });
    const payload = (await response.json().catch(() => null)) as
      | { message?: string; pendingCount?: number }
      | null;

    if (!response.ok) {
      setErrorMessage(payload?.message ?? "We couldn't send reminders yet.");
      setIsSendingReminders(false);
      return;
    }

    setSuccessMessage(
      `Reminder flow recorded for ${payload?.pendingCount ?? 0} unpaid member${
        payload?.pendingCount === 1 ? "" : "s"
      }.`
    );
    await loadPool();
    setIsSendingReminders(false);
  };

  const handlePoolAction = async (
    action: "cancel" | "close" | "pause" | "resume"
  ) => {
    setErrorMessage("");
    setSuccessMessage("");
    setActionPending(action);

    const response = await fetch(`/api/pools/${poolId}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action }),
    });
    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(payload?.message ?? "We couldn't update the pool yet.");
      setActionPending(null);
      return;
    }

    setSuccessMessage(
      action === "close"
        ? "Pool closed successfully."
        : action === "cancel"
          ? "Pool cancelled successfully."
          : action === "pause"
            ? "Pool paused successfully."
            : "Pool resumed successfully."
    );
    await loadPool();
    setActionPending(null);
  };

  const copyPoolLink = async () => {
    if (!pool?.poolLink) {
      return;
    }

    try {
      await navigator.clipboard.writeText(`https://${pool.poolLink}`);
      setSuccessMessage("Pool link copied.");
    } catch {
      setErrorMessage("We couldn't copy the pool link from this browser.");
    }
  };

  if (isLoading) {
    return (
      <div className="rounded-2xl border border-border bg-white px-5 py-8 text-sm text-text-muted">
        Loading pool dashboard…
      </div>
    );
  }

  if (!pool) {
    return (
      <div className="rounded-2xl border border-danger/20 bg-danger/5 px-5 py-8 text-sm font-medium text-danger">
        {errorMessage || "We couldn't find that pool."}
      </div>
    );
  }

  return (
    <div>
      {errorMessage || successMessage ? (
        <div
          className={`mb-6 rounded-[18px] px-4 py-3 text-sm font-medium ${
            errorMessage
              ? "border border-danger/20 bg-danger/5 text-danger"
              : "border border-primary/20 bg-primary-light text-info-blue"
          }`}
        >
          {errorMessage || successMessage}
        </div>
      ) : null}

      <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="font-heading text-lg font-bold tracking-[-0.3px] text-text-dark">
            {pool.title}
          </h1>
          <p className="mt-0.5 text-[11.5px] text-text-muted">{pool.closesDate}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyPoolLink}
            className="border border-primary text-primary px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-primary-light transition-colors"
          >
            Share Link
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-text-dark text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:opacity-90 transition-opacity"
          >
            <DownloadIcon className="w-5 h-5" />
            Export CSV
          </button>
        </div>
      </header>

      {pool.releaseBanner ? (
        <div className="mb-4 flex flex-col gap-4 rounded-xl bg-success p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              {pool.releaseBanner.title}
            </h3>
            <p className="mt-1 text-xs font-semibold text-white/80">
              {pool.releaseBanner.description}
            </p>
          </div>
          <button className="shrink-0 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-success transition-colors hover:bg-gray-100">
            Release {pool.releaseAmount}
          </button>
        </div>
      ) : null}

      <PoolHeader
        title={pool.title}
        closesDate={pool.closesDate}
        perPerson={pool.perPerson}
        category={pool.category}
        stats={stats}
      />

      <div className="mt-6">
        <ProgressSection
          raised={pool.raised}
          target={pool.target}
          paidCount={pool.paidCount}
          totalYetToPay={pool.pendingCount}
          isCompleted={pool.isCompleted}
        />
      </div>

      <div className="mt-4">
        <MembersSection
          activities={pool.activities}
          actionPending={actionPending}
          autoReminders={pool.settings.autoReminders}
          closesDate={pool.closesDate}
          deadlineValue={pool.settings.deadline}
          isCompleted={pool.isCompleted}
          isSavingSettings={isSavingSettings}
          isSendingReminders={isSendingReminders}
          members={pool.members}
          onPoolAction={handlePoolAction}
          onSaveSettings={handleSaveSettings}
          onSendReminders={handleSendReminders}
          paidCount={pool.paidCount}
          pendingCount={pool.pendingCount}
          perPerson={pool.perPerson}
          perPersonAmountValue={pool.settings.perPersonAmount}
          poolLink={pool.poolLink}
          poolName={pool.title}
          paused={pool.settings.paused}
          raised={pool.raised}
          takeAllAtClose={pool.settings.takeAllAtClose}
          target={pool.target}
          totalMembers={pool.totalMembers}
        />
      </div>
    </div>
  );
}
