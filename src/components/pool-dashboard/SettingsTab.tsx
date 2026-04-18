"use client";

import QuickExportIcon from "@/src/assets/icons/quick-export.svg";
import QuickCalendarIcon from "@/src/assets/icons/quick-calendar.svg";
import QuickRemindersIcon from "@/src/assets/icons/quick-reminders.svg";
import QuickShareIcon from "@/src/assets/icons/quick-share.svg";

interface PoolRule {
  label: string;
  value: string;
  action: string;
  actionColor?: string;
}

interface QuickAction {
  Icon: React.FC<React.SVGProps<SVGElement>>;
  title: string;
  description: string;
  onClick?: () => void;
}

interface SettingsTabProps {
  perPerson?: string;
  closesDate?: string;
  autoReminders?: boolean;
}

export default function SettingsTab({
  perPerson = "₦1,000",
  closesDate = "Feb 28, 2026",
  autoReminders = true,
}: SettingsTabProps) {
  const quickActions: QuickAction[] = [
    {
      Icon: QuickExportIcon,
      title: "Export CSV",
      description: "Download full payment report",
    },
    {
      Icon: QuickRemindersIcon,
      title: "Send Reminders",
      description: "Nudge all unpaid members",
    },
    {
      Icon: QuickCalendarIcon,
      title: "Extend Deadline",
      description: "Give members more time",
    },
    {
      Icon: QuickShareIcon,
      title: "Share Link",
      description: "Copy & share pool link",
    },
  ];

  const poolRules: PoolRule[] = [
    {
      label: "Amount Per Person",
      value: `${perPerson} (fixed)`,
      action: "Edit",
      actionColor: "text-primary",
    },
    {
      label: "Deadline",
      value: closesDate,
      action: "Extend",
      actionColor: "text-primary",
    },
    {
      label: "Withdrawal Mode",
      value: "Take All at Close",
      action: "—",
      actionColor: "text-primary",
    },
    {
      label: "Auto Reminders",
      value: autoReminders ? "Enabled ✓" : "Disabled",
      action: "Toggle",
      actionColor: "text-primary",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-5 xl:flex-row">
      {/* Quick Actions */}
      <div className="w-full shrink-0 rounded-2xl border border-border p-5 xl:w-[260px]">
        <h3 className="font-heading text-[15px] font-bold text-text-dark mb-4">
          ⚡ Quick Actions
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className="flex flex-col items-start gap-2 border border-border rounded-xl p-3 hover:bg-gray-50 transition-colors text-left"
              aria-label={action.title}
            >
              <action.Icon className="w-7 h-7 shrink-0" />
              <div>
                <p className="text-[12.5px] font-bold text-text-dark leading-snug">
                  {action.title}
                </p>
                <p className="text-[10px] text-text-muted leading-snug mt-0.5">
                  {action.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pool Rules */}
      <div className="flex-1 rounded-2xl border border-border p-5">
        <h3 className="font-heading text-[15px] font-bold text-text-dark mb-4">
          ⚙️ Pool Rules
        </h3>
        <div>
          {poolRules.map((rule, i) => (
            <div
              key={i}
              className={`flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between ${
                i < poolRules.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div>
                <p className="text-[12.5px] font-bold text-text-dark">
                  {rule.label}
                </p>
                <p className="text-[11.5px] text-text-muted mt-0.5">
                  {rule.value}
                </p>
              </div>
              <button
                className={`text-[12px] font-bold shrink-0 hover:opacity-70 transition-opacity ${rule.actionColor}`}
                aria-label={`${rule.action} ${rule.label}`}
              >
                {rule.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
