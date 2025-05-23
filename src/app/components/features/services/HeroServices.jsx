import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroServices = () => {
  return (
    <section className="relative section-style x-spacing text-textWhite min-h-[100vh]">
      <Image
        src="/assets/images/services/heroImage.svg"
        fill
        alt="Hero Background"
        className="object-cover absolute inset-0 size-full"
      />

      <div className="flex relative flex-col max-w-full lg:w-1/2 text-left mx-0 my-auto ">
        <div className="flex flex-col w-full mb-[190px]">
          <h1 className="main-heading">
            Designing the Future of Point of Sale &
            <br />
            Restaurant Management Systems
          </h1>
          <p className="main-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            placerat eget est sed fringilla. Etiam vestibulum ex non elit
            blandit commodo. Vestibulum sodales neque erat, a porta diam aliquet
            vel. Ut
          </p>

          <div className="buttons-container text-textWhite w-[80%]">
            <button
              role="button"
              className="primary-button flex-1 border-textWhite text-textWhite"
            >
              Get Demo
            </button>
            <button className="primary-button flex-1 border-textWhite text-textWhite">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <a href="#services" className="mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
        <div className="border-4 border-textWhite rounded-[25px] w-[85px] lg:w-[108px] h-[140px] lg:h-[172px] flex items-center justify-center">
          <Image
            src="/assets/images/services/arrowScroll.svg"
            width={50}
            height={50}
            alt="Scroll Down Arrow"
            className="object-contain w-[40px] h-[40px] animate-bounce"
          />
        </div>
      </a>
    </section>
  );
};

export default HeroServices;
