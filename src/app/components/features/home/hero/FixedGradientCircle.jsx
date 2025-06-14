"use client";
import React from "react";
import SVG from "react-inlinesvg";
import { useLocale } from "next-intl";
const FixedGradientCircle = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className={`absolute ${!isArabic ? 'right-[-32px] md:left-10' : 'left-[-32px] md:left-[-52px] rotate-180'} bottom-[-100px] sm:bottom-[-50px] md:bottom-[-150px] lg:hidden block overflow-hidden -z-10`}>
      <SVG
        src="/assets/images/home/svgs/halfCircleLeft.svg"
        className={`w-[250px] ${!isArabic ? 'md:w-[550px]' : 'md:w-[300px]'} sm:w-[300px] svg-gradient overflow-hidden`}
        alt="Half circle illustration"
        width={365}
        height={779}
        preserveAspectRatio="xMidYMin meet"
      />
    </div>
  );
};

export default FixedGradientCircle;
