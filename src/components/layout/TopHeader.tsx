"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationIcon from "@/src/assets/icons/notification.svg";
import SettingsIcon from "@/src/assets/icons/settings.svg";
import DownloadIcon from "@/src/assets/icons/download.svg";
import type { DashboardBadgeCounts } from "@/src/components/layout/useDashboardBadges";
import type { AppUser } from "@/src/lib/auth/user";

interface TopHeaderProps {
  hideDefault?: boolean;
  onCreatePool?: () => void;
  user?: AppUser | null;
  badgeCounts: DashboardBadgeCounts;
}

export default function TopHeader({
  hideDefault,
  onCreatePool,
  user,
  badgeCounts,
}: TopHeaderProps) {
  const pathname = usePathname();
  const isMyPools = pathname === "/my-pools";
  const isCreatePoolSetup =
    pathname === "/create-pool" ||
    pathname === "/create-pool-new" ||
    pathname === "/create-impact-pool";
  const isPoolDashboard = pathname.startsWith("/pool/");
  const isImpactContribution = pathname.startsWith("/impact-contribution");
  const isNotifications = pathname === "/notifications";
  const isSettings = pathname === "/settings";
  const unreadNotifications = badgeCounts.unreadNotifications;
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
        <Link
          href="/notifications"
          className={`relative flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-colors ${
            isNotifications
              ? "border-primary bg-primary-light text-primary"
              : "border-border bg-white text-text-muted hover:bg-gray-50"
          }`}
          aria-label={
            unreadNotifications > 0
              ? `Notifications, ${unreadNotifications} unread`
              : "Notifications"
          }
        >
          <NotificationIcon className="h-5 w-5" />
          {unreadNotifications > 0 ? (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white">
              {unreadNotifications > 9 ? "9+" : unreadNotifications}
            </span>
          ) : null}
        </Link>
        <Link
          href="/settings"
          className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-colors ${
            isSettings
              ? "border-primary bg-primary-light text-primary"
              : "border-border bg-white text-text-muted hover:bg-gray-50"
          }`}
          aria-label="Settings"
        >
          <SettingsIcon className="h-5 w-5" />
        </Link>

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
