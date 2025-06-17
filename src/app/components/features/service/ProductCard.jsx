import Link from "next/link";
import React from "react";

const ProductCard = ({ title, image, description, serviceId }) => {
  return (
    <article className="w-[450px] bg-textWhite border border-gray-200 rounded-t-4xl shadow-sm">
      <div className="flex relative flex-col self-stretch px-11 py-20 w-full text-5xl font-bold text-secondaryColor min-h-[212px] rounded-[32px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <img
          src={image}
          alt={`${title} Background`}
          className=" absolute inset-0 size-full"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 text-textWhite">
          {serviceId.toUpperCase()}
        </div>
      </div>
      <div className="p-5 ">
        <p className="mb-3 text-lg text-secondaryColor">{description}</p>
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
      </div>
    </article>
  );
};

export default ProductCard;
