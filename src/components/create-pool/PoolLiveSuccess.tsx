"use client";

import { useState } from "react";
import PartyIcon from "@/src/assets/icons/party.svg";
import Modal from "@/src/components/ui/Modal";

interface PoolLiveSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  poolLink: string;
  onBackToDashboard: () => void;
}

export default function PoolLiveSuccess({
  isOpen,
  onClose,
  poolLink,
  onBackToDashboard,
}: PoolLiveSuccessProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => `https://poolfi-pre-mvpp.vercel.app${poolLink}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleWhatsappShare = () => {
    const message = `Join my pool on PoolFi: ${getFullUrl()}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="980px"
      closeOnOverlay={false}
      centerOnMobile
    >
      <div className="px-5 py-10 sm:px-9 sm:py-14 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-primary-light shadow-[0_14px_30px_rgba(51,94,255,0.2)]">
            <PartyIcon className="h-[62px] w-[62px] text-primary" />
          </div>
          <h2 className="mt-7 font-heading text-[28px] font-bold tracking-[-0.8px] text-text-dark sm:text-[34px]">
            Your pool is live
          </h2>
          <p className="mt-5 max-w-[690px] text-[18px] leading-[30px] text-text-muted sm:text-[19px]">
            Share the link below with your members. They can pay directly.
          </p>
        </div>

        <div className="mt-10 rounded-[32px] border border-[#e5ebf6] bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="min-w-0 flex-1 rounded-[22px] border border-[#e5ebf6] bg-[#f8fafc] px-5 py-5 text-center sm:px-6 sm:py-6 lg:text-left">
              <span className="block break-words font-heading text-[20px] font-bold leading-tight text-text-dark sm:text-[22px]">
                {getFullUrl()}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex h-[62px] min-w-[180px] items-center justify-center rounded-[22px] bg-primary px-6 text-[18px] font-semibold text-white shadow-[0_12px_28px_rgba(51,94,255,0.22)] transition-colors hover:bg-primary-dark"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleWhatsappShare}
            className="flex h-[68px] items-center justify-center rounded-[22px] border border-[#d8e4ff] bg-white px-6 text-[16px] font-semibold text-text-dark transition-colors hover:bg-gray-50"
          >
            Share on Whatsapp
          </button>
          <button
            type="button"
            onClick={onBackToDashboard}
            className="flex h-[68px] items-center justify-center rounded-[22px] bg-primary px-6 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(51,94,255,0.25)] transition-colors hover:bg-primary-dark"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </Modal>
  );
}
