"use client";

import { useState } from "react";
import ActivityTab from "./ActivityTab";
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

const mockActivities = [
  {
    initials: "EO",
    name: "Emeka Obi",
    action: "Paid ₦1,000 contribution",
    time: "Today · 9:14am",
    amount: "+₦1,000",
    amountType: "credit" as const,
    bgColor: "#1b4fd8",
  },
  {
    initials: "CN",
    name: "Chidi Nwosu",
    action: "Paid ₦1,000 contribution",
    time: "Today · 9:16am",
    amount: "+₦1,000",
    amountType: "credit" as const,
    bgColor: "#12b76a",
  },
  {
    initials: "SY",
    name: "System",
    action: "Auto-reminder sent to 87 pending members",
    time: "Today · 8:00am",
    bgColor: "#6b7280",
  },
  {
    initials: "AE",
    name: "Amaka Eze",
    action: "Paid ₦1,000 contribution",
    time: "Yesterday · 3:42pm",
    amount: "+₦1,000",
    amountType: "credit" as const,
    bgColor: "#f79009",
  },
  {
    initials: "FO",
    name: "Femi Okonkwo",
    action: "Paid ₦1,000 contribution",
    time: "Yesterday · 2:18pm",
    amount: "+₦1,000",
    amountType: "credit" as const,
    bgColor: "#6b7280",
  },
  {
    initials: "PS",
    name: "Princess Saven (You)",
    action: "Extended pool deadline by 5 days",
    time: "Feb 16 · 11:00am",
    amountType: "info" as const,
    bgColor: "#1b4fd8",
  },
  {
    initials: "BA",
    name: "Bisi Adeleke",
    action: "Paid ₦1,000 contribution",
    time: "Feb 16 · 10:32am",
    amount: "+₦1,000",
    amountType: "credit" as const,
    bgColor: "#7c3aed",
  },
  {
    initials: "UI",
    name: "Uche Ibe",
    action: "Paid ₦1,000 contribution",
    time: "Feb 15 · 4:55pm",
    amount: "+₦1,000",
    amountType: "credit" as const,
    bgColor: "#047857",
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
  category = "🎓 Education",
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
    if (searchQuery && !m.name.toLowerCase().includes(searchQuery.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-4 text-[13px] font-semibold font-card transition-colors ${
              activeTab === tab
                ? "text-primary border-b-2 border-primary"
                : tab === "Danger Zone"
                ? "text-danger/70 hover:text-danger"
                : "text-text-muted hover:text-text-dark"
            }`}
          >
            {tab === "Members" ? `Members (${totalMembers})` : tab}
          </button>
        ))}
      </div>

      {activeTab === "Members" && (
        <div className="p-5">
          {/* Search + filters */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 border border-border rounded-[10px] px-3 py-2">
                <span className="text-base">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Members"
                  className="text-sm font-card text-text-dark placeholder:text-text-muted focus:outline-none w-[120px]"
                />
              </div>
              <select className="border border-border rounded-[10px] px-3 py-2.5 text-sm font-card text-text-dark focus:outline-none bg-white">
                <option>All Members</option>
              </select>
            </div>
            <button className="flex items-center gap-1 border border-border rounded-full px-4 py-2 text-xs font-bold text-text-dark hover:bg-gray-50 transition-colors">
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
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Members list */}
          <div>
            {filteredMembers.map((member, i) => (
              <div
                key={i}
                className="flex items-center py-3.5 px-2 border-b border-border last:border-b-0 gap-3"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                  style={{ backgroundColor: member.bgColor }}
                >
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-text-dark truncate">
                    {member.name}
                  </p>
                  <p className="text-[10.5px] text-text-muted">{member.info}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-[11px] font-bold ${
                      member.status === "paid"
                        ? "text-success"
                        : "text-warning"
                    }`}
                  >
                    {member.status === "paid" ? "✓ Paid" : "Pending"}
                  </span>
                  <span className="text-base cursor-pointer hover:opacity-70" title="View receipt">
                    🧾
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Activity" && (
        <ActivityTab activities={mockActivities} />
      )}

      {activeTab === "Settings" && (
        <SettingsTab
          poolName={poolName}
          perPerson={perPerson}
          closesDate={closesDate}
          category={category}
          autoClose={false}
          autoReminders={true}
          allowAnonymous={false}
        />
      )}

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
