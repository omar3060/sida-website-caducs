"use client";
import React from 'react'
import SVG from "react-inlinesvg";
import { useLocale } from "next-intl";

const FixedGradientCircleLeft = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className={`absolute ${isArabic ? 'right-[-32px] rotate-180  ' : 'left-[-32px]'} ${isArabic ? 'md:right-[-383px]' : 'md:left-[-383px]'} -bottom-10 sm:-bottom-20 md:top-[294px] lg:hidden block overflow-hidden -z-10`}>
        <SVG
          src="/assets/images/home/svgs/halfCircleRight.svg"
          className="w-[200px] sm:w-[250px] md:w-[1000px] svg-gradient"
          alt="Circle illustration"
          width={204}
          height={414}
          preserveAspectRatio="xMidYMin meet"
        />
      </div>
  )
}

export default FixedGradientCircleLeft