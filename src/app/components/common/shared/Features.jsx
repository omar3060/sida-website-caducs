import Image from "next/image";
import React from "react";
import SVG from "react-inlinesvg";
import { featuresData } from "@/data/homeData";

const Features = async ({locale}) => {
  const isArabic = locale === "ar";
  let data = await featuresData();
  console.log(data);
  
  // Safety check to ensure data is available
  if (!data || !data.arabic || !data.english) {
    return <div>Loading...</div>;
  }
  
  return (
    <section id="services" className="section-style x-spacing">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative order-2 md:order-1 w-full md:w-[50%]">
            <Image
              src={data.images[0].secure_url}
              alt="restaurant software features"
              className="object-contain my-auto w-full"
              width={100}
              height={100}
            />
            <SVG
              src='/assets/images/home/svgs/contactVector.svg'
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
              <h2 className="main-heading">
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
                        className={index % 2 === 0 ? "text-mainColor" : ""}
                      >
                        {word}{" "}
                      </span>
                    );
                  });
                })()}
              </h2>
              <p className="main-paragraph mr-0 md:mr-0 lg:mr-0 text-center md:text-justify">
                {isArabic ? data.arabic.content : data.english.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
