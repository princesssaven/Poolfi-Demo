"use client";

import Image from "next/image";

export default function AuthHeroPanel() {
  return (
    <aside className="relative hidden w-full max-w-[653px] shrink-0 overflow-hidden rounded-[12px] bg-[#005AE2] p-3 lg:flex lg:min-h-[calc(100vh-16px)] xl:min-h-[1020px]">
      <div className="absolute inset-3 overflow-hidden rounded-[12px]">
        <Image
          src="/auth/sign-in-hero.png"
          alt="PoolFi members using their phones together."
          fill
          priority
          sizes="653px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,34,99,0.18)_0%,rgba(27,79,216,0.46)_100%)]" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between">
        <div className="flex items-center gap-3 px-8 pt-8">
          <Image
            src="/auth/poolfi-mark.svg"
            alt=""
            aria-hidden="true"
            width={46}
            height={46}
            className="h-[46px] w-[46px] shrink-0"
          />
          <span className="font-body text-[28px] font-semibold tracking-[-0.02em] text-[#F2F3F7]">
            PoolFi
          </span>
        </div>

        <div className="px-6 pb-8">
          <div className="flex max-w-[631px] flex-col items-start gap-4 rounded-[12px] p-[10px]">
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/12 px-[15px] py-[7px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#12B76A]" />
              <span className="font-card text-xs font-medium tracking-[0.3px] text-white">
                Community-led finance
              </span>
            </div>

            <div className="font-card text-[40px] font-bold leading-[46px] tracking-[-1px] text-white">
              <p>Pool money.</p>
              <p className="text-[#A5C4FF]">Together.</p>
              <p>Transparently.</p>
            </div>

            <p className="max-w-[340px] font-card text-[15px] font-light leading-[25.5px] text-white">
              No more WhatsApp treasurer drama. Create a pool, invite your
              people, track every contribution in real time.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
