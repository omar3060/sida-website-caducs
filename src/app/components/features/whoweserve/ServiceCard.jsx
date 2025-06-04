import React from "react";
import Image from "next/image";
import SVG from "react-inlinesvg";
const ServiceCard = ({ title, icon, description, image, reverse }) => {
  return (
    <div className={`section-style ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center gap-10 w-full p-6 rounded-lg`}>
      <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px]">
        <div className="flex items-center justify-center gap-3 mb-6 ">
          <SVG
            src={icon}
            alt={`${title} icon`}
            className="w-14 h-14 svg-main-color"
            width={32}
            height={32}
          />
          <h2 className="text-2xl lg:text-3xl font-bold text-secondaryColor text-center">
            {title}
          </h2>
        </div>
        <p className="text-secondaryColor text-base lg:text-lg text-center">
          {description}
        </p>
      </article>
      <div className="w-full md:w-[45%] lg:w-[40%]">
        <Image
          src={image}
          alt={`${title} illustration`}
          className="object-contain self-stretch my-auto w-full rounded-lg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ServiceCard;