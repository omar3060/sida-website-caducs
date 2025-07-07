import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import HeroClientWrapper from "./HeroClientWrapper";
import RotatingGradientCircle from "./RotatingGradientCircle";
import SVG from "react-inlinesvg";
import FixedGradientCircle from "./FixedGradientCircle";
import { heroData } from "@/data/homeData"; // Import the data function

const Hero = async ({ locale }) => {
  const isArabic = locale === "ar";
  // Get data directly from our data function
  const data = await heroData();
  console.log(data);
  
  // Safety check to ensure data is available
  if (!data || !data.arabic || !data.english) {
    return <div>Loading...</div>;
  }
  
  // const t = await getTranslations("home.hero");
  // const buttonT = await getTranslations("buttons");
  return (
    <section className="section-style relative x-spacing pt-18 md:pt-36 lg:pt-40 mb-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col mt-6 md:mt-8 lg:mt-11 w-full text-secondaryColor">
            <h1 className="main-heading">
              {(() => {
                const text = isArabic ? data.arabic.title : data.english.title;
                const words = text.split(" ");
                return words.map((word, index) => {
                  if (index === words.length - 1) {
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
                          className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px] svg-main-color"
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
                      {word}{" "}
                    </span>
                  );
                });
              })()}
            </h1>
            <p className="main-paragraph mr-0 md:mr-0 lg:mr-0">
              {isArabic ? data.arabic.content : data.english.content}
            </p>

            <div className="buttons-container md:w-[40%] ">
              {/* <button role="button" className="primary-button flex-1">
                Get Demo
              </button> */}
              <HeroClientWrapper />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <RotatingGradientCircle />
        </div>
        <div className="w-full md:w-[50%] md:ml-5 relative md:mt-0">
          <div className="relative">
            {
              <Image
                src={data.images[0].secure_url}
                className="object-contain grow w-full aspect-[1.22] relative z-10"
                alt="Hero illustration"
                width={500}
                height={300}
              />
            }
            <HeroClientWrapper isDashes />
          </div>
          <FixedGradientCircle />
        </div>
      </div>
    </section>
  );
};

export default Hero;
