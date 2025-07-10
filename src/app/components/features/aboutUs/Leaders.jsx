import Image from "next/image";
import React from "react";
import TeamMember from "./TeamMember";
import SVG from "react-inlinesvg";
import { ourLeadersData } from "@/data/aboutusData";

const Leaders = async ({ locale }) => {
  const data = await ourLeadersData();
  const isArabic = locale === "ar";

  // Safety check to ensure data is available
  if (!data || !data.title || !data.slides) {
    return <div>Loading co-founders...</div>;
  }

  // const { title, slides } = data;  
  console.log("CoFounder slides:", data.slides);
  console.log("Slide 1:", data.slides[0]);
  console.log("Slide 2:", data.slides[1]);

  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center justify-center">
        <h2
          className={`main-heading text-center ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {(() => {
            const text = isArabic ? data.title.arabic : data.title.english;
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
                    index % 2 === 0 ? "text-mainColor" : "text-secondaryColor"
                  }
                >
                  {" "}
                  {word}{" "}
                </span>
              );
            });
          })()}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[992px] justify-items-center">
          {data.slides &&
          data.slides.map((employee, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "md:col-span-2 lg:col-span-1 md:max-w-[450px] lg:max-w-none"
                  : ""
              }`}
            >
              <TeamMember {...employee} locale={locale} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
