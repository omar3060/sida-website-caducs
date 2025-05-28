"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ServicesSliderCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    draggable: true
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const staticServices = document.querySelector(".static-services");
    const staticDots = document.querySelector(".static-dots");

    if (staticServices && staticDots) {
      staticServices.style.display = "none";
      staticDots.style.display = "none";
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div>
      <div
        className="overflow-hidden mt-6 md:mt-10 w-full max-w-[1200px] rounded-[42px] shadow-[5px_7px_3px_rgba(0,0,0,0.25)]"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="flex flex-col items-start px-4 md:px-8 pt-32 md:pt-[400px] pb-8 md:pb-14 w-full min-h-[300px] md:min-h-[600px]">
                <Image
                  src={slide.image}
                  alt={`${slide.title} background`}
                  layout="fill"
                  className="object-cover absolute inset-0 size-full"
                  priority={index === 0}
                />
                <div className="relative max-w-full w-full md:w-[800px] text-textWhite">
                  <h2 className="text-xl md:text-3xl font-extrabold">{slide.title}</h2>
                  <p className="mt-2 md:mt-4 text-base md:text-2xl font-semibold max-md:max-w-full">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 md:gap-2.5 justify-center items-start mt-4 md:mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`flex shrink-0 h-[14px] md:h-[18px] w-[15px] md:w-[19px] rounded-full transition-colors duration-300 ${
              selectedIndex === index ? "bg-sky-600" : "bg-zinc-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSliderCarousel;