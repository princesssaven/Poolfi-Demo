"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import NotificationIcon from "@/src/assets/icons/notification.svg";
import SettingsIcon from "@/src/assets/icons/settings.svg";
import CreatePoolModal from "@/src/components/create-pool/CreatePoolModal";
import Sidebar from "@/src/components/layout/Sidebar";
import TopHeader from "@/src/components/layout/TopHeader";
import { useDashboardBadges } from "@/src/components/layout/useDashboardBadges";
import type { AppUser } from "@/src/lib/auth/user";

function getPageTitle(pathname: string) {
  if (pathname === "/") return "Home";
  if (pathname === "/my-pools") return "My Pools";
  if (pathname === "/create-pool" || pathname === "/create-pool-new") {
    return "Create Pool";
  }
  if (pathname === "/create-impact-pool") return "Create Impact Pool";
  if (pathname === "/impact") return "Impact";
  if (pathname === "/impact-contribution") return "Impact Contribution";
  if (pathname === "/contributors") return "Contributors";
  if (pathname === "/updates") return "Updates";
  if (pathname === "/pool-submitted") return "Pool Submitted";
  if (pathname.startsWith("/pool/")) return "Pool Details";
  if (pathname.startsWith("/withdrawals/")) return "Withdrawals";

  const lastSegment = pathname
    .split("/")
    .filter(Boolean)
    .at(-1)
    ?.replace(/-/g, " ");

  if (!lastSegment) return "Dashboard";

  return lastSegment.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCreatePoolModalOpen, setIsCreatePoolModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { badgeCounts } = useDashboardBadges();
  const pageTitle = useMemo(() => getPageTitle(pathname), [pathname]);
  const isCreatePoolLauncherRoute = pathname === "/create-pool-new";
  const isCreatePoolModalVisible =
    isCreatePoolModalOpen || isCreatePoolLauncherRoute;
  const unreadNotifications = badgeCounts.unreadNotifications;

  useEffect(() => {
    let isMounted = true;

    const loadCurrentUser = async () => {
      const response = await fetch("/api/auth/state", {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as
        | { user?: AppUser | null }
        | null;

      if (!isMounted) {
        return;
      }

      setCurrentUser(payload?.user ?? null);
    };

    void loadCurrentUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const openCreatePoolModal = () => {
    setSidebarOpen(false);
    setIsCreatePoolModalOpen(true);
  };

  const closeCreatePoolModal = () => {
    setIsCreatePoolModalOpen(false);

    if (isCreatePoolLauncherRoute) {
      router.push("/");
    }
  };

  const handleCreatePoolContinue = (type: "goal" | "impact") => {
    setIsCreatePoolModalOpen(false);
    router.push(type === "impact" ? "/create-impact-pool" : "/create-pool");
  };

  const handleLogout = async () => {
    setIsSigningOut(true);
    setSidebarOpen(false);

    await fetch("/api/auth/logout", {
      method: "POST",
    }).catch(() => null);

    await signOut({
      redirect: false,
    }).catch(() => null);

    router.push("/sign-in");
    router.refresh();
    setIsSigningOut(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fc]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/35 lg:hidden"
        />
      )}

      <Sidebar
        variant="mobile"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onCreatePool={openCreatePoolModal}
        onLogout={handleLogout}
        user={currentUser}
        isSigningOut={isSigningOut}
        badgeCounts={badgeCounts}
      />
      <Sidebar
        variant="desktop"
        onCreatePool={openCreatePoolModal}
        onLogout={handleLogout}
        user={currentUser}
        isSigningOut={isSigningOut}
        badgeCounts={badgeCounts}
      />

      <main className="min-w-0 px-4 py-4 sm:px-6 sm:py-6 lg:ml-[260px] lg:px-8 lg:py-8">
        <div className="mb-4 rounded-2xl border border-border bg-white p-3 shadow-sm lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-gray-50"
              aria-label="Open navigation"
            >
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-4 rounded-full bg-text-dark" />
                <span className="h-0.5 w-4 rounded-full bg-text-dark" />
                <span className="h-0.5 w-4 rounded-full bg-text-dark" />
              </span>
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-text-muted">
                PoolFi
              </p>
              <h1 className="truncate font-heading text-sm font-bold text-text-dark">
                {pageTitle}
              </h1>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/notifications"
                className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  pathname === "/notifications"
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
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  pathname === "/settings"
                    ? "border-primary bg-primary-light text-primary"
                    : "border-border bg-white text-text-muted hover:bg-gray-50"
                }`}
                aria-label="Settings"
              >
                <SettingsIcon className="h-5 w-5" />
              </Link>
            </div>

            <button
              type="button"
              onClick={openCreatePoolModal}
              className="shrink-0 rounded-full bg-primary px-3 py-2 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(51,94,255,0.26)] transition-colors hover:bg-primary-dark"
            >
              Create
            </button>
          </div>
        </div>

        <TopHeader
          onCreatePool={openCreatePoolModal}
          user={currentUser}
          badgeCounts={badgeCounts}
        />
        <div className="min-w-0">{children}</div>
      </main>

      {isCreatePoolModalVisible ? (
        <CreatePoolModal
          isOpen={isCreatePoolModalVisible}
          onClose={closeCreatePoolModal}
          onContinue={handleCreatePoolContinue}
        />
      ) : null}
    </div>
  );
}
