"use client";

export interface PoolActivityItem {
  dotColor: string;
  mainText: string;
  isBold: boolean;
  timeText: string;
}

interface ActivityTabProps {
  activities: PoolActivityItem[];
}

export default function ActivityTab({ activities }: ActivityTabProps) {
  return (
    <div>
      {activities.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 px-6 py-5 border-b border-border last:border-b-0"
        >
          {/* Colored dot indicator */}
          <div
            className="w-3.5 h-3.5 rounded-full shrink-0 mt-[3px]"
            style={{ backgroundColor: item.dotColor }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="flex flex-col gap-2 min-w-0">
            <p
              className={`text-[13px] leading-snug text-text-dark ${
                item.isBold ? "font-bold" : "font-normal"
              }`}
            >
              {item.mainText}
            </p>
            <p className="text-[11px] text-text-muted font-card">
              {item.timeText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
