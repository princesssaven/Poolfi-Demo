import BalanceCard from "@/src/components/home/BalanceCard";
import YourPools from "@/src/components/home/YourPools";
import ImpactSpotlight from "@/src/components/home/ImpactSpotlight";
import RecentActivitySidebar from "@/src/components/home/RecentActivitySidebar";
import { homeDataPopulated as data } from "@/src/data/mockData";

export default function HomePage() {
  return (
    <div>
      <BalanceCard {...data.balance} />

      <div className="flex flex-col gap-6 xl:flex-row">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          <YourPools pools={data.pools} />
        </div>

        {/* Right column */}
        <div className="flex w-full shrink-0 flex-col gap-6 xl:w-[384px]">
          <ImpactSpotlight pool={data.featuredPool} />
          <RecentActivitySidebar activities={data.activities} />
        </div>
      </div>
    </div>
  );
}
