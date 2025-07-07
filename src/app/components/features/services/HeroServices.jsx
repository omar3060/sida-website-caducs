import Image from "next/image";
import React from "react";
import AnimatedHeroWrapper from "./AnimatedHeroWrapper";
import { heroServicesData } from "@/data/servicesPageData";

const HeroServices = async ({ locale }) => {
  const isArabic = locale === "ar";
  const data = await heroServicesData();

  return (
    <AnimatedHeroWrapper>
      <section className="relative section-style x-spacing text-textCard min-h-[100vh]">
        {/* Background Image */}
        <div className="absolute inset-0 size-full hero-image">
          <Image
            src={data.images[0].secure_url}
            fill
            alt="Hero Background"
            className="object-cover absolute inset-0 size-full"
          />
        </div>

        {/* Content */}
        <div className="flex relative flex-col max-w-full lg:w-1/2 text-left mx-0 my-auto hero-content">
          <div className="flex flex-col w-full mb-[190px]">
            <h1
              className={`main-heading ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? data.arabic.title : data.english.title}
            </h1>
            <p
              className={`main-paragraph mr-0 md:mr-0 lg:mr-0 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? data.arabic.content : data.english.content}
            </p>

            <div className="buttons-container text-textCard w-[80%] ">
              <button
                role="button"
                className="primary-button flex-1 border-textCard text-textCard border-2 transition-all duration-300"
              >
                {isArabic ? "احصل على التوصيل" : "Get Demo"}
              </button>
              <button className="primary-button flex-1 border-textCard text-textCard border-2 transition-all duration-300">
                {isArabic ? "اشترك" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 hero-arrow">
          <a href="#services">
            <div className="border-4 border-textCard rounded-[25px] w-[85px] lg:w-[108px] h-[140px] lg:h-[172px] flex items-center justify-center">
              <Image
                src="/assets/images/services/arrowScroll.svg"
                width={50}
                height={50}
                alt="Scroll Down Arrow"
                className="object-contain w-[40px] h-[40px] animate-bounce"
              />
            </div>
          </a>
        </div>
      </section>
    </AnimatedHeroWrapper>
  );
};

export default HeroServices;
