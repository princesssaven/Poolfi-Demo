"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LogoIcon from "@/src/assets/icons/logo.svg";
import CloseIcon from "@/src/assets/icons/close.svg";
import HomeIcon from "@/src/assets/icons/home.svg";
import HomeOutlineIcon from "@/src/assets/icons/home-outline.svg";
import PlusIcon from "@/src/assets/icons/plus.svg";
import MyPoolsIcon from "@/src/assets/icons/my-pools.svg";
import MyPoolsActiveIcon from "@/src/assets/icons/my-pools-active.svg";
import ImpactIcon from "@/src/assets/icons/impact.svg";
import WalletIcon from "@/src/assets/icons/wallet.svg";
import NotificationIcon from "@/src/assets/icons/notification.svg";
import SettingsIcon from "@/src/assets/icons/settings.svg";
import type { AppUser } from "@/src/lib/auth/user";

const mainNav = [
  {
    label: "Home",
    href: "/",
    icon: HomeOutlineIcon,
    activeIcon: HomeIcon,
  },
  {
    label: "Create Pool",
    href: "/create-pool-new",
    icon: PlusIcon,
    activeIcon: PlusIcon,
  },
  {
    label: "My Pools",
    href: "/my-pools",
    icon: MyPoolsIcon,
    activeIcon: MyPoolsActiveIcon,
  },
  {
    label: "Impact",
    href: "/impact",
    icon: ImpactIcon,
    activeIcon: ImpactIcon,
  },
  {
    label: "My Wallet",
    href: "/my-wallet",
    icon: WalletIcon,
    activeIcon: WalletIcon,
  },
];

const accountNav = [
  {
    label: "Notifications",
    href: "/notifications",
    icon: NotificationIcon,
    activeIcon: NotificationIcon,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
];

interface SidebarProps {
  variant?: "desktop" | "mobile";
  isOpen?: boolean;
  onClose?: () => void;
  onCreatePool?: () => void;
  onLogout?: () => void;
  user?: AppUser | null;
  isSigningOut?: boolean;
}

export default function Sidebar({
  variant = "desktop",
  isOpen = false,
  onClose,
  onCreatePool,
  onLogout,
  user,
  isSigningOut = false,
}: SidebarProps) {
  const pathname = usePathname();
  const isMobile = variant === "mobile";
  const userDisplayName = user?.displayName ?? "PoolFi User";
  const userSecondary = user?.email || user?.pseudonym || "Signed in";
  const userInitials = user?.initials ?? "PF";

  const [badgeCounts, setBadgeCounts] = useState<{ unreadNotifications: number; activePools: number }>({ unreadNotifications: 0, activePools: 0 });

  useEffect(() => {
    let isMounted = true;

    const loadBadges = async () => {
      try {
        const response = await fetch("/api/badges", { cache: "no-store" });
        const data = await response.json();
        if (isMounted) {
          setBadgeCounts(data);
        }
      } catch {
        // silently ignore
      }
    };

    void loadBadges();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <aside
      className={
        isMobile
          ? `fixed inset-y-0 left-0 z-50 flex w-[min(86vw,260px)] max-w-[260px] flex-col border-r border-border bg-white transition-transform duration-200 lg:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`
          : "fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col border-r border-border bg-white/95 backdrop-blur-sm lg:flex"
      }
    >
      <div
        className={`flex items-center justify-between border-b border-border ${
          isMobile ? "px-4 py-4" : "px-6 pt-1 pb-2"
        }`}
      >
        <LogoIcon className={isMobile ? "h-[56px] w-[132px]" : "h-[70px] w-[163px]"} />
        {isMobile && (
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-gray-50"
            aria-label="Close navigation"
          >
            <CloseIcon className="h-3.5 w-3.5 text-text-dark" />
          </button>
        )}
      </div>

      <nav className={`flex-1 overflow-y-auto px-3 ${isMobile ? "pt-3" : "pt-2"}`}>
        <p className="px-3 mb-1 text-[10px] font-bold tracking-[1px] uppercase text-text-muted">
          Main
        </p>
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => {
            const isActive =
              item.href === "/impact"
                ? pathname === "/impact" || pathname.startsWith("/impact-")
                : item.href === "/create-pool-new"
                  ? pathname === "/create-pool-new" ||
                    pathname === "/create-pool" ||
                    pathname === "/create-impact-pool"
                  : pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;

            return (
              <li key={item.href}>
                {item.href === "/create-pool-new" ? (
                  <button
                    type="button"
                    onClick={() => {
                      onClose?.();
                      onCreatePool?.();
                    }}
                    className={`flex w-full items-center gap-3 rounded-[12px] px-4 py-3.5 text-left text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary-light text-primary font-bold shadow-[0_8px_20px_rgba(51,94,255,0.14)]"
                        : "text-text-muted hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 shrink-0 ${
                        isActive ? "text-primary" : "text-text-muted"
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={isMobile ? onClose : undefined}
                    className={`flex items-center gap-3 rounded-[12px] px-4 py-3.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary-light text-primary font-bold shadow-[0_8px_20px_rgba(51,94,255,0.14)]"
                        : "text-text-muted hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 shrink-0 ${
                        isActive ? "text-primary" : "text-text-muted"
                      }`}
                    />
                    <span>{item.label}</span>
                    {item.href === "/my-pools" && badgeCounts.activePools > 0 && (
                      <span className="ml-auto bg-warning text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {badgeCounts.activePools}
                      </span>
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <p className="px-3 mt-6 mb-1 text-[10px] font-bold tracking-[1px] uppercase text-text-muted">
          Account
        </p>
        <ul className="flex flex-col gap-1">
          {accountNav.map((item) => {
            const isActive = pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={isMobile ? onClose : undefined}
                  className={`flex items-center gap-3 rounded-[12px] px-4 py-3.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary-light text-primary font-bold shadow-[0_8px_20px_rgba(51,94,255,0.14)]"
                      : "text-text-muted hover:bg-gray-50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 shrink-0 ${
                      isActive ? "text-text-muted" : "text-text-muted"
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.href === "/notifications" && badgeCounts.unreadNotifications > 0 && (
                    <span className="ml-auto bg-danger text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {badgeCounts.unreadNotifications}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            {userInitials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-bold text-text-dark">
              {userDisplayName}
            </p>
            <p className="truncate text-[11px] text-text-muted">{userSecondary}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            onClose?.();
            onLogout?.();
          }}
          disabled={isSigningOut}
          className="mt-3 w-full rounded-[12px] border border-border px-4 py-2.5 text-sm font-medium text-text-dark transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSigningOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </aside>
  );
}
