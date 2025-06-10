import Image from "next/image";
import React from "react";
import SVG from "react-inlinesvg";

const Features = () => {
  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative order-2 md:order-1 w-full md:w-[50%]">
            <Image
              src="/assets/images/home/svgs/comined.svg"
              alt="restaurant software features"
              className="object-contain my-auto w-full"
              width={100}
              height={100}
            />
            <SVG
              src="/assets/images/home/svgs/featuresTables/firstTableVector.svg"
              alt="restaurant software features"
              className="object-contain absolute svg-main-color 
                w-[80px] sm:w-[100px] md:w-[120px] lg:w-[131.75px] 
                h-[80px] sm:h-[100px] md:h-[120px] lg:h-[131.75px] 
                bottom-[10px] sm:bottom-[15px] md:bottom-[20px]
                left-[30px] sm:left-[40px] md:left-[50px] lg:left-[60px]
                z-[-1]"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full md:w-[50%] md:ml-5 order-1 md:order-2">
            <div className="flex flex-col self-stretch my-auto text-secondaryColor">
              <h2 className="main-heading text-center md:text-left">
                <span className="text-mainColor">Restaurant</span> Software to{" "}
                <span className="text-mainColor">Power</span> Your Passion,
                Profit, and{" "}
                <span className="relative inline-block">
                  Growth
                  <SVG
                    src="/assets/images/home/svgs/features-vector.svg"
                    className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
                    alt="underline element vector"
                    width={50}
                    height={30}
                  />
                </span>
              </h2>
              <p className="main-paragraph text-center md:text-left">
                Trusted by more than 40,000 restaurants, Restaurant365's
                back-office software brings together your accounting, inventory,
                workforce management, and payroll to create incredible moments
                that drive profit and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
