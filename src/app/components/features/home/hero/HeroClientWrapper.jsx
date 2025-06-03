"use client";
import React from "react";
import { motion } from "framer-motion";

import ClickDashes from "./manageHoverOnHeroButton/ClickDashes";
import ClickCursor from "./manageHoverOnHeroButton/ClickCursor";
import SVG from "react-inlinesvg";

const dashAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const HeroClientWrapper = ({  isDashes }) => {


  if (isDashes) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={dashAnimation}
        className="absolute z-0 w-[50px] sm:w-[60px] lg:w-[75px] h-auto aspect-[0.92] bottom-[9%] left-[-6%] transform translate-x-0 translate-y-0 pointer-events-none"
      >
        <SVG
          src="/assets/images/home/svgs/dashes.svg"
          alt="Decorative element"
          className="w-full h-full svg-main-color"
        />
      </motion.div>
    );
  }

  return (
    <div className="relative flex-1 group">
      <button className="primary-button w-full">Subscribe</button>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={dashAnimation}
        className="absolute bottom-[5px] right-[15px] pointer-events-none group-hover:block"
      >
        <ClickDashes fillColor="white" />
      </motion.div>
      <div className="absolute bottom-[-40px] md:bottom-[-45px] right-[-20px] pointer-events-none group-hover:block">
        <ClickCursor fillColor="var(--fill-color)" strokeColor="white" />
      </div>
    </div>
  );
};

export default HeroClientWrapper;
