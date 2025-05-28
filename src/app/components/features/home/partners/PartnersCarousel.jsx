"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const PartnersCarousel = ({ partners }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(autoplay, 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden mt-5" ref={emblaRef}>
      <div className="embla__container flex">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="embla__slide min-w-[150px] md:min-w-[180px] lg:min-w-[200px] px-2 md:px-3 lg:px-4"
          >
            <img
              src={partner.src}
              className="object-contain mx-auto"
              alt={`Partner ${partner.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;