import Image from "next/image";
import React from "react";
import CidaCircleAnimation from "./CidaCircleAnimation";
import SVG from "react-inlinesvg";

const CidaCircle = () => {
  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="relative order-2 md:order-1 w-full md:w-[45%] lg:w-[40%]">
            <CidaCircleAnimation />
          </div>

          <div className="w-full md:w-[50%] flex items-center md:ml-5 order-2 md:order-2">
            <div className="flex flex-col self-stretch my-auto text-secondaryColor">
            <h2 className="main-heading text-center md:text-left">
                  {(() => {
                    const text = "SIDA is the leader in Restaurant Enterprise Management";
                    const words = text.split(" ");
                    return words.map((word, index) => {
                      if (index === words.length - 1) {
                        return (
                          <span key={index} className={`relative inline-block ${index % 2 === 0 ? 'text-mainColor' : ''}`}>
                            {word}
                            <SVG
                              src="/assets/images/home/svgs/hero-vector.svg"
                              className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px] svg-main-color"
                              alt="underline element vector"
                              width={50}
                              height={30}
                            />
                          </span>
                        );
                      }
                      return (
                        <span key={index} className={index % 2 === 0 ? 'text-mainColor' : 'text-secondaryColor'}>
                          {word}{' '}
                        </span>
                      );
                    });
                  })()}
            </h2>
              {/* <h2 className="main-heading text-center md:text-left">
                <span className="text-mainColor">SIDA </span>
                is the leader in{" "}
                <span className="text-mainColor">Restaurant </span>
                Enterprise{" "}
                <span className="relative inline-block">
                  Management.
                  <SVG
                    src="/assets/images/aboutUs/vector.svg"
                    className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
                    alt="underline element vector"
                    width={50}
                    height={30}
                  />
                </span>
              </h2> */}
              <p className="main-paragraph text-center md:text-left">
                We are transforming the industry for restaurant concepts
                nationwide. SDA pioneered the Restaurant Enterprise Management
                (REM) category, when we brought key financial, operational and
                team-based processes together into a single, cloud-based
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CidaCircle;
