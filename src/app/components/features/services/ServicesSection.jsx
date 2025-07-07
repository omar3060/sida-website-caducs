import React from "react";


import { servicesData } from "../../../../data/servicesPageData";
import ProductCard from "../service/ProductCard";

const ServicesSection = async ({locale}) => {
  const isArabic = locale === "ar";
  const data = await servicesData();
  const {text, slides, _id} = data;
  return (
    <section className="section-style pt-10 md:pt-16 lg:pt-20">
      <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full x-spacing">
        {slides.map((card, index) => (
          <ProductCard
            key={index}
            title={isArabic ? card.arabic.title : card.english.title}
            image={card.image.secure_url}
            content={isArabic ? card.arabic.content : card.english.content}
            reverse={index % 2 === 1}
            serviceId={card.text}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;