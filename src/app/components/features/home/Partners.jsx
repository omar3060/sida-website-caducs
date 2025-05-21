"use client";
import Image from "next/image";
import { useEffect } from "react";
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
      src: "/assets/images/home/svgs/partners/partner-1.svg",
    },
    {
      id: 2,
      src: "/assets/images/home/svgs/partners/partner-2.svg",
    },
    {
      id: 3,
      src: "/assets/images/home/svgs/partners/partner-3.svg",
    },
    {
      id: 4,
      src: "/assets/images/home/svgs/partners/partner-4.svg",
    },
    {
      id: 5,
      src: "/assets/images/home/svgs/partners/partner-5.svg",
    },
  ];

  return (
    <section className="section-style x-spacing">
      <h2 className="main-heading self-center text-mainColor text-center">
        Partnering <span className="text-secondaryColor">with</span> Restaurants{" "}
        <span className="text-secondaryColor relative inline-block">Everywhere
        <Image
        src="/assets/images/home/svgs/partners/partners-vector.svg"
        className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px]"
        alt="underline element vector"
        width={50}
        height={30}
      />
        </span>
      </h2>

      <p className="main-paragraph self-center text-center text-secondaryColor w-full md:w-[70%] lg:w-[50%]">
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
