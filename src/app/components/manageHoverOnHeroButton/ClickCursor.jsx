import React from "react";

const ClickCursor = ({ fillColor = "#018ED5", strokeColor = "white" }) => {
  return (
    <svg className="w-[60px] md:w-[70px] lg:w-[83px] h-auto aspect-[0.92]" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_508_7709)">
        <path d="M11.773 8.93893C11.2862 6.61243 13.7768 4.80294 15.839 5.98482L30.0563 14.133C32.1473 15.3313 31.8 18.4472 29.4965 19.1558L23.8872 20.8813C23.2696 21.0713 22.7385 21.4723 22.3866 22.0143L20.0673 25.5872C18.7286 27.6493 15.564 27.0579 15.0605 24.6514L11.773 8.93893Z" fill={fillColor}/>
        <path d="M12.0448 8.88221C11.6207 6.85521 13.7093 5.26407 15.5264 6.13299L15.7012 6.22569L29.9184 14.3733C31.7402 15.4174 31.5042 18.0806 29.6041 18.8253L29.4154 18.8912L23.8055 20.6168C23.211 20.7997 22.689 21.1599 22.3085 21.6465L22.1546 21.8634L19.8352 25.4364C18.6688 27.2331 15.9613 26.7897 15.3816 24.7925L15.3319 24.5945L12.0448 8.88221Z" stroke={strokeColor} strokeWidth="0.554369"/>
      </g>
      <defs>
        <filter id="filter0_d_508_7709" x="0.692355" y="0.103014" width="41.7676" height="43.2686" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5.50929"/>
          <feGaussianBlur stdDeviation="5.50929"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_508_7709"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_508_7709" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

export default ClickCursor;