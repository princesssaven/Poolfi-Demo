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
    <div className="bg-primary rounded-[20px] p-6 pb-4 relative overflow-hidden mb-6">
      {/* Decorative circle */}
      <div className="absolute top-[117px] left-1/2 -translate-x-1/2 w-[200px] h-[140px] rounded-full bg-white/[0.04] pointer-events-none" />

      {/* Top section */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-white/65 text-[12px] mb-1">Your PoolFi Balance</p>
          <p className="font-heading text-[38px] font-bold tracking-[-2px] leading-[42px] text-white">
            {formatCurrency(totalBalance)}
          </p>
          <p className="text-white/50 text-[11px] font-medium tracking-[1px] uppercase mt-1">
            Total Balance
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-primary text-[13px] font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">
            + Add Funds
          </button>
          <button className="border border-white/30 text-white text-[13px] font-bold px-5 py-2 rounded-full hover:bg-white/10 transition-colors">
            ↑ Withdraw
          </button>
        </div>
      </div>

      {/* Bottom chips */}
      <div className="flex gap-[23px]">
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
