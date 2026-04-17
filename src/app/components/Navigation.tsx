import svgPaths from "../../imports/svg-wgpjhh2uyk";

export default function Navigation() {

  function Logo1() {
    return (
      <div className="h-[19.998px] relative shrink-0 w-[32px]" data-name="Logo">
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
      </div>
    );
  }

  return (
    <div className="fixed backdrop-blur-[10px] bg-[rgba(249,249,249,0.8)] left-0 right-0 shadow-[0px_8px_32px_0px_rgba(26,28,28,0.04)] top-0 z-50" data-name="Nav - TopAppBar">
      <div className="h-[64px] sm:h-[72px] md:h-[80px] max-w-full lg:max-w-[1536px] mx-auto relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center max-w-[inherit] pl-[20px] sm:pl-[32px] md:pl-[48px] pr-[20px] sm:pr-[32px] md:pr-[48.02px] relative size-full w-full">
            {/* Logo */}
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <Logo1 />
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f0000] text-[18px] sm:text-[19px] md:text-[20px] tracking-[-1px]">
                <p className="leading-[1.4]">ARGabay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
