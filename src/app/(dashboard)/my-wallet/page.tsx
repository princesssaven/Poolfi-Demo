"use client";

import { useEffect, useState } from "react";
import AddMoneyModal from "@/src/components/create-pool/AddMoneyModal";

interface WalletTransaction {
  amountNgn: number;
  amountUsdc: number;
  asset: string;
  createdAt: string;
  description: string;
  id: string;
  status: string;
  title: string;
  type: "credit" | "debit";
}

interface WalletData {
  depositMemo: string;
  exchangeRate: number;
  transactions: WalletTransaction[];
  walletBalanceNgn: number;
  walletBalanceUsdc: number;
}

const emptyWalletData: WalletData = {
  depositMemo: "",
  exchangeRate: 0,
  transactions: [],
  walletBalanceNgn: 0,
  walletBalanceUsdc: 0,
};

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })}`;
}

function formatUsdc(amount: number) {
  return `${amount.toLocaleString("en-US", {
    maximumFractionDigits: 7,
    minimumFractionDigits: 2,
  })} USDC`;
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
  });
}

export default function MyWalletPage() {
  const [walletData, setWalletData] = useState<WalletData>(emptyWalletData);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const loadWallet = async () => {
    const response = await fetch("/api/wallet", { cache: "no-store" });
    const payload = (await response.json().catch(() => null)) as
      | { data?: WalletData; message?: string }
      | null;

    if (!response.ok || !payload?.data) {
      setErrorMessage(payload?.message ?? "We couldn't load your wallet.");
      setIsLoading(false);
      return;
    }

    setWalletData(payload.data);
    setIsLoading(false);
  };

  useEffect(() => {
    let isMounted = true;

    const run = async () => {
      await loadWallet();

      if (!isMounted) {
        return;
      }
    };

    void run();

    return () => {
      isMounted = false;
    };
  }, []);

  const copyMemo = async () => {
    if (!walletData.depositMemo) return;

    try {
      await navigator.clipboard.writeText(walletData.depositMemo);
      setSuccessMessage("Deposit memo copied.");
    } catch {
      setErrorMessage("We couldn't copy the memo from this browser.");
    }
  };

  return (
    <div className="space-y-6">
      {errorMessage || successMessage ? (
        <div
          className={`rounded-[18px] px-4 py-3 text-sm font-medium ${
            errorMessage
              ? "border border-danger/20 bg-danger/5 text-danger"
              : "border border-primary/20 bg-primary-light text-info-blue"
          }`}
        >
          {errorMessage || successMessage}
        </div>
      ) : null}

      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
              Wallet
            </p>
            <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
              Your wallet overview
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setIsAddMoneyOpen(true)}
            className="w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            Add Funds
          </button>
        </div>

        {isLoading ? (
          <div className="mt-6 rounded-[18px] border border-border bg-[#fbfcff] px-4 py-5 text-sm text-text-muted">
            Loading wallet…
          </div>
        ) : (
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[20px] bg-primary px-5 py-5 text-white lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[1px] text-white/60">
                Available Balance
              </p>
              <p className="mt-3 font-heading text-3xl font-extrabold">
                {formatCurrency(walletData.walletBalanceNgn)}
              </p>
              <p className="mt-2 text-sm text-white/65">
                {formatUsdc(walletData.walletBalanceUsdc)} · 1 USDC ≈{" "}
                {formatCurrency(walletData.exchangeRate)}
              </p>
            </div>

            <div className="rounded-[20px] border border-border bg-[#fbfcff] px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[1px] text-text-muted">
                Deposit Memo
              </p>
              <p className="mt-3 font-heading text-2xl font-bold text-text-dark">
                {walletData.depositMemo || "Unavailable"}
              </p>
              <button
                type="button"
                onClick={copyMemo}
                disabled={!walletData.depositMemo}
                className="mt-4 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-text-dark transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Copy Memo
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="overflow-hidden rounded-[24px] border border-border bg-white shadow-sm">
        <div className="border-b border-border px-6 py-4">
          <h2 className="font-heading text-lg font-bold text-text-dark">
            Transaction history
          </h2>
        </div>

        {isLoading ? (
          <div className="px-6 py-6 text-sm text-text-muted">
            Loading transactions…
          </div>
        ) : walletData.transactions.length === 0 ? (
          <div className="px-6 py-6 text-sm text-text-muted">
            No wallet transactions have been recorded yet.
          </div>
        ) : (
          walletData.transactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className={`flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                index < walletData.transactions.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <div>
                <p className="font-heading text-sm font-bold text-text-dark">
                  {transaction.title}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  {transaction.description} · {formatDate(transaction.createdAt)}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p
                  className={`font-heading text-base font-bold ${
                    transaction.type === "credit" ? "text-success" : "text-danger"
                  }`}
                >
                  {transaction.type === "credit" ? "+" : "-"}
                  {formatCurrency(transaction.amountNgn)}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  {transaction.status}
                </p>
              </div>
            </div>
          ))
        )}
      </section>

      <AddMoneyModal
        isOpen={isAddMoneyOpen}
        onClose={() => {
          setIsAddMoneyOpen(false);
          void loadWallet();
        }}
        depositMemo={walletData.depositMemo}
        onProcessed={() => void loadWallet()}
      />
    </div>
  );
}
