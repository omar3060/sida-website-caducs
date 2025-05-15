"use client";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Partners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps"
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

  const partners = [
    {
      id: 1,
      src: "/svgs/partners/partner-1.svg",
    },
    {
      id: 2,
      src: "/svgs/partners/partner-2.svg",
    },
    {
      id: 3,
      src: "/svgs/partners/partner-3.svg",
    },
    {
      id: 4,
      src: "/svgs/partners/partner-4.svg",
    },
    {
      id: 5,
      src: "/svgs/partners/partner-5.svg",
    },
  ];

  return (
    <section className="flex flex-col w-full x-spacing">
      <h2 className="self-center mt-20 md:mt-32 lg:mt-44 text-3xl md:text-4xl lg:text-5xl font-bold text-sky-600 text-center">
        Partnering <span className="text-gray-900">with</span> Restaurants{" "}
        <span className="text-gray-900 relative inline-block">Everywhere
        <Image
        src="/svgs/partners/partners-vector.svg"
        className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px]"
        alt="underline element vector"
        width={50}
        height={30}
      />
        </span>
      </h2>



      <p className="self-center mt-3 md:mt-4 lg:mt-5 text-lg md:text-xl lg:text-2xl text-center text-gray-900 w-full md:w-[70%] lg:w-[50%]">
        Thousands of local and international F&B brands trust SIDA to manage
        their operations from orders to payments, inventory, and beyond—all in
        one seamless, cloud-based, POS-RMS system
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 mt-10 md:mt-16 lg:mt-20">
        <div className="w-full order-2 md:order-1">
          <div className="embla overflow-hidden mt-5" ref={emblaRef}>
            <div className="embla__container flex">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="embla__slide min-w-[150px] md:min-w-[180px] lg:min-w-[200px] px-2 md:px-3 lg:px-4"
                >
                  <img
                    src={partner.src}
                    className={`object-contain mx-auto ${partner.className}`}
                    alt={`Partner ${partner.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
