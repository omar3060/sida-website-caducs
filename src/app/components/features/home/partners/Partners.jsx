import React from "react";
import Image from "next/image";
import PartnersClientWrapper from "./PartnersClientWrapper";
import SVG from "react-inlinesvg";
import { partnersData } from "@/data/homeData";

// const partners = [
//   {
//     id: 1,
//     src: "/assets/images/home/svgs/partners/partner-1.svg",
//   },
//   {
//     id: 2,
//     src: "/assets/images/home/svgs/partners/partner-2.svg",
//   },
//   {
//     id: 3,
//     src: "/assets/images/home/svgs/partners/partner-3.svg",
//   },
//   {
//     id: 4,
//     src: "/assets/images/home/svgs/partners/partner-4.svg",
//   },
//   {
//     id: 5,
//     src: "/assets/images/home/svgs/partners/partner-5.svg",
//   },
// ];

const Partners = async ({ locale }) => {
  const isArabic = locale === "ar";
  const data = await partnersData();

  // Parse JSON strings
  let title, content;
  try {
    title = JSON.parse(data.title);
    content = JSON.parse(data.content);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Fallback values
    title = {
      arabic: "شريك المطاعم في كل مكان",
      english: "partnering with restaurants everywhere.",
    };
    content = {
      arabic: "عشرات المطاعم يعتمدون على سيدا للسيطرة على التكاليف",
      english: "Dozens of restaurants trust SIDA to reduce costs",
    };
  }

  console.log("Raw data:", data);
  console.log("Parsed title:", title);
  console.log("Parsed content:", content);
  console.log("isArabic:", isArabic);
  return (
    <section className="section-style x-spacing">
      <h2 className="main-heading self-center text-center text-secondaryColor">
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

      <p className="main-paragraph self-center text-center text-secondaryColor w-full md:w-[70%] lg:w-[50%]">
        {isArabic ? content.arabic : content.english}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 mt-10 md:mt-16 lg:mt-20">
        <div className="w-full order-2 md:order-1">
          <PartnersClientWrapper partners={data.slides} />
          <div className="static-partners flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {data.slides.map((partner) => (
              <div
                key={partner.id}
                className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] px-2 md:px-3 lg:px-4"
              >
                <Image
                  src={partner.image.secure_url}
                  className="object-contain mx-auto"
                  alt={`Partner ${partner.id}`}
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
