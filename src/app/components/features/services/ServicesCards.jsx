import React from "react";
import SVG from "react-inlinesvg";
import { servicesData } from "../../../../data/servicesData";
const WhoWeServe = () => {


  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center">
        <h2 className="main-heading mb-12 text-mainColor">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[992px]">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ id, hero:{title} }) => (
  <a href={`#${id}`}>
    <article className="flex flex-col justify-center items-center rounded-xl relative border-2 border-mainColor overflow-hidden min-h-[200px]">
      <div className="relative z-10 transition-opacity duration-300">
        <h3 className="text-xl font-bold text-secondaryColor">{title}</h3>
      </div>
    </article>
  </a>
);

export default WhoWeServe;
