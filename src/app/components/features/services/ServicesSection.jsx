import React from "react";


import { servicesData } from "../../../../data/servicesData";
import ProductCard from "../service/ProductCard";

const ServicesSection = () => {
  return (
    <section className="section-style pt-10 md:pt-16 lg:pt-20">
      <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full x-spacing">
        {servicesData.map((card, index) => (
          <ProductCard
            key={index}
            title={card.hero.title}
            image={card.hero.image}
            description={card.hero.description}
            reverse={index % 2 === 1}
            serviceId={card.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;