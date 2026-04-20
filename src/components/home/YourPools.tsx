import Link from "next/link";
import { useEffect, useState } from "react";

interface PoolSummary {
  id: string;
  emoji: string;
  title: string;
  role: string;
  paidCount: number;
  totalCount: number;
  closesIn: string;
  raised: number;
  target: number;
  unpaidCount: number;
  csvReady: boolean;
}

interface YourPoolsProps {
  pools: PoolSummary[];
}

function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function AnimatedProgressBar({ raised, target }: { raised: number; target: number }) {
  const targetPercentage = Math.min(Math.round((raised / target) * 100), 100);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(targetPercentage), 100);
    return () => clearTimeout(timer);
  }, [targetPercentage]);

  return (
    <div
      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
      style={{ width: `${width}%` }}
    />
  );
}

export default function YourPools({ pools }: YourPoolsProps) {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-heading text-base font-bold tracking-[-0.3px] text-text-dark">
          {pools.length > 0 ? "Your Pools" : "Recent Activity"}
        </h2>
        <Link href="/my-pools" className="text-primary text-[13px] font-bold hover:underline">
          All →
        </Link>
      </div>

      {pools.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white py-16 sm:py-24">
          <span className="text-[126px] leading-none mb-3">🌊</span>
          <p className="text-text-muted text-sm">No active pools</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {pools.map((pool, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl bg-white overflow-hidden"
            >
              {/* Pool info row */}
              <div className="p-5 pb-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{pool.emoji}</span>
                    <div>
                      <p className="text-[15px] font-bold text-text-dark">
                        {pool.title}
                      </p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-text-muted">
                        <span>{pool.role}</span>
                        <span>
                          {pool.paidCount} of {pool.totalCount} paid
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-[3px] h-[3px] rounded-full bg-border" />
                          <span>{pool.closesIn}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-success bg-success/10 border border-success/20 px-2.5 py-1 rounded-full">
                    Active
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="px-5 pb-3">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="font-bold text-text-dark">
                    {formatCurrency(pool.raised)} raised
                  </span>
                  <span className="text-text-muted">
                    Target: {formatCurrency(pool.target)}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <AnimatedProgressBar raised={pool.raised} target={pool.target} />
                </div>
              </div>

              {/* Footer stats */}
              <div className="flex flex-col gap-3 border-t border-border px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-1.5 text-[12px]">
                    <span className="text-[15px]">👥</span>
                    <span className="font-bold text-text-dark">
                      {pool.unpaidCount}
                    </span>
                    <span className="text-text-muted">yet to pay</span>
                  </div>
                  {pool.csvReady && (
                    <div className="flex items-center gap-1.5 text-[12px]">
                      <span className="text-[15px]">📋</span>
                      <span className="font-bold text-text-dark">
                        CSV Report
                      </span>
                      <span className="text-text-muted">ready</span>
                    </div>
                  )}
                </div>
                <Link
                  href={`/pool/${pool.id}`}
                  className="inline-flex w-fit text-[12px] font-bold text-primary hover:underline"
                >
                  Manage →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
