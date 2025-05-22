"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
const MoreFeaturesServices = () => {
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
    <section className="section-style x-spacing text-center pt-2 md:pt-6 lg:pt-8">
      <div className="flex flex-wrap gap-10 items-center mt-20 text-secondaryColor max-md:max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px]">
            <h2 className="main-heading self-center text-mainColor text-center">
              CRM <span className="text-secondaryColor">(Customer</span>{" "}
              Relationship
              <span className="text-secondaryColor relative inline-block">
                Manager​)
                <Image
                  src="/assets/images/home/svgs/partners/partners-vector.svg"
                  className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px]"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>
            </h2>
            <p className="main-paragraph">
              Collect your customers’ data and easily edit information or add
              more than one address. Get insight on their purchases and tailor
              your menu based on their preferences and purchasing habits.
            </p>
          </article>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <div className="relative">
              <Image
                src="/assets/images/service/moreFeature1.svg"
                alt="Feature illustration"
                className="object-contain self-stretch my-auto w-full"
                width={100}
                height={100}
              />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={dashAnimation}
                className="absolute z-0 w-[50px] sm:w-[60px] lg:w-[85px] h-auto aspect-[0.92] -bottom-10 left-[-7%] transform translate-x-0 translate-y-0 pointer-events-none"
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
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 items-center mt-10 text-mainColor max-md:max-w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px] order-1 md:order-2">
            <h2 className="main-heading self-start">
              Menu{" "}
              <span className="text-secondaryColor">
                Engineering
                <Image
                  src="/assets/images/home/svgs/partners/partners-vector.svg"
                  className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px] justify-self-end"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>
            </h2>
            <p className="main-paragraph text-secondaryColor">
              Get a full scale analysis of your menu based on each menu item’s
              performance. Keep track of your menu’s profitability, sales,
              popularity, profit and much more. With this kind of information,
              you will be able to adapt your inventory strategy, menu, and
              promotions to increase efficiency.
            </p>
          </article>
          <div className="relative order-2 md:order-1 w-full md:w-[45%] lg:w-[40%]">
            <Image
              src="/assets/images/service/moreFeature2.svg"
              alt="Feature illustration"
              className="object-contain self-stretch my-auto w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeaturesServices;
