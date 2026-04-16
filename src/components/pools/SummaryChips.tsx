interface SummaryChip {
  label: string;
  value: string;
  subtitle: string;
  valueColor?: string;
}

interface SummaryChipsProps {
  chips: SummaryChip[];
}

export default function SummaryChips({ chips }: SummaryChipsProps) {
  return (
    <div className="flex gap-3.5 mb-6">
      {chips.map((chip, i) => (
        <div
          key={i}
          className="flex-1 border border-border rounded-[14px] bg-white p-4"
        >
          <p className="text-[11px] font-semibold tracking-[0.8px] uppercase text-text-muted mb-1">
            {chip.label}
          </p>
          <p
            className={`font-heading text-2xl font-extrabold tracking-[-0.5px] ${
              chip.valueColor || "text-text-dark"
            }`}
          >
            {chip.value}
          </p>
          <p className="text-[11px] text-text-muted mt-0.5">{chip.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
