"use client";

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
  const percentage = Math.min(Math.round((raised / target) * 100), 100);

  return (
    <div className="border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-3">
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
          {percentage}% {isCompleted ? "completed" : "funded"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${
            isCompleted
              ? "bg-success"
              : "bg-gradient-to-r from-primary to-[#5b8ef0]"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-text-muted font-card">
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
