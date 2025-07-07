import React from "react";
import SVG from "react-inlinesvg";
import { servicesData } from "../../../../data/servicesPageData";


const ServicesCards = async ({locale}) => {
  const isArabic = locale === "ar";
  const data = await servicesData();

  console.log("ServicesCards data:", data);
  const {title, content, text, slides, _id} = data;
  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center">
        <h2 className="main-heading mb-12 text-mainColor">
          {isArabic ? title.arabic : title.english}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[992px]">
          {slides.map((service, index) => (
            <ServiceCard key={index} {...service} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ arabic, english,text, locale, _id}) => {
  const isArabic = locale === "ar";
  return (
  <a href={`#${text}`}>
    <article className="flex flex-col justify-center items-center rounded-xl relative border-2 border-mainColor overflow-hidden min-h-[200px]">
      <div className="relative z-10 transition-opacity duration-300">
        <h3 className="text-xl font-bold text-secondaryColor">{isArabic ? arabic.title : english.title}</h3>
      </div>
    </article>
  </a>
  );
};

export default ServicesCards;
