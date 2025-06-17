import React from "react";

import ProductCard from "./ProductCard";
import { servicesData } from "@/data/servicesData";

const RelatedServices = ({ currentServiceId }) => {
  const filteredServices = servicesData.filter(
    (service) => service.id !== currentServiceId
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-secondaryColor text-center">
                  {"Solutions to Scale Up Your Restaurant".split(' ').map((word, index) => (
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
      </h2>
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-secondaryColor text-center">
        <span className="text-mainColor">Solutions</span> to Scale Up<span className="text-mainColor"> Your </span>
         Restaurant
      </h2> */}
      <div className="flex flex-wrap gap-10 justify-center items-center w-full max-w-7xl mx-auto mt-10">
        {filteredServices.map((service, index) => (
          <ProductCard
            key={index}
            title={service.hero.title}
            image={service.hero.image}
            description={service.hero.description}
            serviceId={service.id}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedServices; 