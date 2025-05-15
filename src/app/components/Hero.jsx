"use client";
import React from "react";
import Image from "next/image";
import RotatingGradientCircle from "./RotatingGradientCircle";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1645);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="flex relative flex-col x-spacing pt-18 md:pt-36 lg:pt-40 mb-0 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col mt-6 md:mt-8 lg:mt-11 w-full text-gray-900">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-sky-600">Designing</span> the Future of{" "}
              <span className="text-sky-600">Point</span> of Sale & Restaurant
              Management <span className="relative inline-block">Systems
              <Image
                src="/svgs/hero-vector.svg"
                className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px]"
                alt="underline element vector"
                width={50}
                height={30}
              />
              </span>
            </h1>
            <p className="mt-4 md:mt-6 lg:mt-8 mr-4 md:mr-8 lg:mr-11 text-lg md:text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              placerat eget est sed fringilla. Etiam vestibulum ex non elit
              blandit commodo. Vestibulum sodales neque erat, a porta diam
              aliquet vel. Ut
            </p>
            
            <div className="flex w-[300px] md:w-full md:flex-row relative gap-[12.4px] md:gap-5 lg:gap-6 items-center mt-6 md:mt-8 lg:mt-11 text-xl md:text-2xl lg:text-3xl text-sky-600">
              <button
                role="button"
                className="w-full md:w-60 lg:w-80 py-4 md:py-6 lg:py-8 rounded-3xl border-solid hover:bg-sky-600 hover:text-white transition-colors border-[1.85px] border-sky-600"
              >
                Get Demo
              </button>
              <button className="w-full md:w-60 lg:w-80 py-4 md:py-6 lg:py-8 rounded-3xl hover:bg-sky-600 hover:text-white transition-colors border-sky-600 border-solid border-[1.85px]">
                Subscribe
              </button>
              <Image
                src="/svgs/click-here-hero.svg"
                // className="object-contain absolute z-0 shrink-0 self-start rounded-none aspect-[0.92] bottom-[-42PX] h-[90px] right-[182px] w-[83px]"
                className="absolute -bottom-8 -right-4 md:-right-6 lg:right-30 w-[60px] md:w-[70px] lg:w-[83px] h-auto aspect-[0.92]"
                alt="cursor click"
                width={83}
                height={90}
              />
            </div>
          </div>
        </div>
        {isLargeScreen && <RotatingGradientCircle />}
        <div className="w-full md:w-[50%] md:ml-5 relative md:mt-0">
          <Image
            src="/svgs/hero-right.svg"
            className="object-contain grow w-full aspect-[1.22] relative z-10"
            alt="Hero illustration"
            width={500}
            height={300}
          />
          <Image
            src="/svgs/dashes.svg"
            // className="object-contain absolute z-0 shrink-0 self-start rounded-none aspect-[0.92] bottom-[62px] h-[90px] right-[837PX] w-[83px]"
            className="absolute z-0 w-[60px] md:w-[60px] lg:w-[75px] h-auto aspect-[0.92] bottom-[3%] md:bottom-[55%] lg:bottom-[10%] -left-[10%] md:-left-[10%] lg:-left-[5%]"
            alt="Decorative element"
            width={83}
            height={90}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
