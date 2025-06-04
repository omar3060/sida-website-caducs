import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceDetails } from "./serviceDetailsData";


const ServiceLayout = () => {
  return (
    <section className="section-style x-spacing text-center pt-2 md:pt-6 lg:pt-8 bg-cardColor">
      <div className="flex flex-wrap gap-10 items-center mt-5 text-secondaryColor max-md:max-w-full">
        {serviceDetails.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
            image={service.image}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceLayout;