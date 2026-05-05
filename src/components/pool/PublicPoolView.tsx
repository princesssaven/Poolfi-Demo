"use client";

import { useState } from "react";
import Link from "next/link";

interface PublicPoolMember {
  bgColor: string;
  info: string;
  initials: string;
  isCreator?: boolean;
  name: string;
  status: "paid" | "pending" | "expected";
}

interface PublicPoolData {
  adminName?: string;
  category: string;
  closesDate: string;
  daysLeft: number;
  description: string;
  expectedCount?: number;
  id: string;
  isCompleted: boolean;
  members?: PublicPoolMember[];
  name: string;
  paidCount?: number;
  pendingCount?: number;
  perPersonAmount: number;
  poolLink?: string;
  raised: number;
  targetAmount: number;
  totalMembers: number;
}

interface PublicPoolViewProps {
  pool: PublicPoolData;
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function PublicPoolView({ pool }: PublicPoolViewProps) {
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<"all" | "paid" | "pending" | "expected">("all");
  const [selectedMember, setSelectedMember] = useState<PublicPoolMember | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (member: PublicPoolMember) => {
    setSelectedMember(member);
    setDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelectedMember(null), 300);
  };

  const poolPath = pool.poolLink ?? `/p/${pool.id}`;
  const fullUrl =
    typeof window === "undefined"
      ? `https://poolfi-pre-mvpp.vercel.app${poolPath}`
      : `${window.location.origin}${poolPath}`;
  const members = pool.members ?? [];
  const paidCount = pool.paidCount ?? 0;
  const pendingCount = pool.pendingCount ?? 0;
  const expectedCount = pool.expectedCount ?? Math.max(pool.totalMembers - paidCount - pendingCount, 0);
  const progressPercentage =
    pool.targetAmount > 0
      ? Math.min(100, Math.round((pool.raised / pool.targetAmount) * 100))
      : 0;

  const filteredMembers = members.filter((member) => {
    if (filter === "all") return true;
    return member.status === filter;
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard failures. The page remains usable.
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fc] px-3 py-5 font-['Inter',sans-serif] sm:px-4">
      <main className="mx-auto flex w-full max-w-[1028px] flex-col gap-6">
        {copied ? (
          <div className="rounded-[14px] border border-[#b8c9ff] bg-[#eef3ff] px-4 py-3 text-[12px] font-medium text-[#003bc4]">
            Pool link copied.
          </div>
        ) : null}

        <section className="relative overflow-hidden rounded-2xl bg-[#1b4fd8] p-6 text-white shadow-lg shadow-[#1b4fd8]/15">
          <div className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5" />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1">
                  <span className="text-[12px]">🔒</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest">
                    {pool.category} · Private · Invite Only
                  </span>
                </div>
                <h1 className="mb-1 font-['Sora',sans-serif] text-[28px] font-extrabold leading-tight">
                  {pool.name}
                </h1>
                <p className="text-[14px] text-white/60">
                  {pool.adminName ? `Created by ${pool.adminName}` : "You've been invited to contribute"}
                </p>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-white/20"
                >
                  {copied ? "Copied" : "Share Link"}
                </button>
                {!pool.isCompleted ? (
                  <Link
                    href={`/sign-in?next=${encodeURIComponent(`/impact-contribution?poolId=${pool.id}`)}`}
                    className="rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-[#1b4fd8] shadow-lg transition-colors hover:bg-gray-100"
                  >
                    Join Pool
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 md:grid-cols-4">
              <div className="border-b border-r border-white/10 p-4 md:border-b-0">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">Raised So Far</p>
                <p className="text-[18px] font-bold text-[#6ee7b7]">{formatCurrency(pool.raised)}</p>
                <p className="text-[10px] text-white/40">of {formatCurrency(pool.targetAmount)} target</p>
              </div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">Contributors</p>
                <p className="text-[18px] font-bold">{paidCount}</p>
                <p className="text-[10px] text-white/40">of {pool.totalMembers} members</p>
              </div>
              <div className="border-r border-white/10 p-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">Per Person</p>
                <p className="text-[18px] font-bold">{formatCurrency(pool.perPersonAmount)} per person</p>
                <p className="text-[10px] text-white/40">fixed contribution</p>
              </div>
              <div className="p-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">Deadline</p>
                <p className="text-[18px] font-bold text-[#fcd34d]">
                  {pool.isCompleted ? "Closed" : `${pool.daysLeft} Days Left`}
                </p>
                <p className="text-[10px] text-white/40">Closes {pool.closesDate}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#e5e8ef] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-[20px] font-extrabold text-[#1a1f2e]">{formatCurrency(pool.raised)} raised</h2>
              <p className="mt-1 text-xs text-[#6b7280]">{pendingCount} people yet to pay</p>
            </div>
            <div className="rounded-full bg-[#eef3ff] px-3 py-1 text-[13px] font-bold text-[#1b4fd8]">
              {progressPercentage}% funded
            </div>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#f4f5f7]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#1b4fd8] to-[#5b8ef0] transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#e5e8ef] bg-white shadow-sm">
          <div className="flex border-b border-[#e5e8ef]">
            <div className="relative flex-1 py-3.5 text-center text-[13px] font-bold text-[#1b4fd8]">
              Members ({pool.totalMembers})
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1b4fd8]" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e5e8ef] bg-gray-50/50 p-4">
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-[#f4f5f7] px-2 py-0.5 text-[10px] font-bold text-[#12b76a]">{paidCount} Paid</span>
              <span className="rounded-full bg-[#f4f5f7] px-2 py-0.5 text-[10px] font-bold text-[#f79009]">{pendingCount} Pending</span>
              <span className="rounded-full bg-[#f4f5f7] px-2 py-0.5 text-[10px] font-bold text-[#1b4fd8]">{expectedCount} Expected</span>
            </div>
            <div className="flex rounded-full bg-[#f4f5f7] p-1 text-[12px] font-semibold">
              {(["all", "paid", "pending", "expected"] as const).map((statusFilter) => (
                <button
                  key={statusFilter}
                  type="button"
                  onClick={() => setFilter(statusFilter)}
                  className={`rounded-full px-3 py-1 transition-all ${
                    filter === statusFilter ? "bg-white text-[#1b4fd8] shadow-sm" : "text-[#6b7280]"
                  }`}
                >
                  {statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-[#e5e8ef]">
            {filteredMembers.map((member, index) => (
              <div key={`${member.name}-${index}`} className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => openDrawer(member)}>
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                    style={{ backgroundColor: member.bgColor }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[14px] font-semibold text-[#1a1f2e]">
                      <span>{member.name}</span>
                      {member.isCreator ? (
                        <span className="rounded-full bg-[#1b4fd8] px-2 py-0.5 text-[10px] font-bold text-white">
                          Admin
                        </span>
                      ) : null}
                    </p>
                    <p className="text-[11px] text-[#6b7280]">{member.info}</p>
                  </div>
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-[11px] font-bold ${
                    member.status === "paid"
                      ? "bg-success-bg text-success"
                      : member.status === "expected"
                        ? "bg-blue-50 text-[#1b4fd8]"
                        : "bg-orange-50 text-warning"
                  }`}
                >
                  {member.status === "paid" ? "Paid ✓" : member.status === "expected" ? "Expected" : "Pending"}
                </div>
              </div>
            ))}
            {filteredMembers.length === 0 ? (
              <div className="p-10 text-center text-sm text-[#6b7280]">No members found matching this filter.</div>
            ) : null}
          </div>
        </section>
      </main>

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
              <h3 className="text-[20px] font-extrabold text-[#1a1f2e] leading-tight">{pool.name}</h3>
              <p className="text-[13px] text-[#6b7280]">You&apos;ve been invited to contribute</p>

              <div className="flex flex-col gap-3 border-t border-[#e5e8ef] pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-[#6b7280]">Your contribution</span>
                  <span className="text-[14px] font-bold text-[#1a1f2e]">{formatCurrency(pool.perPersonAmount)} (Fixed)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-[#6b7280]">Creator</span>
                  <span className="text-[14px] font-bold text-[#1a1f2e]">{pool.adminName || "Creator"}</span>
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
                        Admin
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
                    ? "This is the creator account for this pool."
                    : "This person should use the shared pool link to confirm and claim this member slot."}
                </p>
              </div>

              {/* Join Button */}
              {!pool.isCompleted && !selectedMember.isCreator && (
                <div className="mt-4">
                  <Link
                    href={`/sign-in?next=${encodeURIComponent(`/impact-contribution?poolId=${pool.id}`)}`}
                    className="flex w-full items-center justify-center rounded-xl bg-[#1b4fd8] py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-[#0f2fa8]"
                  >
                    Contribute as this member
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
