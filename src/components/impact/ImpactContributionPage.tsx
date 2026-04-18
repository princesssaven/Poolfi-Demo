"use client";

import Link from "next/link";
import { useState } from "react";
import Toggle from "@/src/components/ui/Toggle";

interface BudgetItem {
  label: string;
  amount: number;
  percentage: number;
  color: string;
}

interface UpdateItem {
  id: number;
  author: string;
  role: string;
  date: string;
  title: string;
  body: string;
  reactions: { icon: string; count: number }[];
  imageEmoji?: string;
}

interface ContributorItem {
  id: number;
  initials: string;
  name: string;
  handle: string;
  amount: number;
  time: string;
  color: string;
  isYou?: boolean;
  anonymous?: boolean;
}

const contributionOptions = [500, 1000, 2000, 5000];

const budgetItems: BudgetItem[] = [
  {
    label: "Borehole Drilling & Casing",
    amount: 400000,
    percentage: 40,
    color: "#12b76a",
  },
  {
    label: "Solar Pump & Electrical",
    amount: 250000,
    percentage: 25,
    color: "#f79009",
  },
  {
    label: "Distribution Pipes & Taps",
    amount: 200000,
    percentage: 20,
    color: "#1b4fd8",
  },
  {
    label: "Labour & Installation",
    amount: 150000,
    percentage: 15,
    color: "#8b5cf6",
  },
];

const updates: UpdateItem[] = [
  {
    id: 1,
    author: "Chukwuemeka Dike",
    role: "Creator",
    date: "Feb 15, 2026 · Update #2",
    title: "Drilling has officially started",
    body:
      "Great news — drilling began yesterday. The engineering team from AquaTech arrived on site Monday and the first 20 metres have been completed. We expect the casing and pump installation to begin next week if weather conditions hold.",
    reactions: [
      { icon: "❤️", count: 142 },
      { icon: "🎉", count: 89 },
      { icon: "💬", count: 14 },
    ],
    imageEmoji: "🚰",
  },
  {
    id: 2,
    author: "Chukwuemeka Dike",
    role: "Creator",
    date: "Feb 5, 2026 · Update #1",
    title: "We’ve reached 60% of our target",
    body:
      "We’ve reached 60% of our target and signed the contract with AquaTech NG. The first withdrawal of ₦200,000 was approved by 3 of 5 randomly selected contributors and has been released. Work is scheduled to begin on Feb 14th. Thank you all so much — this community has waited too long for clean water.",
    reactions: [
      { icon: "❤️", count: 98 },
      { icon: "🎉", count: 213 },
    ],
  },
];

const recentContributors: ContributorItem[] = [
  {
    id: 1,
    initials: "EO",
    name: "Emeka Obi",
    handle: "BlueLagoon#4821",
    amount: 1000,
    time: "Just now",
    color: "#3159f1",
    isYou: true,
  },
  {
    id: 2,
    initials: "CE",
    name: "Chioma Eze",
    handle: "SilverFalcon#3312",
    amount: 5000,
    time: "1 hr ago",
    color: "#12b76a",
  },
  {
    id: 3,
    initials: "?",
    name: "Anonymous",
    handle: "Hidden contributor",
    amount: 2000,
    time: "3 hrs ago",
    color: "#d0d5dd",
    anonymous: true,
  },
  {
    id: 4,
    initials: "YA",
    name: "Yemi Adesanya",
    handle: "GoldRiver#7721",
    amount: 1000,
    time: "5 hrs ago",
    color: "#7c3aed",
  },
  {
    id: 5,
    initials: "BM",
    name: "Bello Musa",
    handle: "IronEagle#9941",
    amount: 10000,
    time: "Yesterday",
    color: "#e11d48",
  },
  {
    id: 6,
    initials: "AO",
    name: "Adaeze Okeke",
    handle: "CoralWave#5534",
    amount: 500,
    time: "Yesterday",
    color: "#0891b2",
  },
  {
    id: 7,
    initials: "?",
    name: "Anonymous",
    handle: "Hidden contributor",
    amount: 3000,
    time: "2 days ago",
    color: "#d0d5dd",
    anonymous: true,
  },
  {
    id: 8,
    initials: "SF",
    name: "Segun Fashola",
    handle: "BlueMoon#2287",
    amount: 2000,
    time: "2 days ago",
    color: "#16a34a",
  },
];

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function ImpactContributionPage() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-5">
      <section
        className="overflow-hidden rounded-[24px] bg-primary px-5 py-5 text-white shadow-[0_16px_36px_rgba(27,79,216,0.16)] sm:px-6 sm:py-6 lg:px-7"
      >
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-white/90">
            🔒 Goal Pool · Private · Invite Only
          </div>

          <div className="space-y-3">
            <h1 className="max-w-[760px] font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.8px] text-white sm:text-[38px] lg:text-[48px]">
              Clean Water Borehole for
              <br />
              Oguta Community, Imo State
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-white/70 sm:text-[16px]">
              <span>📍 Oguta, Imo State</span>
              <span>📅 Deadline March 15, 2026</span>
              <span>👤 Created by Chukwuemeka Dike</span>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[18px] border border-white/10 bg-white/8 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Raised",
                value: "₦670,000",
                valueClass: "text-emerald-light",
                sub: "of ₦1,000,000 target",
              },
              {
                label: "Contributors",
                value: "342",
                valueClass: "text-white",
                sub: "from 14 states",
              },
              {
                label: "Withdrawals",
                value: "1 Approved",
                valueClass: "text-white",
                sub: "₦200k released",
              },
              {
                label: "Days Left",
                value: "25",
                valueClass: "text-yellow",
                sub: "Closes Mar 15, 2026",
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
                  ₦670,000 raised
                </h2>
                <span className="inline-flex w-fit rounded-full bg-primary-light px-4 py-2 text-[13px] font-bold text-primary">
                  78% funded
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-bg-page">
                <div className="h-full w-[78%] rounded-full bg-primary" />
              </div>

              <div className="flex flex-col gap-1 text-[14px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
                <span>₦330,000 still needed</span>
                <span>Target: ₦1,000,000</span>
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
                <p>
                  Over 3,000 residents of Oguta in Imo State currently walk an
                  average of 2 kilometres daily to access clean water. The
                  community has no functioning borehole, and surface water
                  sources are contaminated. This has led to recurring cases of
                  cholera and waterborne diseases, especially among children.
                </p>
                <p>
                  This pool funds the drilling, casing, and installation of a
                  mechanised borehole with a solar-powered pump and a community
                  distribution network. The project is being executed in
                  partnership with a certified water engineering firm in Owerri.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Beneficiaries", "3,000+ residents"],
                  ["Location", "Oguta, Imo State"],
                  ["Implementing Partner", "AquaTech NG Ltd"],
                  ["Expected Completion", "April 2026"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-[#f7f9fc] px-4 py-3.5"
                  >
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
              {budgetItems.map((item) => (
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
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <h2 className="font-heading text-[16px] font-bold text-text-dark">
                📢 Progress Updates <span className="ml-1 font-body text-[14px] font-medium text-text-muted">from the creator</span>
              </h2>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              {updates.map((update) => (
                <article
                  key={update.id}
                  className={`space-y-4 ${
                    update.id !== updates[updates.length - 1]?.id
                      ? "border-b border-border pb-6"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-dark text-[15px] font-bold text-white">
                      CD
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

                  {update.imageEmoji && (
                    <div className="flex h-[220px] items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#056a59_0%,#0b7a63_100%)] text-[48px]">
                      {update.imageEmoji}
                    </div>
                  )}

                  <div className="space-y-3">
                    <p className="text-[16px] leading-8 text-text-muted">
                      {update.title}. {update.body}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {update.reactions.map((reaction) => (
                      <button
                        key={`${update.id}-${reaction.icon}`}
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[13px] font-semibold text-text-muted transition-colors hover:bg-gray-50"
                      >
                        <span aria-hidden="true">{reaction.icon}</span>
                        {reaction.count}
                      </button>
                    ))}
                  </div>
                </article>
              ))}
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
                View all 342 →
              </Link>
            </div>

            <div>
              {recentContributors.map((contributor, index) => (
                <div
                  key={contributor.id}
                  className={`flex items-center gap-3 px-5 py-4 sm:px-6 ${
                    index < recentContributors.length - 1
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
              ))}
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
                  const isActive = selectedAmount === amount;

                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
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

              <div className="flex items-center overflow-hidden rounded-[14px] border border-border bg-[#fbfcfe]">
                <span className="flex h-12 w-12 items-center justify-center border-r border-border bg-[#f4f6fa] text-[15px] font-bold text-text-muted">
                  ₦
                </span>
                <input
                  type="text"
                  value=""
                  readOnly
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
                <span className="text-[16px] font-bold text-success">₦31,500.00</span>
              </div>

              <button
                type="button"
                className="w-full rounded-[16px] bg-success px-5 py-4 font-heading text-[18px] font-bold text-white transition-colors hover:opacity-95"
              >
                Contribute {formatCurrency(selectedAmount)} →
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
                ["Approvers", "3 of 5"],
                ["Released", "₦200k"],
                ["Pending", "No"],
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
                "📱 Share on WhatsApp",
                "🔗 Copy Pool Link",
                "🐦 Share on Twitter",
              ].map((action) => (
                <button
                  key={action}
                  type="button"
                  className="flex w-full items-center rounded-[14px] border border-border px-4 py-3 text-left text-[15px] font-semibold text-text-dark transition-colors hover:bg-gray-50"
                >
                  {action}
                </button>
              ))}
            </div>
          </section>

          <Link
            href="/withdrawals/details"
            className="flex items-center justify-center rounded-[18px] border border-[#d8cfff] bg-[#f8f5ff] px-5 py-4 text-center font-heading text-[18px] font-bold text-purple transition-colors hover:bg-[#f2edff]"
          >
            🔐 See Multi-Sig Approval Flow →
          </Link>
        </aside>
      </div>
    </div>
  );
}
