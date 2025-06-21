import React from "react";
import Image from "next/image";
import SVG from "react-inlinesvg";

const PricingSection = () => {
  return (
    <section className="section-style my-20">

      <div className="flex flex-col items-center justify-center w-full pt-20 pb-40 gradient-bg">
        <div className="max-w-[992px] w-full flex flex-col items-center">
          <div className="text-center text-textWhite mb-8 mx-2">
            <h2 className="main-heading mb-4">
              Simple pricing for your business
            </h2>
            <p className="text-small md:text-xl opacity-90">
              Plans that are carefully crafted to suit your business.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[992px] w-full mx-auto -mt-40 px-4">
        <div className="w-full bg-textWhite rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8">

          <div className="w-full md:w-[40%] bg-cardColor rounded-xl p-8 flex flex-col items-center">
            <h3 className="text-xl font-bold text-secondaryColor">Start With</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-secondaryColor">$50</span>
            </div>
            <p className="mt-2 text-sm font-bold text-gray-800">billed just once</p>
            <button className="mt-6 w-full bg-mainColor text-white py-3 px-6 rounded-lg font-medium hover:bg-lightBlue transition-colors">
              Get Started
            </button>
          </div>

          <div className="w-full md:w-[60%] flex flex-col justify-center">
            <p className="text-gray-700 mb-6">
              Access these features when you get this pricing package for your business.
            </p>
            <ul className="space-y-4">
              {[
                "International calling and messaging API",
                "Additional phone numbers",
                "Automated messages via Zapier",
                "24/7 support and consulting",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-secondaryColor">
                  <SVG
                    src="/assets/images/home/pricingSection/check.svg"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className="svg-main-color"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-left md:justify-center gap-8 mt-8 text-secondaryColor">
          <div className="flex items-center gap-4">
            <SVG
              src="/assets/images/home/pricingSection/icon1.svg"
              alt="Guarantee icon"
              width={20}
              height={20}
              className="svg-main-color w-[33px] h-[33px]"
            />
            <span className="font-medium">Visa</span>
          </div>
          <div className="flex items-center gap-4">
            <SVG
              src="/assets/images/home/pricingSection/icon2.svg"
              alt="Setup icon"
              width={20}
              height={20}
              className="svg-main-color w-[33px] h-[33px]"
            />
            <span className="font-medium">
              Mastercard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <SVG
              src="/assets/images/home/pricingSection/icon3.svg"
              alt="Subscription icon"
              width={20}
              height={20}
              className="svg-main-color w-[33px] h-[33px]"
            />
            <span className="font-medium">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
