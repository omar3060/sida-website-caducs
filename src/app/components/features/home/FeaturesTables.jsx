import Image from "next/image";
import React from "react";
import SVG from "react-inlinesvg";
import { featuresTablesData } from "@/data/homeData";

const FeaturesTables = async ({ locale }) => {
  const isArabic = locale === "ar";
  const data = await featuresTablesData();

  // console.log("FeaturesTablesData:", data);
  return (
    <section className="section-style x-spacing">
      {data.slides &&
        data.slides.map((slide, index) => (
          <div
            key={slide._id}
            className={`flex flex-wrap gap-10 items-center ${
              index === 0 ? "mt-10" : "mt-20"
            } text-secondaryColor max-md:max-w-full ${
              index === 0 ? "relative" : ""
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
              <article
                className={`self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px] ${
                  index % 2 === 0 ? "order-1 md:order-2" : ""
                }`}
              >
                <h2 className="main-heading self-start">
                  {(() => {
                    const text = isArabic
                      ? slide.arabic.title
                      : slide.english.title;
                    const words = text.split(" ");
                    return words.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={wordIndex % 2 === 0 ? "text-mainColor" : ""}
                      >
                        {word}
                        {wordIndex < words.length - 1 ? " " : ""}
                      </span>
                    ));
                  })()}
                </h2>
                <p className="main-paragraph mr-0 md:mr-0 lg:mr-0">
                  {isArabic ? slide.arabic.content : slide.english.content}
                </p>
              </article>
              <div
                className={`${index === 0 ? "relative" : ""} ${
                  index % 2 === 0 ? "order-2 md:order-1" : ""
                } w-full md:w-[45%] lg:w-[40%]`}
              >
                <Image
                  src={slide.image.secure_url}
                  alt={isArabic ? slide.arabic.title : slide.english.title}
                  className="object-contain self-stretch my-auto w-full"
                  width={100}
                  height={100}
                />
                {index === 0 && (
                  <SVG
                    src="/assets/images/home/svgs/featuresTables/firstTableVector.svg"
                    alt="Feature illustration"
                    className="object-contain w-[131.75px] h-[131.75px] absolute bottom-[-47px] left-[-20px] z-[-1] svg-main-color"
                    width={100}
                    height={100}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default FeaturesTables;
