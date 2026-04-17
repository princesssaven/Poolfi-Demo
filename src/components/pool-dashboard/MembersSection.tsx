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
  totalMembers: number;
  paidCount: number;
  pendingCount: number;
  members: Member[];
  poolName?: string;
  perPerson?: string;
  closesDate?: string;
  category?: string;
  raised?: number;
  target?: number;
  isCompleted?: boolean;
}

const tabs = ["Members", "Activity", "Settings", "Danger Zone"] as const;

// Activity feed matching Figma design exactly
const mockActivities: PoolActivityItem[] = [
  {
    dotColor: "#12b76a",
    mainText: "Adaeze Okonkwo paid ₦2,000 ✓",
    isBold: true,
    timeText: "Today, 2:14 PM · Tx: 0xf3a4...d91b",
  },
  {
    dotColor: "#fcd34d",
    mainText: "Emeka Nwosu joined the pool (Not yet paid)",
    isBold: true,
    timeText: "Today, 1:47 PM",
  },
  {
    dotColor: "#1b4fd8",
    mainText: "47 reminder messages sent to unpaid members",
    isBold: false,
    timeText: "Yesterday, 9:00 AM",
  },
  {
    dotColor: "#12b76a",
    mainText: "Ifeanyi Obi paid ₦2,000 ✓",
    isBold: true,
    timeText: "Today, 2:14 PM · Tx: 0xf3a4...d91b",
  },
  {
    dotColor: "#1b4fd8",
    mainText: "Pool created — 400 member slots pre-loaded",
    isBold: false,
    timeText: "5 Jul 2025, 10:00 AM",
  },
];

export default function MembersSection({
  totalMembers,
  paidCount,
  pendingCount,
  members,
  poolName = "300L Class Dues",
  perPerson = "₦1,000",
  closesDate = "Feb 28, 2026",
  raised = 312000,
  target = 400000,
  isCompleted = false,
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
      <div className="flex border-b border-border">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          const label = tab === "Members" ? `Members (${totalMembers})` : tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-4 text-[13px] font-semibold font-card transition-colors relative ${
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
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Members Tab */}
      {activeTab === "Members" && (
        <div className="p-5">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
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
                  className="text-sm font-card text-text-dark placeholder:text-text-muted focus:outline-none w-[130px]"
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
            <button className="flex items-center gap-1.5 border border-border rounded-full px-4 py-2 text-xs font-bold text-text-dark hover:bg-gray-50 transition-colors">
              🔔 Remind All Unpaid
            </button>
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 mb-4">
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
                className="flex items-center py-3.5 border-b border-border last:border-b-0 gap-3"
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
                <div className="flex items-center gap-3 shrink-0">
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
        <ActivityTab activities={mockActivities} />
      )}

      {/* Settings Tab */}
      {activeTab === "Settings" && (
        <SettingsTab
          perPerson={perPerson}
          closesDate={closesDate}
          autoReminders={true}
        />
      )}

      {/* Danger Zone Tab */}
      {activeTab === "Danger Zone" && (
        <DangerZoneTab
          poolName={poolName}
          raised={raised}
          target={target}
          memberCount={totalMembers}
          isCompleted={isCompleted}
        />
      )}
    </div>
  );
}
