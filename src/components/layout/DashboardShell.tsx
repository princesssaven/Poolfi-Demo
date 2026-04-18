"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Sidebar from "@/src/components/layout/Sidebar";
import TopHeader from "@/src/components/layout/TopHeader";

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
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pageTitle = useMemo(() => getPageTitle(pathname), [pathname]);

  return (
    <div className="min-h-screen bg-bg-page">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/35 lg:hidden"
        />
      )}

      <Sidebar variant="mobile" isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Sidebar variant="desktop" />

      <main className="min-w-0 px-4 py-4 sm:px-6 sm:py-6 lg:ml-[260px] lg:px-8 lg:py-8">
        <div className="mb-4 rounded-2xl border border-border bg-white p-3 shadow-sm lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-gray-50"
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

            <Link
              href="/create-pool"
              className="shrink-0 rounded-full bg-primary px-3 py-2 text-[11px] font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Create
            </Link>
          </div>
        </div>

        <TopHeader />
        <div className="min-w-0">{children}</div>
      </main>
    </div>
  );
}
