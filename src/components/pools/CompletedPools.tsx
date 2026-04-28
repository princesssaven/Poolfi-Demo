import type { CompletedPoolData } from "@/src/types/pools";

interface CompletedPoolsProps {
  pools: CompletedPoolData[];
}

export default function CompletedPools({ pools }: CompletedPoolsProps) {
  return (
    <div>
      <h2 className="font-heading text-base font-bold text-text-dark mb-3.5">
        Completed Pools
      </h2>
      <div className="flex flex-col gap-2.5">
        {pools.map((pool, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-3 rounded-xl border border-border bg-white px-5 py-4 transition-shadow hover:shadow-sm sm:flex-row sm:items-center"
          >
            <span className="text-lg shrink-0">{pool.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text-dark font-card truncate">
                {pool.title}
              </p>
              <p className="text-xs text-text-muted font-card mt-0.5 truncate">
                {pool.details}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-heading text-base font-bold text-success shrink-0">
                {pool.amount}
              </span>
              <span className="text-[10px] font-bold text-success font-card shrink-0">
                ✓ Done
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
