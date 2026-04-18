import svgPaths from "./svg-824b2tim7m";

function File() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.23px)] size-[28.469px] top-[calc(50%+0.35px)]" data-name="file-02">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4688 28.4688">
        <g id="file-02">
          <path d="M9.48958 20.1654H18.9792" id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7793" />
          <path d="M9.48958 15.4206H14.2344" id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7793" />
          <path d={svgPaths.p24764f00} id="Vector_3" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7793" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#eef3ff] h-[58.76px] relative rounded-[29px] shrink-0 w-[63px]">
      <File />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0">
      <Frame5 />
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[21px] min-w-full relative shrink-0 text-[#1a1f2e] text-[14.826px] text-center w-[min-content]">Submitted for Review</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[38px] leading-[19px] not-italic relative shrink-0 text-[#6b7280] text-[11.688px] text-center w-[407px]">{`YYour impact pool has been submitted. Here's what happens next while you wait`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame />
    </div>
  );
}

function SpanBackgroundColor() {
  return (
    <div className="bg-[#ecfdf5] h-[20px] relative rounded-[100px] shrink-0 w-[55px]" data-name="Span+BackgroundColor">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[14px] left-[10px] not-italic text-[#12b76a] text-[10.599px] top-[3px] w-[34.688px]">Done</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[258px] h-[29px] items-center justify-center left-1/2 p-[10px] top-[calc(50%-0.49px)]">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Pool Successfully Submitted</p>
      </div>
      <SpanBackgroundColor />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f4f5f7] h-[34px] relative rounded-[12px] shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function SpanStatusChip() {
  return (
    <div className="bg-[rgba(247,144,9,0.2)] content-stretch flex items-start px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fcd34d] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Pending</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[258px] h-[29px] items-center justify-center left-1/2 p-[10px] top-[calc(50%-0.49px)]">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-[171px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">PoolFi review (24–48 hrs)</p>
      </div>
      <SpanStatusChip />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f4f5f7] h-[34px] relative rounded-[12px] shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function SpanBackgroundColor1() {
  return (
    <div className="bg-[rgba(27,79,216,0.2)] h-[20px] relative rounded-[100px] shrink-0 w-[55px]" data-name="Span+BackgroundColor">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[14px] left-[calc(50%-22.5px)] not-italic text-[#1b4fd8] text-[10.599px] top-[3.23px] w-[45px]">Waiting</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[246px] h-[29px] items-center justify-center left-1/2 p-[10px] top-[calc(50%-0.49px)]">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Pool goes live on explore feed</p>
      </div>
      <SpanBackgroundColor1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f4f5f7] h-[34px] relative rounded-[12px] shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function SpanBackgroundColor2() {
  return (
    <div className="bg-[rgba(27,79,216,0.2)] h-[20px] relative rounded-[100px] shrink-0 w-[55px]" data-name="Span+BackgroundColor">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[14px] left-[7px] not-italic text-[#1b4fd8] text-[10.599px] top-[3.23px] w-[45px]">Waiting</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[230px] h-[29px] items-center justify-center left-1/2 p-[10px] top-[calc(50%-0.49px)]">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Share link sent to your account</p>
      </div>
      <SpanBackgroundColor2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f4f5f7] h-[34px] relative rounded-[12px] shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function DivFormNav() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.form-nav">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pb-[20px] pt-[21px] px-[28px] relative size-full">
          <div className="bg-[#1b4fd8] relative rounded-[10px] shrink-0 w-[365px]" data-name="Component 1">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[13px] relative size-full">
              <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[normal]">Back to My Pools →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[28px] items-center left-1/2 p-[12px] top-[calc(50%-21.62px)] w-[544px]">
      <Frame2 />
      <Frame12 />
      <DivFormNav />
    </div>
  );
}

export default function ContainerGradient() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] size-full" data-name="Container+Gradient">
      <Frame1 />
    </div>
  );
}