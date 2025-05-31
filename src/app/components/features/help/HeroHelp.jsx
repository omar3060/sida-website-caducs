import Image from "next/image";
import React from "react";
import HelpWrapper from "./HelpWrapper";
import HeroAnimation from "./HeroAnimation";

const HeroHelp = () => {
  return (
    <HelpWrapper>
      <section className="section-style x-spacing w-full h-[75vh] mt-20 bg-mainColor text-textWhite text-center justify-center items-center flex-col gap-15 py-[50px] relative overflow-hidden">
        {/* Animated background vectors using client component */}
        <HeroAnimation />

        {/* Content without animations */}
        <h1 className="main-heading hero-Heading relative z-10">
          Hello! How We May Help You?
        </h1>

        <p className="main-paragraph hero-Paragraph mt-0 mr-0 w-[75%] relative z-10">
          The Complete Guide to Foodics Products and Services
        </p>

        <form
          className="mx-auto flex items-center justify-center hero-Input relative z-10"
        >
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="bg-textWhite text-secondaryColor rounded-[21px] outline-0 w-[350px] md:w-[400px] h-[35px] pl-3"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="flex justify-end absolute end-0 -top-2.5 m-2.5 h-full w-8"
            >
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image
                  src="/assets/images/help/search.svg"
                  alt="search"
                  width={20}
                  height={20}
                  className="pointer-events-none"
                />
              </div>
            </button>
          </div>
        </form>
      </section>
    </HelpWrapper>
  );
};

export default HeroHelp;
