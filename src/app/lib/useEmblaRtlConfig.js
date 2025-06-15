"use client";

import { useLocale } from "next-intl";

/**
 * A custom hook that provides proper RTL configuration for Embla Carousel
 * @param {Object} options - The base Embla Carousel options
 * @returns {Object} - The modified options with proper RTL support
 */
export function useEmblaRtlConfig(options = {}) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return {
    ...options,
    direction: isRtl ? "rtl" : "ltr",
  };
} 