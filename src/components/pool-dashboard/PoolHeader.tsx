"use client";

interface PoolStat {
  label: string;
  value: string;
  subtitle: string;
  dotColor: string;
  valueColor?: string;
}

interface PoolHeaderProps {
  title: string;
  closesDate: string;
  perPerson: string;
  category: string;
  stats: PoolStat[];
  twContractId?: string;
  twEscrowStatus?: string;
}

export default function PoolHeader({
  title,
  closesDate,
  perPerson,
  category,
  stats,
  twContractId,
  twEscrowStatus,
}: PoolHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary p-5 sm:p-6">
      <div className="absolute top-0 right-0 w-[200px] h-[140px] rounded-full bg-white/[0.04]" />

      <p className="text-[10px] font-bold tracking-[1px] uppercase text-white/60 mb-1">
        🎯 Goal Pool · Admin View
      </p>
      <h2 className="font-heading text-lg font-bold tracking-[-0.3px] text-white leading-snug mb-1.5">
        {title}
      </h2>
      <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/55">
        <span>📅 {closesDate}</span>
        <span>·</span>
        <span>💰 {perPerson}</span>
        <span>·</span>
        <span>{category}</span>
        {twContractId && twEscrowStatus !== "not_configured" ? (
          <>
            <span>·</span>
            <a
              href={`https://viewer.trustlesswork.com/contract/${twContractId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-2 py-0.5 text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-colors"
            >
              ⛓️ Escrow Status: {twEscrowStatus}
            </a>
          </>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-1 bg-white/10 border border-white/12 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: stat.dotColor }}
              />
              <span className="text-white/55 text-[10.5px] font-medium tracking-[0.8px] uppercase">
                {stat.label}
              </span>
            </div>
            <p
              className={`font-heading text-xl font-bold tracking-[-0.5px] leading-[25px] ${stat.valueColor || "text-white"}`}
            >
              {stat.value}
            </p>
            <p className="text-white/40 text-[11px] mt-1">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
