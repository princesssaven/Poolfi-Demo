"use client";

import { useState } from "react";
import Link from "next/link";
import svgPaths from "@/src/lib/design-system/svg-paths";

interface PublicPoolData {
  category: string;
  closesDate: string;
  daysLeft: number;
  description: string;
  id: string;
  isCompleted: boolean;
  name: string;
  perPersonAmount: number;
  raised: number;
  targetAmount: number;
  totalMembers: number;
  adminName?: string;
  paidCount?: number;
  pendingCount?: number;
}

interface PublicPoolViewProps {
  pool: PublicPoolData;
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function PublicPoolView({ pool }: PublicPoolViewProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    return `poolfi-pre-mvpp.vercel.app/p/${pool.id}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${getFullUrl()}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleWhatsappShare = () => {
    const message = `Join my pool on PoolFi: https://${getFullUrl()}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const progressPercentage = pool.targetAmount > 0 
    ? Math.min(100, Math.round((pool.raised / pool.targetAmount) * 100))
    : 0;

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">

      <main className="relative">
        {/* Hero Section */}
        <div className="bg-[#1b4fd8] text-white px-[24px] py-[32px] md:px-[60px] lg:px-[120px] flex flex-col gap-4">
          <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.2)] px-4 py-1.5 rounded-full w-fit flex items-center gap-2">
            <span className="text-[12px]">🔒</span>
            <span className="text-[11px] font-bold tracking-widest uppercase">{pool.category} · Private · Invite Only</span>
          </div>
          <h1 className="font-['Sora',sans-serif] font-extrabold text-[32px] md:text-[40px] leading-tight max-w-4xl">
            {pool.name}
          </h1>
          <p className="text-[rgba(255,255,255,0.7)] text-[15px] font-light max-w-2xl">
            {pool.description || "No description provided."}
            {pool.adminName && <span className="block mt-1 font-medium text-white/90">Admin by {pool.adminName}</span>}
          </p>

          {/* Hero Stats */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden bg-[rgba(255,255,255,0.05)]">
             <div className="p-5 border-r border-b md:border-b-0 border-[rgba(255,255,255,0.1)]">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-1">Raised So Far</p>
                <p className="text-[20px] font-bold text-[#6ee7b7]">{formatCurrency(pool.raised)}</p>
                <p className="text-[11px] text-white/40 mt-1">of {formatCurrency(pool.targetAmount)} target</p>
             </div>
             <div className="p-5 border-r border-b md:border-b-0 border-[rgba(255,255,255,0.1)]">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-1">Contributors</p>
                <p className="text-[20px] font-bold text-white">{pool.totalMembers}</p>
                <p className="text-[11px] text-white/40 mt-1">people joined</p>
             </div>
             <div className="p-5 border-r border-[rgba(255,255,255,0.1)]">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-1">Per Person</p>
                <p className="text-[20px] font-bold text-white">{formatCurrency(pool.perPersonAmount)}</p>
                <p className="text-[11px] text-white/40 mt-1">fixed contribution</p>
             </div>
             <div className="p-5">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-1">Status</p>
                <p className="text-[20px] font-bold text-[#fcd34d]">{pool.isCompleted ? "Closed" : `${pool.daysLeft} Days Left`}</p>
                <p className="text-[11px] text-white/40 mt-1">{pool.isCompleted ? "Goal Reached" : `Closes ${pool.closesDate}`}</p>
             </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="px-[24px] py-[40px] md:px-[60px] lg:px-[120px] flex flex-col lg:flex-row gap-12">
          {/* Left Column: Progress and Info */}
          <div className="flex-1 flex flex-col gap-8">
            <section className="bg-white border border-[#e5e8ef] rounded-2xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-[22px] font-extrabold text-[#1a1f2e]">{formatCurrency(pool.raised)} raised</h2>
                   <div className="bg-[#eef3ff] text-[#1b4fd8] px-3 py-1 rounded-full text-[14px] font-bold">{progressPercentage}% funded</div>
                </div>
                <div className="h-[10px] w-full bg-[#f4f5f7] rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-[#1b4fd8] to-[#5b8ef0] transition-all duration-1000 ease-out" 
                    style={{ width: `${progressPercentage}%` }} 
                  />
                </div>
                <div className="flex justify-between text-[12px] text-[#6b7280]">
                   <span>{pool.totalMembers - (pool.paidCount || 0)} people yet to pay</span>
                   <span>Target: {formatCurrency(pool.targetAmount)}</span>
                </div>
              </div>
            </section>

            {/* Info Card */}
            <div className="bg-[#eef3ff] border border-[rgba(27,79,216,0.12)] p-5 rounded-2xl flex gap-4">
               <span className="text-xl">💡</span>
               <div className="flex flex-col gap-3">
                  <p className="text-[13px] font-semibold text-[#1340b8]">What happens when you join?</p>
                  <div className="flex items-start gap-3">
                     <div className="bg-[#1b4fd8] text-white size-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">1</div>
                     <p className="text-[12.5px] text-[#1340b8]/80 leading-relaxed">The pool is saved in your My Pools tab — no link needed next time.</p>
                  </div>
                  <div className="flex items-start gap-3">
                     <div className="bg-[#1b4fd8] text-white size-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">2</div>
                     <p className="text-[12.5px] text-[#1340b8]/80 leading-relaxed">You appear in the member list as Joined (Pending) so the admin knows you're aware.</p>
                  </div>
                  <div className="flex items-start gap-3">
                     <div className="bg-[#1b4fd8] text-white size-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">3</div>
                     <p className="text-[12.5px] text-[#1340b8]/80 leading-relaxed">You can pay anytime before the deadline. The admin can send you a reminder if needed.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Contribute Card and Share */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6">
            {/* Contribute Card */}
            <div className="bg-white border border-[#e5e8ef] rounded-2xl overflow-hidden shadow-lg sticky top-6">
               <div className="bg-[#1b4fd8] p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 size-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                     <div className="flex items-center gap-2 mb-2 text-white/70 uppercase text-[10px] font-bold tracking-widest">
                        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Goal Pool · Private
                     </div>
                     <h3 className="text-xl font-bold mb-1">Join this pool</h3>
                     <p className="text-white/60 text-xs">You've been invited to contribute</p>
                  </div>
               </div>
               <div className="p-6 flex flex-col gap-6">
                  <div>
                     <p className="text-[11px] font-bold text-[#6b7280] uppercase tracking-widest mb-3">Required amount</p>
                     <div className="bg-[#f4f5f7] border border-[#e5e8ef] p-4 rounded-xl flex items-center justify-between">
                        <span className="text-[20px] font-extrabold text-[#1a1f2e]">{formatCurrency(pool.perPersonAmount)}</span>
                        <span className="text-[11px] font-bold text-[#6b7280] uppercase">Per Person</span>
                     </div>
                  </div>

                  {pool.isCompleted ? (
                    <div className="bg-gray-100 text-gray-500 font-bold rounded-xl py-4 text-center">
                       Pool Closed
                    </div>
                  ) : (
                    <Link
                      href={`/sign-in?next=${encodeURIComponent(`/impact-contribution?poolId=${pool.id}`)}`}
                      className="bg-[#1b4fd8] text-white font-bold py-4 rounded-xl text-center hover:bg-[#0f2fa8] transition-colors shadow-blue-500/20 shadow-lg"
                    >
                      Contribute Now
                    </Link>
                  )}
                  
                  <p className="text-[11px] text-[#6b7280] text-center italic">
                    You'll be asked to sign in or create a PoolFi account to pay.
                  </p>
               </div>
            </div>

            {/* Share Card */}
            <div className="bg-white border border-[#e5e8ef] p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
               <h3 className="text-[13px] font-bold text-[#1a1f2e]">📣 Share this pool</h3>
               <div className="flex flex-col gap-2">
                  <button 
                    onClick={handleWhatsappShare}
                    className="flex items-center gap-3 p-3 border border-[#e5e8ef] rounded-xl hover:bg-gray-50 transition-colors w-full"
                  >
                     <span className="text-lg">📲</span>
                     <span className="text-[13px] font-semibold text-[#1a1f2e]">Share on WhatsApp</span>
                  </button>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-3 p-3 border border-[#e5e8ef] rounded-xl hover:bg-gray-50 transition-colors w-full"
                  >
                     <span className="text-lg">🔗</span>
                     <span className="text-[13px] font-semibold text-[#1a1f2e]">{copied ? "Copied!" : "Copy Pool Link"}</span>
                  </button>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
