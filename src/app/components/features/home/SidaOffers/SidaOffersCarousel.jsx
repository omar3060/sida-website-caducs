"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SVG from "react-inlinesvg";
import { useLocale } from "next-intl";
import { useEmblaRtlConfig } from "@/app/lib/useEmblaRtlConfig";

const SidaOffersCarousel = ({ sliderData }) => {
  const locale = useLocale();
  const isArabic = locale === "ar";
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
                      {slide.title}
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
                    {slide.description}
                  </p>

                  <div className="flex gap-3 md:gap-5 items-center md:mt-8">
                    <button
                      role="button"
                      className="primary-button text-[14px] md:text-2xl"
                    >
                      {slide.buttonText1}
                    </button>
                    <button className="primary-button text-[14px] md:text-2xl">
                      {slide.buttonText2}
                    </button>
                  </div>
                </div>

                <div className="basis-[55%]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
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

      <div className="relative overflow-visible mt-8">
        <div className="flex justify-center gap-6 md:gap-20 lg:gap-40 xl:gap-[415px] overflow-visible">
          <button
            onClick={scrollPrev}
            className="flex items-center justify-center cursor-pointer overflow-visible"
            aria-label="Previous slide"
          >
            <svg
              width="128"
              height="104"
              viewBox="0 0 128 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[67px] lg:w-[80px]"
            >
              <path
                d="M64.1234 103.531L1.4553 54.0479C0.452482 53.2561 0.439198 51.7398 1.42798 50.9305L59.3795 3.49959L64.2734 0.320915C65.6039 -0.543297 67.3628 0.411598 67.3628 1.99817V26.3943C67.3628 27.4416 68.1666 28.3114 69.2109 28.3905C75.4116 28.86 95.415 30.4059 101.292 31.2454C106.947 32.2703 119.653 37.0063 125.242 47.7514C129.892 55.1457 127.319 77.816 125.938 87.5738C125.692 89.3057 123.478 89.8662 122.299 88.5738C111.482 76.7142 96.7757 72.9093 69.2754 74.0681C68.21 74.113 67.3628 74.9932 67.3628 76.0595V101.961C67.3628 103.632 65.4349 104.567 64.1234 103.531Z"
                fill="#018ed5"
              />
              
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="flex items-center justify-center cursor-pointer overflow-visible"
            aria-label="Next slide"
          >
            <svg
              width="129"
              height="104"
              viewBox="0 0 129 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[66px] lg:w-[80px]"
            >
              <path
                d="M64.6821 103.531L127.35 54.0479C128.353 53.2561 128.366 51.7398 127.378 50.9305L69.426 3.49959L64.5321 0.320915C63.2016 -0.543297 61.4427 0.411598 61.4427 1.99817V26.3943C61.4427 27.4416 60.6389 28.3114 59.5946 28.3905C53.394 28.86 33.3906 30.4059 27.5137 31.2454C21.8588 32.2703 9.15216 37.0063 3.56384 47.7514C-1.08636 55.1457 1.48665 77.816 2.86795 87.5738C3.11311 89.3057 5.32753 89.8662 6.50628 88.5738C17.3235 76.7142 32.0298 72.9093 59.5302 74.0681C60.5955 74.113 61.4427 74.9932 61.4427 76.0595V101.961C61.4427 103.632 63.3706 104.567 64.6821 103.531Z"
                fill="#018ed5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidaOffersCarousel;
