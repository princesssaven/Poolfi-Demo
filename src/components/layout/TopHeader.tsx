"use client";

import { usePathname } from "next/navigation";
import NotificationIcon from "@/src/assets/icons/notification.svg";
import SettingsIcon from "@/src/assets/icons/settings.svg";
import DownloadIcon from "@/src/assets/icons/download.svg";
import type { AppUser } from "@/src/lib/auth/user";

interface TopHeaderProps {
  hideDefault?: boolean;
  onCreatePool?: () => void;
  user?: AppUser | null;
}

export default function TopHeader({
  hideDefault,
  onCreatePool,
  user,
}: TopHeaderProps) {
  const pathname = usePathname();
  const isMyPools = pathname === "/my-pools";
  const isCreatePoolSetup =
    pathname === "/create-pool" ||
    pathname === "/create-pool-new" ||
    pathname === "/create-impact-pool";
  const isPoolDashboard = pathname.startsWith("/pool/");
  const isImpactContribution = pathname.startsWith("/impact-contribution");
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const greetingName = user?.firstName || user?.displayName || "there";

  void hideDefault;

  // Hide default header on pages that have their own headers
  if (isCreatePoolSetup || isPoolDashboard || isImpactContribution) return null;

  return (
    <header className="mb-7 hidden items-start justify-between gap-4 lg:flex">
      <div>
        <h1 className="font-heading text-xl font-bold tracking-tight text-text-dark">
          Good morning, {greetingName}{" "}
          <span aria-hidden="true">👋</span>
        </h1>
        <p className="mt-1 text-xs text-text-muted">
          {today}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2.5">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-colors hover:bg-gray-50"
          aria-label="Notifications"
        >
          <NotificationIcon className="w-5 h-5 text-text-muted" />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-colors hover:bg-gray-50"
          aria-label="Settings"
        >
          <SettingsIcon className="w-5 h-5 text-text-muted" />
        </button>

        {isMyPools ? (
          <button className="flex items-center gap-2 rounded-full bg-text-dark px-5 py-2.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90">
            <DownloadIcon className="w-5 h-5" />
            Export CSV
          </button>
        ) : (
          <button
            type="button"
            onClick={onCreatePool}
            className="rounded-full bg-primary px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(51,94,255,0.24)] transition-colors hover:bg-primary-dark"
          >
            + Create Pool
          </button>
        )}
      </div>
    </header>
  );
}
