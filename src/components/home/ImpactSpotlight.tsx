import Link from "next/link";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/src/lib/format-utils";

interface FeaturedPool {
  title: string;
  description: string;
  raised: number;
  target: number;
}

interface ImpactSpotlightProps {
  pool: FeaturedPool | null;
}


export default function ImpactSpotlight({ pool }: ImpactSpotlightProps) {
  const safeRaised = pool && Number.isFinite(pool.raised) ? pool.raised : 0;
  const safeTarget = pool && Number.isFinite(pool.target) ? pool.target : 0;
  const targetForPercentage = safeTarget > 0 ? safeTarget : 1;
  const targetPercentage = Math.min(
    Math.round((safeRaised / targetForPercentage) * 100),
    100
  );
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(targetPercentage), 100);
    return () => clearTimeout(timer);
  }, [targetPercentage]);

  if (!pool) {
    return (
      <div>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-base font-bold tracking-[-0.3px] text-text-dark">
            Impact Spotlight
          </h2>
          <Link href="/impact" className="text-primary text-[13px] font-bold hover:underline">
            Explore →
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 text-sm text-text-muted sm:p-6">
          No featured impact pool is available yet.
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-heading text-base font-bold tracking-[-0.3px] text-text-dark">
          Impact Spotlight
        </h2>
        <Link href="/impact" className="text-primary text-[13px] font-bold hover:underline">
          Explore →
        </Link>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl p-5 sm:p-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,47,168,1) 0%, rgba(27,79,216,1) 60%, rgba(61,106,232,1) 100%)",
        }}
      >
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-[180px] h-[140px] rounded-full bg-white/5 -translate-y-0 translate-x-0" />

        <p className="text-white text-[10px] font-bold tracking-[0.8px] uppercase leading-[13px] mb-4">
          🌊 Featured Pool
        </p>

        <h3 className="font-heading text-[15px] font-bold leading-[21px] text-white mb-2">
          {pool.title}
        </h3>
        <p className="text-white/65 text-[12px] leading-[19px] mb-5">
          {pool.description}
        </p>

        {/* Progress bar */}
        <div className="w-full h-[5px] bg-white/20 rounded-full mb-2 overflow-hidden">
          <div
            className="h-full bg-emerald-light rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-white text-xs font-bold">
            {formatCurrency(safeRaised)} raised
          </span>
          <span className="text-white/60 text-[11px]">
            {targetPercentage}% of {formatCurrency(safeTarget)}
          </span>
        </div>

        <Link href="/impact-contribution" className="block w-full bg-white text-primary text-[13px] font-bold py-3 rounded-full hover:bg-gray-100 transition-colors text-center">
          Contribute to this Pool →
        </Link>
      </div>
    </div>
  );
}
