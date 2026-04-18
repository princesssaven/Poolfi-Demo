import svgPaths from "./svg-a3ft4xm6i9";

function SpanTopbarTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.topbar-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Create Impact Pool</p>
      </div>
    </div>
  );
}

function DivTopbarLeft() {
  return (
    <div className="relative shrink-0" data-name="div.topbar-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[9px] shrink-0" data-name="Component 1">
          <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[9px]" />
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">{`← `}</p>
          </div>
        </div>
        <SpanTopbarTitle />
      </div>
    </div>
  );
}

function DivStepIndicator() {
  return (
    <div className="bg-[#1b4fd8] relative rounded-[100px] shrink-0" data-name="div.step-indicator">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[14px] py-[6px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">{`Preview `}</p>
        </div>
      </div>
    </div>
  );
}

function Topbar() {
  return (
    <div className="bg-white content-stretch flex gap-[814px] h-[64px] items-center pb-px pointer-events-auto px-[32px] sticky top-0 w-[1153px]" data-name="TOPBAR">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <DivTopbarLeft />
      <DivStepIndicator />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(27,79,216,0.1)] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[8px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Component 5">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-3.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
                <path d={svgPaths.p3a240520} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[29.17%]" data-name="Vector">
            <div className="absolute inset-[-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                <path d={svgPaths.p1176fe80} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-1/2 left-1/2 right-[8.33%] top-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                <path d={svgPaths.p27127780} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFormCardTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Pool Basics</p>
      </div>
    </div>
  );
}

function DivFormCardDesc() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-desc">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Tell us what this pool is for. Contributors will see these details when they open your link.</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-[527px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <DivFormCardTitle />
        <DivFormCardDesc />
      </div>
    </div>
  );
}

function DivFormCardHeader() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start pb-[21px] pt-[24px] px-[28px] relative size-full">
        <Container />
        <Div />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Pool Title</p>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">e.g. clean water borehole for oguta community</p>
        </div>
      </div>
    </div>
  );
}

function InputPoolName() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[683px]" data-name="input#pool-name">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[15px] py-[12px] relative rounded-[inherit] size-full">
        <DivPlaceholder />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="div.form-group">
      <Label />
      <InputPoolName />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Describe a problem `}</p>
      </div>
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[22.4px]">What problem are you solving? who does it affect? Be specific- contributors need to understand why this matters</p>
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

function DivFormGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[683px]" data-name="div.form-group">
      <Label1 />
      <TextareaPoolDesc />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">How will the money be used?</p>
      </div>
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[22.4px]">Break down how funds will be spent. e.g 400k - go for borehole drilling</p>
        </div>
      </div>
    </div>
  );
}

function TextareaPoolDesc1() {
  return (
    <div className="bg-white min-h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="textarea#pool-desc">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[45.61px] pt-[12px] px-[15px] relative size-full">
          <DivPlaceholder2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[683px]" data-name="div.form-group">
      <Label2 />
      <TextareaPoolDesc1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Location/community</p>
      </div>
    </div>
  );
}

function DivPlaceholder3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">e.g.oguta, imo state, Nigeria</p>
        </div>
      </div>
    </div>
  );
}

function InputPoolName1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[683px]" data-name="input#pool-name">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[15px] py-[12px] relative rounded-[inherit] size-full">
        <DivPlaceholder3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="div.form-group">
      <Label3 />
      <InputPoolName1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Who benefits?</p>
      </div>
    </div>
  );
}

function DivPlaceholder4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">e.g.3000+ residents of oguta community</p>
        </div>
      </div>
    </div>
  );
}

function InputPoolName2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[683px]" data-name="input#pool-name">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[15px] py-[12px] relative rounded-[inherit] size-full">
        <DivPlaceholder4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup4() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="div.form-group">
      <Label4 />
      <InputPoolName2 />
    </div>
  );
}

function DivFormCardBody() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[24px] relative size-full">
        <DivFormGroup />
        <DivFormGroup1 />
        <DivFormGroup2 />
        <DivFormGroup3 />
        <DivFormGroup4 />
      </div>
    </div>
  );
}

function Step1Basics() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[739px]" data-name="STEP 1: BASICS">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivFormCardHeader />
        <DivFormCardBody />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Step1Basics />
    </div>
  );
}

function BitcoinBag() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bitcoin-bag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bitcoin-bag">
          <path d={svgPaths.p2e7a1e00} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bbd1468} id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2db14400} id="Vector_3" stroke="var(--stroke-0, #1B4FD8)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(27,79,216,0.1)] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[8px] relative size-full">
        <BitcoinBag />
      </div>
    </div>
  );
}

function DivFormCardTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Funding Details</p>
      </div>
    </div>
  );
}

function DivFormCardDesc1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-desc">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Set your target and timeline. Contributions are open to everyone.</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="relative shrink-0 w-[391px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <DivFormCardTitle1 />
        <DivFormCardDesc1 />
      </div>
    </div>
  );
}

function DivFormCardHeader1() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start pb-[21px] pt-[24px] px-[28px] relative size-full">
        <Container1 />
        <Div1 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Funding Target (₦)</p>
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

function DivPlaceholder5() {
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
        <DivPlaceholder5 />
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

function DivFormGroup5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] h-[66px] items-start min-w-px relative" data-name="div.form-group">
      <Label5 />
      <DivInputPrefixWrap />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Deadline</p>
      </div>
    </div>
  );
}

function DivDateTimeEdit() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#date-time-edit">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['DM_Sans:9pt_Regular',sans-serif] font-normal gap-px items-start leading-[0] pl-px pr-[451.39px] py-px relative size-full text-[#1a1f2e] text-[14px] whitespace-nowrap">
          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 9" }}>
            <p className="leading-[normal]">02</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 9" }}>
            <p className="leading-[normal]">/</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 9" }}>
            <p className="leading-[normal]">18</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 9" }}>
            <p className="leading-[normal]">/</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 9" }}>
            <p className="leading-[normal]">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[2.875px] pt-[2px] px-[2px] relative shrink-0 size-[18px]" data-name="image fill">
      <div className="h-[13.125px] overflow-clip relative shrink-0 w-[14px]" data-name="Component 2">
        <div className="absolute inset-[4.17%_10.94%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9375 12.0312">
            <path d={svgPaths.p29357880} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_3.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DivMenuPicker() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="div menu#picker">
      <ImageFill />
    </div>
  );
}

function Div2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <DivDateTimeEdit />
        <DivMenuPicker />
      </div>
    </div>
  );
}

function InputPoolStart() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="input#pool-start">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[12px] relative size-full">
          <Div2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] h-[66px] items-start min-w-px relative" data-name="div.form-group">
      <Label6 />
      <InputPoolStart />
    </div>
  );
}

function DivInputRow() {
  return (
    <div className="content-stretch flex gap-[14px] h-[86px] items-start relative shrink-0 w-full" data-name="div.input-row">
      <DivFormGroup5 />
      <DivFormGroup6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[190px]" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Suggested Contribution (₦)</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[416px]">
      <Label7 />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">optional</p>
      </div>
    </div>
  );
}

function SpanInputPrefix1() {
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

function DivPlaceholder6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[14px] overflow-clip right-[28.56px] top-[11px]" data-name="div#placeholder">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">e.g 2,000- contributors can give any amount</p>
      </div>
    </div>
  );
}

function InputPoolTarget1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative" data-name="input#pool-target">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <DivPlaceholder6 />
      </div>
    </div>
  );
}

function DivInputPrefixWrap1() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="div.input-prefix-wrap">
      <div className="content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <SpanInputPrefix1 />
        <InputPoolTarget1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DivFormGroup8() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[66px] items-start relative shrink-0 w-full" data-name="div.form-group">
      <Frame13 />
      <DivInputPrefixWrap1 />
    </div>
  );
}

function DivFormGroup7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[683px]" data-name="div.form-group">
      <DivFormGroup8 />
    </div>
  );
}

function DivFormCardBody1() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[24px] relative size-full">
        <DivInputRow />
        <DivFormGroup7 />
      </div>
    </div>
  );
}

function Step1Basics1() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[739px]" data-name="STEP 1: BASICS">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivFormCardHeader1 />
        <DivFormCardBody1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Step1Basics1 />
    </div>
  );
}

function ReverseWithdrawal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="reverse-withdrawal-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reverse-withdrawal-01">
          <path d={svgPaths.p239c8b00} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p2e265e00} id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p361b2d80} id="Vector_3" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(27,79,216,0.1)] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[8px] relative size-full">
        <ReverseWithdrawal />
      </div>
    </div>
  );
}

function DivFormCardTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Withdrawal Governance</p>
      </div>
    </div>
  );
}

function DivFormCardDesc2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-desc">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Impact pools use community multi-sig for all withdrawals.</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="relative shrink-0 w-[349px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <DivFormCardTitle2 />
        <DivFormCardDesc2 />
      </div>
    </div>
  );
}

function DivFormCardHeader2() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start pb-[21px] pt-[24px] px-[28px] relative size-full">
        <Container2 />
        <Div3 />
      </div>
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

function DiceFaces() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dice-faces-06">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dice-faces-06">
          <path d={svgPaths.p2c5990b0} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 12V12.01" id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M15 7V7.01" id="Vector_3" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M9 17V17.01" id="Vector_4" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M9 7V7.01" id="Vector_5" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M15 17V17.01" id="Vector_6" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M15 12V12.01" id="Vector_7" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
      <DiceFaces />
      <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#1340b8] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Approvers are randomly selected from contributors — never hand-picked by the creator</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-[445px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">How Multi-Sig Works on PoolFi</p>
        </div>
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">When you request a withdrawal, PoolFi randomly selects contributors from your pool to review and approve the request. You cannot choose who approves — this prevents bias and ensures genuine community oversight.</p>
        </div>
        <Frame14 />
      </div>
    </div>
  );
}

function DivInfoNote() {
  return (
    <div className="bg-[#eef3ff] h-[147px] relative rounded-[12px] shrink-0 w-[737px]" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start p-[9px] relative size-full">
        <Span />
        <Frame9 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Approvers Required per Withdrawal</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[18px]">3 of 5 randomly selected contributors</p>
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="select">
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[12px] relative size-full">
          <Div4 />
        </div>
      </div>
    </div>
  );
}

function DivFormGroup9() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[683px]" data-name="div.form-group">
      <Label8 />
      <Select />
    </div>
  );
}

function DivFormCardBody2() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative size-full">
        <DivFormGroup9 />
      </div>
    </div>
  );
}

function Step1Basics2() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[739px]" data-name="STEP 1: BASICS">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivFormCardHeader2 />
        <DivInfoNote />
        <DivFormCardBody2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">💡</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoNote1() {
  return (
    <div className="bg-[#eef3ff] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start pb-[15px] pt-[19px] px-[15px] relative size-full">
        <Span1 />
      </div>
    </div>
  );
}

function DivInfoNote2() {
  return (
    <div className="bg-[#eef3ff] flex-[1_0_0] h-[94px] min-w-px relative rounded-[12px]" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-full">
      <Step1Basics2 />
      <DivInfoNote1 />
      <DivInfoNote2 />
    </div>
  );
}

function FileAttachment() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-attachment">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file-attachment">
          <path d={svgPaths.p39448900} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126be160} id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(27,79,216,0.1)] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[8px] relative size-full">
        <FileAttachment />
      </div>
    </div>
  );
}

function DivFormCardTitle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Supporting Evidence</p>
      </div>
    </div>
  );
}

function DivFormCardDesc3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-desc">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Verified pools get more contributions. Upload proof of the problem — photos, documents, or links.</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="relative shrink-0 w-[589px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <DivFormCardTitle3 />
        <DivFormCardDesc3 />
      </div>
    </div>
  );
}

function DivFormCardHeader3() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start pb-[21px] pt-[24px] px-[28px] relative size-full">
        <Container3 />
        <Div5 />
      </div>
    </div>
  );
}

function DivFormCardTitle4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[82px] top-[-791px] w-[391px]" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Funding Details</p>
      </div>
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

function Frame16() {
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

function Frame15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-center left-[calc(50%+0.5px)] top-[calc(50%+0.28px)] w-[250px]">
      <Camera />
      <Frame16 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f4f5f7] h-[180px] relative rounded-[12px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFormCardTitle4 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[7px] items-start leading-[0] relative shrink-0 w-[416px]">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1a1f2e] text-[13px] w-[118px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Reference Link</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">optional</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">e.g news article, community letter, social media posts</p>
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="select">
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[12px] relative size-full">
          <Div6 />
        </div>
      </div>
    </div>
  );
}

function DivFormGroup10() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[683px]" data-name="div.form-group">
      <Frame17 />
      <Select1 />
    </div>
  );
}

function DivFormCardBody3() {
  return (
    <div className="relative shrink-0 w-[726px]" data-name="div.form-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative size-full">
        <DivFormGroup10 />
      </div>
    </div>
  );
}

function DivFormNav() {
  return (
    <div className="bg-white relative shrink-0 w-[737px]" data-name="div.form-nav">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center pb-[20px] pt-[21px] px-[28px] relative size-full">
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
              <p className="leading-[normal]">Submit for Review →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1Basics3() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[739px]" data-name="STEP 1: BASICS">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivFormCardHeader3 />
        <Frame1 />
        <DivFormCardBody3 />
        <DivFormNav />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">💡</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoNote3() {
  return (
    <div className="bg-[#eef3ff] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start pb-[15px] pt-[19px] px-[15px] relative size-full">
        <Span2 />
      </div>
    </div>
  );
}

function DivInfoNote4() {
  return (
    <div className="bg-[#eef3ff] flex-[1_0_0] h-[94px] min-w-px relative rounded-[12px]" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-full">
      <Step1Basics3 />
      <DivInfoNote3 />
      <DivInfoNote4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-start left-[287px] top-[281px] w-[739px]">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">💡</p>
        </div>
      </div>
    </div>
  );
}

function DivStepCircle() {
  return (
    <div className="bg-[#1b4fd8] content-stretch flex items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[24px]" data-name="div.step-circle">
      <div aria-hidden="true" className="absolute border-2 border-[#1b4fd8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <DivStepCircle />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[20px]">You submit your pool with cause details and supporting evidence</p>
      </div>
    </div>
  );
}

function DivStepCircle1() {
  return (
    <div className="bg-[#1b4fd8] content-stretch flex items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[24px]" data-name="div.step-circle">
      <div aria-hidden="true" className="absolute border-2 border-[#1b4fd8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <DivStepCircle1 />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[20px]">PoolFi reviews within 24–48 hours</p>
      </div>
    </div>
  );
}

function DivStepCircle2() {
  return (
    <div className="bg-[#1b4fd8] content-stretch flex items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[24px]" data-name="div.step-circle">
      <div aria-hidden="true" className="absolute border-2 border-[#1b4fd8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <DivStepCircle2 />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[20px]">Approved pools go live on the explore feed</p>
      </div>
    </div>
  );
}

function DivStepCircle3() {
  return (
    <div className="bg-[#1b4fd8] content-stretch flex items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[24px]" data-name="div.step-circle">
      <div aria-hidden="true" className="absolute border-2 border-[#1b4fd8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <DivStepCircle3 />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[20px]">Withdrawals require community multi-sig approval</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-[445px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">How Vetting works</p>
        </div>
        <Frame8 />
        <Frame11 />
        <Frame18 />
        <Frame19 />
      </div>
    </div>
  );
}

function DivInfoNote5() {
  return (
    <div className="absolute bg-[#eef3ff] content-stretch flex gap-[10px] h-[168px] items-start left-[282px] p-[9px] rounded-[12px] top-[79px] w-[737px]" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Span3 />
      <Frame10 />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="eye">
          <path d={svgPaths.p29ea7000} id="Vector" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" />
          <path d={svgPaths.p2cb0fe70} id="Vector_2" stroke="var(--stroke-0, #141B34)" />
          <path d={svgPaths.p343de900} id="Vector_3" stroke="var(--stroke-0, #141B34)" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Eye />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Live Preview</p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">What contributors see</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="div">
      <Frame7 />
      <Span4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[13px]" data-name="Component 5">
        <div className="absolute inset-[8.33%_14.58%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0208 11.6458">
              <path d={svgPaths.p2ac46900} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.8125" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-[33.33%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.97917 2.97917">
              <path d={svgPaths.pf542dc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8125" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Impact Pool · Public</p>
      </div>
    </div>
  );
}

function DivPreviewTag() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[20px]" data-name="div.preview-tag">
      <Frame6 />
    </div>
  );
}

function DivPrevName() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] min-h-[26px] pb-[4px] right-[20px] top-[41px]" data-name="div#prev-name">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Your pool title...</p>
      </div>
    </div>
  );
}

function DivPrevDesc() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] min-h-[18px] pb-[2px] right-[20px] top-[71px]" data-name="div#prev-desc">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.65)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Add a description above</p>
      </div>
    </div>
  );
}

function DivPreviewHeader() {
  return (
    <div className="bg-[#1b4fd8] h-[109px] relative shrink-0 w-[338px] z-[2]" data-name="div.preview-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(255,255,255,0.06)] right-[-60px] rounded-[100px] size-[200px] top-[-60px]" data-name="::before" />
        <DivPreviewTag />
        <DivPrevName />
        <DivPrevDesc />
      </div>
    </div>
  );
}

function DivPreviewProgress() {
  return <div className="bg-[#f4f5f7] h-[6px] rounded-[100px] shrink-0 w-[298px]" data-name="div.preview-progress" />;
}

function Span5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">₦0 raised</p>
      </div>
    </div>
  );
}

function SpanPrevPct() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span#prev-pct">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">0%</p>
      </div>
    </div>
  );
}

function DivPreviewProgressLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-start justify-between relative shrink-0 w-[298px]" data-name="div.preview-progress-label">
      <Span5 />
      <SpanPrevPct />
    </div>
  );
}

function DivPreviewStatLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.preview-stat-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Target</p>
      </div>
    </div>
  );
}

function DivPrevTarget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div#prev-target">
      <div className="flex flex-col font-['Sora:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[15px] w-full">
        <p className="leading-[normal]">₦—</p>
      </div>
    </div>
  );
}

function DivPreviewStat() {
  return (
    <div className="bg-[#f4f5f7] flex-[1_0_0] min-w-px relative rounded-[10px] self-stretch" data-name="div.preview-stat">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <DivPreviewStatLabel />
        <DivPrevTarget />
      </div>
    </div>
  );
}

function DivPreviewStatLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.preview-stat-label">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">approvers</p>
      </div>
    </div>
  );
}

function DivPrevAmount() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div#prev-amount">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[15px] w-full">
        <p className="leading-[normal]">3 of 5</p>
      </div>
    </div>
  );
}

function DivPreviewStat1() {
  return (
    <div className="bg-[#f4f5f7] flex-[1_0_0] min-w-px relative rounded-[10px] self-stretch" data-name="div.preview-stat">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <DivPreviewStatLabel1 />
        <DivPrevAmount />
      </div>
    </div>
  );
}

function DivPreviewStatRow() {
  return (
    <div className="content-stretch flex gap-[10px] h-[60px] items-start justify-center relative shrink-0 w-[298px]" data-name="div.preview-stat-row">
      <DivPreviewStat />
      <DivPreviewStat1 />
    </div>
  );
}

function DivPreviewBody() {
  return (
    <div className="relative shrink-0 z-[1]" data-name="div.preview-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-start px-[20px] py-[18px] relative size-full">
        <DivPreviewProgress />
        <DivPreviewProgressLabel />
        <DivPreviewStatRow />
      </div>
    </div>
  );
}

function DivPreviewCard() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="div.preview-card">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivPreviewHeader />
        <DivPreviewBody />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Bulb1() {
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

function Span6() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Bulb1 />
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[10.42px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1340b8] text-[12.5px] w-[279px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">After submission, PoolFi reviews your pool within 24–48 hours. Approved pools appear on the explore feed and can be shared publicly.</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoNote6() {
  return (
    <div className="bg-[#eef3ff] relative rounded-[12px] shrink-0 w-full" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[10px] items-start pb-[15px] pt-[19px] px-[15px] relative size-full">
        <Span6 />
        <Div8 />
      </div>
    </div>
  );
}

function RightPreview() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[1053px] top-[85px] w-[340px]" data-name="RIGHT: PREVIEW">
      <Div7 />
      <DivPreviewCard />
      <DivInfoNote6 />
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

function Container4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-[#e5e8ef] border-b border-solid h-[79px] left-0 top-0 w-[259px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Home() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="home-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-01">
          <path d={svgPaths.p268a03b0} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2c728780} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ContainerBackgroundColor1() {
  return (
    <div className="absolute left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container+BackgroundColor">
      <Home />
    </div>
  );
}

function ContainerBackgroundColor() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[43px] w-[235px]" data-name="Container+BackgroundColor">
      <ContainerBackgroundColor1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.514px] top-[26px] w-[39.578px]">
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

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <PlusSign />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[97px] w-[235px]" data-name="Container">
      <Container6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.669px] top-[26px] w-[76.156px]">
        <p className="leading-[18px]">Create Pool</p>
      </div>
    </div>
  );
}

function Container8() {
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

function Container7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[151px] w-[235px]" data-name="Container">
      <Container8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.469px] top-[26px] w-[58.688px]">
        <p className="leading-[18px]">My Pools</p>
      </div>
      <SpanBackgroundColor />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(27,79,216,0.1)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <div className="absolute left-[6.6px] size-[24px] top-[6px]" data-name="Component 5">
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

function Container9() {
  return (
    <div className="absolute bg-[#eef3ff] h-[52px] left-[12px] rounded-[10px] top-[205px] w-[235px]" data-name="Container">
      <Container10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#1b4fd8] text-[14.157px] top-[26px] w-[46.516px]">
        <p className="leading-[18px]">Impact</p>
      </div>
    </div>
  );
}

function Container12() {
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

function Container11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[259px] w-[235px]" data-name="Container">
      <Container12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.708px] top-[26px] w-[64.625px]">
        <p className="leading-[18px]">My Wallet</p>
      </div>
    </div>
  );
}

function Container14() {
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

function Container13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[354px] w-[235px]" data-name="Container">
      <Container14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.667px] top-[26px] w-[83.953px]">
        <p className="leading-[18px]">Notifications</p>
      </div>
      <SpanBackgroundColor1 />
    </div>
  );
}

function Container16() {
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

function Container15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[408px] w-[235px]" data-name="Container">
      <Container16 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.582px] top-[26px] w-[54.328px]">
        <p className="leading-[18px]">Settings</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[863px] left-0 overflow-clip top-[76px] w-[259px]" data-name="navigation">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[13px] leading-[13px] left-[24px] not-italic text-[#6b7280] text-[10px] top-[24px] tracking-[1px] uppercase w-[211px]">Main</p>
      <ContainerBackgroundColor />
      <Container5 />
      <Container7 />
      <Container9 />
      <Container11 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[13px] leading-[13px] left-[24px] not-italic text-[#6b7280] text-[10px] top-[335px] tracking-[1px] uppercase w-[211px]">Account</p>
      <Container13 />
      <Container15 />
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

function Container20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-0 overflow-clip top-0 w-[143px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[17px] leading-[17px] left-0 not-italic text-[#1a1f2e] text-[12.785px] top-[0.5px] w-[133px]">Princess Saven</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[14px] left-0 overflow-clip top-[17px] w-[143px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[14px] left-0 not-italic text-[#6b7280] text-[10.642px] top-0 w-[90.938px]">Saven</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[31px] left-[56px] top-[11.5px] w-[143px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[54px] left-[12px] rounded-[10px] top-[16px] w-[235px]" data-name="Container">
      <ContainerBackgroundColor2 />
      <Container19 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_Math:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[209px] not-italic text-[#6b7280] text-[14px] top-[18px] w-[14px]">⋯</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-[#e5e8ef] border-solid border-t h-[87px] left-0 top-[939px] w-[259px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function AsideBackgroundColor() {
  return (
    <div className="absolute bg-white border-[#e5e8ef] border-r border-solid h-[1024px] left-0 top-0 w-[260px]" data-name="Aside+BackgroundColor">
      <Container4 />
      <Navigation />
      <Container17 />
    </div>
  );
}

export default function CreateAnImpactPool() {
  return (
    <div className="bg-white relative size-full" data-name="Create an impact pool">
      <div className="absolute bottom-0 h-[2200px] left-[259px] pointer-events-none top-0">
        <Topbar />
      </div>
      <Frame12 />
      <DivInfoNote5 />
      <RightPreview />
      <AsideBackgroundColor />
    </div>
  );
}