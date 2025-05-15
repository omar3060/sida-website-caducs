"use client";
import { motion } from "framer-motion";
import React from "react";

const RotatingGradientCircle = () => {
  return (
    <div className="absolute overflow-hidden w-[900px] h-[1000px] top-0 right-0 ">
      <motion.div
        className="w-[2600px] h-[2600px] rounded-full absolute top-[-1580px] left-[-38px]"
        style={{
          background: 'conic-gradient(from 0deg, #01537c, #3b82f6, #01537c)',
          WebkitMask: 'radial-gradient(transparent 40%, black 40%)',
          mask: 'radial-gradient(transparent 40%, black 40%)',
        }}
        animate={{
          rotate: 360,
          y: [0, 5, 0, -5, 0],
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </div>
  );
};

export default RotatingGradientCircle;
