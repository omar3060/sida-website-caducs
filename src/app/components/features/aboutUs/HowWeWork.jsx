import Image from "next/image";
import React from "react";
import ClientDashWrapper from "../service/ClientDashWrapper";
import SVG from "react-inlinesvg";  
import { howWeWorkData } from "@/data/aboutusData";

const HowWeWork = async ({ locale }) => {
  const { arabic, english, images } = await howWeWorkData();
  const isArabic = locale === "ar";
  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="w-full md:w-[50%] flex items-center md:ml-5 order-2 md:order-1">
            <div className="flex flex-col self-stretch my-auto text-secondaryColor">
            <h2 className={`main-heading text-center ${isArabic ? "text-right" : "text-left"}`}>
                {(() => {
                  const text = isArabic
                    ? arabic.title
                    : english.title;
                  const words = text.split(" ");
                  return words.map((word, index) => {
                    if (index === words.length - 2) {
                      return (
                        <span
                          key={index}
                          className={`relative inline-block ${
                            index % 2 === 0 ? "text-mainColor" : ""
                          }`}
                        >
                          {word}
                          <SVG
                            src="/assets/images/home/svgs/hero-vector.svg"
                            className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
                            alt="underline element vector"
                            width={50}
                            height={30}
                          />
                        </span>
                      );
                    }
                    return (
                      <span
                        key={index}
                        className={
                          index % 2 === 0
                            ? "text-mainColor"
                            : "text-secondaryColor"
                        }
                      >
                        {" "}{word}{" "}
                      </span>
                    );
                  });
                })()}
              </h2>
              <p className={`main-paragraph mr-0 md:mr-0 lg:mr-0 text-center ${isArabic ? "text-right" : "text-left"}`}>
                {isArabic ? arabic.content : english.content}
              </p>
            </div>
          </div>
          <div className="relative order-2 md:order-2 w-full md:w-[45%] lg:w-[40%]">
            <div className="relative w-full aspect-square">
              <Image
                src={images[0].secure_url}
                alt="Feature illustration"
                fill={true}
                className="object-contain self-stretch my-auto w-full"
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
