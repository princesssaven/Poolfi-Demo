"use client";

import { useEffect, useRef, useState } from "react";
import QuickExportIcon from "@/src/assets/icons/quick-export.svg";
import QuickCalendarIcon from "@/src/assets/icons/quick-calendar.svg";
import QuickRemindersIcon from "@/src/assets/icons/quick-reminders.svg";
import QuickShareIcon from "@/src/assets/icons/quick-share.svg";

interface QuickActionCardProps {
  Icon: React.FC<React.SVGProps<SVGElement>>;
  disabled?: boolean;
  title: string;
  description: string;
  onClick?: () => void;
}

function QuickActionCard({
  Icon,
  disabled = false,
  title,
  description,
  onClick,
}: QuickActionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex flex-col items-start gap-2 rounded-xl border border-border p-3 text-left transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-white"
      aria-label={title}
    >
      <Icon className="w-7 h-7 shrink-0" />
      <div>
        <p className="text-[12.5px] font-bold text-text-dark leading-snug">
          {title}
        </p>
        <p className="text-[10px] text-text-muted leading-snug mt-0.5">
          {description}
        </p>
      </div>
    </button>
  );
}

interface SettingsTabProps {
  autoReminders?: boolean;
  closesDate?: string;
  isExportingCsv?: boolean;
  isSaving?: boolean;
  isSendingReminders?: boolean;
  onExportCsv?: () => void | Promise<void>;
  onSave?: (input: {
    autoReminders: boolean;
    deadline: string;
    perPersonAmount: string;
  }) => void | Promise<void>;
  onSendReminders?: () => void | Promise<void>;
  paused?: boolean;
  perPersonAmount?: string;
  poolLink?: string;
  takeAllAtClose?: boolean;
}

export default function SettingsTab({
  autoReminders = true,
  closesDate = "Feb 28, 2026",
  isExportingCsv = false,
  isSaving = false,
  isSendingReminders = false,
  onExportCsv,
  onSave,
  onSendReminders,
  paused = false,
  perPersonAmount = "1000",
  poolLink,
  takeAllAtClose = false,
}: SettingsTabProps) {
  const [deadline, setDeadline] = useState(closesDate);
  const [amountPerPerson, setAmountPerPerson] = useState(perPersonAmount);
  const [remindersEnabled, setRemindersEnabled] = useState(autoReminders);
  const [copied, setCopied] = useState(false);
  const deadlineInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDeadline(closesDate);
  }, [closesDate]);

  useEffect(() => {
    setAmountPerPerson(perPersonAmount);
  }, [perPersonAmount]);

  useEffect(() => {
    setRemindersEnabled(autoReminders);
  }, [autoReminders]);

  const handleCopyLink = async () => {
    if (!poolLink) {
      return;
    }

    try {
      const fullUrl = `https://poolfi-pre-mvpp.vercel.app${poolLink}`;
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleDeadlineAction = () => {
    const deadlineInput =
      deadlineInputRef.current as
        | (HTMLInputElement & { showPicker?: () => void })
        | null;

    deadlineInput?.focus();
    deadlineInput?.showPicker?.();
  };

  return (
    <div className="flex flex-col gap-4 p-5 xl:flex-row">
      {/* Quick Actions */}
      <div className="w-full shrink-0 rounded-2xl border border-border p-5 xl:w-[260px]">
        <h3 className="font-heading text-[15px] font-bold text-text-dark mb-4">
          ⚡ Quick Actions
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <QuickActionCard
            Icon={QuickExportIcon}
            title={isExportingCsv ? "Exporting..." : "Export CSV"}
            description="Download full payment report"
            disabled={isExportingCsv || !onExportCsv}
            onClick={() => void onExportCsv?.()}
          />
          <QuickActionCard
            Icon={QuickRemindersIcon}
            title={isSendingReminders ? "Sending..." : "Send Reminders"}
            description="Nudge all unpaid members"
            disabled={isSendingReminders || !onSendReminders}
            onClick={() => void onSendReminders?.()}
          />
          <QuickActionCard
            Icon={QuickCalendarIcon}
            title="Extend Deadline"
            description="Edit the date below, then save"
            onClick={handleDeadlineAction}
          />
          <QuickActionCard
            Icon={QuickShareIcon}
            title={copied ? "Copied!" : "Share Link"}
            description={poolLink ?? "Copy & share pool link"}
            disabled={!poolLink}
            onClick={handleCopyLink}
          />
        </div>
      </div>

      {/* Pool Rules */}
      <form
        className="flex-1 rounded-2xl border border-border p-5"
        onSubmit={(event) => {
          event.preventDefault();
          void onSave?.({
            autoReminders: remindersEnabled,
            deadline,
            perPersonAmount: amountPerPerson,
          });
        }}
      >
        <h3 className="font-heading text-[15px] font-bold text-text-dark mb-4">
          ⚙️ Pool Rules
        </h3>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-[12.5px] font-bold text-text-dark">
              Amount Per Person (₦)
              <input
                type="number"
                min="1"
                value={amountPerPerson}
                onChange={(event) => setAmountPerPerson(event.target.value)}
                className="rounded-[12px] border border-border px-4 py-3 text-sm font-medium text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </label>

            <label className="flex flex-col gap-2 text-[12.5px] font-bold text-text-dark">
              Deadline
              <input
                ref={deadlineInputRef}
                type="date"
                value={deadline}
                onChange={(event) => setDeadline(event.target.value)}
                className="rounded-[12px] border border-border px-4 py-3 text-sm font-medium text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </label>
          </div>

          <label className="flex items-center justify-between rounded-[14px] border border-border px-4 py-3">
            <div>
              <p className="text-[12.5px] font-bold text-text-dark">
                Automatic reminders
              </p>
              <p className="text-[11px] text-text-muted">
                PoolFi will keep nudging unpaid members.
              </p>
            </div>
            <input
              type="checkbox"
              checked={remindersEnabled}
              onChange={(event) => setRemindersEnabled(event.target.checked)}
              className="h-4 w-4 accent-primary"
            />
          </label>

          <div className="rounded-[14px] border border-border bg-[#fbfcff] px-4 py-3 text-[12px] text-text-muted">
            <p className="font-bold text-text-dark">
              Withdrawal mode: {takeAllAtClose ? "Take All at Close" : "Milestone-based"}
            </p>
            <p className="mt-1">
              Contributions are currently {paused ? "paused" : "active"} for this pool.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => void onSendReminders?.()}
            disabled={isSendingReminders}
            className="rounded-full border border-border px-5 py-3 text-sm font-bold text-text-dark transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSendingReminders ? "Sending..." : "Send reminders"}
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Save pool settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
