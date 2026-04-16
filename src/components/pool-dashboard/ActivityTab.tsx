"use client";

interface ActivityItem {
  initials: string;
  name: string;
  action: string;
  time: string;
  amount?: string;
  amountType?: "credit" | "debit" | "info";
  bgColor: string;
}

interface ActivityTabProps {
  activities: ActivityItem[];
}

export default function ActivityTab({ activities }: ActivityTabProps) {
  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-[15px] font-bold text-text-dark">
          Recent Activity
        </h3>
        <div className="flex items-center gap-2">
          <select className="border border-border rounded-[10px] px-3 py-2 text-[12px] font-card text-text-dark focus:outline-none bg-white">
            <option>All activity</option>
            <option>Payments only</option>
            <option>Reminders only</option>
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />

        <div className="flex flex-col gap-0.5">
          {activities.map((item, i) => (
            <div key={i} className="flex items-start gap-4 py-3 relative">
              {/* Timeline dot */}
              <div className="relative z-10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.initials}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[13px] font-bold text-text-dark">
                      {item.name}
                    </p>
                    <p className="text-[11.5px] text-text-muted mt-0.5">
                      {item.action}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    {item.amount && (
                      <p
                        className={`text-[13px] font-bold ${
                          item.amountType === "credit"
                            ? "text-success"
                            : item.amountType === "debit"
                            ? "text-text-dark"
                            : "text-text-muted"
                        }`}
                      >
                        {item.amount}
                      </p>
                    )}
                    <p className="text-[10.5px] text-text-light mt-0.5">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load more */}
      <div className="text-center mt-4 pt-4 border-t border-border">
        <button className="text-primary text-[12px] font-bold hover:underline">
          View All Activity →
        </button>
      </div>
    </div>
  );
}
