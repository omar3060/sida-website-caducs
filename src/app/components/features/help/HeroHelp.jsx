import Image from "next/image";
import React from "react";

const HeroHelp = () => {
  return (
    <section className="section-style x-spacing w-full h-[400px] mt-20  bg-mainColor text-textWhite text-center justify-center items-center flex-col gap-15 py-[50px]">
      <h1 className="main-heading">Hello! How We May Help You?</h1>
      <p className="main-paragraph mt-0 mr-0">The Complete Guide to Foodics Products and Services</p>

      <form className="mx-auto flex items-center justify-center">
        <div className="relative">
          
          <input
            type="search"
            id="default-search"
            className="bg-textWhite text-secondaryColor rounded-2xl outline-0 w-[350px] md:w-[400px] h-[35px] pl-3"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="flex justify-end absolute end-0 -top-2.5 m-2.5 h-full w-8 text-mainColor"
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
  );
};

export default HeroHelp;
