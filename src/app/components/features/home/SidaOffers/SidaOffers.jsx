import React from "react";
import Image from "next/image";
import SidaOffersCarousel from "./SidaOffersCarousel";
import SVG from "react-inlinesvg";
import { sidaOffersData } from "@/data/homeData";

const SidaOffers = async ({ params }) => {
  const locale = params?.locale || "en";
  const isArabic = locale === "ar";
  const data = await sidaOffersData();

  // Parse JSON strings for title and content
  let title, content;
  try {
    title =
      typeof data.title === "string" ? JSON.parse(data.title) : data.title;
    content =
      typeof data.content === "string"
        ? JSON.parse(data.content)
        : data.content;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Fallback values
    title = {
      arabic: "ماذا تقدم سيدا",
      english: "What SIDA offer",
    };
    content = {
      arabic:
        "تقدّم سيدا نظام نقاط بيع ومخزون ذكي يساعد المطاعم على متابعة المبيعات",
      english:
        "SIDA offers a smart POS and inventory system that helps restaurants",
    };
  }

  // console.log("Raw data:", data);
  // console.log("Parsed title:", title);
  // console.log("Parsed content:", content);
  // console.log("isArabic:", isArabic);
  return (
    <section className="overflow-hidden section-style py-16 x-spacing md:px-30 relative">
      <div
        className="relative text-center md:text-center lg:text-left pb-5"
        style={{ zIndex: 1 }}
      >
        <h2 className="main-heading text-center w-full xl:w-[50%] text-secondaryColor">
          {(() => {
            const text = isArabic ? title.arabic : title.english;
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
                      className="object-contain mt-1 md:mt-2 lg:mt-3 w-[50px] md:w-[50px] lg:w-[50px] svg-main-color"
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
        <p className="main-paragraph self-center text-center text-secondaryColor w-full xl:w-[50%] ">
          {isArabic ? content.arabic : content.english}
        </p>
      </div>

      <SidaOffersCarousel sliderData={data.slides} />

      <div className="static-offers">
        {data.slides.map((slide, index) => (
          <div key={index} className="mx-20">
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
              <div className="space-y-4 md:mb-15 flex flex-col md:self-center basis-[45%]">
                <div className="relative">
                  <h3 className="text-[40px] md:text-[55px] lg:text-[65px] font-bold text-mainColor">
                    {isArabic ? slide.arabic.title : slide.english.title}
                  </h3>
                  {/* TODO: Add slant image */}
                  {/* <div
                    className="absolute top-[-25px] md:top-[-42px] lg:top-[-40px] xl:top-[-100px] left-[80px] md:left-[115px] lg:left-[127px] xl:left-[150px] w-[918px] h-[251px]"
                  >
                    <Image
                      height={50}
                      width={200}
                      src="/assets/images/home/SidaOffers/slant.svg"
                      alt="line"
                      className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[800px] md:block"
                      priority
                    />
                  </div> */}
                </div>

                <p className="text-secondaryColor text-[18.5px] md:text-2xl lg:text-4xl w-full max-w-[700px]">
                  {isArabic ? slide.arabic.content : slide.english.content}
                </p>

                <div className="flex gap-3 md:gap-5 items-center md:mt-8">
                  <button
                    role="button"
                    className="primary-button text-[14px] md:text-2xl"
                    disabled
                  >
                    {isArabic ? "اشترك" : "Subscribe"}
                  </button>
                  <button
                    className="primary-button text-[14px] md:text-2xl"
                    disabled
                  >
                    {isArabic ? "التسعير" : "Pricing"}
                  </button>
                </div>
              </div>

              <div className="basis-[55%]">
                <Image
                  src={slide.image.secure_url}
                  alt={isArabic ? slide.arabic.title : slide.english.title}
                  height={50}
                  width={100}
                  className="w-full h-full min-h-[300px] max-h-[566px] rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SidaOffers;
