import Link from "next/link";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";

export default function TermsPage() {
  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="w-full max-w-[709px]">
          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Terms
          </p>
          <h1 className="mt-2 font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
            PoolFi Terms of Service
          </h1>
          <div className="mt-6 space-y-4 rounded-[16px] border border-border bg-[#fbfcff] p-6">
            <p className="font-card text-sm leading-6 text-text-muted">
              PoolFi accounts, profile changes, and pool records are stored in the app&apos;s
              configured database. Email verification and password resets are delivered
              through the configured email provider for this environment.
            </p>
            <p className="font-card text-sm leading-6 text-text-muted">
              Google sign-in uses your configured Google OAuth app and redirects through
              Google for authentication. Don&apos;t use real financial credentials, bank
              details, or other sensitive information here beyond what&apos;s needed to
              test login.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/sign-up"
              className="font-card text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
            >
              Back to sign up
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
