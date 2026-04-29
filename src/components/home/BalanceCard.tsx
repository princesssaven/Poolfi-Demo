"use client";
import { formatCurrency } from "@/src/lib/format-utils";

interface BalanceCardProps {
  totalBalance: number;
  available: number;
  locked: number;
  activePools: number;
  completedPools: number;
  onAddFunds?: () => void;
}


export default function BalanceCard({
  totalBalance,
  available,
  locked,
  activePools,
  completedPools,
  onAddFunds,
}: BalanceCardProps) {
  return (
    <div className="relative mb-6 overflow-hidden rounded-[24px] bg-primary p-5 pb-4 shadow-[0_24px_50px_rgba(51,94,255,0.28)] sm:p-6">
      {/* Decorative circle */}
      <div className="pointer-events-none absolute left-1/2 top-[117px] h-[140px] w-[200px] -translate-x-1/2 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-white/[0.08]" />

      {/* Top section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-1 text-[12px] text-white/70">Your PoolFi Balance</p>
          <p className="font-heading text-[30px] font-bold leading-[34px] tracking-[-1.5px] text-white sm:text-[38px] sm:leading-[42px] sm:tracking-[-2px]">
            {formatCurrency(totalBalance, 2)}
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[1px] text-white/50">
            Total Balance
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={onAddFunds}
            className="rounded-full bg-white px-5 py-2 text-[13px] font-bold text-primary shadow-sm transition-colors hover:bg-gray-100"
          >
            + Add Funds
          </button>
          <button className="rounded-full border border-white/30 px-5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-white/10">
            ↑ Withdraw
          </button>
        </div>
      </div>

      {/* Bottom chips */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="flex-1 rounded-xl border border-white/20 bg-white/12 p-4 backdrop-blur-sm">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald" />
            <span className="text-white/55 text-[10.5px] font-medium tracking-[0.8px] uppercase">
              Available
            </span>
          </div>
          <p className="font-heading text-xl font-bold tracking-[-0.5px] text-emerald-light">
            {formatCurrency(available, 2)}
          </p>
          <p className="mt-1 text-[11px] text-white/45">Free to use</p>
        </div>

        <div className="flex-1 rounded-xl border border-white/20 bg-white/12 p-4 backdrop-blur-sm">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow" />
            <span className="text-white/55 text-[10.5px] font-medium tracking-[0.8px] uppercase">
              Locked
            </span>
          </div>
          <p className="font-heading text-xl font-bold tracking-[-0.5px] text-yellow">
            {formatCurrency(locked, 2)}
          </p>
          <p className="mt-1 text-[11px] text-white/45">
            In {activePools} active pool{activePools !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex-1 rounded-xl border border-white/20 bg-white/12 p-4 backdrop-blur-sm">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/50" />
            <span className="text-white/55 text-[10.5px] font-medium tracking-[0.8px] uppercase">
              Pools
            </span>
          </div>
          <p className="font-heading text-xl font-bold tracking-[-0.5px] text-white">
            {activePools} Active
          </p>
          <p className="mt-1 text-[11px] text-white/45">
            {completedPools} completed
          </p>
        </div>
      </div>
    </div>
  );
}
