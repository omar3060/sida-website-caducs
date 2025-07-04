"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SVG from "react-inlinesvg";
import { useLocale } from "next-intl";
import { useEmblaRtlConfig } from "@/app/lib/useEmblaRtlConfig";
import { useTheme } from "@/app/context/ThemeContext";

const SidaOffersCarousel = ({ sliderData,  }) => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const { theme } = useTheme();
  const emblaOptions = useEmblaRtlConfig({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    draggable: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const containerRef = useRef(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    // Hide static offers when carousel is rendered
    const staticOffers = document.querySelector(".static-offers");
    if (staticOffers) {
      staticOffers.style.display = "none";
    }
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative" ref={emblaRef}>
        <div className="flex">
          {sliderData.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative mx-20">
              {/* <div className="grid grid-cols-2 gap-4 md:gap-8 items-start"> */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
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
                        height={100}
                        width={500}
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
                    >
                      {isArabic ? "اشترك" : "Subscribe"}
                    </button>
                    <button className="primary-button text-[14px] md:text-2xl">
                      {isArabic ? "التسعير" : "Pricing"}
                    </button>
                  </div>
                </div>

                <div className="basis-[55%]">
                  <Image
                    src={slide.image.secure_url}
                    alt={isArabic ? slide.arabic.title : slide.english.title}
                    width={100}
                    height={100}
                    className="w-full h-full min-h-[300px] max-h-[566px] rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 md:gap-20 lg:gap-40 xl:gap-[415px] mt-8">
        <button
          onClick={scrollPrev}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Previous slide"
        >
          <Image
            src={
              theme === "dark"
                ? `/assets/images/home/SidaOffers/${
                  isArabic ? "right" : "left"
                  }ArrowGreen.svg`
                : `/assets/images/home/SidaOffers/${
                  isArabic ? "right" : "left"
                  }ArrowBlue.svg`
            }
            alt="Previous"
            width={67}
            height={67}
            className="object-contain shrink-0 aspect-square w-[67px]"
          />
        </button>
        <button
          onClick={scrollNext}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Next slide"
        >
          <Image
            src={
              theme === "dark"
                ? `/assets/images/home/SidaOffers/${
                  isArabic ? "left" : "right"
                  }ArrowGreen.svg`
                : `/assets/images/home/SidaOffers/${
                  isArabic ? "left" : "right"
                  }ArrowBlue.svg`
            }
            alt="Next"
            width={66}
            height={66}
            className="object-contain shrink-0 aspect-[0.99] w-[66px]"
          />
        </button>
      </div>
    </div>
  );
};

export default SidaOffersCarousel;
