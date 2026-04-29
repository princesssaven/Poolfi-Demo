"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import AdminPoolView from "@/src/components/pool/AdminPoolView";

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
  status: "paid" | "pending" | "expected";
}

interface PoolResponse {
  activities: PoolActivityItem[];
  category: string;
  closesDate: string;
  daysLeft: number;
  id: string;
  isCompleted: boolean;
  members: PoolMember[];
  expectedCount: number;
  paidCount: number;
  pendingCount: number;
  perPerson: string;
  poolLink: string;
  raised: number;
  target: number;
  settings: {
    autoReminders: boolean;
    deadline: string;
    paused: boolean;
    perPersonAmount: string;
    status: string;
    takeAllAtClose: boolean;
  };
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
  const [isExportingCsv, setIsExportingCsv] = useState(false);
  const [isSendingReminders, setIsSendingReminders] = useState(false);

  const loadPool = async () => {
    if (!poolId) return;
    const response = await fetch(`/api/pools/${poolId}`, { cache: "no-store" });
    const payload = await response.json().catch(() => null);
    if (!response.ok || !payload?.pool) {
      setErrorMessage(payload?.message ?? "We couldn't load this pool.");
      return;
    }
    setPool(payload.pool);
  };

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      if (!poolId) return;
      const response = await fetch(`/api/pools/${poolId}`, { cache: "no-store" });
      const payload = await response.json().catch(() => null);
      if (!isMounted) return;
      if (!response.ok || !payload?.pool) {
        setErrorMessage(payload?.message ?? "We couldn't load this pool.");
      } else {
        setPool(payload.pool);
      }
      setIsLoading(false);
    };
    void load();
    return () => { isMounted = false; };
  }, [poolId]);

  const handleSendReminders = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsSendingReminders(true);
    const response = await fetch(`/api/pools/${poolId}/reminders`, { method: "POST" });
    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      setErrorMessage(payload?.message ?? "We couldn't send reminders yet.");
    } else {
      setSuccessMessage(`Reminders sent to ${payload?.pendingCount ?? 0} unpaid members.`);
    }
    await loadPool();
    setIsSendingReminders(false);
  };

  const copyPoolLink = async () => {
    if (!pool?.poolLink) return;
    try {
      const fullUrl = `https://poolfi-pre-mvpp.vercel.app${pool.poolLink}`;
      await navigator.clipboard.writeText(fullUrl);
      setSuccessMessage("Pool link copied.");
    } catch {
      setErrorMessage("We couldn't copy the pool link.");
    }
  };

  const handleExportCsv = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsExportingCsv(true);
    try {
      const response = await fetch(`/api/pools/${poolId}/export`, { cache: "no-store" });
      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setErrorMessage(payload?.message ?? "We couldn't export the CSV yet.");
        return;
      }
      const csvBlob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(csvBlob);
      const anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = `${pool?.title || "pool"}-report.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(downloadUrl);
      setSuccessMessage("CSV report downloaded.");
    } catch {
      setErrorMessage("We couldn't export the CSV yet.");
    } finally {
      setIsExportingCsv(false);
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center text-sm text-text-muted">Loading pool dashboard…</div>;
  }

  if (!pool) {
    return <div className="p-8 text-center text-danger font-medium">{errorMessage || "Pool not found."}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      {(errorMessage || successMessage) && (
        <div className={`mb-6 rounded-[18px] px-4 py-3 text-sm font-medium ${
          errorMessage ? "border border-danger/20 bg-danger/5 text-danger" : "border border-primary/20 bg-primary-light text-info-blue"
        }`}>
          {errorMessage || successMessage}
        </div>
      )}

      <AdminPoolView
        pool={{
          id: pool.id,
          title: pool.title,
          category: pool.category,
          closesDate: pool.closesDate,
          daysLeft: pool.daysLeft,
          raised: pool.raised,
          target: pool.target,
          perPerson: pool.perPerson,
          paidCount: pool.paidCount,
          pendingCount: pool.pendingCount,
          totalMembers: pool.totalMembers,
          members: pool.members,
          activities: pool.activities,
          poolLink: pool.poolLink,
          settings: pool.settings,
          expectedCount: pool.expectedCount,
        }}
        onExportCsv={handleExportCsv}
        onSendReminders={handleSendReminders}
        onCopyLink={copyPoolLink}
        onClosePool={() => setSuccessMessage("Close pool feature coming soon.")}
        onCancelPool={() => setSuccessMessage("Cancel pool feature coming soon.")}
        onPausePool={() => setSuccessMessage("Pause pool feature coming soon.")}
      />
    </div>
  );
}
