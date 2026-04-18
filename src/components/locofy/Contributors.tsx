import svgPaths from "../svg/svg-yho10mjk8g";

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
    <div className="absolute bg-[rgba(27,79,216,0)] left-[12px] rounded-[8px] size-[32px] top-[10px]" data-name="Container+BackgroundColor">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Component 5">
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

function ContainerBackgroundColor() {
  return (
    <div className="bg-[rgba(238,243,255,0)] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Container+BackgroundColor">
      <ContainerBackgroundColor1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[54px] not-italic text-[#6b7280] text-[13.514px] top-[26px] whitespace-nowrap">
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

function Container18() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[39px] relative shrink-0 w-[226px]" data-name="Container">
      <p className="absolute font-['Sora:Bold',sans-serif] font-bold h-[22px] leading-[22px] left-0 text-[#1a1f2e] text-[18.29px] top-0 tracking-[-0.3px] w-[226px]">My Impact Feed</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-0 not-italic text-[#6b7280] text-[11.507px] top-[23px] w-[226px]">Creator Dashboard</p>
    </div>
  );
}

function ContainerBackgroundColor3() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[38px]" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
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
    <div className="bg-white relative rounded-[10px] shrink-0 size-[38px]" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[10px]" />
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

function Cash() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="cash-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="cash-01">
          <path d={svgPaths.p18b22dc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29b24698} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p926ef00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p8bd3000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p26af4d80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5 20.5H19" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2aabd000} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Cash />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.047px] text-white whitespace-nowrap">
        <p className="leading-[17px]">Request Withdrawal</p>
      </div>
    </div>
  );
}

function ButtonBackgroundColor() {
  return (
    <div className="bg-[#1b4fd8] content-stretch flex flex-col items-start p-[12px] relative rounded-[9px] shrink-0 w-[182px]" data-name="Button+BackgroundColor">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <ContainerBackgroundColor3 />
      <ContainerBackgroundColor4 />
      <ButtonBackgroundColor />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[621px] items-center left-[32px] p-[12px] top-[12px] w-[1149px]">
      <Container18 />
      <Frame6 />
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

function PseudoBeforeBackgroundColor() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] left-[969.8px] rounded-[50px] size-[350px] top-[-120px]" data-name="Pseudo::before+BackgroundColor" />;
}

function PseudoAfterBackgroundColor() {
  return <div className="absolute bg-[rgba(255,255,255,0.04)] left-[478.8px] rounded-[50px] size-[200px] top-[117px]" data-name="Pseudo::after+BackgroundColor" />;
}

function ContainerBackgroundColor6() {
  return <div className="bg-[#34d399] rounded-[50px] shrink-0 size-[8px]" data-name="Container+BackgroundColor" />;
}

function DivPoolTypeTag() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[6px] items-center left-0 px-[15px] py-[6px] rounded-[100px] top-[-8px]" data-name="div.pool-type-tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ContainerBackgroundColor6 />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.85)] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Live · Verified `}</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[87px] relative shrink-0 w-[241px]" data-name="Container">
      <DivPoolTypeTag />
      <p className="absolute font-['Sora:Bold',sans-serif] font-bold h-[42px] leading-[42px] left-0 text-[32px] text-white top-[23px] tracking-[-2px] w-[1003px]">Clean Water Borehole for Oguta Community, Imo State</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[71px] tracking-[1px] uppercase w-[552px]">{`📅 Created Jan 20, 2026·⏰ Closes Mar 15, 2026·💧 Water & Sanitation`}</p>
    </div>
  );
}

function DivPoolHeaderActions() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start justify-end relative shrink-0" data-name="div.pool-header-actions">
      <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col items-center justify-center px-[15px] py-[9px] relative rounded-[9px] shrink-0" data-name="Component 2">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]" />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">🔗 Share Link</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[14px] py-[9px] relative rounded-[9px] shrink-0" data-name="Component 2">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#065f46] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">📢 Post Update</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] content-stretch flex gap-[616px] items-start left-[calc(50%-13px)] p-[12px] top-[9px] w-[1120px]" data-name="Container">
      <Container20 />
      <DivPoolHeaderActions />
    </div>
  );
}

function ContainerBackgroundColor8() {
  return <div className="absolute bg-[#34d399] left-0 rounded-[50px] size-[8px] top-[3px]" data-name="Container+BackgroundColor" />;
}

function Container22() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[14px] relative shrink-0 w-full" data-name="Container">
      <ContainerBackgroundColor8 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[14px] left-[14px] not-italic text-[10.464px] text-[rgba(255,255,255,0.55)] top-0 tracking-[0.8px] uppercase w-[92px]">Total Raised</p>
    </div>
  );
}

function ContainerBackgroundColor7() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[6px] items-start px-[17px] py-[15px] relative rounded-[12px] shrink-0 w-[253px]" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container22 />
      <p className="font-['Sora:Bold','Noto_Sans:Bold',sans-serif] font-bold h-[25px] leading-[25px] relative shrink-0 text-[#6ee7b7] text-[19.976px] tracking-[-0.5px] w-full">₦670,000</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[14px] not-italic relative shrink-0 text-[10.671px] text-[rgba(255,255,255,0.4)] w-full">of ₦1,000,000 target</p>
    </div>
  );
}

function ContainerBackgroundColor10() {
  return <div className="absolute bg-white left-0 rounded-[50px] size-[8px] top-[3px]" data-name="Container+BackgroundColor" />;
}

function Container23() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[14px] relative shrink-0 w-full" data-name="Container">
      <ContainerBackgroundColor10 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[14px] left-[14px] not-italic text-[10.464px] text-[rgba(255,255,255,0.55)] top-0 tracking-[0.8px] uppercase w-[92px]">Contributors</p>
    </div>
  );
}

function ContainerBackgroundColor9() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[6px] items-start px-[17px] py-[15px] relative rounded-[12px] shrink-0 w-[253px]" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container23 />
      <p className="font-['Sora:Bold',sans-serif] font-bold h-[25px] leading-[25px] relative shrink-0 text-[19.976px] text-white tracking-[-0.5px] w-full">342</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[14px] not-italic relative shrink-0 text-[10.671px] text-[rgba(255,255,255,0.4)] w-full">of</p>
    </div>
  );
}

function ContainerBackgroundColor12() {
  return <div className="absolute bg-[#fcd34d] left-0 rounded-[50px] size-[8px] top-[3px]" data-name="Container+BackgroundColor" />;
}

function Container24() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[14px] relative shrink-0 w-full" data-name="Container">
      <ContainerBackgroundColor12 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[14px] left-[14px] not-italic text-[10.464px] text-[rgba(255,255,255,0.55)] top-0 tracking-[0.8px] uppercase w-[92px]">Released</p>
    </div>
  );
}

function ContainerBackgroundColor11() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[6px] items-start px-[17px] py-[15px] relative rounded-[12px] shrink-0 w-[253px]" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container24 />
      <p className="font-['Sora:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#fcd34d] text-[20.067px] tracking-[-0.5px] whitespace-nowrap">₦15,000.00</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[14px] min-w-full not-italic relative shrink-0 text-[10.671px] text-[rgba(255,255,255,0.4)] w-[min-content]">1 approved withdrawal</p>
    </div>
  );
}

function ContainerBackgroundColor14() {
  return <div className="absolute bg-white left-0 rounded-[50px] size-[8px] top-[3px]" data-name="Container+BackgroundColor" />;
}

function Container25() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[14px] relative shrink-0 w-full" data-name="Container">
      <ContainerBackgroundColor14 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[14px] left-[14px] not-italic text-[10.464px] text-[rgba(255,255,255,0.55)] top-0 tracking-[0.8px] uppercase w-[92px]">{` In Pool`}</p>
    </div>
  );
}

function ContainerBackgroundColor13() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[6px] items-start px-[17px] py-[15px] relative rounded-[12px] shrink-0 w-[253px]" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container25 />
      <p className="font-['Sora:Bold','Noto_Sans:Bold',sans-serif] font-bold h-[25px] leading-[25px] relative shrink-0 text-[19.976px] text-white tracking-[-0.5px] w-full">₦470,000</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[14px] not-italic relative shrink-0 text-[10.671px] text-[rgba(255,255,255,0.4)] w-full">available to request</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[23px] items-center p-[12px] relative shrink-0">
      <ContainerBackgroundColor7 />
      <ContainerBackgroundColor9 />
      <ContainerBackgroundColor11 />
      <ContainerBackgroundColor13 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex items-center left-[17px] top-[120px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function ContainerBackgroundColor5() {
  return (
    <div className="absolute bg-[#1b4fd8] h-[257px] left-[273px] overflow-clip rounded-[20px] top-[96px] w-[1154px]" data-name="Container+BackgroundColor">
      <PseudoBeforeBackgroundColor />
      <PseudoAfterBackgroundColor />
      <Container19 />
      <Container21 />
    </div>
  );
}

function SpanProgressRaised() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.progress-raised">
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
    <div className="absolute content-stretch flex gap-[764px] items-center left-[25px] right-[25px] top-[20px]" data-name="div.progress-top-row">
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
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">₦330,000 still needed to hit target</p>
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
    <div className="absolute content-stretch flex gap-[762px] h-[16px] items-start left-[25px] right-[25px] top-[75px]" data-name="div.progress-meta">
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

function DivTabs() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="div.tabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-auto pb-px relative size-full">
        <div className="bg-[#eef3ff] relative self-stretch shrink-0" data-name="Component 4">
          <div aria-hidden="true" className="absolute border-[#1b4fd8] border-b-2 border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[14px] px-[18px] relative size-full">
            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b4fd8] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">👥 Contributors (342)</p>
            </div>
          </div>
        </div>
        <div className="relative self-stretch shrink-0" data-name="Component 4">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[14px] px-[18px] relative size-full">
            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">📢 Updates (2)</p>
            </div>
          </div>
        </div>
        <div className="relative self-stretch shrink-0" data-name="Component 4">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[14px] px-[18px] relative size-full">
            <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">💸 Withdrawals</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[0px_576px] items-center px-[12px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 4">
            <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
              <p className="leading-[normal]">Showing 342 contributors</p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center px-[15px] py-[8px] relative rounded-[9px] shrink-0" data-name="Component 2">
            <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[9px]" />
            <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">📥 Export CSV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Th() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] px-[12px] relative shrink-0 w-[419.13px]" data-name="th">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Contributor</p>
      </div>
    </div>
  );
}

function Th1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] px-[12px] relative shrink-0 w-[217.98px]" data-name="th">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Amount</p>
      </div>
    </div>
  );
}

function Th2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] px-[12px] relative shrink-0 w-[259.94px]" data-name="th">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Date</p>
      </div>
    </div>
  );
}

function Th3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] px-[12px] relative shrink-0 w-[208px]" data-name="th">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Approver Status</p>
      </div>
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="tr">
      <Th />
      <Th1 />
      <Th2 />
      <Th3 />
    </div>
  );
}

function DivCAv() {
  return (
    <div className="bg-[#1b4fd8] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">CE</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Chioma Eze</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">SilverFalcon#3312</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv />
        <Div1 />
      </div>
    </div>
  );
}

function Td() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell />
    </div>
  );
}

function TdAmountCell() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦5,000</p>
      </div>
    </div>
  );
}

function Td1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 18, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">✓ Approved</p>
        </div>
      </div>
    </div>
  );
}

function Td2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[18.5px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="Component 5">
      <Td />
      <TdAmountCell />
      <Td1 />
      <Td2 />
    </div>
  );
}

function DivCAv1() {
  return (
    <div className="bg-[#12b76a] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">BM</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Bello Musa</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">IronEagle#9941</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv1 />
        <Div2 />
      </div>
    </div>
  );
}

function Td3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell1 />
    </div>
  );
}

function TdAmountCell1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦10,000</p>
      </div>
    </div>
  );
}

function Td4() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 17, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip1() {
  return (
    <div className="bg-[#f5f3ff] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">⏳ Reviewing</p>
        </div>
      </div>
    </div>
  );
}

function Td5() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[18.5px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="Component 5">
      <Td3 />
      <TdAmountCell1 />
      <Td4 />
      <Td5 />
    </div>
  );
}

function DivCAv2() {
  return (
    <div className="bg-[#d1d5db] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">?</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[77px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Anonymous</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Hidden</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv2 />
        <Div3 />
      </div>
    </div>
  );
}

function Td6() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell2 />
    </div>
  );
}

function TdAmountCell2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦2,000</p>
      </div>
    </div>
  );
}

function Td7() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 17, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip2() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">—</p>
        </div>
      </div>
    </div>
  );
}

function Td8() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[18.5px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="Component 5">
      <Td6 />
      <TdAmountCell2 />
      <Td7 />
      <Td8 />
    </div>
  );
}

function DivCAv3() {
  return (
    <div className="bg-[#7c3aed] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">YA</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[97px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Yemi Adesanya</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">GoldRiver#7721</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv3 />
        <Div4 />
      </div>
    </div>
  );
}

function Td9() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell3 />
    </div>
  );
}

function TdAmountCell3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦1,000</p>
      </div>
    </div>
  );
}

function Td10() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 16, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip3() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">—</p>
        </div>
      </div>
    </div>
  );
}

function Td11() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[18.5px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="Component 5">
      <Td9 />
      <TdAmountCell3 />
      <Td10 />
      <Td11 />
    </div>
  );
}

function DivCAv4() {
  return (
    <div className="bg-[#db2777] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">AO</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[91px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Adaeze Okeke</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">CoralWave#5534</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv4 />
        <Div5 />
      </div>
    </div>
  );
}

function Td12() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell4 />
    </div>
  );
}

function TdAmountCell4() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦500</p>
      </div>
    </div>
  );
}

function Td13() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 16, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip4() {
  return (
    <div className="bg-[#f5f3ff] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">⏳ Reviewing</p>
        </div>
      </div>
    </div>
  );
}

function Td14() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[18.5px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip4 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="Component 5">
      <Td12 />
      <TdAmountCell4 />
      <Td13 />
      <Td14 />
    </div>
  );
}

function DivCAv5() {
  return (
    <div className="bg-[#0891b2] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">SF</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[91px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Segun Fashola</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">BlueMoon#2287</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell5() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv5 />
        <Div6 />
      </div>
    </div>
  );
}

function Td15() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell5 />
    </div>
  );
}

function TdAmountCell5() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦2,000</p>
      </div>
    </div>
  );
}

function Td16() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 15, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip5() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">✓ Approved</p>
        </div>
      </div>
    </div>
  );
}

function Td17() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[18.5px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip5 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0" data-name="Component 5">
      <Td15 />
      <TdAmountCell5 />
      <Td16 />
      <Td17 />
    </div>
  );
}

function DivCAv6() {
  return (
    <div className="bg-[#dc2626] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">NO</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[83px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Ngozi Obi</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">MoonTide#4421</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell6() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv6 />
        <Div7 />
      </div>
    </div>
  );
}

function Td18() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell6 />
    </div>
  );
}

function TdAmountCell6() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦3,000</p>
      </div>
    </div>
  );
}

function Td19() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[20px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 15, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip6() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">—</p>
        </div>
      </div>
    </div>
  );
}

function Td20() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] px-[12px] py-[18.5px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip6 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="Component 5">
      <Td18 />
      <TdAmountCell6 />
      <Td19 />
      <Td20 />
    </div>
  );
}

function DivCAv7() {
  return (
    <div className="bg-[#d1d5db] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="div.c-av">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">?</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[77px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Anonymous</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Hidden</p>
        </div>
      </div>
    </div>
  );
}

function DivContribNameCell7() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.contrib-name-cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <DivCAv7 />
        <Div8 />
      </div>
    </div>
  );
}

function Td21() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-[419.13px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <DivContribNameCell7 />
    </div>
  );
}

function TdAmountCell7() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[19.5px] pt-[20px] px-[12px] relative shrink-0 w-[217.98px]" data-name="td.amount-cell">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+₦1,500</p>
      </div>
    </div>
  );
}

function Td22() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[19.5px] pt-[20px] px-[12px] relative shrink-0 w-[259.94px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Feb 14, 2026</p>
      </div>
    </div>
  );
}

function SpanStatusChip7() {
  return (
    <div className="bg-[#f4f5f7] relative rounded-[100px] shrink-0" data-name="span.status-chip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">—</p>
        </div>
      </div>
    </div>
  );
}

function Td23() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-103px] pb-[18px] pt-[18.5px] px-[12px] relative shrink-0 w-[208px]" data-name="td">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-solid border-t inset-0 pointer-events-none" />
      <SpanStatusChip7 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[103px] relative shrink-0 w-full" data-name="Component 5">
      <Td21 />
      <TdAmountCell7 />
      <Td22 />
      <Td23 />
    </div>
  );
}

function TableContribTable() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-auto relative shrink-0" data-name="table.contrib-table">
      <Tr />
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function ContributorsTab() {
  return (
    <div className="relative shrink-0 w-full" data-name="CONTRIBUTORS TAB">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Div />
        <TableContribTable />
      </div>
    </div>
  );
}

function DivTabsWrap() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[798.05px]" data-name="div.tabs-wrap">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <DivTabs />
        <ContributorsTab />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function LeftTabs() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0" data-name="LEFT: TABS">
      <DivTabsWrap />
    </div>
  );
}

function SpanInfoRowLabel() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Status</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoRowValue() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">{`✅ Live & Verified`}</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[19px] pb-[9px] pt-[8px] right-[19px] top-[46px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoRowLabel />
      <SpanInfoRowValue />
    </div>
  );
}

function SpanInfoRowLabel1() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Category</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoRowValue1() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">{`💧 Water & Sanitation`}</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[19px] pb-[9px] pt-[8px] right-[19px] top-[80px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoRowLabel1 />
      <SpanInfoRowValue1 />
    </div>
  );
}

function SpanInfoRowLabel2() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Chain</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoRowValue2() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Lisk Network</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[19px] pb-[9px] pt-[8px] right-[19px] top-[114px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoRowLabel2 />
      <SpanInfoRowValue2 />
    </div>
  );
}

function SpanInfoRowLabel3() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Approvers</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoRowValue3() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">3 of 5 required</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[19px] pb-[9px] pt-[8px] right-[19px] top-[148px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoRowLabel3 />
      <SpanInfoRowValue3 />
    </div>
  );
}

function SpanInfoRowLabel4() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Deadline</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoRowValue4() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Mar 15, 2026</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow4() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[19px] pb-[9px] pt-[8px] right-[19px] top-[182px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoRowLabel4 />
      <SpanInfoRowValue4 />
    </div>
  );
}

function SpanInfoRowLabel5() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">Anonymous</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoRowValue5() {
  return (
    <div className="relative shrink-0" data-name="span.info-row-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Allowed ✓</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow5() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[19px] pb-[9px] pt-[8px] right-[19px] top-[216px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[#e5e8ef] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoRowLabel5 />
      <SpanInfoRowValue5 />
    </div>
  );
}

function SpanPoolLinkText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="span.pool-link-text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4fd8] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">poolfi.app/impact/oguta-wa…</p>
      </div>
    </div>
  );
}

function DivPoolLinkBox() {
  return (
    <div className="absolute bg-[#f4f5f7] content-stretch flex gap-[8px] items-center left-[19px] px-[14px] py-[12px] right-[19px] rounded-[10px] top-[262px]" data-name="div.pool-link-box">
      <SpanPoolLinkText />
      <div className="bg-[#1b4fd8] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[7px] shrink-0" data-name="Component 2">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Copy</p>
        </div>
      </div>
    </div>
  );
}

function PoolInfo() {
  return (
    <div className="bg-white h-[329px] relative rounded-[14px] shrink-0 w-full" data-name="POOL INFO">
      <div aria-hidden="true" className="absolute border border-[#e5e8ef] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="absolute content-stretch flex items-center left-[19px] right-[19px] top-[17px]" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1f2e] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">ℹ️ Pool Details</p>
        </div>
      </div>
      <DivInfoRow />
      <DivInfoRow1 />
      <DivInfoRow2 />
      <DivInfoRow3 />
      <DivInfoRow4 />
      <DivInfoRow5 />
      <DivPoolLinkBox />
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[19px] right-[19px] top-[90px]" data-name="div">
      <div className="flex flex-col font-['Sora:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[28px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[normal]">₦300,000</p>
      </div>
    </div>
  );
}

function DivApproverTrack() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-start justify-center left-[19px] right-[19px] top-[135px]" data-name="div.approver-track">
      <div className="bg-[#12b76a] flex-[1_0_0] h-[6px] min-w-px rounded-[100px]" data-name="div.ap-slot" />
      <div className="bg-[#12b76a] flex-[1_0_0] h-[6px] min-w-px rounded-[100px]" data-name="div.ap-slot" />
      <div className="bg-[#f79009] flex-[1_0_0] h-[6px] min-w-px rounded-[100px]" data-name="div.ap-slot" />
      <div className="bg-[#e5e8ef] flex-[1_0_0] h-[6px] min-w-px rounded-[100px]" data-name="div.ap-slot" />
      <div className="bg-[#e5e8ef] flex-[1_0_0] h-[6px] min-w-px rounded-[100px]" data-name="div.ap-slot" />
    </div>
  );
}

function WithdrawalStatus() {
  return (
    <div className="bg-[#f5f3ff] h-[182px] relative rounded-[14px] shrink-0 w-full" data-name="WITHDRAWAL STATUS">
      <div aria-hidden="true" className="absolute border border-[rgba(124,58,237,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="absolute content-stretch flex items-center left-[19px] right-[19px] top-[17px]" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c3aed] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">🔐 Active Withdrawal</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[19px] right-[19px] top-[46px]" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5b21b6] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal] mb-0">Request #2 is awaiting community</p>
          <p className="leading-[normal]">approval.</p>
        </div>
      </div>
      <Div9 />
      <DivApproverTrack />
      <div className="absolute content-stretch flex flex-col items-start left-[19px] right-[19px] top-[149px]" data-name="Component 4">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5b21b6] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">2 of 3 approvals received — waiting on 1 more</p>
        </div>
      </div>
    </div>
  );
}

function PDangerDesc() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.danger-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4.8px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b91c1c] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[19.2px] mb-0">Closing your pool will stop new contributions</p>
          <p className="leading-[19.2px] mb-0">and return locked funds to contributors. This</p>
          <p className="leading-[19.2px]">cannot be undone.</p>
        </div>
      </div>
    </div>
  );
}

function DangerZone() {
  return (
    <div className="bg-[#fef3f2] relative rounded-[14px] shrink-0 w-full" data-name="DANGER ZONE">
      <div aria-hidden="true" className="absolute border border-[rgba(240,68,56,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[7.2px] items-start px-[19px] py-[17px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Component 4">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#f04438] text-[13px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">⚠️ Pool Controls</p>
            </div>
          </div>
        </div>
        <PDangerDesc />
        <div className="bg-[#fef3f2] relative rounded-[9px] shrink-0 w-full" data-name="Component 2">
          <div aria-hidden="true" className="absolute border border-[rgba(240,68,56,0.3)] border-solid inset-0 pointer-events-none rounded-[9px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[11px] relative size-full">
              <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f04438] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[normal]">{`Close Pool & Refund Contributors`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightCol() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start shrink-0 sticky top-0 w-[300px]" data-name="RIGHT COL">
      <PoolInfo />
      <WithdrawalStatus />
      <DangerZone />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[29px] items-start relative shrink-0">
      <LeftTabs />
      <RightCol />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[273px] p-[12px] top-[374px] w-[1137px]">
      <Progress />
      <Frame5 />
    </div>
  );
}

export default function Contributors() {
  return (
    <div className="bg-white relative size-full" data-name="Contributors">
      <HeaderBackgroundColor />
      <ContainerBackgroundColor5 />
      <Frame3 />
    </div>
  );
}