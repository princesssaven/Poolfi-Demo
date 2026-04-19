export default function MyWalletPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
          Wallet
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
          Your wallet overview
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
          This MVP wallet screen is ready for balances, transaction history, and
          linked payout methods. For now, it gives users a stable destination in
          the dashboard instead of a 404.
        </p>
      </section>
    </div>
  );
}
