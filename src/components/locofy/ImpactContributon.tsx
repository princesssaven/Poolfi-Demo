import svgPaths from "../svg/svg-lhku8b0cby";

function SpanLock() {
  return (
    <div className="relative shrink-0" data-name="span.lock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">🔒</p>
        </div>
      </div>
    </div>
  );
}

function DivPoolTypeTag() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[6px] items-center px-[15px] py-[6px] relative rounded-[100px] shrink-0" data-name="div.pool-type-tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <SpanLock />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.85)] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Goal Pool · Private · Invite Only</p>
      </div>
    </div>
  );
}

function H1PoolTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.pool-title">
      <div className="flex flex-col font-['Sora:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-1px] w-[989px] whitespace-pre-wrap">
        <p className="leading-[36.8px] mb-0">{`Clean Water Borehole for `}</p>
        <p className="leading-[36.8px]">Oguta Community, Imo State</p>
      </div>
    </div>
  );
}

function PPoolDescription() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Light',sans-serif] font-light items-start leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] w-full whitespace-nowrap" data-name="p.pool-description">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[25.5px]">{`📍 Oguta, Imo State `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[25.5px]">📅 Deadline March 15, 2026</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[25.5px]">{`👤 Created by Chukwuemeka Dike `}</p>
      </div>
    </div>
  );
}

function DivHeroStatLabel() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[18px]" data-name="div.hero-stat-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Raised</p>
      </div>
    </div>
  );
}

function DivHeroStatValue() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[38px]" data-name="div.hero-stat-value">
      <div className="flex flex-col font-['Sora:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#6ee7b7] text-[22px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">₦670,000</p>
      </div>
    </div>
  );
}

function DivHeroStatSub() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[68px]" data-name="div.hero-stat-sub">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">of ₦1,000,000 target</p>
      </div>
    </div>
  );
}

function DivHeroStat() {
  return (
    <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-name="div.hero-stat">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivHeroStatLabel />
        <DivHeroStatValue />
        <DivHeroStatSub />
      </div>
    </div>
  );
}

function DivHeroStatLabel1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[18px]" data-name="div.hero-stat-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Contributors</p>
      </div>
    </div>
  );
}

function DivHeroStatValue1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[38px]" data-name="div.hero-stat-value">
      <div className="flex flex-col font-['Sora:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[22px] text-white tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">342</p>
      </div>
    </div>
  );
}

function DivHeroStatSub1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[68px]" data-name="div.hero-stat-sub">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">from 14 states</p>
      </div>
    </div>
  );
}

function DivHeroStat1() {
  return (
    <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-name="div.hero-stat">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivHeroStatLabel1 />
        <DivHeroStatValue1 />
        <DivHeroStatSub1 />
      </div>
    </div>
  );
}

function DivHeroStatLabel2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[18px]" data-name="div.hero-stat-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Withdrawals</p>
      </div>
    </div>
  );
}

function DivHeroStatValue2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[38px]" data-name="div.hero-stat-value">
      <div className="flex flex-col font-['Sora:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[22px] text-white tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">1 Approved</p>
      </div>
    </div>
  );
}

function DivHeroStatSub2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[21px] top-[68px]" data-name="div.hero-stat-sub">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">₦200k released</p>
      </div>
    </div>
  );
}

function DivHeroStat2() {
  return (
    <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-name="div.hero-stat">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivHeroStatLabel2 />
        <DivHeroStatValue2 />
        <DivHeroStatSub2 />
      </div>
    </div>
  );
}

function DivHeroStatLabel3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[18px]" data-name="div.hero-stat-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.45)] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Days Left</p>
      </div>
    </div>
  );
}

function DivHeroStatValue3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[38px]" data-name="div.hero-stat-value">
      <div className="flex flex-col font-['Sora:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#fcd34d] text-[22px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">25</p>
      </div>
    </div>
  );
}

function DivHeroStatSub3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[68px]" data-name="div.hero-stat-sub">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.35)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Closes Mar 15, 2026</p>
      </div>
    </div>
  );
}

function DivHeroStat3() {
  return (
    <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-name="div.hero-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivHeroStatLabel3 />
        <DivHeroStatValue3 />
        <DivHeroStatSub3 />
      </div>
    </div>
  );
}

function DivHeroBottom() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[852px]" data-name="div.hero-bottom">
      <div className="content-stretch flex items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <DivHeroStat />
        <DivHeroStat1 />
        <DivHeroStat2 />
        <DivHeroStat3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
    </div>
  );
}

function DivHeroInner() {
  return (
    <div className="absolute bg-[#1b4fd8] content-stretch flex flex-col gap-[12px] items-start left-[260px] px-[24px] py-[12px] top-0 w-[1180px]" data-name="div.hero-inner">
      <DivPoolTypeTag />
      <H1PoolTitle />
      <PPoolDescription />
      <DivHeroBottom />
    </div>
  );
}

function SpanProgressRaised() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[414px]" data-name="span.progress-raised">
      <div className="flex flex-col font-['Sora:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[22px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">₦670,000 raised</p>
      </div>
    </div>
  );
}

function SpanProgressPct() {
  return (
    <div className="bg-[#eef3ff] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[100px] shrink-0" data-name="span.progress-pct">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4fd8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">78% funded</p>
      </div>
    </div>
  );
}

function DivProgressTopRow() {
  return (
    <div className="absolute content-stretch flex gap-[135.92px] items-center left-[25px] right-[25px] top-[20px]" data-name="div.progress-top-row">
      <SpanProgressRaised />
      <SpanProgressPct />
    </div>
  );
}

function DivProgressBar() {
  return (
    <div className="absolute bg-[#f4f5f7] h-[10px] left-[25px] overflow-clip right-[25px] rounded-[100px] top-[57px]" data-name="div.progress-bar">
      <div className="absolute bg-gradient-to-r from-[#1b4fd8] inset-[0_22%_0_0] rounded-[100px] to-[#5b8ef0]" data-name="div#main-progress" />
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[351px]" data-name="span">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">₦330,000 still needed</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Target: ₦1,000,000</p>
      </div>
    </div>
  );
}

function DivProgressMeta() {
  return (
    <div className="absolute content-stretch flex gap-[193.17px] h-[16px] items-start left-[25px] right-[25px] top-[75px]" data-name="div.progress-meta">
      <Span />
      <Span1 />
    </div>
  );
}

function Progress() {
  return (
    <div className="bg-white h-[112px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="PROGRESS">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <DivProgressTopRow />
      <DivProgressBar />
      <DivProgressMeta />
    </div>
  );
}

function DivSectionCardHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[20px] relative size-full">
          <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[15px] whitespace-nowrap">
            <p className="leading-[normal]">📖 About this Pool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PAboutText() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.565px] relative shrink-0 w-full" data-name="p.about-text">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[25.2px] mb-0">Over 3,000 residents of Oguta in Imo State currently walk an average of 2</p>
        <p className="leading-[25.2px]">kilometres daily to access clean water. The community has no functioning borehole, and surface water sources are contaminated. This has led to recurring cases of cholera and waterborne diseases, especially among children.</p>
      </div>
    </div>
  );
}

function PAboutText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.about-text">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[25.2px]">This pool funds the drilling, casing, and installation of a mechanised borehole with a solar-powered pump and a community distribution network. The project is being executed in partnership with a certified water engineering firm in Owerri.</p>
      </div>
    </div>
  );
}

function DivDetailLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Beneficiaries</p>
      </div>
    </div>
  );
}

function DivDetailValue() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-value">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">3,000+ residents</p>
      </div>
    </div>
  );
}

function DivDetailItem() {
  return (
    <div className="absolute bg-[#f4f5f7] content-stretch flex flex-col gap-[4px] items-start left-0 px-[14px] py-[12px] right-[249px] rounded-[10px] top-0" data-name="div.detail-item">
      <DivDetailLabel />
      <DivDetailValue />
    </div>
  );
}

function DivDetailLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Location</p>
      </div>
    </div>
  );
}

function DivDetailValue1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-value">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Oguta, Imo State</p>
      </div>
    </div>
  );
}

function DivDetailItem1() {
  return (
    <div className="absolute bg-[#f4f5f7] content-stretch flex flex-col gap-[4px] items-start left-[249px] px-[14px] py-[12px] right-0 rounded-[10px] top-0" data-name="div.detail-item">
      <DivDetailLabel1 />
      <DivDetailValue1 />
    </div>
  );
}

function DivDetailLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Implementing Partner</p>
      </div>
    </div>
  );
}

function DivDetailValue2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-value">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">AquaTech NG Ltd</p>
      </div>
    </div>
  );
}

function DivDetailItem2() {
  return (
    <div className="absolute bg-[#f4f5f7] content-stretch flex flex-col gap-[4px] items-start left-0 px-[14px] py-[12px] right-[249px] rounded-[10px] top-[72px]" data-name="div.detail-item">
      <DivDetailLabel2 />
      <DivDetailValue2 />
    </div>
  );
}

function DivDetailLabel3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Expected Completion</p>
      </div>
    </div>
  );
}

function DivDetailValue3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.detail-value">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">April 2026</p>
      </div>
    </div>
  );
}

function DivDetailItem3() {
  return (
    <div className="absolute bg-[#f4f5f7] content-stretch flex flex-col gap-[4px] items-start left-[249px] px-[14px] py-[12px] right-0 rounded-[10px] top-[72px]" data-name="div.detail-item">
      <DivDetailLabel3 />
      <DivDetailValue3 />
    </div>
  );
}

function DivDetailGrid() {
  return (
    <div className="h-[132.7px] relative shrink-0 w-full" data-name="div.detail-grid">
      <DivDetailItem />
      <DivDetailItem1 />
      <DivDetailItem2 />
      <DivDetailItem3 />
    </div>
  );
}

function DivSectionCardBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.3px] items-start pb-[20px] pt-[19.375px] px-[20px] relative size-full">
        <PAboutText />
        <PAboutText1 />
        <DivDetailGrid />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[708px]" data-name="ABOUT">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivSectionCardHeader />
        <DivSectionCardBody />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function DivSectionCardHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[20px] relative size-full">
          <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[15px] whitespace-nowrap">
            <p className="leading-[normal]">💰 Budget Breakdown</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivBudgetLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Borehole Drilling & Casing`}</p>
      </div>
    </div>
  );
}

function DivBudgetBar() {
  return (
    <div className="bg-[#f4f5f7] h-[5px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="div.budget-bar">
      <div className="absolute bg-[#12b76a] inset-[0_60%_0_0] rounded-[100px]" data-name="div.budget-fill" />
    </div>
  );
}

function DivBudgetBarWrap() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div.budget-bar-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start relative size-full">
        <DivBudgetLabel />
        <DivBudgetBar />
      </div>
    </div>
  );
}

function DivBudgetAmount() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">₦400,000</p>
      </div>
    </div>
  );
}

function DivBudgetPct() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.budget-pct">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">40%</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-[65px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivBudgetAmount />
        <DivBudgetPct />
      </div>
    </div>
  );
}

function DivBudgetItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] relative shrink-0 w-full" data-name="div.budget-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <DivBudgetBarWrap />
      <Div />
    </div>
  );
}

function DivBudgetLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Solar Pump & Electrical`}</p>
      </div>
    </div>
  );
}

function DivBudgetBar1() {
  return (
    <div className="bg-[#f4f5f7] h-[5px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="div.budget-bar">
      <div className="absolute bg-[#f79009] bottom-0 left-0 right-3/4 rounded-[100px] top-0" data-name="div.budget-fill" />
    </div>
  );
}

function DivBudgetBarWrap1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div.budget-bar-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start relative size-full">
        <DivBudgetLabel1 />
        <DivBudgetBar1 />
      </div>
    </div>
  );
}

function DivBudgetAmount1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">₦250,000</p>
      </div>
    </div>
  );
}

function DivBudgetPct1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.budget-pct">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">25%</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="relative shrink-0 w-[63px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivBudgetAmount1 />
        <DivBudgetPct1 />
      </div>
    </div>
  );
}

function DivBudgetItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] relative shrink-0 w-full" data-name="div.budget-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <DivBudgetBarWrap1 />
      <Div1 />
    </div>
  );
}

function DivBudgetLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Distribution Pipes & Taps`}</p>
      </div>
    </div>
  );
}

function DivBudgetBar2() {
  return (
    <div className="bg-[#f4f5f7] h-[5px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="div.budget-bar">
      <div className="absolute bg-[#1b4fd8] inset-[0_80%_0_0] rounded-[100px]" data-name="div.budget-fill" />
    </div>
  );
}

function DivBudgetBarWrap2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div.budget-bar-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start relative size-full">
        <DivBudgetLabel2 />
        <DivBudgetBar2 />
      </div>
    </div>
  );
}

function DivBudgetAmount2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">₦200,000</p>
      </div>
    </div>
  );
}

function DivBudgetPct2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.budget-pct">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">20%</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivBudgetAmount2 />
        <DivBudgetPct2 />
      </div>
    </div>
  );
}

function DivBudgetItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] relative shrink-0 w-full" data-name="div.budget-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <DivBudgetBarWrap2 />
      <Div2 />
    </div>
  );
}

function DivBudgetLabel3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Labour & Installation`}</p>
      </div>
    </div>
  );
}

function DivBudgetBar3() {
  return (
    <div className="bg-[#f4f5f7] h-[5px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="div.budget-bar">
      <div className="absolute bg-[#7c3aed] inset-[0_85%_0_0] rounded-[100px]" data-name="div.budget-fill" />
    </div>
  );
}

function DivBudgetBarWrap3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-name="div.budget-bar-wrap">
      <DivBudgetLabel3 />
      <DivBudgetBar3 />
    </div>
  );
}

function DivBudgetAmount3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.budget-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">₦150,000</p>
      </div>
    </div>
  );
}

function DivBudgetPct3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.budget-pct">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">15%</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="div">
      <DivBudgetAmount3 />
      <DivBudgetPct3 />
    </div>
  );
}

function DivBudgetItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[12px] relative shrink-0 w-full" data-name="div.budget-item">
      <DivBudgetBarWrap3 />
      <Div3 />
    </div>
  );
}

function DivSectionCardBody1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20px] relative size-full">
        <DivBudgetItem />
        <DivBudgetItem1 />
        <DivBudgetItem2 />
        <DivBudgetItem3 />
      </div>
    </div>
  );
}

function BudgetBreakdown() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[706px]" data-name="BUDGET BREAKDOWN">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivSectionCardHeader1 />
        <DivSectionCardBody1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Span2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">from the creator</p>
      </div>
    </div>
  );
}

function DivSectionCardTitle() {
  return (
    <div className="relative shrink-0" data-name="div.section-card-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[15px] whitespace-nowrap">
          <p className="leading-[normal]">📢 Progress Updates</p>
        </div>
        <Span2 />
      </div>
    </div>
  );
}

function DivSectionCardHeader2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[20px] relative size-full">
          <DivSectionCardTitle />
        </div>
      </div>
    </div>
  );
}

function SpanUpdateName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.update-name">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Chukwuemeka Dike</p>
      </div>
    </div>
  );
}

function SpanUpdateRole() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="span.update-role">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Creator</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div">
      <SpanUpdateName />
      <SpanUpdateRole />
    </div>
  );
}

function DivUpdateTime() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.update-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 15, 2026 · Update #2</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="div">
      <Div5 />
      <DivUpdateTime />
    </div>
  );
}

function DivUpdateHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.update-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <div className="bg-[#047857] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Component 4">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">CD</p>
          </div>
        </div>
        <Div4 />
      </div>
    </div>
  );
}

function DivUpdateImage() {
  return (
    <div className="h-[159.185px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(143.938deg, rgb(6, 78, 59) 0%, rgb(6, 95, 70) 100%)" }} data-name="div.update-image">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip pt-[0.815px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[40px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">🚰</p>
        </div>
      </div>
    </div>
  );
}

function PUpdateText() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.update-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[22.1px] mb-0">Great news — drilling began yesterday! The engineering team from AquaTech</p>
          <p className="leading-[22.1px] mb-0">arrived on site Monday and the first 20 metres have been completed. We expect</p>
          <p className="leading-[22.1px] mb-0">to hit the water table by this weekend. The ₦200,000 first withdrawal was used</p>
          <p className="leading-[22.1px] mb-0">entirely for mobilisation and equipment transport as approved by the</p>
          <p className="leading-[22.1px]">community.</p>
        </div>
      </div>
    </div>
  );
}

function DivUpdateReactions() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.update-reactions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <div className="bg-[#eef3ff] content-stretch flex items-center justify-center px-[13px] py-[6px] relative rounded-[100px] shrink-0" data-name="Component 3">
          <div aria-hidden="true" className="absolute border border-[#1b4fd8] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b4fd8] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">❤️ 142</p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center px-[13px] py-[6px] relative rounded-[100px] shrink-0" data-name="Component 3">
          <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">🎉 89</p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center px-[13px] py-[6px] relative rounded-[100px] shrink-0" data-name="Component 3">
          <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">💬 14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivUpdateItem() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[17px] relative shrink-0 w-full" data-name="div.update-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <DivUpdateHeader />
      <DivUpdateImage />
      <PUpdateText />
      <DivUpdateReactions />
    </div>
  );
}

function SpanUpdateName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.update-name">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Chukwuemeka Dike</p>
      </div>
    </div>
  );
}

function SpanUpdateRole1() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="span.update-role">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Creator</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div">
      <SpanUpdateName1 />
      <SpanUpdateRole1 />
    </div>
  );
}

function DivUpdateTime1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.update-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 5, 2026 · Update #1</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="div">
      <Div7 />
      <DivUpdateTime1 />
    </div>
  );
}

function DivUpdateHeader1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div.update-header">
      <div className="bg-[#047857] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">CD</p>
        </div>
      </div>
      <Div6 />
    </div>
  );
}

function PUpdateText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.update-text">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[22.1px] mb-0">{`We've reached 60% of our target and signed the contract with AquaTech NG.`}</p>
        <p className="leading-[22.1px] mb-0">The first withdrawal of ₦200,000 was approved by 3 of 5 randomly selected</p>
        <p className="leading-[22.1px] mb-0">contributors and has been released. Work is scheduled to begin on Feb 14th.</p>
        <p className="leading-[22.1px]">Thank you all so much — this community has waited too long for clean water.</p>
      </div>
    </div>
  );
}

function DivUpdateReactions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pt-[0.89px] relative shrink-0 w-full" data-name="div.update-reactions">
      <div className="content-stretch flex items-center justify-center px-[13px] py-[6px] relative rounded-[100px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">❤️ 98</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[13px] py-[6px] relative rounded-[100px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">🎉 213</p>
        </div>
      </div>
    </div>
  );
}

function DivUpdateItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[9.1px] items-start pt-[16px] relative shrink-0 w-full" data-name="div.update-item">
      <DivUpdateHeader1 />
      <PUpdateText1 />
      <DivUpdateReactions1 />
    </div>
  );
}

function DivSectionCardBody2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20px] relative size-full">
        <DivUpdateItem />
        <DivUpdateItem1 />
      </div>
    </div>
  );
}

function Updates() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[706px]" data-name="UPDATES">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <DivSectionCardHeader2 />
        <DivSectionCardBody2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Span3() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b4fd8] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">View all 342 →</p>
        </div>
      </div>
    </div>
  );
}

function DivSectionCardHeader3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[20px] relative size-full">
          <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[15px] whitespace-nowrap">
            <p className="leading-[normal]">👥 Recent Contributors</p>
          </div>
          <Span3 />
        </div>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="bg-[#1b4fd8] content-stretch flex items-start px-[7px] py-px relative rounded-[100px] shrink-0" data-name="span">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">You</p>
      </div>
    </div>
  );
}

function DivContribName() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b4fd8] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Emeka Obi `}</p>
      </div>
      <Span4 />
    </div>
  );
}

function DivContribPseudo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">BlueLagoon#4821</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="relative shrink-0 w-[568px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivContribName />
        <DivContribPseudo />
      </div>
    </div>
  );
}

function DivContribAmount() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦1,000</p>
      </div>
    </div>
  );
}

function DivContribTime() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Just now</p>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="relative shrink-0 w-[51px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribAmount />
        <DivContribTime />
      </div>
    </div>
  );
}

function DivContribItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[11px] pt-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#1b4fd8] relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">EO</p>
          </div>
        </div>
      </div>
      <Div8 />
      <Div9 />
    </div>
  );
}

function DivContribName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Chioma Eze</p>
      </div>
    </div>
  );
}

function DivContribPseudo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">SilverFalcon#3312</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="relative shrink-0 w-[566px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivContribName1 />
        <DivContribPseudo1 />
      </div>
    </div>
  );
}

function DivContribAmount1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦5,000</p>
      </div>
    </div>
  );
}

function DivContribTime1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">1 hr ago</p>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="relative shrink-0 w-[54px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribAmount1 />
        <DivContribTime1 />
      </div>
    </div>
  );
}

function DivContribItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[11px] pt-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#12b76a] relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">CE</p>
          </div>
        </div>
      </div>
      <Div10 />
      <Div11 />
    </div>
  );
}

function DivContribName2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Anonymous</p>
      </div>
    </div>
  );
}

function DivContribPseudo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Hidden contributor</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="relative shrink-0 w-[566px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivContribName2 />
        <DivContribPseudo2 />
      </div>
    </div>
  );
}

function DivContribAmount2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦2,000</p>
      </div>
    </div>
  );
}

function DivContribTime2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">3 hrs ago</p>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="relative shrink-0 w-[54px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribAmount2 />
        <DivContribTime2 />
      </div>
    </div>
  );
}

function DivContribItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[11px] pt-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#d1d5db] relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">?</p>
          </div>
        </div>
      </div>
      <Div12 />
      <Div13 />
    </div>
  );
}

function DivContribName3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Yemi Adesanya</p>
      </div>
    </div>
  );
}

function DivContribPseudo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">GoldRiver#7721</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="relative shrink-0 w-[569px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivContribName3 />
        <DivContribPseudo3 />
      </div>
    </div>
  );
}

function DivContribAmount3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦1,000</p>
      </div>
    </div>
  );
}

function DivContribTime3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">5 hrs ago</p>
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="relative shrink-0 w-[51px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribAmount3 />
        <DivContribTime3 />
      </div>
    </div>
  );
}

function DivContribItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[11px] pt-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#7c3aed] relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">YA</p>
          </div>
        </div>
      </div>
      <Div14 />
      <Div15 />
    </div>
  );
}

function DivContribName4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Bello Musa</p>
      </div>
    </div>
  );
}

function DivContribPseudo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">IronEagle#9941</p>
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="relative shrink-0 w-[561px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivContribName4 />
        <DivContribPseudo4 />
      </div>
    </div>
  );
}

function DivContribAmount4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦10,000</p>
      </div>
    </div>
  );
}

function DivContribTime4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Yesterday</p>
      </div>
    </div>
  );
}

function Div17() {
  return (
    <div className="relative shrink-0 w-[59px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribAmount4 />
        <DivContribTime4 />
      </div>
    </div>
  );
}

function DivContribItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[11px] pt-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#db2777] relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">BM</p>
          </div>
        </div>
      </div>
      <Div16 />
      <Div17 />
    </div>
  );
}

function DivContribName5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Adaeze Okeke</p>
      </div>
    </div>
  );
}

function DivContribPseudo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">CoralWave#5534</p>
      </div>
    </div>
  );
}

function Div18() {
  return (
    <div className="relative shrink-0 w-[569px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivContribName5 />
        <DivContribPseudo5 />
      </div>
    </div>
  );
}

function DivContribAmount5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦500</p>
      </div>
    </div>
  );
}

function DivContribTime5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Yesterday</p>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="relative shrink-0 w-[51px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribAmount5 />
        <DivContribTime5 />
      </div>
    </div>
  );
}

function DivContribItem5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[11px] pt-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#0891b2] relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">AO</p>
          </div>
        </div>
      </div>
      <Div18 />
      <Div19 />
    </div>
  );
}

function DivContribName6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Anonymous</p>
      </div>
    </div>
  );
}

function DivContribPseudo6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Hidden contributor</p>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div className="relative shrink-0 w-[564px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivContribName6 />
        <DivContribPseudo6 />
      </div>
    </div>
  );
}

function DivContribAmount6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦3,000</p>
      </div>
    </div>
  );
}

function DivContribTime6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">2 days ago</p>
      </div>
    </div>
  );
}

function Div21() {
  return (
    <div className="relative shrink-0 w-[56px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribAmount6 />
        <DivContribTime6 />
      </div>
    </div>
  );
}

function DivContribItem6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[11px] pt-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#d1d5db] relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">?</p>
          </div>
        </div>
      </div>
      <Div20 />
      <Div21 />
    </div>
  );
}

function DivContribName7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-name">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Segun Fashola</p>
      </div>
    </div>
  );
}

function DivContribPseudo7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contrib-pseudo">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">BlueMoon#2287</p>
      </div>
    </div>
  );
}

function Div22() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[564px]" data-name="div">
      <DivContribName7 />
      <DivContribPseudo7 />
    </div>
  );
}

function DivContribAmount7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-amount">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦2,000</p>
      </div>
    </div>
  );
}

function DivContribTime7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.contrib-time">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">2 days ago</p>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="div">
      <DivContribAmount7 />
      <DivContribTime7 />
    </div>
  );
}

function DivContribItem7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[10px] relative shrink-0 w-full" data-name="div.contrib-item">
      <div className="bg-[#059669] content-stretch flex items-center justify-center relative rounded-[17px] shrink-0 size-[34px]" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">SF</p>
        </div>
      </div>
      <Div22 />
      <Div23 />
    </div>
  );
}

function DivContribList() {
  return (
    <div className="relative shrink-0 w-full" data-name="div#contrib-list">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivContribItem />
        <DivContribItem1 />
        <DivContribItem2 />
        <DivContribItem3 />
        <DivContribItem4 />
        <DivContribItem5 />
        <DivContribItem6 />
        <DivContribItem7 />
      </div>
    </div>
  );
}

function Contributors() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[706px]" data-name="CONTRIBUTORS">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[17px] pt-px px-px relative rounded-[inherit] size-full">
        <DivSectionCardHeader3 />
        <DivContribList />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <About />
      <BudgetBreakdown />
      <Updates />
      <Contributors />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[584px] items-start pb-[16px] relative shrink-0 w-[708px]" data-name="LEFT">
      <Progress />
      <Frame1 />
    </div>
  );
}

function DivActionTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.action-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[16px] w-full">
          <p className="leading-[normal]">Make a Contribution</p>
        </div>
      </div>
    </div>
  );
}

function Div24() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Any amount helps. No minimum.</p>
        </div>
      </div>
    </div>
  );
}

function DivActionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.action-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[17px] pt-[16px] px-[18px] relative size-full">
        <DivActionTitle />
        <Div24 />
      </div>
    </div>
  );
}

function DivAmountOptions() {
  return (
    <div className="h-[86px] relative shrink-0 w-full" data-name="div.amount-options">
      <div className="absolute bg-white content-stretch flex flex-col inset-[0_220px_47px_0] items-center min-w-[70px] px-[9px] py-[11px] rounded-[10px]" data-name="Component 4">
        <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">₦500</p>
        </div>
      </div>
      <div className="absolute bg-[#ecfdf5] content-stretch flex flex-col inset-[0_106px_47px_115px] items-center min-w-[70px] px-[9px] py-[11px] rounded-[10px]" data-name="Component 4">
        <div aria-hidden="true" className="absolute border border-[#12b76a] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">₦1,000</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col inset-[0_-3px_47px_229px] items-center min-w-[70px] px-[9px] py-[11px] rounded-[10px]" data-name="Component 4">
        <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">₦2,000</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col inset-[47px_0_0_0] items-center min-w-[70px] px-[9px] py-[11px] rounded-[10px]" data-name="Component 4">
        <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">₦5,000</p>
        </div>
      </div>
    </div>
  );
}

function SpanAmountPrefix() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f4f5f7] content-stretch flex flex-col items-start left-px pl-[14px] pr-[15px] py-[11px] top-1/2" data-name="span.amount-prefix">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">₦</p>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[14px] overflow-clip right-[29px] top-[12px]" data-name="div#placeholder">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#d1d5db] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Custom amount</p>
      </div>
    </div>
  );
}

function DivEditingViewPort() {
  return <div className="flex-[1_0_0] h-[22px] min-w-px" data-name="div#editing-view-port" />;
}

function DivSpinAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="div#spin:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="div#spin" />
    </div>
  );
}

function DivTextFieldContainer() {
  return (
    <div className="absolute content-stretch flex items-center left-[14px] right-[14px] top-[11px]" data-name="div#text-field-container">
      <DivEditingViewPort />
      <div className="flex flex-row items-center self-stretch">
        <DivSpinAlignStretch />
      </div>
    </div>
  );
}

function InputCustomAmount() {
  return (
    <div className="-translate-y-1/2 absolute bg-white h-[44px] left-[39.56px] overflow-clip right-[-39.56px] top-1/2" data-name="input#custom-amount">
      <DivPlaceholder />
      <DivTextFieldContainer />
    </div>
  );
}

function DivCustomAmountWrap() {
  return (
    <div className="h-[46px] relative rounded-[10px] shrink-0 w-full" data-name="div.custom-amount-wrap">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <SpanAmountPrefix />
        <InputCustomAmount />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivAnonLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.anon-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">🎭 Contribute anonymously</p>
      </div>
    </div>
  );
}

function DivAnonDesc() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.anon-desc">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal] mb-0">{`Your name won't appear on the`}</p>
        <p className="leading-[normal]">contributor list</p>
      </div>
    </div>
  );
}

function Div25() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start min-w-[198px] relative shrink-0 w-[198px]" data-name="div">
      <DivAnonLabel />
      <DivAnonDesc />
    </div>
  );
}

function LabelToggle() {
  return (
    <div className="h-[22px] relative shrink-0 w-[40px]" data-name="label.toggle">
      <div className="absolute bg-[#e5e8ef] inset-0 rounded-[100px]" data-name="div.toggle-track" />
      <div className="absolute bg-white left-[3px] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] size-[16px] top-[3px]" data-name="div.toggle-thumb" />
    </div>
  );
}

function DivAnonToggle() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[10px] shrink-0 w-full" data-name="div.anon-toggle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative size-full">
          <Div25 />
          <LabelToggle />
        </div>
      </div>
    </div>
  );
}

function SpanWalletLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.wallet-label">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Your PoolFi Balance</p>
      </div>
    </div>
  );
}

function SpanWalletVal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.wallet-val">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">₦31,500.00</p>
      </div>
    </div>
  );
}

function DivWalletRow() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[10px] shrink-0 w-full" data-name="div.wallet-row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative size-full">
          <SpanWalletLabel />
          <SpanWalletVal />
        </div>
      </div>
    </div>
  );
}

function DivActionBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.action-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14px] items-start px-[18px] py-[16px] relative size-full">
        <DivAmountOptions />
        <DivCustomAmountWrap />
        <DivAnonToggle />
        <DivWalletRow />
        <a href="/pool-submitted" className="block w-full">
          <div className="bg-[#12b76a] relative rounded-[10px] w-full" data-name="Component 3">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[9px] pt-[13px] px-[13px] relative size-full">
                <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal]">Contribute ₦1,000 →</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Component 4">
          <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
            <p className="leading-[normal]">🔒 Secured by smart contract · Multi-sig governed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContributeCard() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="CONTRIBUTE CARD">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivActionHeader />
        <DivActionBody />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Span5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">🔐</p>
      </div>
    </div>
  );
}

function DivMultisigTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.multisig-title">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Community-Governed Withdrawals</p>
      </div>
    </div>
  );
}

function DivMultisigHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.multisig-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Span5 />
        <DivMultisigTitle />
      </div>
    </div>
  );
}

function PMultisigDesc() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.multisig-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5b21b6] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20.4px] mb-0">When the creator requests a withdrawal, PoolFi</p>
          <p className="leading-[20.4px] mb-0">randomly selects contributors to review and</p>
          <p className="leading-[20.4px]">approve. You could be chosen as an approver.</p>
        </div>
      </div>
    </div>
  );
}

function DivMsChipLabel() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.ms-chip-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Approvers</p>
      </div>
    </div>
  );
}

function DivMsChipValue() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.ms-chip-value">
      <div className="flex flex-col font-['Sora:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[normal]">3 of 5</p>
      </div>
    </div>
  );
}

function DivMsChip() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="div.ms-chip">
      <div className="content-stretch flex flex-col gap-[3px] items-start px-[10px] py-[8px] relative size-full">
        <DivMsChipLabel />
        <DivMsChipValue />
      </div>
    </div>
  );
}

function DivMsChipLabel1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.ms-chip-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Released</p>
      </div>
    </div>
  );
}

function DivMsChipValue1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.ms-chip-value">
      <div className="flex flex-col font-['Sora:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[normal]">₦200k</p>
      </div>
    </div>
  );
}

function DivMsChip1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="div.ms-chip">
      <div className="content-stretch flex flex-col gap-[3px] items-start px-[10px] py-[8px] relative size-full">
        <DivMsChipLabel1 />
        <DivMsChipValue1 />
      </div>
    </div>
  );
}

function DivMsChipLabel2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.ms-chip-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Pending</p>
      </div>
    </div>
  );
}

function DivMsChipValue2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.ms-chip-value">
      <div className="flex flex-col font-['Sora:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[normal]">₦0</p>
      </div>
    </div>
  );
}

function DivMsChip2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="div.ms-chip">
      <div className="content-stretch flex flex-col gap-[3px] items-start px-[10px] py-[8px] relative size-full">
        <DivMsChipLabel2 />
        <DivMsChipValue2 />
      </div>
    </div>
  );
}

function DivMultisigStat() {
  return (
    <div className="h-[51.6px] relative shrink-0 w-full" data-name="div.multisig-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center pt-[0.6px] relative size-full">
        <DivMsChip />
        <DivMsChip1 />
        <DivMsChip2 />
      </div>
    </div>
  );
}

function MultisigInfo() {
  return (
    <div className="bg-[#f5f3ff] relative rounded-[14px] shrink-0 w-full" data-name="MULTISIG INFO">
      <div aria-hidden="true" className="absolute border border-[rgba(124,58,237,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[9.4px] items-start p-[17px] relative size-full">
        <DivMultisigHeader />
        <PMultisigDesc />
        <DivMultisigStat />
      </div>
    </div>
  );
}

function DivShareTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.share-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">📣 Spread the word</p>
        </div>
      </div>
    </div>
  );
}

function DivShareBtns() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.share-btns">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <div className="bg-white content-stretch flex items-center justify-center pl-[14px] pr-[119.53px] py-[10px] relative rounded-[9px] shrink-0" data-name="Component 3">
          <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[9px]" />
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">📲 Share on WhatsApp</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center pl-[14px] pr-[152.5px] py-[10px] relative rounded-[9px] shrink-0" data-name="Component 3">
          <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[9px]" />
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">🔗 Copy Pool Link</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center pl-[14px] pr-[141.37px] py-[10px] relative rounded-[9px] shrink-0" data-name="Component 3">
          <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[9px]" />
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">🐦 Share on Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Share() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="SHARE">
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[17px] relative size-full">
        <DivShareTitle />
        <DivShareBtns />
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[373px]" data-name="RIGHT">
      <ContributeCard />
      <MultisigInfo />
      <Share />
      <div className="bg-[#f5f3ff] relative rounded-[12px] shrink-0 w-full" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[rgba(124,58,237,0.25)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center p-[13px] relative size-full">
            <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">🔐 See Multi-Sig Approval Flow →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageBody() {
  return (
    <div className="absolute content-stretch flex gap-[62px] h-[2143px] items-start left-[259px] pb-[60px] px-[24px] top-[307px] w-[1180px]" data-name="PAGE BODY">
      <Left />
      <Right />
    </div>
  );
}

function BitcoinPiggyBank() {
  return (
    <div className="relative shrink-0 size-[46.393px]" data-name="bitcoin-piggy-bank">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3929 46.3929">
        <g id="bitcoin-piggy-bank">
          <rect fill="var(--fill-0, #1B4FD8)" height="46.3929" rx="5" width="46.3929" />
          <path d={svgPaths.p4a9bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.89955" />
          <g id="usdt">
            <path d={svgPaths.p32c4c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14774" />
            <path d={svgPaths.p16992f80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14774" />
          </g>
          <path d="M14.4975 23.1962H14.5161" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.86607" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%+0.2px)] p-[12px] top-[calc(50%+0.2px)]">
      <BitcoinPiggyBank />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1f2e] text-[28px] whitespace-nowrap">PoolFi</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-[#e5e8ef] border-b border-solid h-[79px] left-0 top-0 w-[259px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Component 5">
        <div className="absolute inset-[10.42%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-3.95%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5002 20.5">
              <path d={svgPaths.p3977300} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-[70.83%]" data-name="Vector">
          <div className="absolute inset-[-75%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50009 2.50003">
              <path d={svgPaths.p2564cd80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.669px] top-[26px] w-[76.156px]">
        <p className="leading-[18px]">Home</p>
      </div>
    </div>
  );
}

function PlusSign() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="plus-sign">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus-sign">
          <path d="M12 4V20M20 12H4" id="Vector" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <PlusSign />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.669px] top-[26px] w-[76.156px]">
        <p className="leading-[18px]">Create Pool</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <div className="absolute left-[6.6px] size-[24px] top-[6px]" data-name="Component 5">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
              <path d={svgPaths.p3a240520} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p1176fe80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/2 right-[8.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p27127780} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpanBackgroundColor() {
  return (
    <div className="absolute bg-[#f79009] h-[17px] left-[202.9px] rounded-[100px] top-[17.5px] w-[20px]" data-name="Span+BackgroundColor">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold h-[13px] leading-[13px] left-[10.05px] not-italic text-[10px] text-center text-white top-[2px] w-[6.109px]">3</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.469px] top-[26px] w-[58.688px]">
        <p className="leading-[18px]">My Pools</p>
      </div>
      <SpanBackgroundColor />
    </div>
  );
}

function ContainerBackgroundColor1() {
  return (
    <div className="absolute bg-[rgba(27,79,216,0.1)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Component 5">
        <div className="absolute inset-[8.33%_14.58%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 21.5">
              <path d={svgPaths.p1c707100} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-[33.33%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 5.5">
              <path d={svgPaths.p220cf00} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundColor() {
  return (
    <div className="bg-[#eef3ff] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container+BackgroundColor">
      <ContainerBackgroundColor1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[54px] not-italic text-[#1b4fd8] text-[13.514px] top-[26px] whitespace-nowrap">
        <p className="leading-[18px]">impact</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <div className="absolute left-[6.6px] size-[24px] top-[6px]" data-name="Component 5">
        <div className="absolute bottom-[68.75%] left-[12.5%] right-1/4 top-[14.58%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 5.50005">
              <path d={svgPaths.p37b7ea00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[22.92%_12.5%_10.42%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.69%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 17.5">
              <path d={svgPaths.p3d471980} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.08%_12.5%_31.25%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50012 5.50023">
              <path d={svgPaths.p2c8ea95b} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[10.42%_41.67%_68.75%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-15%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 6.5">
              <path d={svgPaths.pccecc80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.708px] top-[26px] w-[64.625px]">
        <p className="leading-[18px]">My Wallet</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <div className="absolute left-[6.6px] size-[24px] top-[6px]" data-name="Component 5">
        <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-[10.42%]" data-name="Vector">
          <div className="absolute inset-[-4.84%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 17">
              <path d={svgPaths.p32b2f700} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[14.58%] right-[14.58%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.75px_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 1.5">
              <path d="M17.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_43.75%_10.42%_43.75%]" data-name="Vector">
          <div className="absolute inset-[0_-25%_-50%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 2.25">
              <path d={svgPaths.p1a254800} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpanBackgroundColor1() {
  return (
    <div className="absolute bg-[#f04438] h-[17px] left-[203px] rounded-[100px] top-[17.5px] w-[20px]" data-name="Span+BackgroundColor">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold h-[13px] leading-[13px] left-[9.95px] not-italic text-[10px] text-center text-white top-[2px] w-[5.906px]">2</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.667px] top-[26px] w-[83.953px]">
        <p className="leading-[18px]">Notifications</p>
      </div>
      <SpanBackgroundColor1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <div className="absolute left-[6.6px] size-[24px] top-[6px]" data-name="Component 5">
        <div className="absolute inset-[33.33%_35.42%_31.25%_35.42%]" data-name="Vector">
          <div className="absolute inset-[-8.82%_-10.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.50021 10.0001">
              <path d={svgPaths.p212faf80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[10.42%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.95%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 20.5002">
              <path d={svgPaths.p1cb34580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.582px] top-[26px] w-[54.328px]">
        <p className="leading-[18px]">Settings</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[6px] items-start left-0 overflow-clip px-[12px] py-[24px] top-[76px] w-[259px]" data-name="navigation">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13px] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Main</p>
      <Container1 />
      <Container3 />
      <Container5 />
      <ContainerBackgroundColor />
      <Container7 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13px] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Account</p>
      <Container9 />
      <Container11 />
    </div>
  );
}

function ContainerBackgroundColor2() {
  return (
    <div className="absolute bg-[#1b4fd8] left-[12px] rounded-[50px] size-[34px] top-[10px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[17.01px] not-italic text-[12.059px] text-center text-white top-[17px] w-[17.625px]">
        <p className="leading-[17px]">PS</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-0 overflow-clip top-0 w-[143px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[17px] leading-[17px] left-0 not-italic text-[#1a1f2e] text-[12.785px] top-[0.5px] w-[133px]">Princess Saven</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[14px] left-0 overflow-clip top-[17px] w-[143px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[14px] left-0 not-italic text-[#6b7280] text-[10.642px] top-0 w-[90.938px]">Saven</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[31px] left-[56px] top-[11.5px] w-[143px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[54px] left-[12px] rounded-[10px] top-[16px] w-[235px]" data-name="Container">
      <ContainerBackgroundColor2 />
      <Container15 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_Math:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[209px] not-italic text-[#6b7280] text-[14px] top-[18px] w-[14px]">⋯</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-[#e5e8ef] border-solid border-t h-[87px] left-0 top-[939px] w-[259px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function AsideBackgroundColor() {
  return (
    <div className="absolute bg-white border-[#e5e8ef] border-r border-solid h-[1024px] left-0 top-0 w-[260px]" data-name="Aside+BackgroundColor">
      <Container />
      <Navigation />
      <Container13 />
    </div>
  );
}

export default function ImpactContributon() {
  return (
    <div className="bg-white relative size-full" data-name="impact contributon">
      <DivHeroInner />
      <PageBody />
    </div>
  );
}