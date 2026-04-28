"use client";

import { useState } from "react";
import svgPaths from "@/src/lib/design-system/svg-paths";

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
  name: string;
  status: "paid" | "pending";
}

interface AdminPoolViewProps {
  pool: {
    id: string;
    title: string;
    category: string;
    closesDate: string;
    daysLeft: number;
    raised: number;
    target: number;
    perPerson: string;
    paidCount: number;
    pendingCount: number;
    totalMembers: number;
    members: PoolMember[];
    activities: PoolActivityItem[];
    poolLink: string;
  };
  onExportCsv: () => void;
  onSendReminders: () => void;
  onCopyLink: () => void;
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function AdminPoolView({ 
  pool, 
  onExportCsv, 
  onSendReminders, 
  onCopyLink 
}: AdminPoolViewProps) {
  const [filter, setFilter] = useState<"all" | "paid" | "pending">("all");

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <section className="bg-white border border-[#e5e8ef] rounded-2xl overflow-hidden shadow-sm p-6">
             <div className="flex justify-between items-center mb-6">
                <div>
                   <h2 className="text-[20px] font-extrabold text-[#1a1f2e]">{formatCurrency(pool.raised)} raised</h2>
                   <p className="text-xs text-[#6b7280] mt-1">{pool.pendingCount} people yet to pay</p>
                </div>
                <div className="bg-[#eef3ff] text-[#1b4fd8] px-3 py-1 rounded-full text-[13px] font-bold">{progressPercentage}% funded</div>
             </div>
             <div className="h-2.5 w-full bg-[#f4f5f7] rounded-full overflow-hidden mb-2">
                <div 
                   className="h-full bg-gradient-to-r from-[#1b4fd8] to-[#5b8ef0] transition-all duration-1000 ease-out" 
                   style={{ width: `${progressPercentage}%` }} 
                />
             </div>
          </section>

          {/* Members List Section */}
          <section className="bg-white border border-[#e5e8ef] rounded-2xl overflow-hidden shadow-sm flex flex-col">
             <div className="p-5 border-b border-[#e5e8ef] flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-3">
                   <h3 className="font-bold text-[#1a1f2e] text-[15px]">Contributors</h3>
                   <div className="flex gap-1.5">
                      <span className="bg-[#f4f5f7] text-[#12b76a] text-[10px] font-bold px-2 py-0.5 rounded-full">{pool.paidCount} Paid</span>
                      <span className="bg-[#f4f5f7] text-[#f79009] text-[10px] font-bold px-2 py-0.5 rounded-full">{pool.pendingCount} Pending</span>
                   </div>
                </div>
                <div className="flex bg-[#f4f5f7] p-1 rounded-full text-[12px] font-semibold">
                   {(["all", "paid", "pending"] as const).map((f) => (
                      <button
                         key={f}
                         onClick={() => setFilter(f)}
                         className={`px-4 py-1 rounded-full transition-all ${filter === f ? "bg-white text-[#1b4fd8] shadow-sm" : "text-[#6b7280]"}`}
                      >
                         {f.charAt(0).toUpperCase() + f.slice(1)}
                      </button>
                   ))}
                </div>
             </div>

             <div className="divide-y divide-[#e5e8ef] max-h-[500px] overflow-y-auto">
                {filteredMembers.map((member, idx) => (
                   <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                         <div 
                           className="size-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold"
                           style={{ backgroundColor: member.bgColor }}
                         >
                            {member.initials}
                         </div>
                         <div>
                            <p className="text-[14px] font-semibold text-[#1a1f2e]">{member.name}</p>
                            <p className="text-[11px] text-[#6b7280]">{member.info}</p>
                         </div>
                      </div>
                      <div className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                         member.status === "paid" ? "bg-success-bg text-success" : "bg-orange-50 text-warning"
                      }`}>
                         {member.status === "paid" ? "Paid ✓" : "Pending"}
                      </div>
                   </div>
                ))}
                {filteredMembers.length === 0 && (
                   <div className="p-12 text-center text-[#6b7280] text-sm">
                      No members found matching this filter.
                   </div>
                )}
             </div>
          </section>
        </div>

        {/* Sidebar / Actions Column */}
        <div className="flex flex-col gap-6">
           {/* Reminder Card */}
           <div className="bg-[#eef3ff] border border-[rgba(27,79,216,0.12)] p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-2">
                 <span className="text-xl">📣</span>
                 <h3 className="text-[14px] font-bold text-[#1a1f2e]">Send Reminders</h3>
              </div>
              <p className="text-[12px] text-[#1340b8]/80 leading-relaxed">
                Send a notification to all {pool.pendingCount} pending members who haven't contributed yet.
              </p>
              <button 
                onClick={onSendReminders}
                className="bg-[#1b4fd8] text-white font-bold py-3 rounded-xl text-[13px] hover:bg-[#0f2fa8] transition-colors shadow-lg shadow-blue-500/20"
              >
                Send Group Reminder
              </button>
           </div>

           {/* Quick Settings / Link Share */}
           <div className="bg-white border border-[#e5e8ef] p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
              <h3 className="text-[14px] font-bold text-[#1a1f2e]">🔗 Pool Link</h3>
              <div className="bg-[#f4f5f7] p-3 rounded-xl flex items-center justify-between gap-3">
                 <span className="text-[12px] font-medium text-[#1a1f2e] truncate">{pool.poolLink.replace("/p/", "poolfi.app/")}</span>
                 <button 
                    onClick={onCopyLink}
                    className="bg-[#1b4fd8] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shrink-0"
                 >
                    Copy
                 </button>
              </div>
              <p className="text-[11px] text-[#6b7280]">Share this link with your members so they can contribute directly from their wallets.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
