"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Top left vector - First appears in Phase 2 */}
      <motion.div
        className="absolute top-0 left-[20px]"
        initial={{ x: -50, y: -50, scale: 0.3, opacity: 0 }}
        animate={{
          x: ["50px", "0px", "-40px", "1420px", "1420px"],
          y: ["-150px", "-30px", "-30px", "20px", "20px"],
          scale: [0.3, 0.7, 0.7, 1, 20],
          opacity: [1, 1, 1, 1, 1],
        }}
        transition={{
          duration: 8,
          times: [0, 0.2, 0.3, 0.6, 0.8],
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <Image
          src="/assets/images/help/animation/firstVector.svg"
          alt="Vector animation"
          width={473}
          height={496}
          priority
        />
      </motion.div>

      {/* Top right vector - Appears in Phase 3 */}
      <motion.div
        className="absolute top-0 right-0"
        initial={{ x: 50, y: -50, scale: 0.3, opacity: 0 }}
        animate={{
          x: ["200px", "200px", "-1350px", "-1350px"],
          y: ["-180px", "-180px", "-20px", "-500px"],
          scale: [0, 0.6, 1, 0],
          opacity: [1, 1, 1, 1],
        }}
        transition={{
          duration: 8,
          times: [0, 0.3, 0.4, 0.9],
          repeat: Infinity,
          delay: 1.5,
        }}
      >
        <Image
          src="/assets/images/help/animation/secondVector.svg"
          alt="Vector animation"
          width={473}
          height={496}
          priority
        />
      </motion.div>

      {/* Bottom left vector - Appears in Phase 3, moves to bottom right in Phase 4 */}
      <motion.div
        className="absolute bottom-0 left-0"
        initial={{ x: 50, y: 0, scale: 0, opacity: 0 }}
        animate={{
          x: ["100px", "100px", "1420px", "1420px"],
          y: ["250px", "0px", "0px", "250px"],
          scale: [1, 1, 1, 1],
          opacity: [1, 1, 1, 1],
        }}
        transition={{
          duration: 8,
          times: [0.2, 0.25, 0.5, 0.55],
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Image
          src="/assets/images/help/animation/thirdVector.svg"
          alt="Vector animation"
          width={473}
          height={496}
          priority
        />
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
