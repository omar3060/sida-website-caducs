import React from "react";
import Link from "next/link";
const ProductCard = ({ title, description, image, reverse, serviceId }) => {
  return (
    <div
      className={`section-style ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-10 w-full p-6 rounded-lg scroll-mt-24`}
      id={serviceId}
    >
      <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px]">
        <div className="flex items-center justify-center gap-3 mb-6 ">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondaryColor text-center">
            {title}
          </h2>
        </div>
        <p className="mb-3 text-lg text-secondaryColor text-center md:text-left">
          {description}
        </p>
        <div className="buttons-container w-full text-textWhite text-[18px] md:text-xl lg:text-2xl flex gap-4">
          <Link href="/pricing/subscription/user" className="w-1/2">
            <button
              role="button"
              className="primary-button py-3 md:py-4 lg:py-5 w-full"
            >
              Subscribe
            </button>
          </Link>
          <Link href={`/services/${serviceId}`} className="w-1/2">
            <button className="primary-button py-3 md:py-4 lg:py-5 w-full">
              Learn More
            </button>
          </Link>
        </div>
      </article>
      <div className="w-full md:w-[50%] lg:w-[40%] relative shrink-0">
        <img
          src={image}
          alt={`${title} Background`}
          className=" object-contain self-stretch my-auto w-full h-full rounded-lg shrink-0"
        />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-secondaryColor">
          {serviceId.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
