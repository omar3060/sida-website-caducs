import Image from "next/image";
import Link from "next/link";
import React from "react";
import SVG from "react-inlinesvg";

const PricingCard = ({
  title,
  price,
  description,
  features,
  isHighlighted,
  isYearly,
  activeFeatures,
}) => {
  return (
    <article className="box-border rounded-2xl bg-opacity-0 w-[297px]  text-center bg-textWhite text-secondaryColor">
      <div
        className={`box-border p-8 m-0 text-center border-gray-200 border-solid border-[1.607px] rounded-2xl ${
          isHighlighted ? "text-secondaryColor bg-mainColor" : ""
        }`}
      >
        <h3 className="box-border p-0 m-0 mb-10 text-xs font-bold tracking-widest uppercase">
          {title}
        </h3>
        <div className="box-border flex justify-center items-start p-0 m-0 mb-5">
          <span className="box-border p-0 m-0 mt-0 text-sm">$</span>
          <span className="box-border p-0 m-0 text-5xl font-bold tracking-tighter leading-[40px]">
            {price}
          </span>
          <div className="box-border p-0 m-0 ml-2.5 text-sm text-left">
            <p className="box-border p-0 m-0">per user</p>
            <p className="box-border p-0 m-0">
              per {isYearly ? "year" : "month"}
            </p>
          </div>
        </div>
        <p className="box-border p-0 mt-7 text-sm leading-5">{description}</p>
      </div>
      <ul className="box-border p-8 m-0 list-none justify-items-center font-bold">
        {features.map((feature, index) => {
          const isActive = activeFeatures.includes(index);
          return (
            <li
              key={index}
              className={`box-border flex gap-2.5 items-center p-0 m-0 mb-4 text-sm ${
                isActive
                  ? "font-bold text-blackColor"
                  : "font-normal text-textGray ps-5"
              }`}
            >
              {isActive && (
                <SVG
                  src="/assets/images/pricing/checkIcon.svg"
                  alt="Check icon"
                  className="svg-main-color"
                  width={16}
                  height={16}
                  style={{ width: "16px", height: "16px" }}
                />
              )}
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>
      <button
        
        className={`box-border py-3.5 px-[15px]  text-lg rounded-lg border-[#EBEAED] border-solid cursor-pointer border-[1.106px] w-1/2
          ${isHighlighted ? "text-white bg-mainColor" : ""}`}
      >
        <Link href="/pricing/subscription">Subscribe</Link>
      </button>
    </article>
  );
};

export default PricingCard;
