"use client";

import { useEffect, useState } from "react";

interface WithdrawalItem {
  amountNgn: number;
  createdAt: string;
  evidence: string;
  id: string;
  poolId: string;
  purpose: string;
  recipient: string;
  status: string;
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
  });
}

export default function WithdrawalDetailsPage() {
  const [withdrawals, setWithdrawals] = useState<WithdrawalItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadWithdrawals = async () => {
      const response = await fetch("/api/withdrawals", { cache: "no-store" });
      const payload = (await response.json().catch(() => null)) as
        | { message?: string; withdrawals?: WithdrawalItem[] }
        | null;

      if (!isMounted) return;

      if (!response.ok || !payload?.withdrawals) {
        setErrorMessage(payload?.message ?? "We couldn't load withdrawals.");
        setIsLoading(false);
        return;
      }

      setWithdrawals(payload.withdrawals);
      setIsLoading(false);
    };

    void loadWithdrawals();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
        Withdrawals
      </p>
      <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
        Withdrawal details
      </h1>

      {isLoading ? (
        <div className="mt-6 rounded-[16px] border border-border bg-[#fbfcff] px-4 py-5 text-sm text-text-muted">
          Loading withdrawal requests…
        </div>
      ) : errorMessage ? (
        <div className="mt-6 rounded-[16px] border border-danger/20 bg-danger/5 px-4 py-5 text-sm font-medium text-danger">
          {errorMessage}
        </div>
      ) : withdrawals.length === 0 ? (
        <div className="mt-6 rounded-[16px] border border-border bg-[#fbfcff] px-4 py-5 text-sm text-text-muted">
          No withdrawal requests have been created yet.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {withdrawals.map((withdrawal) => (
            <article
              key={withdrawal.id}
              className="rounded-[16px] border border-border bg-[#fbfcff] px-4 py-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-heading text-lg font-bold text-text-dark">
                    {formatCurrency(withdrawal.amountNgn)}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    {withdrawal.purpose}
                  </p>
                  {withdrawal.recipient ? (
                    <p className="mt-2 text-xs text-text-muted">
                      Recipient: {withdrawal.recipient}
                    </p>
                  ) : null}
                  {withdrawal.evidence ? (
                    <a
                      href={withdrawal.evidence}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex text-xs font-bold text-primary hover:underline"
                    >
                      View evidence
                    </a>
                  ) : null}
                </div>
                <div className="text-left sm:text-right">
                  <span className="rounded-full bg-warning/10 px-3 py-1 text-xs font-bold text-warning">
                    {withdrawal.status}
                  </span>
                  <p className="mt-2 text-xs text-text-muted">
                    {formatDate(withdrawal.createdAt)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
