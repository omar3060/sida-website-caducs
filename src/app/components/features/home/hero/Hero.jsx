import React from "react";
import Image from "next/image";
import HeroClientWrapper from "./HeroClientWrapper";
import RotatingGradientCircle from "./RotatingGradientCircle";
import SVG from "react-inlinesvg";

const Hero = () => {
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
                <SVG
                  src="/assets/images/home/svgs/hero-vector.svg"
                  className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px] svg-main-color"
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
              <HeroClientWrapper />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <RotatingGradientCircle />
        </div>
        <div className="w-full md:w-[50%] md:ml-5 relative md:mt-0">
          <div className="relative">
            <Image
              src="/assets/images/home/svgs/hero-right.svg"
              className="object-contain grow w-full aspect-[1.22] relative z-10"
              alt="Hero illustration"
              width={500}
              height={300}
            />
            <HeroClientWrapper isDashes />
          </div>
          <div className="absolute right-[-32px] md:left-[-12px] bottom-[-100px] sm:bottom-[-50px] md:bottom-[-150px] lg:hidden block overflow-hidden -z-10">
            <SVG
              src="/assets/images/home/svgs/halfCircleLeft.svg"
              className="w-[250px] sm:w-[300px] md:w-[550px] svg-gradient overflow-hidden"
              alt="Half circle illustration"
              width={365}
              height={779}
              preserveAspectRatio="xMidYMin meet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
