"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import LogoIcon from "@/src/assets/icons/logo.svg";

interface PublicPoolData {
  category: string;
  closesDate: string;
  daysLeft: number;
  description: string;
  id: string;
  isCompleted: boolean;
  name: string;
  perPersonAmount: number;
  raised: number;
  targetAmount: number;
  totalMembers: number;
}

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function PublicPoolPage() {
  const params = useParams<{ slug: string }>();
  const [pool, setPool] = useState<PublicPoolData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const slug = params?.slug;

    if (!slug) {
      return;
    }

    const fetchPool = async () => {
      try {
        const response = await fetch(`/api/pools/public/${slug}`, {
          cache: "no-store",
        });
        const payload = (await response.json().catch(() => null)) as {
          message?: string;
          pool?: PublicPoolData;
        } | null;

        if (!isMounted) return;

        if (!response.ok || !payload?.pool) {
          setError(payload?.message || "Pool not found.");
        } else {
          setPool(payload.pool);
        }
      } catch {
        if (isMounted) setError("Failed to load pool details.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    void fetchPool();

    return () => {
      isMounted = false;
    };
  }, [params?.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f4f7fc] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <p className="text-text-muted text-sm font-medium">Loading pool details...</p>
        </div>
      </div>
    );
  }

  if (error || !pool) {
    return (
      <div className="min-h-screen bg-[#f4f7fc] flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <LogoIcon className="h-10 w-auto" />
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-md w-full text-center border border-danger/10">
          <p className="text-danger font-bold text-lg mb-2">Unavailable</p>
          <p className="text-text-muted text-sm mb-6">{error || "We couldn't find this pool."}</p>
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
            Go to PoolFi
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage = pool.targetAmount > 0 
    ? Math.min(100, Math.round((pool.raised / pool.targetAmount) * 100))
    : 0;

  return (
    <div className="min-h-screen bg-[#f4f7fc]">
      <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <LogoIcon className="h-8 w-auto" />
        </Link>
        <Link href="/sign-up" className="text-sm font-bold text-primary hover:underline">
          Sign up to create your own pool
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 sm:py-16">
        <div className="bg-white rounded-[24px] border border-border overflow-hidden shadow-sm">
          <div className="bg-primary px-6 py-8 sm:px-10 sm:py-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_50%)]" />
            <div className="relative z-10">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-4">
                {pool.category}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                {pool.name}
              </h1>
              {pool.description && (
                <p className="text-white/80 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                  {pool.description}
                </p>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-[13px] font-bold text-text-muted uppercase tracking-wider mb-1">Raised</p>
                  <p className="font-heading text-3xl font-extrabold text-text-dark">
                    {formatCurrency(pool.raised)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-bold text-text-muted uppercase tracking-wider mb-1">Target</p>
                  <p className="font-heading text-xl font-bold text-text-dark">
                    {formatCurrency(pool.targetAmount)}
                  </p>
                </div>
              </div>
              <div className="h-3 w-full bg-[#eef2f7] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-success transition-all duration-1000 ease-out" 
                  style={{ width: `${progressPercentage}%` }} 
                />
              </div>
              <div className="flex justify-between mt-2 text-xs font-semibold text-text-muted">
                <span>{progressPercentage}% funded</span>
                <span>{pool.totalMembers} contributors</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f7f9fc] rounded-2xl p-4">
                <p className="text-[11px] uppercase tracking-wider font-bold text-text-muted mb-1">Per Person</p>
                <p className="font-heading text-lg font-bold text-text-dark">
                  {formatCurrency(pool.perPersonAmount)}
                </p>
              </div>
              <div className="bg-[#f7f9fc] rounded-2xl p-4">
                <p className="text-[11px] uppercase tracking-wider font-bold text-text-muted mb-1">Status</p>
                <p className="font-heading text-lg font-bold text-text-dark">
                  {pool.isCompleted ? "Completed" : pool.closesDate}
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              {pool.isCompleted ? (
                <div className="bg-success/10 text-success font-bold rounded-2xl py-4 px-6 inline-block">
                  This pool has been completed and is no longer accepting contributions.
                </div>
              ) : (
                <>
                  <Link
                    href="/sign-in?next=%2Fimpact-contribution"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(51,94,255,0.24)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Contribute {formatCurrency(pool.perPersonAmount)}
                  </Link>
                  <p className="text-[12px] text-text-muted mt-4 font-medium">
                    Sign in to contribute securely from your PoolFi wallet.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
