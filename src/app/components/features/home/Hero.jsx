"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RotatingGradientCircle from "./RotatingGradientCircle";
import ClickDashes from "./manageHoverOnHeroButton/ClickDashes";
import ClickCursor from "./manageHoverOnHeroButton/ClickCursor";


const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSubscribeHovered, setIsSubscribeHovered] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 992);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
    <section className="section-style relative x-spacing pt-18 md:pt-36 lg:pt-40 mb-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col mt-6 md:mt-8 lg:mt-11 w-full text-secondaryColor">
            <h1 className="main-heading">
              <span className="text-mainColor">Designing</span> the Future of{" "}
              <span className="text-mainColor">Point</span> of Sale & Restaurant
              Management{" "}
              <span className="relative inline-block">
                Systems
                <Image
                  src="/assets/images/home/svgs/hero-vector.svg"
                  className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px]"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>
            </h1>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              placerat eget est sed fringilla. Etiam vestibulum ex non elit
              blandit commodo. Vestibulum sodales neque erat, a porta diam
              aliquet vel. Ut
            </p>

            <div className="buttons-container md:w-[80%]">
              <button role="button" className="primary-button flex-1">
                Get Demo
              </button>
              <div className="relative flex-1">
                <button
                  className="primary-button w-full group"
                  onMouseEnter={() => setIsSubscribeHovered(true)}
                  onMouseLeave={() => setIsSubscribeHovered(false)}
                >
                  Subscribe
                </button>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={dashAnimation}
                  className="absolute bottom-[5px] right-[15px] pointer-events-none"
                >
                  <ClickDashes
                    fillColor={isSubscribeHovered ? "#FFFFFF" : "#018ED5"}
                  />
                </motion.div>
                <div className="absolute bottom-[-40px] md:bottom-[-45px] right-[-20px] pointer-events-none">
                  <ClickCursor
                    fillColor={isSubscribeHovered ? "#FFFFFF" : "#018ED5"}
                    strokeColor={isSubscribeHovered ? "#018ED5" : "white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isLargeScreen && <RotatingGradientCircle />}
        <div className="w-full md:w-[50%] md:ml-5 relative md:mt-0">
          <div className="relative">
            <Image
              src="/assets/images/home/svgs/hero-right.svg"
              className="object-contain grow w-full aspect-[1.22] relative z-10"
              alt="Hero illustration"
              width={500}
              height={300}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={dashAnimation}
              className="absolute z-0 w-[50px] sm:w-[60px] lg:w-[75px] h-auto aspect-[0.92] bottom-[9%] left-[-6%] transform translate-x-0 translate-y-0 pointer-events-none"
            >
              <Image
                src="/assets/images/home/svgs/dashes.svg"
                alt="Decorative element"
                width={83}
                height={90}
                className="w-full h-full"
              />
            </motion.div>
          </div>
          <Image
            src="/assets/images/home/svgs/halfCircleLeft.svg"
            className="absolute w-[250px] sm:w-[300px] right-[-32px] sm:right-[-32px] bottom-0 sm:bottom-50  md:w-[1000px] md:top-[-115px] lg:hidden block overflow-hidden -z-10"
            alt="Hero illustration"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
