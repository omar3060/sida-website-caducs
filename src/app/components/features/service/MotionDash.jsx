"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SVG from "react-inlinesvg";

const MotionDash = ({ className }) => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={dashAnimation}
      className={className}
    >
      <SVG
        src="/assets/images/home/svgs/dashes.svg"
        alt="Decorative dashes"
        width={83}
        height={90}
        className="w-full h-full svg-main-color"
      />
    </motion.div>
  );
};

export default MotionDash;