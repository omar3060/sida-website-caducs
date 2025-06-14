"use client";
import { motion } from "framer-motion";
import React from "react";
import { useLocale } from "next-intl";

const RotatingGradientCircle = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className={`absolute overflow-hidden w-[900px] h-[1000px] top-0 ${isArabic ? 'left-0' : 'right-0'}`}>
      <motion.div
        className="rounded-full absolute"
        style={{
          background: 'conic-gradient(from 0deg, var(--color-lightBlue), var(--color-mainColor), var(--color-lightBlue))',
          WebkitMask: 'radial-gradient(transparent 40%, black 40%)',
          mask: 'radial-gradient(transparent 50%, black 50%)',
          width: 'min(2600px, calc(1600px + 50vw))',
          height: 'min(2600px, calc(1600px + 40vw))',
          top: 'min(1580px, calc(-950px - 30vw))',
          left: isArabic ? "auto" : "min(230px, calc(900px - 2vw))",
          right: isArabic ? "min(230px, calc(900px - 2vw))" : "auto",
        }}
        animate={{
          rotate: 360,
          y: [0, 3, 0],
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
};

export default RotatingGradientCircle;
