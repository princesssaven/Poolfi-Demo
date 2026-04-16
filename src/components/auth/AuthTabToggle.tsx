"use client";

import Link from "next/link";

interface AuthTabToggleProps {
  activeTab: "sign-up" | "sign-in";
}

export default function AuthTabToggle({ activeTab }: AuthTabToggleProps) {
  return (
    <div className="flex w-full rounded-[10px] bg-tab-bg p-1" role="tablist">
      <Link
        href="/sign-up"
        role="tab"
        aria-selected={activeTab === "sign-up"}
        className={`flex-1 rounded-[8px] py-2.5 text-center font-card text-sm font-semibold transition-all duration-200 ${
          activeTab === "sign-up"
            ? "bg-white text-text-dark shadow-xs"
            : "text-text-muted hover:text-text-dark"
        }`}
      >
        Sign Up
      </Link>
      <Link
        href="/sign-in"
        role="tab"
        aria-selected={activeTab === "sign-in"}
        className={`flex-1 rounded-[8px] py-2.5 text-center font-card text-sm font-medium transition-all duration-200 ${
          activeTab === "sign-in"
            ? "bg-white text-text-dark shadow-xs"
            : "text-text-muted hover:text-text-dark"
        }`}
      >
        Sign In
      </Link>
    </div>
  );
}
