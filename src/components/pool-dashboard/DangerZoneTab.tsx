"use client";

import { useState } from "react";

interface DangerZoneTabProps {
  poolName: string;
  raised: number;
  target: number;
  memberCount: number;
  isCompleted: boolean;
}

export default function DangerZoneTab({
  poolName,
  raised,
  target,
  memberCount,
  isCompleted,
}: DangerZoneTabProps) {
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  return (
    <div className="p-5">
      {/* Warning banner */}
      <div className="flex items-start gap-3 bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-4 mb-6">
        <span className="text-lg mt-0.5">⚠️</span>
        <div>
          <p className="text-[13px] font-bold text-[#c2410c]">
            Danger Zone — Proceed with Caution
          </p>
          <p className="text-[11.5px] text-[#c2410c]/80 mt-0.5 leading-relaxed">
            Actions here may affect all {memberCount} members and cannot be easily reversed. 
            Refunds must be processed manually.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4">
        {/* Pause Pool */}
        {!isCompleted && (
          <div className="border border-border rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">⏸️</span>
                  <h4 className="font-heading text-[14px] font-bold text-text-dark">
                    Pause Pool
                  </h4>
                </div>
                <p className="text-[12px] text-text-muted leading-relaxed">
                  Temporarily stop accepting new contributions. Members will be notified. 
                  You can resume at any time.
                </p>
              </div>
              <button className="shrink-0 border border-warning text-warning px-5 py-2 rounded-full text-[12px] font-bold hover:bg-warning/5 transition-colors">
                Pause
              </button>
            </div>
          </div>
        )}

        {/* Extend Deadline */}
        {!isCompleted && (
          <div className="border border-border rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">📅</span>
                  <h4 className="font-heading text-[14px] font-bold text-text-dark">
                    Extend Deadline
                  </h4>
                </div>
                <p className="text-[12px] text-text-muted leading-relaxed">
                  Push the deadline further to give members more time. All members will be notified.
                </p>
              </div>
              <button className="shrink-0 border border-primary text-primary px-5 py-2 rounded-full text-[12px] font-bold hover:bg-primary-light transition-colors">
                Extend
              </button>
            </div>
          </div>
        )}

        {/* Close Pool Early */}
        {!isCompleted && (
          <div className="border border-danger/30 rounded-xl p-5 bg-danger/[0.02]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🔒</span>
                  <h4 className="font-heading text-[14px] font-bold text-text-dark">
                    Close Pool Early
                  </h4>
                </div>
                <p className="text-[12px] text-text-muted leading-relaxed">
                  End this pool before the deadline. Collected funds (₦{raised.toLocaleString("en-NG")}) will be available for withdrawal.
                  No new contributions will be accepted.
                </p>
              </div>
              <button
                onClick={() => setShowCloseConfirm(!showCloseConfirm)}
                className="shrink-0 bg-danger text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-danger/90 transition-colors"
              >
                Close Pool
              </button>
            </div>

            {/* Close confirmation */}
            {showCloseConfirm && (
              <div className="mt-4 pt-4 border-t border-danger/15">
                <p className="text-[12px] text-text-dark font-semibold mb-2">
                  Type <span className="font-bold text-danger">&quot;CLOSE&quot;</span> to confirm:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="Type CLOSE"
                    className="flex-1 border border-danger/30 rounded-lg px-3 py-2 text-[13px] font-card focus:outline-none focus:ring-2 focus:ring-danger/20"
                  />
                  <button
                    disabled={confirmText !== "CLOSE"}
                    className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-colors ${
                      confirmText === "CLOSE"
                        ? "bg-danger text-white hover:bg-danger/90"
                        : "bg-gray-100 text-text-light cursor-not-allowed"
                    }`}
                  >
                    Confirm Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cancel & Refund */}
        <div className="border-2 border-danger/40 rounded-xl p-5 bg-danger/[0.02]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🗑️</span>
                <h4 className="font-heading text-[14px] font-bold text-danger">
                  Cancel Pool & Refund
                </h4>
              </div>
              <p className="text-[12px] text-text-muted leading-relaxed">
                Permanently cancel this pool and initiate refunds to all {memberCount} contributors. 
                This action is <strong>irreversible</strong>. All collected funds 
                (₦{raised.toLocaleString("en-NG")} of ₦{target.toLocaleString("en-NG")}) 
                will be returned.
              </p>
            </div>
            <button
              onClick={() => setShowCancelConfirm(!showCancelConfirm)}
              className="shrink-0 bg-danger text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-danger/90 transition-colors"
            >
              Cancel Pool
            </button>
          </div>

          {/* Cancel confirmation */}
          {showCancelConfirm && (
            <div className="mt-4 pt-4 border-t border-danger/15">
              <p className="text-[12px] text-text-dark font-semibold mb-2">
                Type <span className="font-bold text-danger">&quot;{poolName.toUpperCase().slice(0, 15)}&quot;</span> to confirm cancellation:
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={`Type ${poolName.toUpperCase().slice(0, 15)}`}
                  className="flex-1 border border-danger/30 rounded-lg px-3 py-2 text-[13px] font-card focus:outline-none focus:ring-2 focus:ring-danger/20"
                />
                <button className="bg-gray-100 text-text-light px-4 py-2 rounded-lg text-[12px] font-bold cursor-not-allowed">
                  Confirm Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Transfer Ownership */}
        <div className="border border-border rounded-xl p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">👤</span>
                <h4 className="font-heading text-[14px] font-bold text-text-dark">
                  Transfer Ownership
                </h4>
              </div>
              <p className="text-[12px] text-text-muted leading-relaxed">
                Hand over admin rights to another member. You will become a regular contributor after transfer.
              </p>
            </div>
            <button className="shrink-0 border border-border text-text-dark px-5 py-2 rounded-full text-[12px] font-bold hover:bg-gray-50 transition-colors">
              Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
