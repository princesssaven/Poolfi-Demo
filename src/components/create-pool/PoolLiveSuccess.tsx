"use client";

import { useState } from "react";
import Modal from "@/src/components/ui/Modal";

interface PoolLiveSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  poolLink: string;
  onBackToDashboard: () => void;
}

const svgPaths = {
  p16cf6180: "M12.2587 23.3797L9.07285 30.4098C5.05353 39.2794 3.04387 43.714 5.23725 45.8654C7.43061 48.0165 11.9523 46.0456 20.9958 42.1035L28.1638 38.9789C33.6182 36.6014 36.3454 35.4125 36.7794 33.1203C37.2134 30.828 35.103 28.7583 30.8826 24.619L26.9002 20.7132C22.6796 16.5738 20.5693 14.5041 18.2321 14.9297C15.8949 15.3553 14.6828 18.0301 12.2587 23.3797Z",
  p23717780: "M14.0833 22.3125L29.2499 37.1875M9.74993 32.9375L18.4166 41.4375",
  p293a8400: "M30.7609 4.25005C31.6254 5.66672 32.3172 9.35005 28.1668 12.75",
  p5122b80: "M47.6666 20.8309C46.2221 19.9828 42.4666 19.3044 38.9999 23.3751",
};

function PartyIcon() {
  return (
    <div className="relative h-[51px] w-[52px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 51">
        <g id="party">
          <path d={svgPaths.p16cf6180} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d={svgPaths.p23717780} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d="M34.6668 17L41.1668 10.625" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d={svgPaths.p293a8400} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d={svgPaths.p5122b80} stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d="M39.002 4.25005V4.29338" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d="M47.6689 12.75V12.7934" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d="M45.502 27.625V27.6683" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
          <path d="M23.8352 6.37502V6.41836" stroke="#1B4FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.65" />
        </g>
      </svg>
    </div>
  );
}

export default function PoolLiveSuccess({
  isOpen,
  onClose,
  poolLink,
  onBackToDashboard,
}: PoolLiveSuccessProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    // If poolLink already starts with /p/, don't double it
    const path = poolLink.startsWith("/p/") ? poolLink : `/p/${poolLink}`;
    return `poolfi-pre-mvpp.vercel.app${path}`;
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
      "noopener,noreferrer",
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="544px"
      closeOnOverlay={false}
      centerOnMobile
      panelClassName="rounded-[16px]"
    >
      <div className="flex flex-col items-center p-6 gap-7">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="bg-[#eef3ff] h-[58.76px] w-[63px] flex items-center justify-center rounded-[29px] shrink-0">
            <PartyIcon />
          </div>
          <h2 className="font-heading text-[14.8px] font-bold text-[#1a1f2e] text-center">
            Your pool is live
          </h2>
          <p className="font-card text-[11.7px] text-[#6b7280] text-center max-w-[407px] leading-[19px]">
            Share the link below with your members. They can pay directly.
          </p>
        </div>

        {/* Link Box Section */}
        <div className="bg-[#f4f5f7] rounded-[12px] w-full p-2 flex items-center justify-between gap-4">
          <p className="flex-1 font-card text-[13px] font-semibold text-[#1a1f2e] truncate pl-2">
            {getFullUrl()}
          </p>
          <button
            onClick={handleCopy}
            className="bg-[#1b4fd8] rounded-[8.6px] px-4 py-2 text-[11.2px] font-bold text-white transition-colors hover:bg-primary-dark whitespace-nowrap min-w-[101px]"
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3 w-full border-t border-[#e5e8ef] pt-5 pb-2">
          <button
            onClick={handleWhatsappShare}
            className="flex-1 border border-[#e5e8ef] bg-white rounded-[10px] py-3.5 text-[14px] font-semibold text-[#6b7280] transition-colors hover:bg-gray-50 font-card"
          >
            Share on Whatsapp
          </button>
          <button
            onClick={onBackToDashboard}
            className="flex-1 bg-[#1b4fd8] rounded-[10px] py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-primary-dark font-card"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </Modal>
  );
}
