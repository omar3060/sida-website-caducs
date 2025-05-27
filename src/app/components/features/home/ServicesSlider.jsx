import React from "react";
import Image from "next/image";
import ServicesSliderCarousel from "./ServicesSliderCarousel";

const slides = [
  {
    title: "Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    image: "/assets/images/home/ServicesSlider/service1.svg"
  },
  {
    title: "Table Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    image: "/assets/images/home/ServicesSlider/service2.svg"
  },
  {
    title: "Statistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    image: "/assets/images/home/ServicesSlider/service3.svg"
  },
  {
    title: "Warehouse Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    image: "/assets/images/home/ServicesSlider/service4.svg"
  },
  {
    title: "Orders Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    image: "/assets/images/home/ServicesSlider/service5.svg"
  },
];

const ServicesSlider = () => {
  return (
    <section className="section-style items-center x-spacing">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-center">
        <span className="text-mainColor">SIDA</span> Provides <span className="text-mainColor">A lot</span> of Features
      </h1>

      <ServicesSliderCarousel slides={slides} />

      <div className="static-services">
        {slides.map((slide, index) => (
          <div key={index} className="mt-6 md:mt-10 w-full max-w-[1200px] rounded-[42px] shadow-[5px_7px_3px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col items-start px-4 md:px-8 pt-32 md:pt-[400px] pb-8 md:pb-14 w-full min-h-[300px] md:min-h-[600px] relative">
              <Image
                src={slide.image}
                alt={`${slide.title} background`}
                width={800}
                height={600}
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

      <div className="static-dots flex gap-2 md:gap-2.5 justify-center items-start mt-4 md:mt-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`flex shrink-0 h-[14px] md:h-[18px] w-[15px] md:w-[19px] rounded-full bg-zinc-300`}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider;