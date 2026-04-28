import Link from "next/link";

export default function PoolSubmittedPage() {
  return (
    <section className="mx-auto max-w-[640px] rounded-[24px] border border-border bg-white p-6 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
        Pool submitted
      </p>
      <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
        Your pool has been submitted
      </h1>
      <p className="mt-3 text-sm leading-6 text-text-muted">
        Live status will appear in your pool dashboard once the pool record is
        available.
      </p>
      <Link
        href="/my-pools"
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
      >
        Back to My Pools
      </Link>
    </section>
  );
}
