import svgPaths from "../../imports/svg-wgpjhh2uyk";
import imgArGabayAppPreview from "figma:asset/ea3996add6bd680ae914e9a67d349500de1a1c6c.png";
import Navigation from "./Navigation";

function Heading() {
  return (
    <div
      className="flex flex-col items-center w-full gap-4 sm:gap-5"
      data-name="Heading 1"
    >
      <div className="font-['Manrope'] font-semibold text-center text-[#1a1c1c] tracking-tight">
        <p className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1]">
          Find Your Way in{" "}
          <span className="text-[#8f0000]">AR</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="flex flex-col items-center max-w-full md:max-w-[672px] px-4"
      data-name="Container"
    >
      <div className="font-['Inter'] font-normal text-[#5f5e5e] text-[16px] sm:text-[18px] md:text-[20px] text-center leading-[1.6]">
        <p>
          A Unity-based indoor AR navigation app that helps
          museum visitors find their way to Points of Interest
          using real-time positioning, a 2D floorplan map, and
          AR direction indicators.
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="Container"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14.9999 14.9999"
      >
        <g id="Container">
          <path
            d={svgPaths.p4771f00}
            fill="var(--fill-0, white)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1v7hVQHISc-BS11Ck2KDgc3MTqVtfYiq-"
      className="bg-[#8f0000] content-stretch flex gap-[8px] items-center justify-center px-[32px] sm:px-[40px] py-[14px] sm:py-[16px] relative rounded-[8px] shrink-0 min-h-[48px] cursor-pointer hover:bg-[#a00000] transition-colors no-underline"
      data-name="Button"
    >
      <div
        className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
        data-name="Button:shadow"
      />
      <Container3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] sm:text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Download APK</p>
      </div>
    </a>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex items-center justify-center pt-[24px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Button />
    </div>
  );
}

function ArGabayAppPreview() {
  return (
    <div
      className="aspect-[21/9] relative rounded-[16px] sm:rounded-[20px] md:rounded-[24px] shrink-0 w-full"
      data-name="ARGabay App Preview"
    >
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[16px] sm:rounded-[20px] md:rounded-[24px]">
        <img
          alt=""
          className="absolute h-[343.94%] left-[-45.39%] max-w-none top-[-122.14%] w-[193.08%]"
          src={imgArGabayAppPreview}
        />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="h-[19.01px] relative shrink-0 w-[15.096px]"
      data-name="Container"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.0961 19.0095"
      >
        <g id="Container">
          <path
            d={svgPaths.p28d827c0}
            fill="var(--fill-0, #8F0000)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(143,0,0,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
      data-name="Overlay"
    >
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CURRENT POSITION</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`National Museum of `}</p>
        <p className="leading-[20px] whitespace-pre">
          Natural History
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 max-w-[139px]"
      data-name="Container"
    >
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
    <div
      className="absolute bg-white bottom-[10%] sm:bottom-[20%] md:bottom-[31.72%] max-w-[200px] sm:max-w-[240px] md:max-w-[280px] right-[-20px] sm:right-[-30px] md:right-[-47px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] top-[10%] sm:top-[20%] md:top-[31.72%]"
      data-name="Floating UI Element Overlay"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(226,226,226,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] sm:rounded-[14px] md:rounded-[16px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14.75px] items-start max-w-[inherit] p-[16px] sm:p-[20px] md:p-[25px] relative size-full">
        <div
          className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
          data-name="Floating UI Element Overlay:shadow"
        />
        <Container4 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[12px] sm:text-[13px] md:text-[14px] w-full">
          <p className="leading-[1.6] whitespace-pre-wrap">{`Calibrated using Wi-Fi signals and magnetic field for positioning.`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderOverlayBlur() {
  return (
    <div
      className="backdrop-blur-[2px] bg-[#f3f3f3] relative rounded-[20px] sm:rounded-[26px] md:rounded-[32px] shrink-0 w-full"
      data-name="Background+Border+OverlayBlur"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px] sm:rounded-[26px] md:rounded-[32px]"
      />
      <div className="content-stretch flex flex-col items-start p-[20px] sm:p-[26px] md:p-[33px] relative size-full">
        <div
          className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.01px_0] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          data-name="Overlay+Shadow"
        />
        <ArGabayAppPreview />
        <FloatingUiElementOverlay />
      </div>
    </div>
  );
}

function AsymmetricHeroMockup() {
  return (
    <div
      className="content-stretch flex flex-col items-center max-w-full md:max-w-[900px] lg:max-w-[1024px] pt-[48px] sm:pt-[60px] md:pt-[72px] relative shrink-0 w-full px-4"
      data-name="Asymmetric Hero Mockup"
    >
      <div
        className="absolute bg-[rgba(143,0,0,0.05)] blur-[32px] left-[-40px] sm:left-[-60px] md:left-[-80px] rounded-[12px] size-[180px] sm:size-[220px] md:size-[256px] top-[-8px]"
        data-name="Overlay+Blur"
      />
      <div
        className="absolute bg-[rgba(143,0,0,0.1)] blur-[32px] bottom-[-40px] sm:bottom-[-60px] md:bottom-[-79.99px] right-[-40px] sm:right-[-60px] md:right-[-80px] rounded-[12px] size-[280px] sm:size-[330px] md:size-[384px]"
        data-name="Overlay+Blur"
      />
      <BackgroundBorderOverlayBlur />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center max-w-full lg:max-w-[1280px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading />
      <Container1 />
      <Container2 />
      <AsymmetricHeroMockup />
    </div>
  );
}

function HeroSection() {
  return (
    <div
      id="home"
      className="relative shrink-0 w-full"
      data-name="Hero Section"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[80px] sm:pb-[100px] md:pb-[128px] pt-[120px] sm:pt-[150px] md:pt-[192px] px-[20px] sm:px-[32px] md:px-[45.5px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[32px] sm:text-[40px] md:text-[48px] text-center tracking-[-1.2px]">
        <p className="leading-[1]">
          <span className="text-[#8f0000]">ARGabay</span>
          <span>{` Features`}</span>
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex flex-col items-center max-w-full md:max-w-[576px] relative shrink-0 px-4"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] sm:text-[15px] md:text-[16px] text-center">
        <p className="leading-[1.5]">
          Designed for museum visitors who want a guided
          experience through every gallery.
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="Container"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Container">
          <path
            d={svgPaths.p215fe480}
            fill="var(--fill-0, #8F0000)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(143,0,0,0.05)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]"
      data-name="Overlay"
    >
      <Container12 />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="h-[112px] relative shrink-0 w-[80px]"
      data-name="Margin"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[32px] relative size-full">
        <Overlay1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] sm:text-[22px] md:text-[24px] text-center">
        <p className="leading-[1.33]">Real-time Navigation</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div
      className="relative shrink-0"
      data-name="Heading 3:margin"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[18.63px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] sm:text-[15px] md:text-[16px] text-center max-w-full">
          <p className="leading-[1.625]">
            Dynamic pathfinding that guides you through every
            turn, floor, and exhibit with precision.
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div
      className="bg-white relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px] shrink-0"
      data-name="Feature 1"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px] sm:rounded-[28px] md:rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[32px] sm:p-[36px] md:p-[41px] relative size-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
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
    <div
      className="h-[28.425px] relative shrink-0 w-[33px]"
      data-name="Container"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 33 28.425"
      >
        <g id="Container">
          <path
            d={svgPaths.p91f1e80}
            fill="var(--fill-0, #8F0000)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(143,0,0,0.05)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]"
      data-name="Overlay"
    >
      <Container14 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="h-[112px] relative shrink-0 w-[80px]"
      data-name="Margin"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[32px] relative size-full">
        <Overlay2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] sm:text-[22px] md:text-[24px] text-center">
        <p className="leading-[1.33] font-bold">
          Voice Guidance
        </p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div
      className="relative shrink-0"
      data-name="Heading 3:margin"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16px] relative size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[8.48px] pr-[8.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] sm:text-[15px] md:text-[16px] text-center">
          <p className="leading-[1.625] mb-0">
            Audio cues that keep you
          </p>
          <p className="leading-[1.625] mb-0">
            moving without needing to stare at your screen
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <div
      className="bg-white relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px] shrink-0"
      data-name="Feature 2"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px] sm:rounded-[28px] md:rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[32px] sm:p-[36px] md:p-[41px] relative size-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
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
    <div
      className="relative shrink-0 size-[30px]"
      data-name="Container"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Container">
          <path
            clipRule="evenodd"
            d={svgPaths.p31ddcc00}
            fill="var(--fill-0, #8F0000)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div
      className="bg-[rgba(143,0,0,0.05)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]"
      data-name="Overlay"
    >
      <Container16 />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="h-[112px] relative shrink-0 w-[80px]"
      data-name="Margin"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[32px] relative size-full">
        <Overlay3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] sm:text-[22px] md:text-[24px] text-center">
        <p className="leading-[1.33] font-bold">AR View</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div
      className="relative shrink-0"
      data-name="Heading 3:margin"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16px] relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[3.04px] pr-[3.06px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] sm:text-[15px] md:text-[16px] text-center max-w-full">
          <p className="leading-[1.625]">
            Identify points of interest simply by pointing your
            device at them.
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature2() {
  return (
    <div
      className="bg-white relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px] shrink-0"
      data-name="Feature 3"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px] sm:rounded-[28px] md:rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[32px] sm:p-[36px] md:p-[41px] relative size-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
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
    <div
      className="gap-[16px] sm:gap-[24px] md:gap-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full"
      data-name="Container"
    >
      <Feature />
      <Feature1 />
      <Feature2 />
    </div>
  );
}

function SectionFeatureHighlightsBentoGrid() {
  return (
    <div
      id="features"
      className="content-stretch flex flex-col gap-[48px] sm:gap-[64px] md:gap-[80px] items-center max-w-full lg:max-w-[1280px] py-[64px] sm:py-[80px] md:py-[96px] px-4 sm:px-6 md:px-8 relative shrink-0 w-full"
      data-name="Section - Feature Highlights (Bento Grid)"
    >
      <Container9 />
      <Container11 />
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f9f9f9] text-[36px] sm:text-[48px] md:text-[60px] tracking-[-1.5px] w-full text-center">
        <p className="leading-[1] mb-0">Ready to start</p>
        <p className="leading-[1]">your journey?</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="content-stretch flex flex-col items-center max-w-full md:max-w-[448px] relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] sm:text-[17px] md:text-[18px] text-[rgba(226,226,226,0.6)] text-center">
        <p className="leading-[1.55]">
          Download the latest ARGabay build and start
          navigating.
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="h-[11.66px] relative shrink-0 w-[20.308px]"
      data-name="Container"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20.3076 11.6601"
      >
        <g id="Container">
          <path
            d={svgPaths.p2a24b2e0}
            fill="var(--fill-0, white)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1v7hVQHISc-BS11Ck2KDgc3MTqVtfYiq-"
      className="bg-[#8f0000] content-stretch flex gap-[12px] items-center justify-center px-[32px] sm:px-[40px] py-[16px] sm:py-[20px] relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shrink-0 min-h-[52px] cursor-pointer hover:bg-[#a00000] transition-colors no-underline"
      data-name="Button"
    >
      <Container22 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] sm:text-[19px] md:text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Download APK</p>
      </div>
    </a>
  );
}

function Container21() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Button1 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] sm:gap-[28px] md:gap-[32px] items-center relative w-full lg:flex-1 lg:min-w-px"
      data-name="Container"
    >
      <Heading5 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[74.625px] left-0 top-0 w-[119.408px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 119.408 74.6362"
      >
        <g id="Group 6">
          <path
            d={svgPaths.p1bda6c00}
            fill="var(--fill-0, #FFEED6)"
            id="Subtract"
          />
          <g id="Subtract_2" />
          <path
            d={svgPaths.p18c0ed00}
            fill="var(--fill-0, #FFEED6)"
            id="Vector 16"
          />
          <path
            d={svgPaths.pe430e00}
            fill="var(--fill-0, #FFEED6)"
            id="Vector 17"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p18ab3900}
            fill="url(#paint0_linear_1_184)"
            fillRule="evenodd"
            id="Vector 18"
          />
          <path
            d={svgPaths.p1b298920}
            id="Vector 20"
            stroke="var(--stroke-0, #8F0000)"
            strokeDasharray="3.74 3.74"
            strokeWidth="0.897062"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_184"
            x1="56.3208"
            x2="63.1819"
            y1="51.5449"
            y2="63.4717"
          >
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
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[74.624px] left-[calc(50%-0.01px)] top-[calc(50%+0.02px)] w-[119.408px]"
      data-name="Logo"
    >
      <Group />
    </div>
  );
}

function ArgabayLogo() {
  return (
    <div
      className="bg-[#8f0000] overflow-clip relative rounded-[16px] sm:rounded-[18px] md:rounded-[20px] shrink-0 size-[140px] sm:size-[160px] md:size-[192px]"
      data-name="Argabay Logo"
    >
      <Logo />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] sm:text-[15px] md:text-[16px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[24px]">ARGabay</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] items-start overflow-clip p-[18px] sm:p-[21px] md:p-[24px] relative rounded-[32px] sm:rounded-[36px] md:rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0"
      data-name="Background+Shadow"
    >
      <div
        className="absolute bg-[rgba(143,0,0,0.05)] inset-0 opacity-0"
        data-name="Overlay"
      />
      <ArgabayLogo />
      <Container24 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex flex-col items-center lg:items-end relative w-full lg:flex-1 lg:min-w-px mt-8 lg:mt-0"
      data-name="Container"
    >
      <BackgroundShadow />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="max-w-full lg:max-w-[1280px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-center max-w-[inherit] size-full gap-8 lg:gap-0">
        <div className="content-stretch flex flex-col lg:flex-row items-center lg:items-center justify-between max-w-[inherit] px-[20px] sm:px-[24px] relative size-full gap-8 lg:gap-0 w-full">
          <Container19 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function DownloadQrSection() {
  return (
    <div
      id="download"
      className="bg-[#1a1c1c] relative shrink-0 w-full"
      data-name="Download & QR Section"
    >
      <div className="content-stretch flex flex-col items-center px-[20px] sm:px-[32px] md:px-[45.5px] py-[64px] sm:py-[80px] md:py-[96px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] sm:text-[27px] md:text-[30px] text-center tracking-[-0.75px]">
        <p className="leading-[1.2] font-bold">
          Installation Guide
        </p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#8f0000] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px] flex-shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[18px] sm:text-[19px] md:text-[20px]">
        <p className="leading-[1.4]">Download the APK</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] sm:text-[15px] md:text-[16px]">
        <p className="leading-[1.5]">
          Tap the download button above to save the ARGabay
          installer to your device.
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1"
      data-name="Container"
    >
      <Heading7 />
      <Container27 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#f3f3f3] relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="content-stretch flex gap-[16px] sm:gap-[20px] md:gap-[24px] items-start p-[20px] sm:p-[26px] md:p-[32px] relative size-full">
        <Background1 />
        <Container26 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#8f0000] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px] flex-shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[18px] sm:text-[19px] md:text-[20px]">
        <p className="leading-[1.4]">Enable Unknown Sources</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] sm:text-[15px] md:text-[16px]">
        <p className="leading-[1.5]">
          <span>{`Go to Settings > Security and enable `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#1a1c1c]">{`"Install unknown apps"`}</span>
          <span>{` for your browser or file manager.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1"
      data-name="Container"
    >
      <Heading8 />
      <Container29 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#f3f3f3] relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="content-stretch flex gap-[16px] sm:gap-[20px] md:gap-[24px] items-start p-[20px] sm:p-[26px] md:p-[32px] relative size-full">
        <Background3 />
        <Container28 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div
      className="bg-[#8f0000] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px] flex-shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[18px] sm:text-[19px] md:text-[20px]">
        <p className="leading-[1.4]">{`Install & Launch`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] sm:text-[15px] md:text-[16px]">
        <p className="leading-[1.5]">
          Open the downloaded file and start exploring the app.
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1"
      data-name="Container"
    >
      <Heading9 />
      <Container31 />
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#f3f3f3] relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="content-stretch flex gap-[16px] sm:gap-[20px] md:gap-[24px] items-start p-[20px] sm:p-[26px] md:p-[32px] relative size-full">
        <Background5 />
        <Container30 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Background />
      <Background2 />
      <Background4 />
    </div>
  );
}

function SectionInstallationGuide() {
  return (
    <div
      id="guide"
      className="content-stretch flex flex-col gap-[48px] sm:gap-[56px] md:gap-[64px] items-center max-w-full lg:max-w-[896px] py-[64px] sm:py-[80px] md:py-[96px] px-4 sm:px-6 md:px-8 relative shrink-0 w-full"
      data-name="Section - Installation Guide"
    >
      <Heading6 />
      <Container25 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8f0000] text-[18px] sm:text-[19px] md:text-[20px] tracking-[0.14px] text-center">
        <p className="leading-[1.4]">ARGabay</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] sm:text-[13.5px] md:text-[14px] text-[rgba(26,28,28,0.7)] tracking-[0.14px]">
        <p className="leading-[1.43]">© 2026 ARGabay.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container34 />
      <Container35 />
    </div>
  );
}

function Link() {
  return <div className="shrink-0" data-name="Link" />;
}

function Link1() {
  return <div className="shrink-0" data-name="Link" />;
}

function Link2() {
  return <div className="shrink-0" data-name="Link" />;
}

function Container36() {
  return (
    <div
      className="hidden md:flex gap-[32px] items-start justify-center relative shrink-0"
      data-name="Container"
    >
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="opacity-80 shrink-0" data-name="Link" />
  );
}

function Link4() {
  return (
    <div className="opacity-80 shrink-0" data-name="Link" />
  );
}

function Container37() {
  return (
    <div
      className="hidden md:flex gap-[15.99px] items-start relative shrink-0"
      data-name="Container"
    >
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between max-w-full lg:max-w-[1280px] relative shrink-0 w-full gap-6 md:gap-0"
      data-name="Container"
    >
      <Container33 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="bg-[#f3f3f3] relative shrink-0 w-full"
      data-name="Footer"
    >
      <div className="content-stretch flex flex-col items-center px-[20px] sm:px-[32px] md:px-[45.5px] py-[36px] sm:py-[42px] md:py-[48px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[19.998px] left-0 top-0 w-[32px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 20.0016"
      >
        <g id="Group 6">
          <path
            d={svgPaths.p37866a00}
            fill="var(--fill-0, #8F0000)"
            id="Subtract"
          />
          <g id="Subtract_2" />
          <path
            d={svgPaths.p163400}
            fill="var(--fill-0, #8F0000)"
            id="Vector 16"
          />
          <path
            d={svgPaths.p39d72d80}
            fill="var(--fill-0, #8F0000)"
            id="Vector 17"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1308b740}
            fill="url(#paint0_linear_1_207)"
            fillRule="evenodd"
            id="Vector 18"
          />
          <path
            d={svgPaths.pad32380}
            id="Vector 20"
            stroke="var(--stroke-0, #FFEED6)"
            strokeDasharray="1 1"
            strokeWidth="0.240403"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_207"
            x1="15.3357"
            x2="16.5377"
            y1="13.713"
            y2="16.2072"
          >
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
    <div
      className="h-[19.998px] relative shrink-0 w-[32px]"
      data-name="Logo"
    >
      <Group1 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f0000] text-[18px] sm:text-[19px] md:text-[20px] tracking-[-1px]">
        <p className="leading-[1.4]">ARGabay</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0"
      data-name="Container"
    >
      <Logo1 />
      <Container40 />
    </div>
  );
}

function Link5() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#8f0000] border-b-2 border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8f0000] text-[14px] sm:text-[15px] md:text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">Home</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(26,28,28,0.6)] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">Features</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(26,28,28,0.6)] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">Download</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(26,28,28,0.6)] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.5]">Guide</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div
      className="content-stretch flex gap-[20px] sm:gap-[26px] md:gap-[32px] items-center relative shrink-0 overflow-x-auto"
      data-name="Container"
    >
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="h-[64px] sm:h-[72px] md:h-[80px] max-w-full lg:max-w-[1536px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col sm:flex-row items-center justify-between max-w-[inherit] pl-[20px] sm:pl-[32px] md:pl-[48px] pr-[20px] sm:pr-[32px] md:pr-[48.02px] relative size-full gap-4 sm:gap-0">
          <Container39 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function NavTopAppBar() {
  return (
    <div
      className="fixed backdrop-blur-[10px] bg-[rgba(249,249,249,0.8)] content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_8px_32px_0px_rgba(26,28,28,0.04)] top-0 z-50"
      data-name="Nav - TopAppBar"
    >
      <Container38 />
    </div>
  );
}

export default function ResponsiveLayout() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative size-full min-h-screen overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(249, 249, 249) 0%, rgb(249, 249, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Html → Body"
    >
      <Navigation />
      <HeroSection />
      <SectionFeatureHighlightsBentoGrid />
      <DownloadQrSection />
      <SectionInstallationGuide />
      <Footer />
    </div>
  );
}