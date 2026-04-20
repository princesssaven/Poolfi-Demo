"use client";

import { useEffect, useState } from "react";

interface ProgressSectionProps {
  raised: number;
  target: number;
  paidCount: number;
  totalYetToPay: number;
  isCompleted?: boolean;
}

function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function ProgressSection({
  raised,
  target,
  paidCount,
  totalYetToPay,
  isCompleted = false,
}: ProgressSectionProps) {
  const targetPercentage = Math.min(Math.round((raised / target) * 100), 100);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(targetPercentage), 100);
    return () => clearTimeout(timer);
  }, [targetPercentage]);

  return (
    <div className="rounded-lg border border-border p-5 sm:p-6">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-heading text-[22px] font-extrabold tracking-[-0.5px] text-text-dark">
          {formatCurrency(raised)} raised
        </h3>
        <span
          className={`text-sm font-bold font-card px-3 py-1 rounded-full border ${
            isCompleted
              ? "text-success border-success/30"
              : "text-primary border-primary/30"
          }`}
        >
          {targetPercentage}% {isCompleted ? "completed" : "funded"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isCompleted
              ? "bg-success"
              : "bg-gradient-to-r from-primary to-[#5b8ef0]"
          }`}
          style={{ width: `${width}%` }}
        />
      </div>

      <div className="flex flex-col gap-1 text-xs font-card text-text-muted sm:flex-row sm:justify-between">
        <span>
          {isCompleted
            ? `${paidCount} people already paid`
            : `${totalYetToPay} students yet to pay`}
        </span>
        <span>Target: {formatCurrency(target)}</span>
      </div>
    </div>
  );
}
