import Image from "next/image";
import React from "react";
import ClientDashWrapper from "../service/ClientDashWrapper";
import SVG from "react-inlinesvg";  

const HowWeWork = () => {
  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="w-full md:w-[50%] flex items-center md:ml-5 order-2 md:order-1">
            <div className="flex flex-col self-stretch my-auto text-secondaryColor">
              <h2 className="main-heading text-center md:text-left">
                <span className="text-mainColor">How </span>
                We{" "}
                <span className="relative inline-block">
                  Work
                  <SVG
                    src="/assets/images/aboutUs/vector.svg"
                    className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
                    alt="underline element vector"
                    width={50}
                    height={30}
                  />
                </span>
              </h2>
              <p className="main-paragraph text-center md:text-left">
                Our workplace culture is built around the notion of empowering
                employees to do their best work. From benefits and perks, to
                remote-friendly hiring, to enrichment and learning programs, and
                more, our community is equipped to help restaurants thrive.
              </p>
            </div>
          </div>
          <div className="relative order-2 md:order-2 w-full md:w-[45%] lg:w-[40%]">
            <div className="relative">
              <Image
                src="/assets/images/aboutUs/howWeWork.svg"
                alt="Feature illustration"
                className="object-contain self-stretch my-auto w-full"
                width={100}
                height={100}
              />
              <ClientDashWrapper className="absolute z-0 w-[35px] sm:w-[45px] lg:w-[55px] h-auto aspect-[0.92] -top-7 -right-[5%] transform translate-x-0 translate-y-0 pointer-events-none rotate-180"></ClientDashWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
