import React from "react";
import ProductCard from "./ProductCard";

const ServicesSection = () => {
  const productCards = [
    {
      title: "POS",
      image:
        "/assets/images/services/service1.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut ed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    },
    {
      title: "CDS",
      image:
        "/assets/images/services/service2.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut ed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    },
    {
      title: "KDS",
      image:
        "/assets/images/services/service3.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut ed fringilla. Etiam vestibulum ex non elit blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet vel. Ut",
    },
  ];
  return (
    <section className="section-style">
      <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full x-spacing">
        {productCards.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
