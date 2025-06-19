"use client";

import React, { useCallback, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import SVG from "react-inlinesvg";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const oppositeLocale = locale === "en" ? "ar" : "en";

  const handleToggleLanguage = useCallback(() => {
    localStorage.setItem("scrollPosition", window.scrollY.toString());

    const newPath = `/${oppositeLocale}${pathname}`;

    try {
      router.replace(newPath, { scroll: false });
    } catch (error) {
      console.error("Error navigating to new path:", error);
    }
  }, [oppositeLocale, router, pathname]);

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      localStorage.removeItem("scrollPosition");
    }
  }, []);

  return (
    <button
      onClick={handleToggleLanguage}
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
      className="cursor-pointer flex items-center justify-center relative"
      
    >
      <SVG
        src="/assets/images/home/svgs/global-icon-svg.svg"
        width={40}
        height={40}
        alt="Language Selector Icon"
        className="p-1 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px] svg-main-color flex-shrink-0"
      />
      <span className="absolute -top-1 -right-1 bg-mainColor text-textWhite text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {locale === "en" ? "ع" : "E"}
      </span>
    </button>
  );
}
