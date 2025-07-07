import React from "react";
import Image from "next/image";
import ServicesSliderCarousel from "./ServicesSliderCarousel";
import { servicesSliderData } from "@/data/homeData";

const ServicesSlider = async ({ locale }) => {
  const isArabic = locale === "ar";
  const data = await servicesSliderData();

  // Parse JSON string for title
  let title;
  try {
    title =
      typeof data.title === "string" ? JSON.parse(data.title) : data.title;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Fallback values
    title = {
      arabic: "توفر سيدا الكثير من الميزات",
      english: "SIDA Provides A lot of Features",
    };
  }

  // console.log("ServicesSliderData:", data);
  // console.log("Parsed title:", title);
  // console.log("isArabic:", isArabic);
  return (
    <section className="section-style items-center x-spacing py-10 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-center text-secondaryColor">
        {(() => {
          const text = isArabic ? title.arabic : title.english;
          return text.split(" ").map((word, index) =>
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">
                {word}{" "}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          );
        })()}
      </h1>

      <ServicesSliderCarousel slides={data.slides} />

      <div className="static-services">
        {data.slides.map((slide, index) => (
          <div
            key={index}
            className="mt-6 md:mt-10 w-full max-w-[1200px] rounded-[42px] shadow-[5px_7px_3px_rgba(0,0,0,0.25)]"
          >
            <div className="flex flex-col items-start px-4 md:px-8 pt-32 md:pt-[250px] lg:pt-[300px] pb-8 md:pb-14 w-full min-h-[300px] md:min-h-[500px] relative">
              <Image
                src={slide.image.secure_url}
                alt={`${
                  isArabic ? slide.arabic.title : slide.english.title
                } background`}
                width={1200}
                height={600}
                className="object-cover absolute inset-0 size-full"
                priority={index === 0}
              />
              <div className="relative max-w-full md:w-full [700px] md:-mt-22 text-textWhite">
                <h2 className="text-xl md:text-3xl font-extrabold">
                  {isArabic ? slide.arabic.title : slide.english.title}
                </h2>
                <p className="mt-2 md:mt-4 text-base md:text-2xl font-semibold max-md:max-w-full">
                  {isArabic ? slide.arabic.content : slide.english.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="static-dots flex gap-2 md:gap-2.5 justify-center items-start mt-4 md:mt-6">
        {data.slides.map((_, index) => (
          <div
            key={index}
            className={`flex shrink-0 h-[14px] md:h-[18px] w-[15px] md:w-[19px] rounded-full bg-zinc-300`}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider;
