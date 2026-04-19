"use client";

import { useState } from "react";
import ActivityTab, { PoolActivityItem } from "./ActivityTab";
import SettingsTab from "./SettingsTab";
import DangerZoneTab from "./DangerZoneTab";

interface Member {
  initials: string;
  name: string;
  info: string;
  status: "paid" | "pending";
  bgColor: string;
}

interface MembersSectionProps {
  activities?: PoolActivityItem[];
  actionPending?: "cancel" | "close" | "pause" | "resume" | null;
  autoReminders?: boolean;
  deadlineValue?: string;
  isSavingSettings?: boolean;
  isSendingReminders?: boolean;
  totalMembers: number;
  paidCount: number;
  pendingCount: number;
  members: Member[];
  onPoolAction?: (action: "cancel" | "close" | "pause" | "resume") => void | Promise<void>;
  onSaveSettings?: (input: {
    autoReminders: boolean;
    deadline: string;
    perPersonAmount: string;
  }) => void | Promise<void>;
  onSendReminders?: () => void | Promise<void>;
  poolName?: string;
  poolLink?: string;
  perPerson?: string;
  perPersonAmountValue?: string;
  paused?: boolean;
  closesDate?: string;
  category?: string;
  raised?: number;
  target?: number;
  isCompleted?: boolean;
  takeAllAtClose?: boolean;
}

const tabs = ["Members", "Activity", "Settings", "Danger Zone"] as const;

export default function MembersSection({
  activities = [],
  actionPending = null,
  autoReminders = true,
  deadlineValue = "",
  isSavingSettings = false,
  isSendingReminders = false,
  totalMembers,
  paidCount,
  pendingCount,
  members,
  onPoolAction,
  onSaveSettings,
  onSendReminders,
  poolName = "300L Class Dues",
  poolLink,
  perPersonAmountValue = "1000",
  paused = false,
  closesDate = "Feb 28, 2026",
  raised = 312000,
  target = 400000,
  isCompleted = false,
  takeAllAtClose = false,
}: MembersSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("Members");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { key: "all", label: `All (${totalMembers})` },
    { key: "paid", label: `Paid (${paidCount})` },
    { key: "pending", label: `Pending (${pendingCount})` },
  ];

  const filteredMembers = members.filter((m) => {
    if (activeFilter === "paid" && m.status !== "paid") return false;
    if (activeFilter === "pending" && m.status !== "pending") return false;
    if (
      searchQuery &&
      !m.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      {/* Tabs */}
      <div className="overflow-x-auto border-b border-border">
        <div className="flex min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const label = tab === "Members" ? `Members (${totalMembers})` : tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-4 text-[13px] font-semibold font-card transition-colors ${
                  isActive
                    ? "text-primary"
                    : tab === "Danger Zone"
                      ? "text-text-muted hover:text-danger"
                      : "text-text-muted hover:text-text-dark"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t-full bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Members Tab */}
      {activeTab === "Members" && (
        <div className="p-5">
          {/* Toolbar */}
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              {/* Search */}
              <div className="flex items-center gap-2 border border-border rounded-[10px] px-3 py-2 bg-white">
                <span className="text-sm text-text-muted" aria-hidden="true">
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Members"
                  className="w-full text-sm font-card text-text-dark placeholder:text-text-muted focus:outline-none sm:w-[130px]"
                  aria-label="Search members"
                />
              </div>
              {/* Filter dropdown */}
              <select
                className="border border-border rounded-[10px] px-3 py-2.5 text-sm font-card text-text-dark focus:outline-none bg-white cursor-pointer"
                aria-label="Filter members"
              >
                <option>All Members</option>
                <option>Paid Members</option>
                <option>Pending Members</option>
              </select>
            </div>

            {/* Remind All Unpaid */}
            <button className="flex w-full items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-bold text-text-dark transition-colors hover:bg-gray-50 sm:w-fit">
              🔔 Remind All Unpaid
            </button>
          </div>

          {/* Filter pills */}
          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-colors ${
                  activeFilter === f.key
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-text-muted hover:border-gray-300"
                }`}
                aria-pressed={activeFilter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Member rows */}
          <div>
            {filteredMembers.map((member, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 border-b border-border py-3.5 last:border-b-0 sm:flex-row sm:items-center"
              >
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                  style={{ backgroundColor: member.bgColor }}
                  aria-label={member.initials}
                >
                  {member.initials}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-text-dark truncate">
                    {member.name}
                  </p>
                  <p className="text-[10.5px] text-text-muted">{member.info}</p>
                </div>

                {/* Status + receipt */}
                <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
                  <span
                    className={`text-[11px] font-bold ${
                      member.status === "paid" ? "text-success" : "text-warning"
                    }`}
                  >
                    {member.status === "paid" ? "✓ Paid" : "Pending"}
                  </span>
                  <button
                    className="text-base hover:opacity-70 transition-opacity"
                    title="View receipt"
                    aria-label={`View receipt for ${member.name}`}
                  >
                    🧾
                  </button>
                </div>
              </div>
            ))}

            {filteredMembers.length === 0 && (
              <p className="text-center text-text-muted text-sm py-8">
                No members found.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Activity Tab */}
      {activeTab === "Activity" && (
        <ActivityTab activities={activities} />
      )}

      {/* Settings Tab */}
      {activeTab === "Settings" && (
        <SettingsTab
          autoReminders={autoReminders}
          closesDate={deadlineValue || closesDate}
          isSaving={isSavingSettings}
          isSendingReminders={isSendingReminders}
          onSave={onSaveSettings}
          onSendReminders={onSendReminders}
          paused={paused}
          perPersonAmount={perPersonAmountValue}
          poolLink={poolLink}
          takeAllAtClose={takeAllAtClose}
        />
      )}

      {/* Danger Zone Tab */}
      {activeTab === "Danger Zone" && (
        <DangerZoneTab
          actionPending={actionPending}
          onAction={onPoolAction}
          poolName={poolName}
          paused={paused}
          raised={raised}
          target={target}
          memberCount={totalMembers}
          isCompleted={isCompleted}
        />
      )}
    </div>
  );
}
