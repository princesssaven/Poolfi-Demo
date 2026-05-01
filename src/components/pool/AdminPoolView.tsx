"use client";

import { useState, useEffect } from "react";
import { formatNumberWithCommas } from "@/src/lib/format-utils";

interface PoolActivityItem {
  dotColor: string;
  isBold: boolean;
  mainText: string;
  timeText: string;
}

interface PoolMember {
  bgColor: string;
  info: string;
  initials: string;
  isCreator?: boolean;
  name: string;
  status: "paid" | "pending" | "expected";
}

interface AdminPoolViewProps {
  pool: {
    id: string;
    adminName: string;
    title: string;
    category: string;
    closesDate: string;
    daysLeft: number;
    raised: number;
    target: number;
    perPerson: string;
    expectedCount: number;
    paidCount: number;
    pendingCount: number;
    requiredFields: string[];
    totalMembers: number;
    members: PoolMember[];
    activities: PoolActivityItem[];
    poolLink: string;
    settings?: {
      autoReminders: boolean;
      deadline: string;
      paused: boolean;
      perPersonAmount: string;
      status: string;
      takeAllAtClose: boolean;
    };
  };
  onExportCsv: () => void;
  onSendReminders: () => void;
  onCopyLink: () => void;
  onClosePool?: () => void;
  onCancelPool?: () => void;
  onPausePool?: () => void;
}

function formatCurrency(amount: number) {
  return `₦${formatNumberWithCommas(amount)}`;
}

type AdminTab = "members" | "activity" | "settings" | "danger";

export default function AdminPoolView({ 
  pool, 
  onExportCsv, 
  onSendReminders, 
  onCopyLink,
  onClosePool,
  onCancelPool,
  onPausePool,
}: AdminPoolViewProps) {
  const [filter, setFilter] = useState<"all" | "paid" | "pending" | "expected">("all");
  const [activeTab, setActiveTab] = useState<AdminTab>("members");
  const [selectedMember, setSelectedMember] = useState<PoolMember | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const openDrawer = (member: PoolMember) => {
    setSelectedMember(member);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://poolfi-pre-mvpp.vercel.app${pool.poolLink}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* */ }
  };

  const handleWhatsApp = () => {
    const msg = `Join my pool on PoolFi: https://poolfi-pre-mvpp.vercel.app${pool.poolLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  const filteredMembers = pool.members.filter(m => {
    if (filter === "all") return true;
    return m.status === filter;
  });

  const progressPercentage = pool.target > 0 
    ? Math.min(100, Math.round((pool.raised / pool.target) * 100))
    : 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Hero Section (Admin Version) */}
      <div className="bg-[#1b4fd8] text-white p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 size-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.2)] px-4 py-1 rounded-full w-fit flex items-center gap-2">
          <span className="text-[12px]">🔒</span>
          <span className="text-[11px] font-bold tracking-widest uppercase">{pool.category} · Private · Invite Only</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h1 className="font-['Sora',sans-serif] font-extrabold text-[28px] leading-tight mb-1">
                {pool.title}
              </h1>
              <p className="text-white/60 text-[14px]">Admin Dashboard · Manage your contributors</p>
           </div>
           <div className="flex gap-2 shrink-0">
              <button 
                onClick={onCopyLink}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-[13px] font-bold transition-colors border border-white/20"
              >
                Share Link
              </button>
              <button 
                onClick={onExportCsv}
                className="bg-white text-[#1b4fd8] px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Export CSV
              </button>
           </div>
        </div>

        {/* Hero Stats (Admin Style) */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-xl overflow-hidden bg-white/5">
           <div className="p-4 border-r border-b md:border-b-0 border-white/10">
              <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-1">Raised So Far</p>
              <p className="text-[18px] font-bold text-[#6ee7b7]">{formatCurrency(pool.raised)}</p>
              <p className="text-[10px] text-white/40">of {formatCurrency(pool.target)} target</p>
           </div>
           <div className="p-4 border-r border-b md:border-b-0 border-white/10">
              <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-1">Contributors</p>
              <p className="text-[18px] font-bold text-white">{pool.paidCount}</p>
              <p className="text-[10px] text-white/40">of {pool.totalMembers} members</p>
           </div>
           <div className="p-4 border-r border-white/10">
              <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-1">Per Person</p>
              <p className="text-[18px] font-bold text-white">{pool.perPerson}</p>
              <p className="text-[10px] text-white/40">fixed contribution</p>
           </div>
           <div className="p-4">
              <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-1">Deadline</p>
              <p className="text-[18px] font-bold text-[#fcd34d]">{pool.daysLeft} Days Left</p>
              <p className="text-[10px] text-white/40">Closes {pool.closesDate}</p>
           </div>
        </div>
      </div>

      {/* Progress Bar */}
      <section className="bg-white border border-[#e5e8ef] rounded-2xl overflow-hidden shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-[20px] font-extrabold text-[#1a1f2e]">{formatCurrency(pool.raised)} raised</h2>
            <p className="text-xs text-[#6b7280] mt-1">{pool.pendingCount} people yet to pay</p>
          </div>
          <div className="bg-[#eef3ff] text-[#1b4fd8] px-3 py-1 rounded-full text-[13px] font-bold">{progressPercentage}% funded</div>
        </div>
        <div className="h-2.5 w-full bg-[#f4f5f7] rounded-full overflow-hidden mb-2">
          <div className="h-full bg-gradient-to-r from-[#1b4fd8] to-[#5b8ef0] transition-all duration-1000 ease-out" style={{ width: `${progressPercentage}%` }} />
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border border-[#e5e8ef] rounded-2xl overflow-hidden shadow-sm">
        <div className="flex border-b border-[#e5e8ef]">
          {(["members", "activity", "settings", "danger"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3.5 text-[13px] font-bold transition-colors relative ${
                activeTab === tab
                  ? tab === "danger" ? "text-[#dc2626]" : "text-[#1b4fd8]"
                  : "text-[#6b7280] hover:text-[#1a1f2e]"
              }`}
            >
              {tab === "members" ? `Members (${pool.totalMembers})` : tab === "activity" ? "Activity" : tab === "settings" ? "Settings" : "Danger Zone"}
              {activeTab === tab && (
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${tab === "danger" ? "bg-[#dc2626]" : "bg-[#1b4fd8]"}`} />
              )}
            </button>
          ))}
        </div>

        {/* Members Tab */}
        {activeTab === "members" && (
          <div>
            <div className="p-4 border-b border-[#e5e8ef] flex flex-wrap items-center justify-between gap-2 bg-gray-50/50">
              <div className="flex items-center gap-1.5">
                <span className="bg-[#f4f5f7] text-[#12b76a] text-[10px] font-bold px-2 py-0.5 rounded-full">{pool.paidCount} Paid</span>
                <span className="bg-[#f4f5f7] text-[#f79009] text-[10px] font-bold px-2 py-0.5 rounded-full">{pool.pendingCount} Pending</span>
                <span className="bg-[#f4f5f7] text-[#1b4fd8] text-[10px] font-bold px-2 py-0.5 rounded-full">{pool.expectedCount} Expected</span>
              </div>
              <div className="flex bg-[#f4f5f7] p-1 rounded-full text-[12px] font-semibold">
                {(["all", "paid", "pending", "expected"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 rounded-full transition-all ${filter === f ? "bg-white text-[#1b4fd8] shadow-sm" : "text-[#6b7280]"}`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="divide-y divide-[#e5e8ef] max-h-[500px] overflow-y-auto">
              {filteredMembers.map((member, idx) => (
                <div key={idx} onClick={() => openDrawer(member)} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold" style={{ backgroundColor: member.bgColor }}>
                      {member.initials}
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-[14px] font-semibold text-[#1a1f2e]">
                        <span>{member.name}</span>
                        {member.isCreator ? (
                          <span className="rounded-full bg-[#1b4fd8] px-2 py-0.5 text-[10px] font-bold text-white">
                            You
                          </span>
                        ) : null}
                      </p>
                      <p className="text-[11px] text-[#6b7280]">{member.info}</p>
                    </div>
                  </div>
                  <div className={`text-[11px] font-bold px-3 py-1 rounded-full ${member.isCreator ? "bg-[#eef3ff] text-[#1b4fd8]" : member.status === "paid" ? "bg-success-bg text-success" : member.status === "expected" ? "bg-blue-50 text-[#1b4fd8]" : "bg-orange-50 text-warning"}`}>
                    {member.isCreator ? "Creator" : member.status === "paid" ? "Paid ✓" : member.status === "expected" ? "Expected" : "Pending"}
                  </div>
                </div>
              ))}
              {filteredMembers.length === 0 && (
                <div className="p-12 text-center text-[#6b7280] text-sm">No members found matching this filter.</div>
              )}
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === "activity" && (
          <div className="divide-y divide-[#e5e8ef] max-h-[500px] overflow-y-auto">
            {pool.activities.length > 0 ? pool.activities.map((activity, idx) => (
              <div key={idx} className="p-4 flex items-start gap-3">
                <div className="size-2.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: activity.dotColor }} />
                <div className="flex-1">
                  <p className={`text-[13px] text-[#1a1f2e] ${activity.isBold ? "font-bold" : ""}`}>{activity.mainText}</p>
                  <p className="text-[11px] text-[#6b7280] mt-0.5">{activity.timeText}</p>
                </div>
              </div>
            )) : (
              <div className="p-12 text-center text-[#6b7280] text-sm">No activity yet.</div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h3 className="text-[15px] font-bold text-[#1a1f2e]">⚙️ Pool Settings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f4f5f7] rounded-xl p-4">
                  <p className="text-[11px] font-bold text-[#6b7280] uppercase tracking-widest mb-1">Per Person Amount</p>
                  <p className="text-[16px] font-bold text-[#1a1f2e]">
                    {pool.settings?.perPersonAmount 
                      ? `₦${formatNumberWithCommas(pool.settings.perPersonAmount)}` 
                      : pool.perPerson}
                  </p>
                </div>
                <div className="bg-[#f4f5f7] rounded-xl p-4">
                  <p className="text-[11px] font-bold text-[#6b7280] uppercase tracking-widest mb-1">Deadline</p>
                  <p className="text-[16px] font-bold text-[#1a1f2e]">{pool.settings?.deadline || pool.closesDate}</p>
                </div>
                <div className="bg-[#f4f5f7] rounded-xl p-4">
                  <p className="text-[11px] font-bold text-[#6b7280] uppercase tracking-widest mb-1">Status</p>
                  <p className="text-[16px] font-bold text-[#1a1f2e] capitalize">{pool.settings?.status || "active"}</p>
                </div>
                <div className="bg-[#f4f5f7] rounded-xl p-4">
                  <p className="text-[11px] font-bold text-[#6b7280] uppercase tracking-widest mb-1">Auto Reminders</p>
                  <p className="text-[16px] font-bold text-[#1a1f2e]">{pool.settings?.autoReminders ? "On" : "Off"}</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#f4f5f7] rounded-xl p-4">
                <div>
                  <p className="text-[13px] font-bold text-[#1a1f2e]">Take All at Close</p>
                  <p className="text-[11px] text-[#6b7280]">Withdraw all funds when pool closes</p>
                </div>
                <span className={`text-[12px] font-bold px-3 py-1 rounded-full ${pool.settings?.takeAllAtClose ? "bg-success-bg text-success" : "bg-[#f4f5f7] text-[#6b7280] border border-[#e5e8ef]"}`}>
                  {pool.settings?.takeAllAtClose ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>

            {/* Reminder Card */}
            <div className="bg-[#eef3ff] border border-[rgba(27,79,216,0.12)] p-5 rounded-xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">📣</span>
                <h3 className="text-[14px] font-bold text-[#1a1f2e]">Send Reminders</h3>
              </div>
              <p className="text-[12px] text-[#1340b8]/80 leading-relaxed">Send a notification to all {pool.pendingCount} pending members.</p>
              <button onClick={onSendReminders} className="bg-[#1b4fd8] text-white font-bold py-3 rounded-xl text-[13px] hover:bg-[#0f2fa8] transition-colors shadow-lg shadow-blue-500/20">Send Group Reminder</button>
            </div>

            {/* Pool Link */}
            <div className="border border-[#e5e8ef] p-5 rounded-xl flex flex-col gap-3">
              <h3 className="text-[14px] font-bold text-[#1a1f2e]">🔗 Pool Link</h3>
              <div className="bg-[#f4f5f7] p-3 rounded-xl flex items-center justify-between gap-3">
                <span className="text-[12px] font-medium text-[#1a1f2e] truncate">{pool.poolLink.replace("/p/", "poolfi.app/")}</span>
                <button onClick={onCopyLink} className="bg-[#1b4fd8] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shrink-0">Copy</button>
              </div>
            </div>
          </div>
        )}

        {/* Danger Zone Tab */}
        {activeTab === "danger" && (
          <div className="p-6 flex flex-col gap-5">
            {/* Pool Controls */}
            <div className="border-2 border-[#dc2626]/20 rounded-xl p-5 bg-red-50/50">
              <h3 className="text-[15px] font-bold text-[#dc2626] mb-1">⚠ Pool Controls</h3>
              <p className="text-[12px] text-[#6b7280] mb-4">Use these carefully. Closing the pool releases funds. Cancelling returns all contributions.</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={onClosePool}
                  className="bg-[#1b4fd8] text-white font-bold py-3 rounded-xl text-[13px] hover:bg-[#0f2fa8] transition-colors flex items-center justify-center gap-2"
                >
                  ✅ Close Pool &amp; Withdraw
                </button>
                <button
                  onClick={onCancelPool}
                  className="border-2 border-[#dc2626]/30 text-[#dc2626] font-bold py-3 rounded-xl text-[13px] hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                >
                  ✕ Cancel Pool &amp; Refund All
                </button>
              </div>
            </div>

            {/* Pause Contributions */}
            <div className="border-2 border-[#f79009]/20 rounded-xl p-5 bg-orange-50/50">
              <h3 className="text-[15px] font-bold text-[#f79009] mb-1">Pause contributions</h3>
              <p className="text-[12px] text-[#6b7280] mb-4">Temporarily stop accepting new contributions. Existing contributions are safe.</p>
              <button
                onClick={onPausePool}
                className={`w-full font-bold py-3 rounded-xl text-[13px] transition-colors ${
                  pool.settings?.paused
                    ? "bg-[#12b76a] text-white hover:bg-[#0f9e5c]"
                    : "bg-[#f79009] text-white hover:bg-[#e07f08]"
                }`}
              >
                {pool.settings?.paused ? "Resume contributions" : "Pause contributions"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Slide-out Drawer Overlay */}
      {selectedMember && (
        <>
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={closeDrawer}
          />
          <div
            className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Drawer Header */}
            <div className="bg-[#1b4fd8] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 size-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <button onClick={closeDrawer} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full size-8 flex items-center justify-center text-white transition-colors z-10">
                ✕
              </button>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3 text-white/60 uppercase text-[10px] font-bold tracking-widest">
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Pool closes in
                </div>
                <p className="text-[28px] font-extrabold">{pool.daysLeft} days left</p>
              </div>
            </div>

            {/* Pool Info */}
            <div className="p-6 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#6b7280] uppercase tracking-widest">
                <span>🔒</span>
                <span>{pool.category} · Private</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-[#1a1f2e] leading-tight">{pool.title}</h3>
              <p className="text-[13px] text-[#6b7280]">You&apos;ve been invited to contribute</p>

              <div className="flex flex-col gap-3 border-t border-[#e5e8ef] pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-[#6b7280]">Your contribution</span>
                  <span className="text-[14px] font-bold text-[#1a1f2e]">{pool.perPerson} (Fixed)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-[#6b7280]">Creator</span>
                  <span className="text-[14px] font-bold text-[#1a1f2e]">{pool.adminName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-[#6b7280]">Deadline</span>
                  <span className="text-[14px] font-bold text-[#1a1f2e]">{pool.closesDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-[#6b7280]">Members so far</span>
                  <span className="text-[14px] font-bold text-[#1a1f2e]">{pool.totalMembers} joined</span>
                </div>
              </div>

              {/* Selected Member Badge */}
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
                <div className="size-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold" style={{ backgroundColor: selectedMember.bgColor }}>
                  {selectedMember.initials}
                </div>
                <div className="flex-1">
                  <p className="flex items-center gap-2 text-[14px] font-semibold text-[#1a1f2e]">
                    <span>{selectedMember.name}</span>
                    {selectedMember.isCreator ? (
                      <span className="rounded-full bg-[#1b4fd8] px-2 py-0.5 text-[10px] font-bold text-white">
                        You
                      </span>
                    ) : null}
                  </p>
                  <p className="text-[11px] text-[#6b7280]">{selectedMember.info}</p>
                </div>
                <div className={`text-[11px] font-bold px-3 py-1 rounded-full ${selectedMember.isCreator ? "bg-[#eef3ff] text-[#1b4fd8]" : selectedMember.status === "paid" ? "bg-success-bg text-success" : selectedMember.status === "expected" ? "bg-blue-50 text-[#1b4fd8]" : "bg-orange-50 text-warning"}`}>
                  {selectedMember.isCreator ? "Creator" : selectedMember.status === "paid" ? "Paid ✓" : selectedMember.status === "expected" ? "Expected" : "Pending"}
                </div>
              </div>

              {/* Actions */}
              <div className="rounded-xl border border-[#1b4fd8]/15 bg-[#eef3ff] p-4">
                <p className="text-[13px] font-bold text-[#1a1f2e]">
                  {selectedMember.isCreator ? "Creator account" : "Member slot"}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#1340b8]/80">
                  {selectedMember.isCreator
                    ? "This is the only account with admin rights for this pool."
                    : "This person should use the shared pool link to confirm and claim this member slot."}
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-[#eef3ff] border border-[rgba(27,79,216,0.12)] p-4 rounded-xl">
                <p className="text-[13px] font-semibold text-[#1340b8] mb-3">What happens when you join?</p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#1b4fd8] text-white size-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</div>
                    <p className="text-[12px] text-[#1340b8]/80 leading-relaxed">The pool is saved in your My Pools tab — no link needed next time.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#1b4fd8] text-white size-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
                    <p className="text-[12px] text-[#1340b8]/80 leading-relaxed">You appear in the member list as Joined (Pending) so the admin knows you&apos;re aware.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#1b4fd8] text-white size-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</div>
                    <p className="text-[12px] text-[#1340b8]/80 leading-relaxed">You can pay anytime before the deadline. The admin can send you a reminder if needed.</p>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="flex flex-col gap-2.5 border-t border-[#e5e8ef] pt-4">
                <p className="text-[13px] font-bold text-[#1a1f2e]">📣 Share this pool</p>
                <button onClick={handleWhatsApp} className="flex items-center gap-3 p-3 border border-[#e5e8ef] rounded-xl hover:bg-gray-50 transition-colors w-full">
                  <span className="text-lg">📲</span>
                  <span className="text-[13px] font-semibold text-[#1a1f2e]">Share on WhatsApp</span>
                </button>
                <button onClick={handleCopyLink} className="flex items-center gap-3 p-3 border border-[#e5e8ef] rounded-xl hover:bg-gray-50 transition-colors w-full">
                  <span className="text-lg">🔗</span>
                  <span className="text-[13px] font-semibold text-[#1a1f2e]">{copied ? "Copied!" : "Copy Pool Link"}</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
