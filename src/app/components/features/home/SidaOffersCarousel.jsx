"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const SidaOffersCarousel = ({ sliderData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    draggable: true,
  });

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
              <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
                <div className="space-y-4 md:mb-15 flex flex-col md:self-center basis-[45%]">
                  <div className="relative">
                    <h3 className="text-[40px] md:text-[55px] lg:text-[65px] font-bold text-mainColor">
                      {slide.title}
                    </h3>
                    <div
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
                    </div>
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
                    <button
                      className="primary-button text-[14px] md:text-2xl"
                    >
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

      <div className="hidden lg:flex justify-center gap-[415px] mt-8">
        <button
          onClick={scrollPrev}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Previous slide"
        >
          <Image
            src="/assets/images/home/SidaOffers/leftArrow.svg"
            alt="Previous"
            width={100}
            height={100}
            className="object-contain shrink-0 aspect-square w-[67px]"
          />
        </button>
        <button
          onClick={scrollNext}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Next slide"
        >
          <Image
            src="/assets/images/home/SidaOffers/rightArrow.svg"
            alt="Next"
            width={100}
            height={100}
            className="object-contain shrink-0 aspect-[0.99] w-[66px]"
          />
        </button>
      </div>
    </div>
  );
};

export default SidaOffersCarousel;