"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CategoryKey =
  | "all"
  | "water"
  | "education"
  | "health"
  | "agriculture"
  | "infrastructure"
  | "welfare"
  | "energy";

interface ImpactCategory {
  key: CategoryKey;
  label: string;
  icon: string;
}

interface ImpactPoolCard {
  id: number;
  category: Exclude<CategoryKey, "all">;
  categoryLabel: string;
  title: string;
  description: string;
  raised: number;
  target: number;
  contributors: number;
  accent: string;
}

const categories: ImpactCategory[] = [
  { key: "all", label: "All", icon: "🌊" },
  { key: "water", label: "Water & Sanitation", icon: "💧" },
  { key: "education", label: "Education", icon: "🎓" },
  { key: "health", label: "Health", icon: "🏥" },
  { key: "agriculture", label: "Agriculture", icon: "🌾" },
  { key: "infrastructure", label: "Infrastructure", icon: "🏗️" },
  { key: "welfare", label: "Welfare", icon: "🎗️" },
  { key: "energy", label: "Energy", icon: "⚡" },
];

const impactPools: ImpactPoolCard[] = [
  {
    id: 1,
    category: "education",
    categoryLabel: "Education",
    title: "Scholarship Fund for Indigent UNIBEN Students",
    description: "Supporting 20 students who can't afford fees this semester.",
    raised: 270000,
    target: 500000,
    contributors: 128,
    accent: "#8b5cf6",
  },
  {
    id: 2,
    category: "education",
    categoryLabel: "Education",
    title: "Scholarship Fund for Indigent UNIBEN Students",
    description: "Supporting 20 students who can't afford fees this semester.",
    raised: 270000,
    target: 500000,
    contributors: 128,
    accent: "#8b5cf6",
  },
  {
    id: 3,
    category: "education",
    categoryLabel: "Education",
    title: "Scholarship Fund for Indigent UNIBEN Students",
    description: "Supporting 20 students who can't afford fees this semester.",
    raised: 270000,
    target: 500000,
    contributors: 128,
    accent: "#8b5cf6",
  },
  {
    id: 4,
    category: "health",
    categoryLabel: "Health",
    title: "Primary Health Outreach for Rural Mothers",
    description: "Funding mobile screenings, prenatal kits, and follow-up care.",
    raised: 185000,
    target: 400000,
    contributors: 96,
    accent: "#ec4899",
  },
  {
    id: 5,
    category: "water",
    categoryLabel: "Water & Sanitation",
    title: "Clean Water Access for Oguta East",
    description: "Building storage tanks and repairing damaged pipe routes.",
    raised: 320000,
    target: 750000,
    contributors: 143,
    accent: "#14b8a6",
  },
  {
    id: 6,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    title: "Solar Streetlights for Campus Hostel Road",
    description: "Improving safety at night with community-maintained lighting.",
    raised: 490000,
    target: 900000,
    contributors: 201,
    accent: "#f59e0b",
  },
];

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function ImpactPoolCard({ pool }: { pool: ImpactPoolCard }) {
  const percentage = Math.min(Math.round((pool.raised / pool.target) * 100), 100);

  return (
    <article className="overflow-hidden rounded-[18px] border border-border bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="h-1.5 w-full" style={{ backgroundColor: pool.accent }} />

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted">
            {pool.category === "education" ? "🎓" : "🌍"} {pool.categoryLabel}
          </p>
          <h3 className="font-heading text-[17px] font-bold leading-[1.35] text-text-dark">
            {pool.title}
          </h3>
          <p className="text-[14px] leading-6 text-text-muted">
            {pool.description}
          </p>
        </div>

        <div className="space-y-2">
          <div className="h-1.5 overflow-hidden rounded-full bg-bg-page">
            <div
              className="h-full rounded-full"
              style={{ width: `${percentage}%`, backgroundColor: pool.accent }}
            />
          </div>
          <div className="flex items-center justify-between gap-4 text-[13px]">
            <span className="font-heading text-[15px] font-bold text-text-dark">
              {formatCurrency(pool.raised)}
            </span>
            <span className="text-text-muted">{percentage}% of {formatCurrency(pool.target)}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border bg-[#fbfcfe] px-5 py-3.5">
        <span className="text-[13px] text-text-muted">
          {pool.contributors} contributors
        </span>
        <Link
          href="/impact-contribution"
          className="inline-flex items-center rounded-xl bg-primary-light px-4 py-2 text-[13px] font-bold text-primary transition-colors hover:bg-primary/15"
        >
          Give →
        </Link>
      </div>
    </article>
  );
}

export default function ImpactFeedPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const visiblePools = useMemo(() => {
    if (activeCategory === "all") {
      return impactPools;
    }

    return impactPools.filter((pool) => pool.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full space-y-5">
      <section
        className="overflow-hidden rounded-[24px] px-5 py-6 text-white shadow-[0_12px_30px_rgba(27,79,216,0.18)] sm:px-6 sm:py-7 lg:px-7"
        style={{
          background:
            "linear-gradient(135deg, rgba(33,82,223,1) 0%, rgba(43,86,211,1) 62%, rgba(64,117,255,1) 100%)",
        }}
      >
        <div className="max-w-[720px] space-y-5">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1px] text-white/90">
            🌊 Impact Pools
          </div>

          <div className="space-y-3">
            <h2 className="max-w-[680px] font-heading text-[34px] font-extrabold leading-[1.05] tracking-[-1.2px] text-white sm:text-[42px] lg:text-[52px]">
              Fund causes that <span className="text-white/60">matter.</span>
              <br />
              With accountability built in.
            </h2>

            <p className="max-w-[620px] text-[15px] leading-8 text-white/70 sm:text-[17px]">
              Every impact pool is community-governed. Contributors vote to release
              funds so your money only moves when the cause deserves it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "₦48.2M", label: "Total Raised" },
              { value: "1,240", label: "Contributors" },
              { value: "34", label: "Active Pools" },
              { value: "12", label: "Completed" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-[22px] font-extrabold text-white sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] text-white/55 sm:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <label className="block">
            <span className="sr-only">Search impact pools</span>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-text-muted shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
              <span aria-hidden="true">🔍</span>
              <input
                type="text"
                placeholder="Search causes, locations, categories..."
                className="w-full bg-transparent text-[14px] text-text-dark outline-none placeholder:text-text-muted sm:text-[15px]"
              />
            </div>
          </label>
        </div>
      </section>

      <div className="flex flex-wrap gap-2.5">
        {categories.map((category) => {
          const isActive = activeCategory === category.key;

          return (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-text-muted hover:border-primary/25 hover:text-text-dark"
              }`}
            >
              <span className="mr-1.5" aria-hidden="true">
                {category.icon}
              </span>
              {category.label}
            </button>
          );
        })}
      </div>

      <section className="space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-[1px] text-text-muted">
          ✨ Featured Pool
        </p>

        <div
          className="overflow-hidden rounded-[26px] px-5 py-7 text-white sm:px-7 lg:px-8 lg:py-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(5,106,89,1) 0%, rgba(8,117,95,1) 55%, rgba(15,131,106,1) 100%)",
          }}
        >
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-[680px] space-y-5">
              <div className="inline-flex items-center rounded-full bg-white/12 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1px] text-white/90">
                🌊 Featured · Verified
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-[28px] font-extrabold leading-[1.15] tracking-[-0.8px] text-white sm:text-[34px]">
                  Clean Water Borehole for Oguta Community, Imo State
                </h3>

                <p className="max-w-[700px] text-[15px] leading-8 text-white/70 sm:text-[17px]">
                  3,000+ residents walk 2km daily for water. This pool funds a
                  functional borehole and distribution network. All withdrawal
                  requests require community approval.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {["💧 Water", "📍 Imo State", "🏘️ Community", "✅ Verified"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/12 px-4 py-1.5 text-[12px] font-semibold text-white/85"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="w-full rounded-[22px] bg-white/10 p-5 backdrop-blur-sm sm:max-w-[320px] lg:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-heading text-[24px] font-extrabold text-white sm:text-[34px]">
                  ₦670,000
                </p>
                <span className="text-[14px] font-bold text-emerald-light">67%</span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[67%] rounded-full bg-emerald-light" />
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    { label: "AO", color: "#3159f1" },
                    { label: "CN", color: "#17b26a" },
                    { label: "TK", color: "#f79009" },
                    { label: "BL", color: "#7c3aed" },
                  ].map((avatar) => (
                    <span
                      key={avatar.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white"
                      style={{ backgroundColor: avatar.color }}
                    >
                      {avatar.label}
                    </span>
                  ))}
                </div>
                <span className="text-[14px] text-white/70">+342 contributors</span>
              </div>

              <Link
                href="/impact-contribution"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3.5 text-[15px] font-bold text-teal-dark transition-colors hover:bg-white/90"
              >
                Contribute to this Pool →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {visiblePools.map((pool) => (
          <ImpactPoolCard key={pool.id} pool={pool} />
        ))}
      </section>
    </div>
  );
}
