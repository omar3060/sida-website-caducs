import Image from "next/image";
import React from "react";
import CidaCircleAnimation from "./CidaCircleAnimation";
import SVG from "react-inlinesvg";
import { cidaCircleData } from "@/data/aboutusData";

const CidaCircle = async ({ locale }) => {
  const { arabic, english, images } = await cidaCircleData();
  const isArabic = locale === "ar";
  
  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="relative order-2 md:order-1 w-full md:w-[45%] lg:w-[40%]">
            <CidaCircleAnimation />
          </div>

          <div className="w-full md:w-[50%] flex items-center md:ml-5 order-2 md:order-2">
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
        </div>
      </div>
    </section>
  );
};

export default CidaCircle;
