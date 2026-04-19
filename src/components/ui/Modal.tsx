"use client";

import { useEffect, useRef } from "react";
import CloseIcon from "@/src/assets/icons/close.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
  closeOnOverlay?: boolean;
  centerOnMobile?: boolean;
  panelClassName?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = "640px",
  closeOnOverlay = true,
  centerOnMobile = false,
  panelClassName = "",
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex justify-center bg-[#0f172a]/45 backdrop-blur-[3px] transition-opacity ${
        centerOnMobile ? "items-center p-3 sm:p-4" : "items-end sm:items-center"
      }`}
      onClick={(e) => {
        if (closeOnOverlay && e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className={`animate-in fade-in zoom-in-95 max-h-[min(92vh,calc(100vh-1rem))] w-full overflow-y-auto border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] duration-200 ${
          centerOnMobile
            ? "rounded-[28px]"
            : "mx-2 rounded-t-2xl sm:mx-4 sm:rounded-2xl"
        } ${panelClassName}`}
        style={{ maxWidth }}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="flex items-start justify-between px-5 pt-6 sm:px-8 sm:pt-8">
      <h2 className="font-heading text-[15px] font-bold text-text-dark">
        {title}
      </h2>
      <button
        onClick={onClose}
        className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-border bg-white transition-colors hover:bg-gray-50"
        aria-label="Close"
      >
        <CloseIcon className="w-3.5 h-3.5 text-text-dark" />
      </button>
    </div>
  );
}
