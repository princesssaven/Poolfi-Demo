"use client";

import { useState } from "react";
import Modal, { ModalHeader } from "@/src/components/ui/Modal";
import GoalPoolIcon from "@/src/assets/icons/goal-pool.svg";
import ImpactPoolIcon from "@/src/assets/icons/impact-pool.svg";

interface CreatePoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (type: "goal" | "impact") => void;
}

export default function CreatePoolModal({
  isOpen,
  onClose,
  onContinue,
}: CreatePoolModalProps) {
  const [selected, setSelected] = useState<"goal" | "impact">("goal");

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="648px">
      <ModalHeader title="Create a Pool" onClose={onClose} />
      <p className="mt-3 max-w-[370px] px-5 text-[12px] leading-[19px] text-text-muted sm:px-8">
        Choose the type of pool you want to create. You can always change the
        details after
      </p>

      <div className="mt-8 flex flex-col gap-4 px-5 sm:flex-row sm:px-8">
        <button
          type="button"
          onClick={() => setSelected("goal")}
          className={`flex min-h-[188px] flex-1 flex-col items-center justify-center gap-5 rounded-[16px] border px-5 py-7 text-center transition-all duration-200 ${
            selected === "goal"
              ? "border-primary bg-[#eef3ff] shadow-[0_10px_22px_rgba(51,94,255,0.18)]"
              : "border-[#7a8699] bg-white hover:border-text-muted"
          }`}
        >
          <div
            className={`flex h-[58px] w-[58px] items-center justify-center rounded-[16px] border ${
              selected === "goal"
                ? "border-white bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                : "border-border bg-white"
            }`}
          >
            <GoalPoolIcon className="h-[30px] w-[30px] text-text-muted" />
          </div>
          <div>
            <p className="mb-2 font-heading text-[13px] font-bold text-text-dark">
              Goal Pool
            </p>
            <p className="mx-auto max-w-[190px] text-[10px] leading-[17px] text-text-muted">
              Private. Invite-only. For class dues, events, group
              contributions.
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSelected("impact")}
          className={`flex min-h-[188px] flex-1 flex-col items-center justify-center gap-5 rounded-[16px] border px-5 py-7 text-center transition-all duration-200 ${
            selected === "impact"
              ? "border-primary bg-[#eef3ff] shadow-[0_10px_22px_rgba(51,94,255,0.18)]"
              : "border-[#7a8699] bg-white hover:border-text-muted"
          }`}
        >
          <div
            className={`flex h-[58px] w-[58px] items-center justify-center rounded-[16px] border ${
              selected === "impact"
                ? "border-white bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                : "border-border bg-white"
            }`}
          >
            <ImpactPoolIcon className="h-6 w-6 text-text-muted" />
          </div>
          <div>
            <p className="mb-2 font-heading text-[13px] font-bold text-text-dark">
              Impact Pool
            </p>
            <p className="mx-auto max-w-[190px] text-[10px] leading-[17px] text-text-muted">
              Public. Community-verified. For causes, projects, and shared
              goals.
            </p>
          </div>
        </button>
      </div>

      <div className="mt-5 flex justify-center px-5 pb-6 sm:px-8 sm:pb-8">
        <button
          type="button"
          onClick={() => onContinue(selected)}
          className="w-full max-w-[260px] rounded-[10px] bg-primary px-6 py-3 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(51,94,255,0.24)] transition-colors hover:bg-primary-dark"
        >
          Continue to Setup→
        </button>
      </div>
    </Modal>
  );
}
