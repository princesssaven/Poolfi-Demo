import svgPaths from "../svg/svg-3huw6wsjb8";

function DivSectionCardHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[20px] relative size-full">
          <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[15px] whitespace-nowrap">
            <p className="leading-[normal]">Request Withdrawal</p>
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
        <p className="leading-[25.2px]">Describe exactly what this withdrawal is for. PoolFi will randomly select contributors to review your request</p>
      </div>
    </div>
  );
}

function DivSectionCardBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.section-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] pt-[19.375px] px-[20px] relative size-full">
        <PAboutText />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-white h-[135px] relative rounded-[16px] shrink-0 w-[708px]" data-name="ABOUT">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivSectionCardHeader />
        <DivSectionCardBody />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Bulb() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bulb">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bulb">
          <path d={svgPaths.p10ad7600} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p6b8e400} id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p1d08a9f0} id="Vector_3" stroke="var(--stroke-0, #1B4FD8)" strokeWidth="1.5" />
          <path d={svgPaths.p2a827900} id="Vector_4" stroke="var(--stroke-0, #1B4FD8)" strokeWidth="1.5" />
          <path d="M12 15.5V11" id="Vector_5" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Bulb />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[60px] relative shrink-0 w-[528px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[10.42px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] w-[518px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">3 of 5 contributors will be randomly selected to approve this. You cannot choose who reviews it</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoNote() {
  return (
    <div className="bg-[#eef3ff] content-stretch flex gap-[10px] h-[79px] items-start pb-[15px] pt-[19px] px-[15px] relative rounded-[12px] shrink-0 w-[708px]" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Span />
      <Div />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Amount to withdraw (₦)</p>
      </div>
    </div>
  );
}

function SpanInputPrefix() {
  return (
    <div className="bg-[#f4f5f7] relative shrink-0" data-name="span.input-prefix">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] pr-[15px] py-[11px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">₦</p>
        </div>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[14px] overflow-clip right-[28.56px] top-[11px]" data-name="div#placeholder">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">400,000</p>
      </div>
    </div>
  );
}

function DivEditingViewPort() {
  return <div className="flex-[1_0_0] h-[18px] min-w-px" data-name="div#editing-view-port" />;
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
    <div className="absolute content-stretch flex items-center left-[14px] right-[13.56px] top-[11px]" data-name="div#text-field-container">
      <DivEditingViewPort />
      <div className="flex flex-row items-center self-stretch">
        <DivSpinAlignStretch />
      </div>
    </div>
  );
}

function InputPoolTarget() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative" data-name="input#pool-target">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <DivPlaceholder />
        <DivTextFieldContainer />
      </div>
    </div>
  );
}

function DivInputPrefixWrap() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="div.input-prefix-wrap">
      <div className="content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <SpanInputPrefix />
        <InputPoolTarget />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full">
      <DivInputPrefixWrap />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[22.4px]">₦470,000 available in pool</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Label />
      <Frame6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Purpose</p>
      </div>
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[22.4px]">What exactly will this money be used for?</p>
        </div>
      </div>
    </div>
  );
}

function TextareaPoolDesc() {
  return (
    <div className="bg-white min-h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="textarea#pool-desc">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[45.61px] pt-[12px] px-[15px] relative size-full">
          <DivPlaceholder1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[708px]" data-name="div.form-group">
      <Label1 />
      <TextareaPoolDesc />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Vendor/Reciepient</p>
      </div>
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[22.4px]">e.g AquaTech NG Ltd - invoice #ATN-2026-0214</p>
        </div>
      </div>
    </div>
  );
}

function TextareaPoolDesc1() {
  return (
    <div className="bg-white h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="textarea#pool-desc">
      <div className="flex flex-row justify-center overflow-auto size-full">
        <div className="content-stretch flex items-start justify-center pb-[45.61px] pt-[12px] px-[15px] relative size-full">
          <DivPlaceholder2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[66px] items-start relative shrink-0 w-[705px]" data-name="div.form-group">
      <Label2 />
      <TextareaPoolDesc1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Project Stage</p>
      </div>
    </div>
  );
}

function DivPlaceholder3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[22.4px]">e.g Phase 2 of 3- Pump installation</p>
        </div>
      </div>
    </div>
  );
}

function TextareaPoolDesc2() {
  return (
    <div className="bg-white h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="textarea#pool-desc">
      <div className="flex flex-row justify-center overflow-auto size-full">
        <div className="content-stretch flex items-start justify-center pb-[45.61px] pt-[12px] px-[15px] relative size-full">
          <DivPlaceholder3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[66px] items-start relative shrink-0 w-[705px]" data-name="div.form-group">
      <Label3 />
      <TextareaPoolDesc2 />
    </div>
  );
}

function Camera() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="camera-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="camera-01">
          <path d={svgPaths.p140f8b40} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.pcc33f00} id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M38 19V19.02" id="Vector_3" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[normal]">Upload photos or documents</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">JPG, PNG, PDF. Max 5mb per file</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 top-[calc(50%+0.28px)] w-[250px]">
      <Camera />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f4f5f7] h-[180px] relative rounded-[12px] shrink-0 w-[708px]">
      <Frame1 />
    </div>
  );
}

function DivFormNav() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start justify-center pb-[20px] pt-[21px] px-[28px] relative shrink-0 w-[737px]" data-name="div.form-nav">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-white relative rounded-[10px] shrink-0 w-[277px]" data-name="Component 1">
        <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[13px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">Cancel</p>
          </div>
        </div>
      </div>
      <div className="bg-[#1b4fd8] relative rounded-[10px] shrink-0 w-[307px]" data-name="Component 1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[13px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">Submit Request →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[1002px] items-start left-[17px] overflow-x-clip overflow-y-auto p-[12px] rounded-[20px] top-[19px] w-[749px]">
      <About />
      <DivInfoNote />
      <Frame5 />
      <DivFormGroup />
      <DivFormGroup1 />
      <DivFormGroup2 />
      <Frame />
      <DivFormNav />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="overflow-clip relative rounded-[20px] size-full">
      <Frame3 />
    </div>
  );
}