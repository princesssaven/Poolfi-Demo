"use client";

import { useEffect, useState } from "react";

interface ActivityItem {
  createdAt: string;
  id: string;
  kind: string;
  message: string;
}

interface UpdatesPayload {
  data?: {
    activities?: ActivityItem[];
    pool?: {
      name: string;
    };
  };
  message?: string;
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
  });
}

export default function UpdatesPage() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [poolName, setPoolName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadUpdates = async () => {
      const response = await fetch("/api/pools/impact/latest", {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as
        | UpdatesPayload
        | null;

      if (!isMounted) return;

      if (!response.ok || !payload?.data?.pool) {
        setErrorMessage(payload?.message ?? "No updates are available yet.");
        setIsLoading(false);
        return;
      }

      setPoolName(payload.data.pool.name);
      setActivities(payload.data.activities ?? []);
      setIsLoading(false);
    };

    void loadUpdates();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[900px] space-y-5">
      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
          Updates
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
          {poolName || "Impact pool updates"}
        </h1>
      </section>

      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        {isLoading ? (
          <p className="text-sm text-text-muted">Loading updates…</p>
        ) : errorMessage ? (
          <p className="text-sm font-medium text-danger">{errorMessage}</p>
        ) : activities.length === 0 ? (
          <p className="text-sm text-text-muted">
            No progress updates have been posted yet.
          </p>
        ) : (
          <div className="space-y-5">
            {activities.map((activity, index) => (
              <article
                key={activity.id}
                className={
                  index < activities.length - 1
                    ? "border-b border-border pb-5"
                    : ""
                }
              >
                <p className="text-xs font-semibold uppercase tracking-[1px] text-text-muted">
                  {activity.kind.replace(/_/g, " ")}
                </p>
                <p className="mt-2 text-base leading-7 text-text-dark">
                  {activity.message}
                </p>
                <p className="mt-2 text-xs text-text-muted">
                  {formatDate(activity.createdAt)}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
