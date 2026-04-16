"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "@/src/assets/icons/logo.svg";
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
    href: "/create-pool",
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] flex flex-col bg-white border-r border-border z-20">
      {/* Logo */}
      <div className="px-6 pt-1 pb-2">
        <LogoIcon className="w-[163px] h-[70px]" />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <p className="px-3 mb-1 text-[10px] font-bold tracking-[1px] uppercase text-text-muted">
          Main
        </p>
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => {
            const isActive = pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
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
                    <span className="ml-auto bg-danger text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
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

      {/* User Profile */}
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
