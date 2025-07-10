import React from "react";
import ServiceCard from "./ServiceCard";
import { whoWeServeData } from "@/data/homeData";

const ServiceLayout = async ({ locale }) => {
  const data = await whoWeServeData();
  const slides = data.slides;

  return (
    <section className="section-style x-spacing text-center pt-2 md:pt-6 lg:pt-8 bg-cardColor">
      <div className="flex flex-wrap gap-10 items-center mt-5 text-secondaryColor max-md:max-w-full">
        {slides.map((service, index) => (
          <ServiceCard
            key={service._id}
            locale={locale}
            arabic={service.arabic}
            english={service.english}
            text={service.text}
            image={service.image}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceLayout;
