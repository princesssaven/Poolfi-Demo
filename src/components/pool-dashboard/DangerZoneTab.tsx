"use client";

import { useState } from "react";

interface DangerZoneTabProps {
  poolName?: string;
  raised?: number;
  target?: number;
  memberCount?: number;
  isCompleted?: boolean;
}

export default function DangerZoneTab({
  poolName = "300L Class Dues",
  raised = 312000,
  target = 400000,
  memberCount = 400,
  isCompleted = false,
}: DangerZoneTabProps) {
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [pauseActive, setPauseActive] = useState(false);

  void poolName;
  void raised;
  void target;
  void memberCount;
  void isCompleted;

  return (
    <div className="p-5 flex flex-col gap-4">
      {/* Pool Controls Card (red) */}
      <div
        className="rounded-xl p-5 flex flex-col gap-[9px]"
        style={{
          backgroundColor: "#fef3f2",
          border: "1px solid rgba(240, 68, 56, 0.20)",
        }}
      >
        <p className="text-[13px] font-bold text-danger">⚠️ Pool Controls</p>
        <p
          className="text-[11.5px] leading-[19px]"
          style={{ color: "#b91c1c" }}
        >
          Use these carefully. Closing the pool releases funds.
          <br />
          Cancelling returns all contributions.
        </p>

        <button
          onClick={() => setShowCloseConfirm(!showCloseConfirm)}
          className="w-full mt-1 py-3 border border-danger/30 rounded-lg text-[13px] font-bold text-danger bg-white/60 hover:bg-white transition-colors text-center"
          aria-label="Close pool and withdraw funds"
        >
          ✅ Close Pool &amp; Withdraw
        </button>

        {showCloseConfirm && (
          <p className="text-[11px] text-danger/70 text-center animate-pulse">
            Confirm action? This will release all collected funds.
          </p>
        )}

        <button
          onClick={() => setShowCancelConfirm(!showCancelConfirm)}
          className="w-full py-3 border border-danger/30 rounded-lg text-[13px] font-bold text-danger bg-white/60 hover:bg-white transition-colors text-center"
          aria-label="Cancel pool and refund all contributions"
        >
          ✕ Cancel Pool &amp; Refund All
        </button>

        {showCancelConfirm && (
          <p className="text-[11px] text-danger/70 text-center animate-pulse">
            This is irreversible. All funds will be returned to contributors.
          </p>
        )}
      </div>

      {/* Pause Contributions Card (yellow) */}
      <div
        className="rounded-xl p-5 flex flex-col gap-[9px]"
        style={{
          backgroundColor: "rgba(252, 211, 77, 0.30)",
          border: "1px solid rgba(252, 211, 77, 0.60)",
        }}
      >
        <p className="text-[13px] font-bold text-warning">
          Pause contributions
        </p>
        <p className="text-[11.5px] leading-[19px] text-text-muted">
          Temporarily stop accepting new contributions.
          <br />
          Existing contributions are safe.
        </p>

        <button
          onClick={() => setPauseActive(!pauseActive)}
          className="w-full mt-1 py-3 border border-warning/50 rounded-lg text-[13px] font-bold text-warning bg-white/40 hover:bg-white/60 transition-colors text-center"
          aria-label="Pause contributions to this pool"
        >
          {pauseActive ? "▶ Resume contributions" : "Pause contributions"}
        </button>
      </div>
    </div>
  );
}
