import React from "react";
import Image from "next/image";
import SVG from "react-inlinesvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ arabic, english, text, image, reverse, locale }) => {
  const isArabic = locale === "ar";

  function createSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }
  return (
    <div
      className={`section-style ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-10 w-full p-6 rounded-lg scroll-mt-24`}
      id={createSlug(english.title)}
    >
      <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px]">
        <div className="flex items-center justify-center gap-3 mb-6 gap-x-10">
          <div
            className="svg-main-color object-contain aspect-square w-[41px]"
            aria-label={text}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", text]}
              className="w-14 h-14 text-mainColor object-contain"
            />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-secondaryColor text-center">
            {isArabic ? arabic.title : english.title}
          </h2>
        </div>
        <p className="text-secondaryColor text-base lg:text-lg text-center">
          {isArabic ? arabic.content : english.content}
        </p>
      </article>
      <div className="w-full md:w-[45%] lg:w-[40%]">
        <Image
          src={image.secure_url}
          alt={`${english.title} illustration`}
          className="object-contain self-stretch my-auto w-full rounded-lg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
