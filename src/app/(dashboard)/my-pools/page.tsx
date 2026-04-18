import SummaryChips from "@/src/components/pools/SummaryChips";
import PoolCard from "@/src/components/pools/PoolCard";
import CompletedPools from "@/src/components/pools/CompletedPools";
import { myPoolsData as data } from "@/src/data/mockData";

export default function MyPoolsPage() {
  return (
    <div className="w-full max-w-[1120px]">
      <SummaryChips chips={data.summary} />

      {/* Pools I Manage */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-heading text-base font-bold text-text-dark">
            Pools I Manage
          </h2>
          <span className="font-heading text-[11px] font-bold text-primary border border-primary/30 rounded-full px-3 py-0.5">
            Admin
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {data.pools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>
      </div>

      {/* Completed Pools */}
      <CompletedPools pools={data.completedPools} />
    </div>
  );
}
