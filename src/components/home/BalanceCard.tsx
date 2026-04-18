"use client";

interface BalanceCardProps {
  totalBalance: number;
  available: number;
  locked: number;
  activePools: number;
  completedPools: number;
}

function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function BalanceCard({
  totalBalance,
  available,
  locked,
  activePools,
  completedPools,
}: BalanceCardProps) {
  return (
    <div className="relative mb-6 overflow-hidden rounded-[20px] bg-primary p-5 pb-4 sm:p-6">
      {/* Decorative circle */}
      <div className="absolute top-[117px] left-1/2 -translate-x-1/2 w-[200px] h-[140px] rounded-full bg-white/[0.04] pointer-events-none" />

      {/* Top section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-white/65 text-[12px] mb-1">Your PoolFi Balance</p>
          <p className="font-heading text-[30px] font-bold leading-[34px] tracking-[-1.5px] text-white sm:text-[38px] sm:leading-[42px] sm:tracking-[-2px]">
            {formatCurrency(totalBalance)}
          </p>
          <p className="text-white/50 text-[11px] font-medium tracking-[1px] uppercase mt-1">
            Total Balance
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <button className="rounded-full bg-white px-5 py-2 text-[13px] font-bold text-primary transition-colors hover:bg-gray-100">
            + Add Funds
          </button>
          <button className="rounded-full border border-white/30 px-5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-white/10">
            ↑ Withdraw
          </button>
        </div>
      </div>

      {/* Bottom chips */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="flex-1 bg-white/10 border border-white/12 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald" />
            <span className="text-white/55 text-[10.5px] font-medium tracking-[0.8px] uppercase">
              Available
            </span>
          </div>
          <p className="font-heading text-xl font-bold tracking-[-0.5px] text-emerald-light">
            {formatCurrency(available)}
          </p>
          <p className="text-white/40 text-[11px] mt-1">Free to use</p>
        </div>

        <div className="flex-1 bg-white/10 border border-white/12 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow" />
            <span className="text-white/55 text-[10.5px] font-medium tracking-[0.8px] uppercase">
              Locked
            </span>
          </div>
          <p className="font-heading text-xl font-bold tracking-[-0.5px] text-yellow">
            {formatCurrency(locked)}
          </p>
          <p className="text-white/40 text-[11px] mt-1">
            In {activePools} active pool{activePools !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex-1 bg-white/10 border border-white/12 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-white/50" />
            <span className="text-white/55 text-[10.5px] font-medium tracking-[0.8px] uppercase">
              Pools
            </span>
          </div>
          <p className="font-heading text-xl font-bold tracking-[-0.5px] text-white">
            {activePools} Active
          </p>
          <p className="text-white/40 text-[11px] mt-1">
            {completedPools} completed
          </p>
        </div>
      </div>
    </div>
  );
}
