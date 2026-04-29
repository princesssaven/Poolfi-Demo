"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { formatCurrency } from "@/src/lib/format-utils";

// Party icon SVG paths from the Replicate design
const svgPaths = {
  p16cf6180: "M12.2587 23.3797L9.07285 30.4098C5.05353 39.2794 3.04387 43.714 5.23725 45.8654C7.43061 48.0165 11.9523 46.0456 20.9958 42.1035L28.1638 38.9789C33.6182 36.6014 36.3454 35.4125 36.7794 33.1203C37.2134 30.828 35.103 28.7583 30.8826 24.619L26.9002 20.7132C22.6796 16.5738 20.5693 14.5041 18.2321 14.9297C15.8949 15.3553 14.6828 18.0301 12.2587 23.3797Z",
  p23717780: "M14.0833 22.3125L29.2499 37.1875M9.74993 32.9375L18.4166 41.4375",
  p293a8400: "M30.7609 4.25005C31.6254 5.66672 32.3172 9.35005 28.1668 12.75",
  p5122b80: "M47.6666 20.8309C46.2221 19.9828 42.4666 19.3044 38.9999 23.3751",
};

interface JoinPoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  poolName?: string;
  poolDescription?: string;
  adminName?: string;
  perPersonAmount?: number;
  walletBalance?: number;
  userName?: string;
  onContribute?: () => void;
  onBackToDashboard?: () => void;
}

// ── Step 1: Identity Verification Form ──
function IdentityStep({
  poolName,
  poolDescription,
  adminName,
  onConfirm,
}: {
  poolName: string;
  poolDescription: string;
  adminName: string;
  onConfirm: () => void;
}) {
  const [phone, setPhone] = useState("");
  const [matric, setMatric] = useState("");

  return (
    <div className="flex flex-col gap-[18px] p-[11px]">
      {/* Header */}
      <div className="relative shrink-0 w-full border-b border-[#e5e8ef] pb-4 pt-2 px-3">
        <div className="flex flex-col gap-2 items-start">
          <p className="font-['Sora',sans-serif] font-bold text-[#1a1f2e] text-[16px] leading-tight">
            {poolName}
          </p>
          <div className="text-[#6b7280] text-[13px] leading-snug font-['DM_Sans',sans-serif]">
            <p className="mb-1">{poolDescription}</p>
            <p>Admin by {adminName}</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-[14px] px-3 pb-2">
        {/* Phone Number Field */}
        <div className="flex flex-col gap-[6px] w-full">
          <div className="flex gap-[5px] items-center">
            <label className="font-['DM_Sans',sans-serif] font-semibold text-[#1a1f2e] text-[12px]">
              Phone Number
            </label>
            <div className="bg-[#eef3ff] flex items-center px-2 py-0.5 rounded-full">
              <span className="font-['DM_Sans',sans-serif] font-bold text-[#f04438] text-[10px]">
                Required
              </span>
            </div>
          </div>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your Phone number"
            className="w-full bg-white border border-[#e5e8ef] rounded-[9px] px-[14px] py-[11px] text-[13px] text-[#1a1f2e] placeholder-[#c4c9d4] focus:outline-none focus:border-[#1b4fd8] transition-colors font-['DM_Sans',sans-serif]"
          />
        </div>

        {/* Matric Number Field */}
        <div className="flex flex-col gap-[6px] w-full">
          <div className="flex gap-[5px] items-center">
            <label className="font-['DM_Sans',sans-serif] font-semibold text-[#1a1f2e] text-[12px]">
              Matric Number
            </label>
            <div className="bg-[#eef3ff] flex items-center px-2 py-0.5 rounded-full">
              <span className="font-['DM_Sans',sans-serif] font-bold text-[#f04438] text-[10px]">
                Required
              </span>
            </div>
          </div>
          <input
            type="text"
            value={matric}
            onChange={(e) => setMatric(e.target.value)}
            placeholder="e.g. CSC/2022/045"
            className="w-full bg-white border border-[#e5e8ef] rounded-[9px] px-[14px] py-[11px] text-[13px] text-[#1a1f2e] placeholder-[#c4c9d4] focus:outline-none focus:border-[#1b4fd8] transition-colors font-['DM_Sans',sans-serif]"
          />
        </div>

        {/* Confirm Button */}
        <button
          onClick={onConfirm}
          className="bg-[#1b4fd8] text-white font-['DM_Sans',sans-serif] font-bold text-[15px] rounded-[10px] w-full py-[12px] mt-2 hover:bg-[#0f2fa8] transition-colors active:scale-[0.98] tracking-[-0.2px]"
        >
          Confirm that&apos;s me
        </button>

        {/* Secure Note */}
        <div className="flex items-center justify-center mt-1">
          <p className="text-[#6b7280] text-[11px] font-['DM_Sans',sans-serif]">
            🔒 Your details are only used to verify your identity
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Step 2: Confirmation & Contribute ──
function ConfirmedStep({
  userName,
  walletBalance,
  perPersonAmount,
  onContribute,
  onBackToDashboard,
}: {
  userName: string;
  walletBalance: number;
  perPersonAmount: number;
  onContribute: () => void;
  onBackToDashboard: () => void;
}) {
  return (
    <div className="flex flex-col gap-[18px] items-center p-[11px]">
      {/* Party Icon + Message */}
      <div className="flex flex-col gap-[12px] items-center justify-center py-2">
        <div className="bg-[#eef3ff] h-[59px] rounded-[29px] w-[63px] relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[51px]">
            <svg
              className="absolute inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 52 51"
            >
              <path d={svgPaths.p16cf6180} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d={svgPaths.p23717780} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d="M34.6668 17L41.1668 10.625" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d={svgPaths.p293a8400} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d={svgPaths.p5122b80} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d="M39.002 4.25005V4.29338" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d="M47.6689 12.75V12.7934" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d="M45.502 27.625V27.6683" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
              <path d="M23.8352 6.37502V6.41836" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
            </svg>
          </div>
        </div>
        <p className="font-['Sora',sans-serif] font-bold text-[#1a1f2e] text-[15px] text-center leading-[21px]">
          You are in
        </p>
        <p className="font-['Inter',sans-serif] text-[#6b7280] text-[12px] text-center leading-[19px] max-w-[296px]">
          Welcome {userName}, Make your contribution to the group
        </p>
      </div>

      {/* Wallet Balance + Actions */}
      <div className="flex flex-col gap-[14px] w-full px-3 pb-2">
        {/* Wallet Balance Row */}
        <div className="bg-[#f4f5f7] rounded-[10px] w-full">
          <div className="flex items-center justify-between px-[14px] py-[12px]">
            <span className="font-['DM_Sans',sans-serif] text-[#6b7280] text-[12px]">
              Your PoolFi Balance
            </span>
            <span className="font-['DM_Sans',sans-serif] font-bold text-[#12b76a] text-[14px]">
              {formatCurrency(walletBalance)}
            </span>
          </div>
        </div>

        {/* Contribute Button */}
        <button
          onClick={onContribute}
          className="bg-[#1b4fd8] text-white font-['DM_Sans',sans-serif] font-bold text-[15px] rounded-[10px] w-full py-[12px] hover:bg-[#0f2fa8] transition-colors active:scale-[0.98] tracking-[-0.2px]"
        >
          Contribute {formatCurrency(perPersonAmount)} →
        </button>

        {/* Back to Dashboard */}
        <button
          onClick={onBackToDashboard}
          className="bg-white border border-[#e5e8ef] text-[#6b7280] font-['DM_Sans',sans-serif] font-semibold text-[14px] rounded-[10px] w-full py-[13px] hover:bg-gray-50 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

// ── Main Modal ──
export default function JoinPoolModal({
  isOpen,
  onClose,
  poolName = "Princess Saven",
  poolDescription = "Amaka's wedding is coming up and we need to surprise her",
  adminName = "Chidi Nwosu..",
  perPersonAmount = 1000,
  walletBalance = 31500,
  userName = "Princess Saven",
  onContribute,
  onBackToDashboard,
}: JoinPoolModalProps) {
  const [step, setStep] = useState<"identity" | "confirmed">("identity");

  if (!isOpen) return null;

  const handleConfirm = () => {
    setStep("confirmed");
  };

  const handleClose = () => {
    setStep("identity");
    onClose();
  };

  const handleContribute = () => {
    if (onContribute) {
      onContribute();
    }
    handleClose();
  };

  const handleBackToDashboard = () => {
    if (onBackToDashboard) {
      onBackToDashboard();
    }
    handleClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-[16px] w-full max-w-[320px] mx-4 shadow-xl overflow-hidden">
        {/* Border decoration */}
        <div
          aria-hidden="true"
          className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]"
        />

        {step === "identity" ? (
          <IdentityStep
            poolName={poolName}
            poolDescription={poolDescription}
            adminName={adminName}
            onConfirm={handleConfirm}
          />
        ) : (
          <ConfirmedStep
            userName={userName}
            walletBalance={walletBalance}
            perPersonAmount={perPersonAmount}
            onContribute={handleContribute}
            onBackToDashboard={handleBackToDashboard}
          />
        )}
      </div>
    </div>,
    document.body
  );
}
