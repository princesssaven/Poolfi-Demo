"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import PublicPoolView from "@/src/components/pool/PublicPoolView";
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
  adminName?: string;
  paidCount?: number;
  pendingCount?: number;
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

  return <PublicPoolView pool={pool} />;
}
