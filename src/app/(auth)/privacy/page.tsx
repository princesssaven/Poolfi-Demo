import Link from "next/link";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";

export default function PrivacyPage() {
  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="w-full max-w-[709px]">
          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Privacy
          </p>
          <h1 className="mt-2 font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
            PoolFi Privacy Notice
          </h1>
          <div className="mt-6 space-y-4 rounded-[16px] border border-border bg-[#fbfcff] p-6">
            <p className="font-card text-sm leading-6 text-text-muted">
              PoolFi stores session cookies for sign-in state, and stores account,
              verification, password reset, and pool management data in the configured
              database for this environment.
            </p>
            <p className="font-card text-sm leading-6 text-text-muted">
              Google login redirects through your configured Google OAuth provider and
              then returns to `/api/auth/callback/google`. Verification and reset emails
              are sent through the configured transactional email provider.
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
