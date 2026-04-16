"use client";

import { usePathname } from "next/navigation";
import NotificationIcon from "@/src/assets/icons/notification.svg";
import SettingsIcon from "@/src/assets/icons/settings.svg";
import DownloadIcon from "@/src/assets/icons/download.svg";

interface TopHeaderProps {
  hideDefault?: boolean;
}

export default function TopHeader({ hideDefault }: TopHeaderProps) {
  const pathname = usePathname();
  const isMyPools = pathname === "/my-pools";
  const isCreatePool = pathname === "/create-pool";
  const isPoolDashboard = pathname.startsWith("/pool/");

  // Hide default header on pages that have their own headers
  if (isCreatePool || isPoolDashboard) return null;

  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="font-heading text-lg font-bold tracking-tight text-text-dark">
          Good morning, Saven👋
        </h1>
        <p className="text-[11.5px] text-text-muted mt-0.5">
          Wednesday, Feb 18, 2026
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Notifications"
        >
          <NotificationIcon className="w-5 h-5 text-text-muted" />
        </button>
        <button
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Settings"
        >
          <SettingsIcon className="w-5 h-5 text-text-muted" />
        </button>

        {isMyPools ? (
          <button className="flex items-center gap-2 bg-text-dark text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:opacity-90 transition-opacity">
            <DownloadIcon className="w-5 h-5" />
            Export CSV
          </button>
        ) : (
          <button className="bg-primary text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-primary-dark transition-colors">
            + Create Pool
          </button>
        )}
      </div>
    </header>
  );
}
