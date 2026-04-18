import svgPaths from "./svg-ptzyiucswi";

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

function Home() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="home-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-01">
          <path d={svgPaths.p268a03b0} id="Vector" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2c728780} id="Vector_2" stroke="var(--stroke-0, #1B4FD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ContainerBackgroundColor1() {
  return (
    <div className="absolute bg-[rgba(27,79,216,0.1)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container+BackgroundColor">
      <Home />
    </div>
  );
}

function ContainerBackgroundColor() {
  return (
    <div className="absolute bg-[#eef3ff] h-[52px] left-[12px] rounded-[10px] top-[43px] w-[235px]" data-name="Container+BackgroundColor">
      <ContainerBackgroundColor1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#1b4fd8] text-[13.514px] top-[26px] w-[39.578px]">
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

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <PlusSign />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[97px] w-[235px]" data-name="Container">
      <Container2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.669px] top-[26px] w-[76.156px]">
        <p className="leading-[18px]">Create Pool</p>
      </div>
    </div>
  );
}

function Container4() {
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

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[151px] w-[235px]" data-name="Container">
      <Container4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.469px] top-[26px] w-[58.688px]">
        <p className="leading-[18px]">My Pools</p>
      </div>
      <SpanBackgroundColor />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container">
      <div className="absolute left-[6.6px] size-[24px] top-[6px]" data-name="Component 5">
        <div className="absolute inset-[8.33%_14.58%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 21.5">
              <path d={svgPaths.p1c707100} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-[33.33%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 5.5">
              <path d={svgPaths.p220cf00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[205px] w-[235px]" data-name="Container">
      <Container6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[14.157px] top-[26px] w-[46.516px]">
        <p className="leading-[18px]">Impact</p>
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
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[259px] w-[235px]" data-name="Container">
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
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[354px] w-[235px]" data-name="Container">
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
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[12px] rounded-[10px] top-[408px] w-[235px]" data-name="Container">
      <Container12 />
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
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[13px] leading-[13px] left-[24px] not-italic text-[#6b7280] text-[10px] top-[335px] tracking-[1px] uppercase w-[211px]">Account</p>
      <Container9 />
      <Container11 />
    </div>
  );
}

function ContainerBackgroundColor2() {
  return (
    <div className="absolute bg-[#1b4fd8] left-[12px] rounded-[50px] size-[34px] top-[10px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[17.01px] not-italic text-[12.059px] text-center text-white top-[17px] w-[17.625px]">
        <p className="leading-[17px]">EO</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-0 overflow-clip top-0 w-[143px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[17px] leading-[17px] left-0 not-italic text-[#1a1f2e] text-[12.785px] top-0 w-[66.875px]">Emeka Obi</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[14px] left-0 overflow-clip top-[17px] w-[143px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[14px] left-0 not-italic text-[#6b7280] text-[10.642px] top-0 w-[90.938px]">Emmy nwa</p>
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

function Container18() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[39px] relative shrink-0 w-[226px]" data-name="Container">
      <p className="absolute font-['Sora:Bold',sans-serif] font-bold h-[22px] leading-[22px] left-0 text-[#1a1f2e] text-[18.29px] top-0 tracking-[-0.3px] w-[226px]">Good morning, Emeka 👋</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-0 not-italic text-[#6b7280] text-[11.507px] top-[23px] w-[226px]">Wednesday, Feb 18, 2026</p>
    </div>
  );
}

function ContainerBackgroundColor3() {
  return (
    <div className="absolute bg-white border border-[#e5e8ef] border-solid left-0 rounded-[10px] size-[38px] top-0" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%+0.5px)]" data-name="Component 5">
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

function ContainerBackgroundColor4() {
  return (
    <div className="absolute bg-white border border-[#e5e8ef] border-solid left-[50px] rounded-[10px] size-[38px] top-0" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%+0.5px)]" data-name="Component 5">
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

function ButtonBackgroundColor() {
  return (
    <div className="absolute bg-[#1b4fd8] h-[35px] left-[100px] rounded-[10px] top-[1.5px] w-[115px]" data-name="Button+BackgroundColor">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[16px] not-italic text-[12.558px] text-white top-[17.5px] w-[83.078px]">
        <p className="leading-[17px]">+ Create Pool</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[38px] relative shrink-0 w-[215px]" data-name="Container">
      <ContainerBackgroundColor3 />
      <ContainerBackgroundColor4 />
      <ButtonBackgroundColor />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[647px] items-center left-[32px] p-[12px] top-[12px] w-[1149px]">
      <Container18 />
      <Container19 />
    </div>
  );
}

function HeaderBackgroundColor() {
  return (
    <div className="absolute bg-white border-[#e5e8ef] border-b border-solid h-[79px] left-[259px] top-0 w-[1181px]" data-name="Header+BackgroundColor">
      <Frame1 />
    </div>
  );
}

function Span() {
  return <div className="absolute h-[16px] left-[301px] top-[221px] w-[605px]" data-name="span" />;
}

function DivFormCardTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">{`You've been selected to review a withdrawal`}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <DivFormCardTitle />
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">PoolFi randomly selected you from contributors to this pool. Review the request carefully and cast your vote.</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[610px]">
      <div className="bg-[#f5f3ff] content-stretch flex flex-col items-center justify-center p-[13px] relative rounded-[12px] shrink-0 w-[215px]" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[rgba(124,58,237,0.25)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">{` Multi-Sig Approval Request`}</p>
        </div>
      </div>
      <Frame22 />
    </div>
  );
}

function DiceFaces1() {
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

function Span1() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DiceFaces1 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-[445px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center leading-[0] relative size-full text-[#1340b8]">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">You were randomly selected as an approver</p>
        </div>
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.5px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">PoolFi chose you from 342 contributors. The creator cannot see who was selected. This protects the integrity of the process.</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoNote() {
  return (
    <div className="bg-[#eef3ff] relative rounded-[12px] shrink-0 w-full" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[10px] items-start p-[10px] relative size-full">
        <Span1 />
        <Frame14 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[307px] top-[113px] w-[755px]">
      <Frame33 />
      <DivInfoNote />
    </div>
  );
}

function DivContributeTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contribute-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[normal]">Clean Water Borehole — Oguta</p>
        </div>
      </div>
    </div>
  );
}

function DivContributeHeader() {
  return (
    <div className="bg-[#1b4fd8] relative rounded-[11px] shrink-0 w-full" data-name="div.contribute-header">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none rounded-[11px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[17px] pt-[18px] px-[20px] relative size-full">
        <DivContributeTitle />
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c9d4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Withdrawal Request #2 · Submitted Feb 17, 2026</p>
        </div>
      </div>
    </div>
  );
}

function DivFormCardTitle1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[82px] top-[-791px] w-[391px]" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Funding Details</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Amount Requested</p>
      </div>
      <div className="flex flex-col font-['Sora:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#1a1f2e] text-[39.311px] text-center tracking-[-0.6937px] w-[578.096px]">
        <p className="leading-[normal]">₦300,000</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">of ₦670,000 total in pool · 45% of funds</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%+0.5px)] top-[calc(50%+0.78px)] w-[250px]">
      <Frame17 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f4f5f7] h-[159px] relative rounded-[12px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFormCardTitle1 />
        <Frame16 />
      </div>
    </div>
  );
}

function DivFormCardTitle2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[82px] top-[-791px] w-[391px]" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Funding Details</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start leading-[0] left-[46px] text-[#6b7280] top-[18px] w-[520px]">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Purpose</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[13px] w-[520px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Purchase and installation of solar-powered pump system, including photovoltaic panels, pump unit, and electrical wiring for the completed borehole.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f4f5f7] h-[97px] relative rounded-[12px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFormCardTitle2 />
        <Frame18 />
      </div>
    </div>
  );
}

function DivFormCardTitle3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[82px] top-[-791px] w-[391px]" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Funding Details</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start leading-[0] left-[46px] text-[#6b7280] top-[18px] w-[520px]">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Vendor / Recipient</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[13px] w-[520px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">AquaTech NG Ltd — Invoice #ATN-2026-0214 · RC 1082944</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f4f5f7] h-[78px] relative rounded-[12px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFormCardTitle3 />
        <Frame19 />
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

function Frame20() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start leading-[0] left-[calc(50%-62.5px)] text-[#6b7280] top-[18px] w-[520px]">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Stage</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[13px] w-[520px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Phase 2 of 3 — Borehole drilling complete. Pump installation is the final major cost before commissioning.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f4f5f7] h-[97px] relative rounded-[12px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFormCardTitle4 />
        <Frame20 />
      </div>
    </div>
  );
}

function ContributeCard() {
  return (
    <div className="bg-white h-[601px] relative rounded-[16px] shrink-0 w-full" data-name="CONTRIBUTE CARD">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[9px] relative size-full">
          <DivContributeHeader />
          <Frame8 />
          <Frame11 />
          <Frame10 />
          <Frame9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
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

function Container20() {
  return (
    <div className="bg-[rgba(27,79,216,0.1)] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[8px] relative size-full">
        <FileAttachment />
      </div>
    </div>
  );
}

function DivFormCardTitle5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Supporting Evidence</p>
      </div>
    </div>
  );
}

function DivFormCardDesc() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-card-desc">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Verified pools get more contributions. Upload proof of the problem — photos, documents, or links.</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-[589px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <DivFormCardTitle5 />
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
        <Container20 />
        <Div />
      </div>
    </div>
  );
}

function DivFormCardTitle6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[82px] top-[-791px] w-[391px]" data-name="div.form-card-title">
      <div className="flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[17px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">Funding Details</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[#1b4fd8] h-[148px] left-[-1px] overflow-clip rounded-tl-[8px] rounded-tr-[8px] top-[-1.5px] w-[318px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-27px)] text-[#1a1f2e] text-[55px] top-[calc(50%+0.29px)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[82.5px]">🚰</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-white border border-[#e5e8ef] border-solid h-[193px] left-[51px] rounded-[10px] top-[16.71px] w-[318px]" data-name="Component 1">
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-[#1b4fd8] h-[148px] left-[-1px] overflow-clip rounded-tl-[8px] rounded-tr-[8px] top-[-1.5px] w-[318px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-22px)] text-[#1a1f2e] text-[45px] top-[calc(50%-0.21px)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[67.5px]">📃</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-white border border-[#e5e8ef] border-solid h-[193px] left-[377px] rounded-[10px] top-[16.71px] w-[318px]" data-name="Component 2">
      <Frame35 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] text-[#1a1f2e] text-[13px] top-[169px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">Aqua Tech Invoice.pdf</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[257px] relative rounded-[12px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFormCardTitle6 />
        <Component />
        <Component1 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] left-[63px] text-[#1a1f2e] text-[13px] top-[186.71px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[19.5px]">Completed borehole photo</p>
        </div>
      </div>
    </div>
  );
}

function Step1Basics() {
  return (
    <div className="bg-white h-[313px] relative rounded-[20px] shrink-0 w-[752px]" data-name="STEP 1: BASICS">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivFormCardHeader />
        <Frame12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center leading-[0] relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#1a1f2e] text-[13.357px] tracking-[0.9714px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Approver Status</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b7280] text-[13px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[19.5px]">(5 randomly selected)</p>
      </div>
    </div>
  );
}

function ContainerBackgroundColor5() {
  return (
    <div className="bg-[#1b4fd8] relative rounded-[48.949px] shrink-0 size-[33.285px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15.664px] justify-center leading-[0] left-[16.65px] not-italic text-[11.208px] text-center text-white top-[16.64px] w-[15.878px]">
        <p className="leading-[15.664px]">EO</p>
      </div>
    </div>
  );
}

function Tick2() {
  return (
    <div className="relative shrink-0 size-[14.317px]" data-name="tick-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3169 14.3169">
        <g id="tick-01">
          <path d={svgPaths.p1544dd80} id="Vector" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Tick2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.288px] not-italic relative shrink-0 text-[#12b76a] text-[8.789px] text-center whitespace-nowrap">Approved</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[15.792px] relative shrink-0 text-[#1a1f2e] text-[11.149px] whitespace-nowrap">Emeka Obi</p>
      <Frame23 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(18,183,106,0.2)] content-stretch flex flex-col gap-[12px] items-center p-[8px] relative rounded-[20px] shrink-0 w-[101px]">
      <div aria-hidden="true" className="absolute border border-[#12b76a] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ContainerBackgroundColor5 />
      <Frame2 />
    </div>
  );
}

function ContainerBackgroundColor6() {
  return (
    <div className="bg-[#1b4fd8] relative rounded-[48.949px] shrink-0 size-[33.285px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[11.208px] text-center text-white top-[16.5px] w-[24px]">
        <p className="leading-[15.664px]">NA</p>
      </div>
    </div>
  );
}

function Tick() {
  return (
    <div className="relative shrink-0 size-[14.317px]" data-name="tick-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3169 14.3169">
        <g id="tick-01">
          <path d={svgPaths.p1544dd80} id="Vector" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Tick />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.288px] not-italic relative shrink-0 text-[#12b76a] text-[8.789px] text-center whitespace-nowrap">Approved</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[15.792px] relative shrink-0 text-[#1a1f2e] text-[11.149px] whitespace-nowrap">Ngozi A.</p>
      <Frame36 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(18,183,106,0.2)] content-stretch flex flex-col gap-[12px] items-center p-[8px] relative rounded-[20px] shrink-0 w-[101px]">
      <div aria-hidden="true" className="absolute border border-[#12b76a] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ContainerBackgroundColor6 />
      <Frame4 />
    </div>
  );
}

function ContainerBackgroundColor7() {
  return (
    <div className="bg-[#1b4fd8] relative rounded-[48.949px] shrink-0 size-[33.285px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15.664px] justify-center leading-[0] left-[16.65px] not-italic text-[11.208px] text-center text-white top-[16.64px] w-[15.878px]">
        <p className="leading-[15.664px]">PS</p>
      </div>
    </div>
  );
}

function Tick1() {
  return (
    <div className="relative shrink-0 size-[14.317px]" data-name="tick-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3169 14.3169">
        <g id="tick-01">
          <path d={svgPaths.p1544dd80} id="Vector" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Tick1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.288px] not-italic relative shrink-0 text-[#12b76a] text-[8.789px] text-center whitespace-nowrap">Approved</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[15.792px] relative shrink-0 text-[#1a1f2e] text-[11.149px] whitespace-nowrap">You</p>
      <Frame38 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(27,79,216,0.2)] content-stretch flex flex-col gap-[12px] items-center p-[8px] relative rounded-[20px] shrink-0 w-[101px]">
      <div aria-hidden="true" className="absolute border border-[#1b4fd8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ContainerBackgroundColor7 />
      <Frame5 />
    </div>
  );
}

function ContainerBackgroundColor8() {
  return (
    <div className="bg-[#1b4fd8] relative rounded-[48.949px] shrink-0 size-[33.285px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15.664px] justify-center leading-[0] left-[16.65px] not-italic text-[11.208px] text-center text-white top-[16.64px] w-[15.878px]">
        <p className="leading-[15.664px]">??</p>
      </div>
    </div>
  );
}

function Hourglass() {
  return (
    <div className="relative shrink-0 size-[14.317px]" data-name="hourglass">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3169 14.3169">
        <g id="hourglass">
          <path d="M2.38615 1.78961H11.9307" id="Vector" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
          <path d={svgPaths.pe2c1880} id="Vector_2" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
          <path d={svgPaths.p36ac0f00} id="Vector_3" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
          <path d="M2.38615 12.5273H11.9307" id="Vector_4" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Hourglass />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.288px] not-italic relative shrink-0 text-[#f79009] text-[8.789px] text-center whitespace-nowrap">Pending</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[15.792px] relative shrink-0 text-[#1a1f2e] text-[11.149px] whitespace-nowrap">Anonymous</p>
      <Frame40 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[rgba(247,144,9,0.2)] content-stretch flex flex-col gap-[12px] items-center p-[8px] relative rounded-[20px] shrink-0 w-[101px]">
      <div aria-hidden="true" className="absolute border border-[#f79009] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ContainerBackgroundColor8 />
      <Frame6 />
    </div>
  );
}

function ContainerBackgroundColor9() {
  return (
    <div className="bg-[#1b4fd8] relative rounded-[48.949px] shrink-0 size-[33.285px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15.664px] justify-center leading-[0] left-[16.65px] not-italic text-[11.208px] text-center text-white top-[16.64px] w-[15.878px]">
        <p className="leading-[15.664px]">??</p>
      </div>
    </div>
  );
}

function Hourglass1() {
  return (
    <div className="relative shrink-0 size-[14.317px]" data-name="hourglass">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3169 14.3169">
        <g id="hourglass">
          <path d="M2.38615 1.78961H11.9307" id="Vector" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
          <path d={svgPaths.pe2c1880} id="Vector_2" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
          <path d={svgPaths.p36ac0f00} id="Vector_3" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
          <path d="M2.38615 12.5273H11.9307" id="Vector_4" stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894806" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Hourglass1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.288px] not-italic relative shrink-0 text-[#f79009] text-[8.789px] text-center whitespace-nowrap">Pending</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[15.792px] relative shrink-0 text-[#1a1f2e] text-[11.149px] whitespace-nowrap">Anonymous</p>
      <Frame42 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[rgba(247,144,9,0.2)] content-stretch flex flex-col gap-[12px] items-center p-[8px] relative rounded-[20px] shrink-0 w-[101px]">
      <div aria-hidden="true" className="absolute border border-[#f79009] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ContainerBackgroundColor9 />
      <Frame7 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <Frame3 />
      <Frame25 />
      <Frame37 />
      <Frame39 />
      <Frame41 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[8px] relative shrink-0">
      <Frame26 />
      <Frame24 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['DM_Sans:Bold',sans-serif] font-bold gap-[152px] items-start leading-[0] left-[calc(50%+0.5px)] text-[11px] top-1/2 tracking-[0.8px] uppercase w-[584px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">2 of 3 required approvals received</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#f79009]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">1 more needed to release</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f4f5f7] h-[50px] relative rounded-[12px] shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0 w-[653px]">
      <Frame27 />
      <Frame13 />
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

function Span2() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DiceFaces />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center leading-[0] relative size-full text-[#1340b8]">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[12px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">You have 48 hours to respond.</p>
        </div>
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.5px] w-[657px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[20px]">{`If no action is taken, you'll be replaced by another randomly selected contributor`}</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoNote1() {
  return (
    <div className="bg-[#eef3ff] h-[58px] relative rounded-[12px] shrink-0 w-full" data-name="div.info-note">
      <div aria-hidden="true" className="absolute border border-[rgba(27,79,216,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[10px] items-start p-[10px] relative size-full">
        <Span2 />
        <Frame15 />
      </div>
    </div>
  );
}

function DivFormNav() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[85px] items-start justify-center pb-[20px] pt-[21px] px-[28px] relative shrink-0 w-[737px]" data-name="div.form-nav">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-white relative rounded-[10px] shrink-0 w-[277px]" data-name="Component 1">
        <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[13px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">←Reject</p>
          </div>
        </div>
      </div>
      <div className="bg-[#1b4fd8] relative rounded-[10px] shrink-0 w-[307px]" data-name="Component 1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[13px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal]">Approve Withdrawal →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
      <DivInfoNote1 />
      <DivFormNav />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame43 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Frame29 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[304px] top-[350px] w-[767px]">
      <ContributeCard />
      <Step1Basics />
      <Frame30 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 26">
      <AsideBackgroundColor />
      <HeaderBackgroundColor />
      <Span />
      <Frame34 />
      <Frame31 />
    </div>
  );
}