import Image from "next/image";
import React from "react";
import SVG from "react-inlinesvg";
import { heroData } from "@/data/aboutusData";

const AboutUsHero = async ({ locale }) => {
  const isArabic = locale === "ar";
  const data = await heroData();

  // Safety check to ensure data is available
  if (!data || !data.arabic || !data.english) {
    return <div>Loading...</div>;
  }

  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="w-full md:w-[50%] flex items-center md:ml-5 order-2 md:order-1">
            <div className="flex flex-col self-stretch my-auto text-secondaryColor">
              <h2 className={`main-heading text-center ${isArabic ? "text-right" : "text-left"}`}>
                {(() => {
                  const text = isArabic
                    ? data.arabic.title
                    : data.english.title;
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
                {isArabic ? data.arabic.content : data.english.content}
              </p>
            </div>
          </div>
          <div className="relative order-2 md:order-2 w-full md:w-[45%] lg:w-[40%]">
            <Image
              src={data.images[0].secure_url}
              alt="Feature illustration"
              className="object-contain self-stretch my-auto w-full"
              width={100}
              height={100}
            />
            <SVG
              src="/assets/images/aboutUs/dots.svg"
              alt="Feature illustration"
              className="object-contain w-[131.75px] h-[131.75px] absolute bottom-[-47px] left-[-20px] lg:left-[-46px] z-[-1] svg-main-color"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
