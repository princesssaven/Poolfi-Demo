interface Activity {
  emoji: string;
  title: string;
  time: string;
  amount?: string;
  amountType?: "credit" | "debit" | "info";
}

interface RecentActivitySidebarProps {
  activities: Activity[];
}

export default function RecentActivitySidebar({
  activities,
}: RecentActivitySidebarProps) {
  return (
    <div className="border border-border rounded-2xl bg-white">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="font-heading text-base font-bold tracking-[-0.3px] text-text-dark">
          Recent Activity
        </h3>
        <button className="text-primary text-[13px] font-bold hover:underline">
          All →
        </button>
      </div>

      {activities.length === 0 ? (
        <div className="flex items-center justify-center py-16 px-5">
          <p className="text-text-muted text-sm">
            You have no recent activities.
          </p>
        </div>
      ) : (
        <div className="border-t border-border">
          {activities.map((activity, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-5 py-3 ${
                i < activities.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-lg shrink-0">{activity.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-text-dark truncate">
                  {activity.title}
                </p>
                <p className="text-[10px] text-text-muted">{activity.time}</p>
              </div>
              {activity.amount && (
                <span
                  className={`text-xs font-bold shrink-0 ${
                    activity.amountType === "credit"
                      ? "text-success"
                      : activity.amountType === "debit"
                        ? "text-danger"
                        : "text-text-dark"
                  }`}
                >
                  {activity.amount}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
