"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CidaCircleAnimation = () => {
  const [moveDistance, setMoveDistance] = useState({
    topLeft: 160,
    bottomRight: 160,
    topRight: 145,
    bottomLeft: 140,
  });

  // Update movement distances based on screen size
  useEffect(() => {
    const updateMoveDistances = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setMoveDistance({
          topLeft: 85,
          bottomRight: 90,
          topRight: 85,
          bottomLeft: 80,
        });
      } else if (width < 992) {
        // sm
        setMoveDistance({
          topLeft: 100,
          bottomRight: 110,
          topRight: 90,
          bottomLeft: 85,
        });
      } else if (width >= 992 && width <= 1080) {
        // between md and lg (problematic range)
        setMoveDistance({
          topLeft: 120,
          bottomRight: 130,
          topRight: 115,
          bottomLeft: 110,
        });
      } else {
        // larger screens
        setMoveDistance({
          topLeft: 160,
          bottomRight: 170,
          topRight: 145,
          bottomLeft: 140,
        });
      }
    };

    // Initial call
    updateMoveDistances();

    // Add event listener
    window.addEventListener("resize", updateMoveDistances);

    // Cleanup
    return () => window.removeEventListener("resize", updateMoveDistances);
  }, []);

  return (
    <div className="relative w-full aspect-square overflow-hidden">
      {/* Small SIDA circle that fades away to right */}
      <motion.div
        className="absolute inset-0 m-auto w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[160px] md:h-[160px] xl:w-[273px] xl:h-[273px] z-27"
        initial={{ opacity: 1, x: 0 }}
        animate={{
          opacity: [1, 0, 0, 0, 0, 1],
          x: [0, 200, 0, 0, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.05, 0.1, 0.7, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/assets/images/aboutUs/animation/SmallCircle.svg"
          alt="Small SIDA Circle"
          width={100}
          height={100}
          className="object-contain w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[160px] md:h-[160px] xl:w-[273px] xl:h-[273px]"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 0, 0, 0, 1] }}
          transition={{
            duration: 10,
            times: [0, 0.05, 0.1, 0.7, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <Image
            src="/assets/images/aboutUs/animation/SIDAText.svg"
            alt="SIDA Logo"
            width={200}
            height={80}
            className="object-contain w-[80px] h-[30px] sm:w-[100px] sm:h-[40px] md:w-[100px] md:h-[60px] xl:w-[200px] xl:h-[80px]"
          />
        </motion.div>
      </motion.div>

      {/* Main image that appears after small SIDA circle fades away */}
      <motion.div
        className="absolute inset-0 m-auto w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[160px] md:h-[160px] xl:w-[273px] xl:h-[273px] z-25"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [1, 1, 1, 0, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.1, 0.5, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/assets/images/aboutUs/animation/mainImage.svg"
          alt="Main Circle"
          width={100}
          height={100}
          className="object-contain w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[160px] md:h-[160px] xl:w-[273px] xl:h-[273px]"
        />
      </motion.div>

      {/* Image 1 - Top Left (First pair) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] xl:w-[154px] xl:h-[154px] z-20"
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, -moveDistance.topLeft, -moveDistance.topLeft, 0, 0, 0],
          y: [0, -moveDistance.topLeft, -moveDistance.topLeft, 0, 0, 0],
          opacity: [0, 1, 1, 0, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0.2, 0.25, 0.5, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/assets/images/aboutUs/animation/image1.svg"
          alt="Top Left Image"
          width={100}
          height={100}
          className="object-contain rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] xl:w-[154px] xl:h-[154px]"
        />
      </motion.div>

      {/* Image 2 - Bottom Right (First pair) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[110px] md:h-[110px] xl:w-[184px] xl:h-[184px] z-20"
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, moveDistance.bottomRight, moveDistance.bottomRight, 0, 0, 0],
          y: [0, moveDistance.bottomRight, moveDistance.bottomRight, 0, 0, 0],
          opacity: [0, 1, 1, 0, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0.2, 0.25, 0.5, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/assets/images/aboutUs/animation/image2.svg"
          alt="Bottom Right Image"
          width={100}
          height={100}
          className="object-contain rounded-full w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[110px] md:h-[110px] xl:w-[184px] xl:h-[184px]"
        />
      </motion.div>

      {/* Image 3 - Top Right (Second pair) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] md:w-[90px] md:h-[90px] xl:w-[121px] xl:h-[121px] z-20"
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, moveDistance.topRight, moveDistance.topRight, 0, 0, 0],
          y: [0, -moveDistance.topRight, -moveDistance.topRight, 0, 0, 0],
          opacity: [0, 1, 1, 0, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0.3, 0.35, 0.5, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/assets/images/aboutUs/animation/image3.svg"
          alt="Top Right Image"
          width={100}
          height={100}
          className="object-contain rounded-full w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] md:w-[90px] md:h-[90px] xl:w-[121px] xl:h-[121px]"
        />
      </motion.div>

      {/* Image 4 - Bottom Left (Second pair) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px] xl:w-[103px] xl:h-[103px] z-20"
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          x: [0, -moveDistance.bottomLeft, -moveDistance.bottomLeft, 0, 0, 0],
          y: [0, moveDistance.bottomLeft, moveDistance.bottomLeft, 0, 0, 0],
          opacity: [0, 1, 1, 0, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0.3, 0.35, 0.5, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/assets/images/aboutUs/animation/image4.svg"
          alt="Bottom Left Image"
          width={100}
          height={100}
          className="object-contain rounded-full w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px] xl:w-[103px] xl:h-[103px]"
        />
      </motion.div>

      {/* Big circle that comes from the right */}
      <motion.div
        className="absolute inset-0 m-auto md:w-[300px] md:h-[300px] xl:w-[537px] xl:h-[537px] z-30 w-full h-full"
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: ["50%", "0%", "0%", "0%"],
          opacity: [0, 1, 1, 1],
          scale: [1, 1, 0.5, 0.5],
        }}
        transition={{
          duration: 10,
          times: [0.5, 0.6, 0.65, 0.7],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/assets/images/aboutUs/animation/bigCircle.svg"
            alt="Big Circle"
            width={300}
            height={300}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </motion.div>

      {/* SIDA Text that comes into the big circle */}
      <motion.div
        className="absolute inset-0 m-auto flex items-center justify-center z-40"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1],
          scale: [2, 1, 1, 1],
        }}
        transition={{
          duration: 10,
          times: [0.6, 0.65, 0.85, 0.9],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/assets/images/aboutUs/animation/SIDAText.svg"
          alt="SIDA Logo"
          width={100}
          height={100}
          className="object-contain md:w-[100px] md:h-[60px] xl:w-[200px] xl:h-[80px]"
        />
      </motion.div>
    </div>
  );
};

export default CidaCircleAnimation;
