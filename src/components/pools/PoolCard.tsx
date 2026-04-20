import Link from "next/link";
import { useEffect, useState } from "react";
import type { PoolCardData } from "@/src/data/mockData";

function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

const stripeGradients: Record<string, string> = {
  blue: "linear-gradient(90deg, #1b4fd8 0%, #5b8ef0 100%)",
  green: "linear-gradient(90deg, #12b76a 0%, #34d399 100%)",
  teal: "linear-gradient(90deg, #047857 0%, #34d399 100%)",
  emerald: "linear-gradient(90deg, #047857 0%, #34d399 100%)",
};

const roleBadgeColors: Record<string, string> = {
  admin: "text-primary",
  contributor: "text-success",
  impact: "text-purple",
};

const roleLabels: Record<string, string> = {
  admin: "Admin",
  contributor: "Contributor",
  impact: "Impact",
};

const progressColors: Record<string, string> = {
  admin: "bg-primary",
  contributor: "bg-primary",
  impact: "bg-teal-dark",
};

interface PoolCardProps {
  pool: PoolCardData;
}

export default function PoolCard({ pool }: PoolCardProps) {
  const targetPercentage = Math.min(
    Math.round((pool.raised / pool.target) * 100),
    100
  );
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(targetPercentage), 100);
    return () => clearTimeout(timer);
  }, [targetPercentage]);
  const isCompleted = pool.status === "completed";
  const footerWarning =
    pool.footer.left.includes("days left") ||
    pool.footer.left.includes("Approval");

  return (
    <div className="border border-border rounded-2xl bg-white overflow-hidden transition-shadow hover:shadow-sm">
      {/* Color stripe */}
      <div
        className="h-[5px]"
        style={{ background: stripeGradients[pool.stripeColor] }}
      />

      {/* Body */}
      <div className="p-5 pb-4">
        {/* Top: role badge + status dot */}
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-[10px] font-bold tracking-[0.5px] uppercase font-card ${roleBadgeColors[pool.role]}`}
          >
            {roleLabels[pool.role]}
          </span>
          <span
            className={`w-2 h-2 rounded-full ${
              isCompleted ? "bg-text-muted" : "bg-success"
            }`}
          />
        </div>

        {/* Title */}
        <h3 className="font-heading text-[15px] font-bold leading-[20px] text-text-dark mb-1">
          {pool.title}
        </h3>

        {/* Category */}
        <p className="text-xs text-text-muted font-card mb-3">
          {pool.category}
        </p>

        {/* Contribution badge */}
        {pool.contribution && (
          <p
            className={`text-[11px] font-semibold font-card mb-3 inline-block px-2 py-0.5 rounded-full ${
              pool.role === "impact"
                ? "bg-primary-light text-primary"
                : "bg-success-bg text-success"
            }`}
          >
            {pool.contribution}
          </p>
        )}

        {/* Progress bar */}
        <div
          className={`w-full h-1.5 rounded-full overflow-hidden mb-2 ${
            isCompleted ? "bg-success/20" : "bg-gray-100"
          }`}
        >
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${
              isCompleted
                ? "bg-success"
                : progressColors[pool.role] || "bg-primary"
            }`}
            style={{ width: `${width}%` }}
          />
        </div>

        {/* Progress meta */}
        <div className="mb-4 flex flex-col gap-1 text-[11px] font-card text-text-muted sm:flex-row sm:justify-between">
          <span>{formatCurrency(pool.raised)} raised</span>
          <span>
            {isCompleted
              ? "100% — Completed"
              : `${targetPercentage}% of ${formatCurrency(pool.target)}`}
          </span>
        </div>

        {/* Stats */}
        <div className="flex gap-4 flex-wrap">
          {pool.stats.map((stat, i) => (
            <div key={i}>
              <p
                className={`text-sm font-bold font-card ${
                  stat.highlight ? "text-warning" : "text-text-dark"
                }`}
              >
                {stat.value}
              </p>
              <p className="text-[10px] font-semibold tracking-[0.5px] uppercase text-text-muted font-card">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className={`flex flex-col gap-3 px-5 py-3.5 border-t border-border sm:flex-row sm:items-center sm:justify-between ${
          isCompleted
            ? "bg-success-bg"
            : pool.footer.left.includes("Approval")
              ? "bg-white"
              : "bg-success-bg"
        }`}
      >
        <span
          className={`text-[11px] font-semibold font-card ${
            footerWarning ? "text-warning" : "text-text-muted"
          }`}
        >
          {pool.footer.left}
        </span>
        <Link
          href={`/pool/${pool.id}`}
          className={`inline-flex w-fit items-center text-xs font-bold font-card ${
            pool.role === "impact"
              ? "text-purple"
              : pool.footer.rightIsLink
                ? "text-primary"
                : "text-text-muted border border-border rounded-full px-3 py-1"
          } hover:underline`}
        >
          {pool.footer.right}
        </Link>
      </div>
    </div>
  );
}
