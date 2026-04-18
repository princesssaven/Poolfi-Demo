import Link from "next/link";

interface FeaturedPool {
  title: string;
  description: string;
  raised: number;
  target: number;
}

interface ImpactSpotlightProps {
  pool: FeaturedPool;
}

function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function ImpactSpotlight({ pool }: ImpactSpotlightProps) {
  const percentage = Math.round((pool.raised / pool.target) * 100);

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
            className="h-full bg-emerald-light rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-white text-xs font-bold">
            {formatCurrency(pool.raised)} raised
          </span>
          <span className="text-white/60 text-[11px]">
            {percentage}% of {formatCurrency(pool.target)}
          </span>
        </div>

        <Link href="/impact-contribution" className="block w-full bg-white text-primary text-[13px] font-bold py-3 rounded-full hover:bg-gray-100 transition-colors text-center">
          Contribute to this Pool →
        </Link>
      </div>
    </div>
  );
}
