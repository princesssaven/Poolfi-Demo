"use client";

import { useEffect, useState } from "react";

interface ContributorItem {
  amount: number;
  anonymous: boolean;
  color: string;
  handle: string;
  id: string;
  initials: string;
  name: string;
  time: string;
}

interface ContributorsPayload {
  data?: {
    pool?: {
      name: string;
      contributorCount: number;
    };
    recentContributors?: ContributorItem[];
  };
  message?: string;
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function formatRelativeTime(value: string) {
  const date = new Date(value);
  const diff = Date.now() - date.getTime();

  if (diff < 60000) return "Just now";
  if (diff < 3600000) return `${Math.round(diff / 60000)} min ago`;
  if (diff < 86400000) return `${Math.round(diff / 3600000)} hrs ago`;

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ContributorsPage() {
  const [contributors, setContributors] = useState<ContributorItem[]>([]);
  const [poolName, setPoolName] = useState("");
  const [contributorCount, setContributorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadContributors = async () => {
      const response = await fetch("/api/pools/impact/latest", {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as
        | ContributorsPayload
        | null;

      if (!isMounted) return;

      if (!response.ok || !payload?.data?.pool) {
        setErrorMessage(payload?.message ?? "No contributor data is available yet.");
        setIsLoading(false);
        return;
      }

      setPoolName(payload.data.pool.name);
      setContributorCount(payload.data.pool.contributorCount);
      setContributors(payload.data.recentContributors ?? []);
      setIsLoading(false);
    };

    void loadContributors();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[980px] space-y-5">
      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
          Contributors
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
          {poolName || "Impact pool contributors"}
        </h1>
        <p className="mt-3 text-sm text-text-muted">
          {contributorCount.toLocaleString("en-NG")} recorded contributor
          {contributorCount === 1 ? "" : "s"}
        </p>
      </section>

      <section className="overflow-hidden rounded-[24px] border border-border bg-white shadow-sm">
        {isLoading ? (
          <div className="px-6 py-8 text-sm text-text-muted">Loading contributors…</div>
        ) : errorMessage ? (
          <div className="px-6 py-8 text-sm font-medium text-danger">
            {errorMessage}
          </div>
        ) : contributors.length === 0 ? (
          <div className="px-6 py-8 text-sm text-text-muted">
            No contributions have been recorded for this pool yet.
          </div>
        ) : (
          contributors.map((contributor, index) => (
            <div
              key={contributor.id}
              className={`flex items-center gap-3 px-5 py-4 sm:px-6 ${
                index < contributors.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-bold text-white ${
                  contributor.anonymous ? "text-text-muted" : ""
                }`}
                style={{ backgroundColor: contributor.color }}
              >
                {contributor.initials}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-heading text-[16px] font-bold text-text-dark">
                  {contributor.name}
                </p>
                <p className="truncate text-[13px] text-text-muted">
                  {contributor.handle}
                </p>
              </div>

              <div className="text-right">
                <p className="font-heading text-[16px] font-bold text-success">
                  +{formatCurrency(contributor.amount)}
                </p>
                <p className="text-[12px] text-text-muted">
                  {formatRelativeTime(contributor.time)}
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
