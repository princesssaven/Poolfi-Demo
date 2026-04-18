"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    badge: 3,
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
    badge: 2,
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
}

export default function Sidebar({
  variant = "desktop",
  isOpen = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();
  const isMobile = variant === "mobile";

  return (
    <aside
      className={
        isMobile
          ? `fixed inset-y-0 left-0 z-50 flex w-[min(86vw,260px)] max-w-[260px] flex-col border-r border-border bg-white transition-transform duration-200 lg:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`
          : "fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col border-r border-border bg-white lg:flex"
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

      <nav className={`flex-1 overflow-y-auto px-3 ${isMobile ? "pt-3" : ""}`}>
        <p className="px-3 mb-1 text-[10px] font-bold tracking-[1px] uppercase text-text-muted">
          Main
        </p>
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => {
            const isActive =
              item.href === "/impact"
                ? pathname === "/impact" || pathname.startsWith("/impact-")
                : item.href === "/create-pool-new"
                  ? pathname === "/create-pool-new" || pathname === "/create-pool"
                  : pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={isMobile ? onClose : undefined}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-[10px] transition-colors text-sm font-medium ${
                    isActive
                      ? "bg-primary-light text-primary font-bold"
                      : "text-text-muted hover:bg-gray-50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 shrink-0 ${
                      isActive ? "text-primary" : "text-text-muted"
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-warning text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
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
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-[10px] transition-colors text-sm font-medium ${
                    isActive
                      ? "bg-primary-light text-primary font-bold"
                      : "text-text-muted hover:bg-gray-50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 shrink-0 ${
                      isActive ? "text-text-muted" : "text-text-muted"
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-danger text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 py-4 border-t border-border flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
          PS
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-bold text-text-dark truncate">
            Princess Saven
          </p>
          <p className="text-[11px] text-text-muted">Saven</p>
        </div>
        <button
          className="text-text-muted text-sm hover:text-text-dark transition-colors"
          aria-label="More options"
        >
          ⋯
        </button>
      </div>
    </aside>
  );
}
