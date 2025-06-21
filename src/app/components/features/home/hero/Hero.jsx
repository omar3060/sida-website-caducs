import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import HeroClientWrapper from "./HeroClientWrapper";
import RotatingGradientCircle from "./RotatingGradientCircle";
import SVG from "react-inlinesvg";
import FixedGradientCircle from "./FixedGradientCircle";

// pages/your-page.js
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    "https://super-admin-eta.vercel.app/section/home/hero"
  );
  const data = await res.json();

  // Pass data to the page via props
  return data;
}

const Hero = async () => {
  let data = await getServerSideProps();
  let title = data.section.title.split(",")
  const t = await getTranslations("home.hero");
  const buttonT = await getTranslations("buttons");
  return (
    <section className="section-style relative x-spacing pt-18 md:pt-36 lg:pt-40 mb-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col mt-6 md:mt-8 lg:mt-11 w-full text-secondaryColor">
            <h1 className="main-heading">
              {" "}
              <span className="text-mainColor">{title[0]}</span> {title[1]}{" "}
              <span className="text-mainColor">{title[2]}</span> {title[3]}{" "}
              <span className="relative inline-block">
                {" "}
                {title[4]}{" "}
                <SVG
                  src={data.section.images[1].secure_url}
                  className="object-contain mt-1 md:mt-2 lg:mt-3 w-[150px] md:w-[200px] lg:w-[250px] svg-main-color"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>{" "}
            </h1>
            <p className="main-paragraph">{data.section.content}</p>

            <div className="buttons-container md:w-[40%] ">
              {/* <button role="button" className="primary-button flex-1">
                Get Demo
              </button> */}
              <HeroClientWrapper />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <RotatingGradientCircle />
        </div>
        <div className="w-full md:w-[50%] md:ml-5 relative md:mt-0">
          <div className="relative">
            {
              <Image
                src={data.section.images[0].secure_url}
                className="object-contain grow w-full aspect-[1.22] relative z-10"
                alt="Hero illustration"
                width={500}
                height={300}
              />
            }
            <HeroClientWrapper isDashes />
          </div>
          <FixedGradientCircle />
        </div>
      </div>
    </section>
  );
};

export default Hero;
