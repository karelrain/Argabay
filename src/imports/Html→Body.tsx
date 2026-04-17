import svgPaths from "./svg-wgpjhh2uyk";
import imgArGabayAppPreview from "figma:asset/ea3996add6bd680ae914e9a67d349500de1a1c6c.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[96px] text-center tracking-[-3.84px] whitespace-nowrap">
        <p>
          <span className="leading-[96px]">Find Your Way in</span>
          <span className="leading-[96px] text-[#8f0000]">{` AR`}</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[20px] text-center tracking-[0.5px] w-[673px]">
        <p className="leading-[28px]">A Unity-based indoor AR navigation app that helps museum visitors find their way to Points of Interest using real-time positioning, a 2D floorplan map, and AR direction indicators.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9999 14.9999">
        <g id="Container">
          <path d={svgPaths.p4771f00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#8f0000] content-stretch flex gap-[8px] items-center justify-center px-[40px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Download APK</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function ArGabayAppPreview() {
  return (
    <div className="aspect-[21/9] relative rounded-[24px] shrink-0 w-full" data-name="ARGabay App Preview">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[343.94%] left-[-45.39%] max-w-none top-[-122.14%] w-[193.08%]" src={imgArGabayAppPreview} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[19.01px] relative shrink-0 w-[15.096px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0961 19.0095">
        <g id="Container">
          <path d={svgPaths.p28d827c0} fill="var(--fill-0, #8F0000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(143,0,0,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CURRENT POSITION</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`National Museum of `}</p>
        <p className="leading-[20px] whitespace-pre">Natural History</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pr-[40.06px] relative size-full">
        <Overlay />
        <Container6 />
      </div>
    </div>
  );
}

function FloatingUiElementOverlay() {
  return (
    <div className="absolute bg-white bottom-[31.72%] max-w-[280px] right-[-47px] rounded-[16px] top-[31.72%]" data-name="Floating UI Element Overlay">
      <div aria-hidden="true" className="absolute border border-[rgba(226,226,226,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.75px] items-start max-w-[inherit] p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Floating UI Element Overlay:shadow" />
        <Container4 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] w-[206px]">
          <p className="leading-[22.75px] whitespace-pre-wrap">{`System calibrated using Wi-Fi signals and magnetic field  to achieve indoor positioning.`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[#f3f3f3] relative rounded-[32px] shrink-0 w-full" data-name="Background+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.01px_0] rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
        <ArGabayAppPreview />
        <FloatingUiElementOverlay />
      </div>
    </div>
  );
}

function AsymmetricHeroMockup() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] pt-[72px] relative shrink-0 w-[1024px]" data-name="Asymmetric Hero Mockup">
      <div className="absolute bg-[rgba(143,0,0,0.05)] blur-[32px] left-[-80px] rounded-[12px] size-[256px] top-[-8px]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(143,0,0,0.1)] blur-[32px] bottom-[-79.99px] right-[-80px] rounded-[12px] size-[384px]" data-name="Overlay+Blur" />
      <BackgroundBorderOverlayBlur />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
      <Container2 />
      <AsymmetricHeroMockup />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[128px] pt-[192px] px-[45.5px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[48px] text-center tracking-[-1.2px] whitespace-nowrap">
        <p>
          <span className="leading-[48px] text-[#8f0000]">ARGabay</span>
          <span className="leading-[48px]">{` Features`}</span>
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Designed for museum visitors who want a guided experience through every gallery.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Container">
          <path d={svgPaths.p215fe480} fill="var(--fill-0, #8F0000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(143,0,0,0.05)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]" data-name="Overlay">
      <Container12 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[112px] relative shrink-0 w-[80px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Overlay1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">Real-time Navigation</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[18.63px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[16px] text-center w-[289px]">
          <p className="leading-[26px]">Dynamic pathfinding that guides you through every turn, floor, and exhibit with precision.</p>
        </div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Feature 1">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[41px] relative size-full">
          <Margin />
          <Heading3Margin />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[28.425px] relative shrink-0 w-[33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 28.425">
        <g id="Container">
          <path d={svgPaths.p91f1e80} fill="var(--fill-0, #8F0000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(143,0,0,0.05)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]" data-name="Overlay">
      <Container14 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[112px] relative shrink-0 w-[80px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Overlay2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">Voice Guidance</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[8.48px] pr-[8.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[26px] mb-0">Audio cues that keep you</p>
          <p className="leading-[26px] mb-0">moving without needing to stare at your</p>
          <p className="leading-[26px]">screen.</p>
        </div>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Feature 2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[41px] relative size-full">
          <Margin1 />
          <Heading3Margin1 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p31ddcc00} fill="var(--fill-0, #8F0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(143,0,0,0.05)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]" data-name="Overlay">
      <Container16 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[112px] relative shrink-0 w-[80px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Overlay3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">AR View</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[3.04px] pr-[3.06px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[16px] text-center w-[320px]">
          <p className="leading-[26px]">Identify points of interest simply by pointing your device at them.</p>
        </div>
      </div>
    </div>
  );
}

function Feature2() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Feature 3">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[41px] relative size-full">
          <Margin2 />
          <Heading3Margin2 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_320px] relative shrink-0 w-full" data-name="Container">
      <Feature />
      <Feature1 />
      <Feature2 />
    </div>
  );
}

function SectionFeatureHighlightsBentoGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] py-[96px] relative shrink-0 w-[1280px]" data-name="Section - Feature Highlights (Bento Grid)">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f9f9f9] text-[60px] tracking-[-1.5px] w-full">
        <p className="leading-[60px] mb-0">Ready to start</p>
        <p className="leading-[60px]">your journey?</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(226,226,226,0.6)] whitespace-nowrap">
        <p className="leading-[28px]">Download the latest ARGabay build and start navigating.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[11.66px] relative shrink-0 w-[20.308px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3076 11.6601">
        <g id="Container">
          <path d={svgPaths.p2a24b2e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#8f0000] content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[20px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container22 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Download APK</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <Heading5 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[74.625px] left-0 top-0 w-[119.408px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.408 74.6362">
        <g id="Group 6">
          <path d={svgPaths.p1bda6c00} fill="var(--fill-0, #FFEED6)" id="Subtract" />
          <g id="Subtract_2" />
          <path d={svgPaths.p18c0ed00} fill="var(--fill-0, #FFEED6)" id="Vector 16" />
          <path d={svgPaths.pe430e00} fill="var(--fill-0, #FFEED6)" id="Vector 17" />
          <path clipRule="evenodd" d={svgPaths.p18ab3900} fill="url(#paint0_linear_1_184)" fillRule="evenodd" id="Vector 18" />
          <path d={svgPaths.p1b298920} id="Vector 20" stroke="var(--stroke-0, #8F0000)" strokeDasharray="3.74 3.74" strokeWidth="0.897062" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_184" x1="56.3208" x2="63.1819" y1="51.5449" y2="63.4717">
            <stop stopColor="#817059" />
            <stop offset="0.746876" stopColor="#FFE9CA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[74.624px] left-[calc(50%-0.01px)] top-[calc(50%+0.02px)] w-[119.408px]" data-name="Logo">
      <Group />
    </div>
  );
}

function ArgabayLogo() {
  return (
    <div className="bg-[#8f0000] overflow-clip relative rounded-[20px] shrink-0 size-[192px]" data-name="Argabay Logo">
      <Logo />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[16px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">ARGabay</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Background+Shadow">
      <div className="absolute bg-[rgba(143,0,0,0.05)] inset-0 opacity-0" data-name="Overlay" />
      <ArgabayLogo />
      <Container24 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Container18() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Container19 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function DownloadQrSection() {
  return (
    <div className="bg-[#1a1c1c] relative shrink-0 w-full" data-name="Download & QR Section">
      <div className="content-stretch flex flex-col items-start px-[45.5px] py-[96px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[30px] text-center tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">Installation Guide</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#8f0000] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Download the APK</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tap the download button above to save the ARGabay installer to your device.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[575.33px]" data-name="Container">
      <Heading7 />
      <Container27 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex gap-[24px] items-start p-[32px] relative size-full">
        <Background1 />
        <Container26 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#8f0000] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Enable Unknown Sources</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[16px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`Go to Settings > Security and enable `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#1a1c1c]">{`"Install unknown apps"`}</span>
          <span className="leading-[24px]">{` for your browser or file manager.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[710.63px]" data-name="Container">
      <Heading8 />
      <Container29 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex gap-[24px] items-start p-[32px] relative size-full">
        <Background3 />
        <Container28 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#8f0000] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">{`Install & Launch`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Open the downloaded file and start exploring the app.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[409px]" data-name="Container">
      <Heading9 />
      <Container31 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex gap-[24px] items-start p-[32px] relative size-full">
        <Background5 />
        <Container30 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background2 />
      <Background4 />
    </div>
  );
}

function SectionInstallationGuide() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[896px] py-[96px] relative shrink-0 w-[896px]" data-name="Section - Installation Guide">
      <Heading6 />
      <Container25 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8f0000] text-[20px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[28px]">ARGabay</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(26,28,28,0.7)] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">© 2026 ARGabay.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[122px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Link() {
  return <div className="self-stretch shrink-0 w-[94.53px]" data-name="Link" />;
}

function Link1() {
  return <div className="self-stretch shrink-0 w-[115px]" data-name="Link" />;
}

function Link2() {
  return <div className="self-stretch shrink-0 w-[122.63px]" data-name="Link" />;
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[32px] h-px items-start justify-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Link3() {
  return <div className="opacity-80 self-stretch shrink-0 w-[19px]" data-name="Link" />;
}

function Link4() {
  return <div className="opacity-80 self-stretch shrink-0 w-[17px]" data-name="Link" />;
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-px items-start relative shrink-0" data-name="Container">
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f3f3f3] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start px-[45.5px] py-[48px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[19.998px] left-0 top-0 w-[32px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.0016">
        <g id="Group 6">
          <path d={svgPaths.p37866a00} fill="var(--fill-0, #8F0000)" id="Subtract" />
          <g id="Subtract_2" />
          <path d={svgPaths.p163400} fill="var(--fill-0, #8F0000)" id="Vector 16" />
          <path d={svgPaths.p39d72d80} fill="var(--fill-0, #8F0000)" id="Vector 17" />
          <path clipRule="evenodd" d={svgPaths.p1308b740} fill="url(#paint0_linear_1_207)" fillRule="evenodd" id="Vector 18" />
          <path d={svgPaths.pad32380} id="Vector 20" stroke="var(--stroke-0, #FFEED6)" strokeDasharray="1 1" strokeWidth="0.240403" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_207" x1="15.3357" x2="16.5377" y1="13.713" y2="16.2072">
            <stop stopColor="#4C120B" />
            <stop offset="1" stopColor="#8F0000" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[32px]" data-name="Logo">
      <Group1 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f0000] text-[20px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[28px]">ARGabay</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Logo1 />
      <Container40 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#8f0000] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8f0000] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Overview</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(26,28,28,0.6)] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Features</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(26,28,28,0.6)] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Download</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(26,28,28,0.6)] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Guide</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[80px] max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[48px] pr-[48.02px] relative size-full">
          <Container39 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function NavTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(249,249,249,0.8)] content-stretch flex flex-col items-start left-0 shadow-[0px_8px_32px_0px_rgba(26,28,28,0.04)] top-0 w-[1371px]" data-name="Nav - TopAppBar">
      <Container38 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 249) 0%, rgb(249, 249, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeroSection />
      <SectionFeatureHighlightsBentoGrid />
      <DownloadQrSection />
      <SectionInstallationGuide />
      <Footer />
      <NavTopAppBar />
    </div>
  );
}