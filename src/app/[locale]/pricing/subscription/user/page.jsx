"use client";

import React from "react";
import Link from "next/link";
import SVG from "react-inlinesvg";

const PricingTransitionPage = () => {
  return (
    <section className="section-style x-spacing min-h-[70vh] flex flex-col items-center justify-center">
      {/* <SVG
        src="/assets/images/home/svgs/halfCircleRight.svg"
        className="absolute w-[250px] sm:w-[300px] left-[-100px] sm:left-[-400px] bottom-40 sm:bottom-50 md:top-[300px] block overflow-hidden rotate-180 -z-10 hidden lg:block"
        alt="Background decoration"
        width={500}
        height={265}
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: "scale(2.5)", transformOrigin: "right center" }}
      />

      <SVG
        src="/assets/images/home/svgs/halfCircleRight.svg"
        className="absolute w-[250px] sm:w-[300px] right-[-100px] sm:right-[-100px] bottom-40 sm:bottom-50 md:top-[300px] block overflow-hidden -z-10 hidden lg:block"
        alt="Background decoration"
        width={500}
        height={265}
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: "scale(2.5)", transformOrigin: "right center" }}
      /> */}

      <div className="text-center mb-12">
      <h1 className="main-heading text-secondaryColor mb-4">
                   {"SIDA Subscription".split(' ').map((word, index) => (
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
      </h1>
        {/* <h1 className="main-heading text-mainColor mb-4">
          SIDA <span className="text-secondaryColor">Subscription</span>
        </h1> */}
        <p className="main-paragraph text-center max-w-2xl mx-auto">
          Choose an option below to continue with your SIDA restaurant
          management system subscription
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl mx-auto">
        <div className="flex-1 bg-textWhite p-8 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-105 flex flex-col items-center">
          <SVG
            src="/assets/images/home/svgs/sida-logo.svg"
            width={120}
            height={50}
            alt="SIDA Logo"
            className="mb-6 svg-main-color"
          />
          <h2 className="text-xl font-bold text-secondaryColor mb-4">
            New Subscription
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Start your journey with SIDA restaurant management system by
            creating a new subscription
          </p>
          <Link href="/pricing/subscription" className="w-full">
            <button className="w-full py-3 bg-mainColor text-textWhite rounded-xl hover:bg-lightBlue transition-colors">
              Subscribe Now
            </button>
          </Link>
        </div>

        <div className="flex-1 bg-textWhite p-8 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-105 flex flex-col items-center">
          <SVG
            src="/assets/images/home/svgs/sida-logo.svg"
            width={120}
            height={50}
            alt="SIDA Logo"
            className="mb-6 svg-main-color"
          />
          <h2 className="text-xl font-bold text-secondaryColor mb-4">
            Existing User
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Already have an account? Login to manage your subscription and
            access your dashboard
          </p>
          <a href="https://sida-2025.netlify.app/auth/login" className="w-full">
            <button className="w-full py-3 border-2 border-mainColor text-mainColor rounded-xl hover:bg-mainColor hover:text-textWhite transition-colors">
              Login
            </button>
          </a>
        </div>
      </div>

      {/* <div className="mt-10 text-center">
        <p className="text-secondaryColor mb-4">
          Want to see our pricing plans first?
        </p>
        <Link href="/pricing/plans">
          <button className="px-6 py-2 border border-mainColor text-mainColor rounded-xl hover:bg-gray-100 transition-colors">
            View Pricing Plans
          </button>
        </Link>
      </div> */}
    </section>
  );
};

export default PricingTransitionPage;
