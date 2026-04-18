"use client";

import { useEffect, useRef } from "react";
import CloseIcon from "@/src/assets/icons/close.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = "640px",
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
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-[2px] transition-opacity sm:items-center"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="mx-2 max-h-[min(92vh,calc(100vh-1rem))] w-full overflow-y-auto rounded-t-2xl bg-white shadow-xl animate-in fade-in zoom-in-95 duration-200 sm:mx-4 sm:rounded-2xl"
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
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Close"
      >
        <CloseIcon className="w-3.5 h-3.5 text-text-dark" />
      </button>
    </div>
  );
}
