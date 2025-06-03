import Image from "next/image";
import React from "react";
import SVG from "react-inlinesvg";

const Features = () => {
  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-[50%] order-2 md:order-1">
            <Image
              src="/assets/images/home/svgs/comined.svg"
              className="object-contain w-full rounded-[24px] md:rounded-[34px] lg:rounded-[44px]"
              width={1000}
              height={300}
              alt="restaurant software features"
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
