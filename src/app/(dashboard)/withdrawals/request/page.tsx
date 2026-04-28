"use client";

import { useEffect, useState } from "react";

interface WithdrawalPool {
  id: string;
  name: string;
  status: string;
}

export default function WithdrawalRequestPage() {
  const [pools, setPools] = useState<WithdrawalPool[]>([]);
  const [poolId, setPoolId] = useState("");
  const [amountNgn, setAmountNgn] = useState("");
  const [purpose, setPurpose] = useState("");
  const [recipient, setRecipient] = useState("");
  const [evidence, setEvidence] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadPools = async () => {
      const response = await fetch("/api/withdrawals", { cache: "no-store" });
      const payload = (await response.json().catch(() => null)) as
        | { message?: string; pools?: WithdrawalPool[] }
        | null;

      if (!isMounted) return;

      if (!response.ok || !payload?.pools) {
        setErrorMessage(payload?.message ?? "We couldn't load your pools.");
        setIsLoading(false);
        return;
      }

      setPools(payload.pools);
      setPoolId(payload.pools[0]?.id ?? "");
      setIsLoading(false);
    };

    void loadPools();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");
    setMessage("");
    setIsSubmitting(true);

    const response = await fetch("/api/withdrawals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amountNgn,
        evidence,
        poolId,
        purpose,
        recipient,
      }),
    });
    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(payload?.message ?? "We couldn't create the request.");
      setIsSubmitting(false);
      return;
    }

    setMessage("Withdrawal request created.");
    setAmountNgn("");
    setPurpose("");
    setRecipient("");
    setEvidence("");
    setIsSubmitting(false);
  };

  return (
    <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
        Request withdrawal
      </p>
      <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
        Create a withdrawal request
      </h1>

      {errorMessage || message ? (
        <div
          className={`mt-5 rounded-[16px] px-4 py-3 text-sm font-medium ${
            errorMessage
              ? "border border-danger/20 bg-danger/5 text-danger"
              : "border border-primary/20 bg-primary-light text-info-blue"
          }`}
        >
          {errorMessage || message}
        </div>
      ) : null}

      {isLoading ? (
        <div className="mt-6 rounded-[16px] border border-border bg-[#fbfcff] px-4 py-5 text-sm text-text-muted">
          Loading your pools…
        </div>
      ) : pools.length === 0 ? (
        <div className="mt-6 rounded-[16px] border border-border bg-[#fbfcff] px-4 py-5 text-sm text-text-muted">
          Create a pool before requesting a withdrawal.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-text-dark">Pool</span>
            <select
              value={poolId}
              onChange={(event) => setPoolId(event.target.value)}
              className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            >
              {pools.map((pool) => (
                <option key={pool.id} value={pool.id}>
                  {pool.name} ({pool.status})
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-text-dark">Amount</span>
            <input
              inputMode="numeric"
              value={amountNgn}
              onChange={(event) =>
                setAmountNgn(event.target.value.replace(/[^0-9]/g, ""))
              }
              className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              placeholder="Amount in NGN"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-text-dark">Purpose</span>
            <textarea
              value={purpose}
              onChange={(event) => setPurpose(event.target.value)}
              className="min-h-28 resize-none rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              placeholder="What will these funds be used for?"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-text-dark">Recipient</span>
            <input
              value={recipient}
              onChange={(event) => setRecipient(event.target.value)}
              className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              placeholder="Recipient or vendor name"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-text-dark">Evidence link</span>
            <input
              value={evidence}
              onChange={(event) => setEvidence(event.target.value)}
              className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              placeholder="Invoice, receipt, or supporting URL"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-fit rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating..." : "Create request"}
          </button>
        </form>
      )}
    </section>
  );
}
