"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Toggle from "@/src/components/ui/Toggle";
import AddMoneyModal from "@/src/components/create-pool/AddMoneyModal";

interface ContributorItem {
  id: string;
  initials: string;
  name: string;
  handle: string;
  amount: number;
  time: string;
  color: string;
  isYou?: boolean;
  anonymous?: boolean;
}

interface ImpactPoolData {
  id: string;
  category: string;
  name: string;
  description?: string;
  problem?: string;
  raised: number;
  targetAmount: number;
  contributorCount: number;
  location?: string;
  beneficiaries?: string;
  deadline: string;
  perPersonAmount: number;
  status: string;
  moneyUsage?: string;
  milestones?: Array<{ label: string; percentage: string }>;
  approversCount?: string;
  ownerName?: string;
}

interface ImpactPoolMember {
  id: string;
  name: string;
  phone: string;
  customFieldValue: string;
  status: "paid" | "pending";
  invitedAt: string;
  paidAt: string | null;
}

interface ImpactPoolActivity {
  id: string;
  kind: string;
  message: string;
  createdAt: string;
}

interface ImpactContributionDetails {
  pool: ImpactPoolData;
  members: ImpactPoolMember[];
  activities: ImpactPoolActivity[];
  recentContributors: Array<{
    amount: number;
    anonymous: boolean;
    color: string;
    handle: string;
    id: string;
    initials: string;
    name: string;
    time: string;
    userId?: string | null;
  }>;
}

const contributionOptions = [500, 1000, 2000, 5000];

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function formatRelativeTime(value: string) {
  const date = new Date(value);
  const diff = Date.now() - date.getTime();

  if (diff < 60000) {
    return "Just now";
  }

  if (diff < 3600000) {
    return `${Math.round(diff / 60000)} min ago`;
  }

  if (diff < 86400000) {
    return `${Math.round(diff / 3600000)} hrs ago`;
  }

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function truncateSentence(message: string) {
  const sentence = message.split(". ")[0];
  return sentence.length > 65 ? `${sentence.slice(0, 62)}...` : sentence;
}

function formatNumberWithCommas(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ImpactContributionPage() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmountText, setCustomAmountText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isAddMoneyModalOpen, setIsAddMoneyModalOpen] = useState(false);
  const [impactDetails, setImpactDetails] = useState<ImpactContributionDetails | null>(null);
  const [isLoadingPool, setIsLoadingPool] = useState(true);
  const [loadError, setLoadError] = useState("");

  // Wallet balance state
  const [walletBalanceNgn, setWalletBalanceNgn] = useState<number | null>(null);
  const [depositMemo, setDepositMemo] = useState("");

  // Contribution flow state
  const [isContributing, setIsContributing] = useState(false);
  const [contributeSuccess, setContributeSuccess] = useState(false);
  const [contributeError, setContributeError] = useState("");
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [shareStatus, setShareStatus] = useState("");

  const getPoolUrl = () => {
    const path = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    return `https://poolfi-pre-mvpp.vercel.app${path}`;
  };

  const getShareMessage = () => {
    const description = poolDescription ? `${poolDescription} ` : "";
    return `Support ${poolTitle} on PoolFi! ${description}${getPoolUrl()}`;
  };

  const handleCopyPoolLink = async () => {
    const url = getPoolUrl();
    try {
      await navigator.clipboard.writeText(url);
      setShareStatus("Pool link copied.");
    } catch {
      setShareStatus("Unable to copy the link. Please try again.");
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(getShareMessage());
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Support ${poolTitle} on PoolFi!`);
    const url = encodeURIComponent(getPoolUrl());
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  // Fetch wallet balance
  useEffect(() => {
    let isMounted = true;

    const loadBalance = async () => {
      try {
        const response = await fetch("/api/dashboard/home", { cache: "no-store" });
        const payload = (await response.json().catch(() => null)) as
          | { data?: { balance?: { available?: number } }; message?: string }
          | null;

        if (!isMounted) return;

        if (response.ok && payload?.data?.balance) {
          setWalletBalanceNgn(payload.data.balance.available ?? 0);
        }
      } catch {
        // Balance will show as loading
      }
    };

    const loadMemo = async () => {
      try {
        const response = await fetch("/api/auth/state", { cache: "no-store" });
        const payload = (await response.json().catch(() => null)) as
          | { user?: { depositMemo?: string } | null }
          | null;

        if (!isMounted) return;
        setDepositMemo(payload?.user?.depositMemo ?? "");
      } catch {
        // Memo not critical
      }
    };

    void loadBalance();
    void loadMemo();

    return () => { isMounted = false; };
  }, []);

  // Fetch impact pool
  useEffect(() => {
    let isMounted = true;

    const loadImpactPool = async () => {
      try {
        const response = await fetch("/api/pools/impact/latest", { cache: "no-store" });
        const payload = (await response.json().catch(() => null)) as
          | { data?: ImpactContributionDetails; message?: string }
          | null;

        if (!isMounted) {
          return;
        }

        if (!response.ok || !payload?.data) {
          setLoadError(payload?.message ?? "We couldn't load the impact pool right now.");
          return;
        }

        setImpactDetails(payload.data);
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setLoadError("We couldn't load the impact pool right now.");
        }
      } finally {
        if (isMounted) {
          setIsLoadingPool(false);
        }
      }
    };

    void loadImpactPool();

    return () => {
      isMounted = false;
    };
  }, []);

  const impactPool = impactDetails?.pool ?? null;
  const members = impactDetails?.members ?? [];
  const activities = impactDetails?.activities ?? [];

  const daysLeft = impactPool
    ? Math.max(
        0,
        Math.ceil(
          (new Date(impactPool.deadline).getTime() - Date.now()) /
            (1000 * 60 * 60 * 24)
        )
      )
    : 0;

  const poolTitle = impactPool?.name ?? "Loading impact pool...";
  const poolDescription = impactPool?.description ?? impactPool?.problem ?? "";
  const poolLocation = impactPool?.location ?? "Unknown location";
  const poolDeadline = impactPool
    ? new Date(impactPool.deadline).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";
  const poolRaised = impactPool?.raised ?? 0;
  const poolTarget = impactPool?.targetAmount ?? 0;
  const poolContributors = impactPool?.contributorCount ?? 0;
  const poolPerPerson = impactPool ? `₦${impactPool.perPersonAmount.toLocaleString("en-NG")}` : "";
  const poolProgress = poolTarget ? Math.min(100, Math.round((poolRaised / poolTarget) * 100)) : 0;
  const poolShortfall = Math.max(poolTarget - poolRaised, 0);

  const budgetItemsData = impactPool?.milestones?.length
    ? impactPool.milestones.map((item, index) => {
        const percentage = Number(item.percentage) || 0;
        return {
          label: item.label || `Milestone ${index + 1}`,
          amount: Math.round((poolTarget * percentage) / 100),
          percentage,
          color: ["#12b76a", "#f79009", "#1b4fd8", "#8b5cf6"][index % 4],
        };
      })
    : [];

  const updatesData = activities.length > 0
    ? activities.slice(0, 3).map((activity, index) => {
        const title = truncateSentence(activity.message);
        const body = activity.message.replace(title, "").trim();

        return {
          id: activity.id,
          author: impactPool?.ownerName ?? "Creator",
          role: "Creator",
          date: `${new Date(activity.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })} · Update #${index + 1}`,
          title: title || "Pool update",
          body: body || activity.message,
        };
      })
    : [];

  const paidMembers = members.filter((member) => member.status === "paid");
  const recentContributorsData: ContributorItem[] =
    impactDetails?.recentContributors.slice(0, 8).map((contributor) => ({
      ...contributor,
      isYou: false,
      time: formatRelativeTime(contributor.time),
    })) ?? [];

  const totalPaidContributors = paidMembers.length;
  const poolOwnerName = impactPool?.ownerName ?? "Creator";
  const approversText = impactPool?.approversCount ?? "Not configured";
  const withdrawalStatus = impactPool?.status === "active" ? "No request" : impactPool?.status ?? "N/A";

  if (isLoadingPool) {
    return (
      <div className="mx-auto w-full max-w-[1180px] rounded-[24px] border border-border bg-white px-6 py-8 text-center text-text-muted">
        Loading impact pool…
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="mx-auto w-full max-w-[1180px] rounded-[24px] border border-danger/20 bg-danger/5 px-6 py-8 text-center text-danger">
        {loadError}
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-5">
      <section
        className="overflow-hidden rounded-[24px] bg-primary px-5 py-5 text-white shadow-[0_16px_36px_rgba(27,79,216,0.16)] sm:px-6 sm:py-6 lg:px-7"
      >
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-white/90">
            🔒 Impact Pool · Community Governed
          </div>

          <div className="space-y-3">
            <h1 className="max-w-[760px] font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.8px] text-white sm:text-[38px] lg:text-[48px]">
              {poolTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-white/70 sm:text-[16px]">
              <span>📍 {poolLocation}</span>
              <span>📅 Deadline {poolDeadline}</span>
              <span>👥 {poolContributors.toLocaleString("en-NG")} contributors</span>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[18px] border border-white/10 bg-white/8 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Raised",
                value: `₦${poolRaised.toLocaleString("en-NG")}`,
                valueClass: "text-emerald-light",
                sub: `of ₦${poolTarget.toLocaleString("en-NG")} target`,
              },
              {
                label: "Contributors",
                value: `${poolContributors.toLocaleString("en-NG")}`,
                valueClass: "text-white",
                sub: "from the community",
              },
              {
                label: "Per person",
                value: poolPerPerson || "–",
                valueClass: "text-white",
                sub: "Pledged amount",
              },
              {
                label: "Days Left",
                value: `${daysLeft}`,
                valueClass: "text-yellow",
                sub: `Closes ${poolDeadline}`,
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`space-y-1 px-5 py-4 ${
                  index < 3 ? "border-b border-white/10 sm:border-r sm:border-b-0" : ""
                } ${index === 1 ? "xl:border-l-0" : ""}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[1px] text-white/45">
                  {stat.label}
                </p>
                <p className={`font-heading text-[22px] font-extrabold ${stat.valueClass}`}>
                  {stat.value}
                </p>
                <p className="text-[11px] text-white/35">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.75fr)_minmax(320px,0.9fr)] xl:items-start">
        <div className="space-y-5">
          <section className="rounded-[20px] border border-border bg-white shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
            <div className="space-y-4 p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-heading text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
                  ₦{poolRaised.toLocaleString("en-NG")} raised
                </h2>
                <span className="inline-flex w-fit rounded-full bg-primary-light px-4 py-2 text-[13px] font-bold text-primary">
                  {poolProgress}% funded
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-bg-page">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${poolProgress}%` }}
                />
              </div>

              <div className="flex flex-col gap-1 text-[14px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
                <span>₦{poolShortfall.toLocaleString("en-NG")} still needed</span>
                <span>Target: ₦{poolTarget.toLocaleString("en-NG")}</span>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <h2 className="font-heading text-[16px] font-bold text-text-dark">
                🧾 About this Pool
              </h2>
            </div>

            <div className="space-y-6 p-5 sm:p-6">
              <div className="space-y-5 text-[16px] leading-9 text-text-muted">
                <p>{poolDescription || "This impact pool is helping a community secure funding for urgently needed infrastructure."}</p>
                <p>
                  {impactPool?.beneficiaries
                    ? `This project serves ${impactPool.beneficiaries} people in ${poolLocation}. The funds will be used to reach the target and enable a sustainable outcome for the community.`
                    : "This project is structured to deliver measurable impact once the target is met."}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Beneficiaries", impactPool?.beneficiaries ?? "N/A"],
                  ["Location", poolLocation],
                  ["Per person", poolPerPerson || "N/A"],
                  ["Deadline", poolDeadline || "TBD"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#f7f9fc] px-4 py-3.5">
                    <p className="text-[12px] font-semibold uppercase tracking-[1px] text-text-muted">
                      {label}
                    </p>
                    <p className="mt-1 font-heading text-[16px] font-bold text-text-dark">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <h2 className="font-heading text-[16px] font-bold text-text-dark">
                💰 Budget Breakdown
              </h2>
            </div>

            <div className="space-y-6 p-5 sm:p-6">
              {budgetItemsData.length > 0 ? (
                budgetItemsData.map((item) => (
                  <div key={item.label} className="space-y-2.5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-heading text-[18px] font-bold text-text-dark">
                        {item.label}
                      </h3>
                      <div className="text-right">
                        <p className="font-heading text-[18px] font-bold text-text-dark">
                          {formatCurrency(item.amount)}
                        </p>
                        <p className="text-[13px] text-text-muted">{item.percentage}%</p>
                      </div>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#eef2f7]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[16px] border border-border bg-[#fbfcff] px-4 py-5 text-sm text-text-muted">
                  No budget milestones have been published for this pool yet.
                </div>
              )}
            </div>
          </section>

          <section className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <h2 className="font-heading text-[16px] font-bold text-text-dark">
                📢 Progress Updates <span className="ml-1 font-body text-[14px] font-medium text-text-muted">from the creator</span>
              </h2>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              {updatesData.length > 0 ? (
                updatesData.map((update, index) => (
                  <article
                    key={update.id}
                    className={`space-y-4 ${
                      index !== updatesData.length - 1
                        ? "border-b border-border pb-6"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-dark text-[15px] font-bold text-white">
                        {poolOwnerName
                          .split(/\s+/)
                          .slice(0, 2)
                          .map((part) => part.charAt(0).toUpperCase())
                          .join("")}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-heading text-[18px] font-bold text-text-dark">
                            {update.author}
                          </p>
                          <span className="rounded-full bg-success-bg px-3 py-1 text-[11px] font-bold text-success">
                            {update.role}
                          </span>
                        </div>
                        <p className="text-[14px] text-text-muted">{update.date}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[16px] leading-8 text-text-muted">
                        {update.title}. {update.body}
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[16px] border border-border bg-[#fbfcff] px-4 py-5 text-sm text-text-muted">
                  No progress updates have been posted yet.
                </div>
              )}
            </div>
          </section>

          <section className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <h2 className="font-heading text-[16px] font-bold text-text-dark">
                👥 Recent Contributors
              </h2>
              <Link
                href="/contributors"
                className="text-[13px] font-bold text-primary hover:underline"
              >
                View all {totalPaidContributors} →
              </Link>
            </div>

            <div>
              {recentContributorsData.length > 0 ? (
                recentContributorsData.map((contributor, index) => (
                  <div
                    key={contributor.id}
                    className={`flex items-center gap-3 px-5 py-4 sm:px-6 ${
                      index < recentContributorsData.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-bold text-white ${
                        contributor.anonymous ? "text-text-muted" : ""
                      }`}
                      style={{
                        backgroundColor: contributor.color,
                      }}
                    >
                      {contributor.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate font-heading text-[16px] font-bold text-text-dark">
                          {contributor.name}
                        </p>
                        {contributor.isYou && (
                          <span className="rounded-full bg-primary-light px-2 py-0.5 text-[10px] font-bold text-primary">
                            You
                          </span>
                        )}
                      </div>
                      <p className="truncate text-[13px] text-text-muted">
                        {contributor.handle}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-heading text-[16px] font-bold text-success">
                        +{formatCurrency(contributor.amount)}
                      </p>
                      <p className="text-[12px] text-text-muted">{contributor.time}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-5 py-5 text-sm text-text-muted sm:px-6">
                  No contributions have been recorded for this pool yet.
                </div>
              )}
            </div>
          </section>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-8">
          <section className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <h2 className="font-heading text-[18px] font-bold text-text-dark">
                Make a Contribution
              </h2>
              <p className="mt-1 text-[14px] text-text-muted">
                Any amount helps. No minimum.
              </p>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {contributionOptions.map((amount) => {
                  const isActive = selectedAmount === amount && customAmountText === "";

                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmountText("");
                        setContributeError("");
                        setInsufficientBalance(false);
                        setContributeSuccess(false);
                      }}
                      className={`rounded-[14px] border px-4 py-3 text-[16px] font-bold transition-colors ${
                        isActive
                          ? "border-success bg-success-bg text-success"
                          : "border-border text-text-muted hover:border-primary/20 hover:text-text-dark"
                      } ${amount === 5000 ? "sm:col-span-3" : ""}`}
                    >
                      {formatCurrency(amount)}
                    </button>
                  );
                })}
              </div>

              <div className={`flex items-center overflow-hidden rounded-[14px] border bg-[#fbfcfe] ${
                customAmountText ? "border-success" : "border-border"
              }`}>
                <span className="flex h-12 w-12 items-center justify-center border-r border-border bg-[#f4f6fa] text-[15px] font-bold text-text-muted">
                  ₦
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={customAmountText ? formatNumberWithCommas(customAmountText) : ""}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    setCustomAmountText(raw);
                    const parsed = parseInt(raw, 10);
                    if (!isNaN(parsed) && parsed > 0) {
                      setSelectedAmount(parsed);
                    }
                    setContributeError("");
                    setInsufficientBalance(false);
                    setContributeSuccess(false);
                  }}
                  placeholder="Custom amount"
                  className="w-full bg-transparent px-4 py-3 text-[18px] font-bold text-text-dark outline-none placeholder:text-[#c4c9d4]"
                />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <div>
                  <p className="font-heading text-[16px] font-bold text-text-dark">
                    🎭 Contribute anonymously
                  </p>
                  <p className="mt-1 max-w-[220px] text-[13px] leading-5 text-text-muted">
                    Your name won&apos;t appear on the contributor list
                  </p>
                </div>
                <Toggle
                  enabled={isAnonymous}
                  onChange={setIsAnonymous}
                  label="Contribute anonymously"
                />
              </div>

              <div className="flex items-center justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-[14px] text-text-muted">Your PoolFi Balance</span>
                <span className={`text-[16px] font-bold ${
                  walletBalanceNgn !== null && walletBalanceNgn < selectedAmount
                    ? "text-danger"
                    : "text-success"
                }`}>
                  {walletBalanceNgn !== null
                    ? `₦${walletBalanceNgn.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    : "Loading…"}
                </span>
              </div>

              {/* Success banner */}
              {contributeSuccess && (
                <div className="flex items-center gap-3 rounded-[14px] border border-success/20 bg-success-bg px-4 py-3">
                  <span className="text-[20px]">✅</span>
                  <div>
                    <p className="font-heading text-[15px] font-bold text-success">Contribution successful!</p>
                    <p className="text-[13px] text-text-muted">Your funds have been applied to this pool.</p>
                  </div>
                </div>
              )}

              {/* Error / Insufficient balance message */}
              {contributeError && (
                <div className="rounded-[14px] border border-danger/20 bg-danger/5 px-4 py-3">
                  <p className="text-[14px] font-medium text-danger">{contributeError}</p>
                  {insufficientBalance && (
                    <button
                      type="button"
                      onClick={() => setIsAddMoneyModalOpen(true)}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-white transition-colors hover:opacity-90"
                    >
                      + Add Funds
                    </button>
                  )}
                </div>
              )}

              <button
                type="button"
                disabled={isContributing || contributeSuccess}
                onClick={async () => {
                  if (!impactPool) return;

                  // Client-side balance check
                  if (walletBalanceNgn !== null && selectedAmount > walletBalanceNgn) {
                    setContributeError("Insufficient balance. Please add funds to your wallet first.");
                    setInsufficientBalance(true);
                    return;
                  }

                  setIsContributing(true);
                  setContributeError("");
                  setInsufficientBalance(false);

                  try {
                    const response = await fetch("/api/pools/contribute", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        poolId: impactPool.id,
                        amountNgn: selectedAmount,
                        anonymous: isAnonymous,
                      }),
                    });

                    const payload = await response.json().catch(() => null);

                    if (!response.ok) {
                      const msg = payload?.message ?? "Something went wrong. Please try again.";
                      setContributeError(msg);
                      if (response.status === 422 && payload?.availableNgn !== undefined) {
                        setInsufficientBalance(true);
                      }
                      return;
                    }

                    // Update balance locally
                    if (payload?.data?.newBalanceNgn !== undefined) {
                      setWalletBalanceNgn(payload.data.newBalanceNgn);
                    }

                    setContributeSuccess(true);

                    // Refresh pool data after a short delay
                    setTimeout(async () => {
                      try {
                        const poolRes = await fetch("/api/pools/impact/latest", { cache: "no-store" });
                        const poolPayload = await poolRes.json().catch(() => null);
                        if (poolRes.ok && poolPayload?.data) {
                          setImpactDetails(poolPayload.data);
                        }
                      } catch {
                        // Silent refresh failure
                      }
                    }, 500);
                  } catch {
                    setContributeError("Network error. Please check your connection and try again.");
                  } finally {
                    setIsContributing(false);
                  }
                }}
                className={`w-full rounded-[16px] px-5 py-4 font-heading text-[18px] font-bold text-white transition-all ${
                  contributeSuccess
                    ? "bg-success/60 cursor-default"
                    : isContributing
                      ? "bg-success/80 cursor-wait"
                      : "bg-success hover:opacity-95"
                }`}
              >
                {isContributing
                  ? "Processing…"
                  : contributeSuccess
                    ? "✓ Contributed!"
                    : `Contribute ${formatCurrency(selectedAmount)} →`}
              </button>

              <p className="text-center text-[13px] text-text-muted">
                🔒 Secured by smart contract · Multi-sig governed
              </p>
            </div>
          </section>

          <section className="rounded-[20px] border border-[#d8cfff] bg-[#f8f5ff] p-5 shadow-[0_2px_6px_rgba(124,58,237,0.05)] sm:p-6">
            <h2 className="font-heading text-[18px] font-bold text-purple">
              🔐 Community-Governed Withdrawals
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-purple">
              When the creator requests a withdrawal, PoolFi randomly selects
              contributors to review and approve. You could be chosen as an
              approver.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[
                ["Approvers", approversText],
                ["Withdrawals", withdrawalStatus],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[14px] bg-white px-3 py-3 text-center"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[1px] text-text-muted">
                    {label}
                  </p>
                  <p className="mt-1 font-heading text-[20px] font-bold text-purple">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[20px] border border-border bg-white p-5 shadow-[0_2px_6px_rgba(15,23,42,0.03)] sm:p-6">
            <h2 className="font-heading text-[18px] font-bold text-text-dark">
              📣 Spread the word
            </h2>

            <div className="mt-4 space-y-2.5">
              {[
                {
                  label: "📱 Share on WhatsApp",
                  onClick: handleShareWhatsApp,
                },
                {
                  label: "🔗 Copy Pool Link",
                  onClick: handleCopyPoolLink,
                },
                {
                  label: "🐦 Share on Twitter",
                  onClick: handleShareTwitter,
                },
              ].map((action) => (
                <button
                  key={action.label}
                  type="button"
                  onClick={action.onClick}
                  className="flex w-full items-center rounded-[14px] border border-border px-4 py-3 text-left text-[15px] font-semibold text-text-dark transition-colors hover:bg-gray-50"
                >
                  {action.label}
                </button>
              ))}
            </div>
            {shareStatus ? (
              <p className="mt-3 text-sm text-text-muted">{shareStatus}</p>
            ) : null}
          </section>

          <Link
            href="/withdrawals/details"
            className="flex items-center justify-center rounded-[18px] border border-[#d8cfff] bg-[#f8f5ff] px-5 py-4 text-center font-heading text-[18px] font-bold text-purple transition-colors hover:bg-[#f2edff]"
          >
            🔐 See Multi-Sig Approval Flow →
          </Link>
        </aside>
      </div>

      <AddMoneyModal 
        isOpen={isAddMoneyModalOpen} 
        onClose={() => setIsAddMoneyModalOpen(false)}
        depositMemo={depositMemo}
      />
    </div>
  );
}
