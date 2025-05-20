import Image from "next/image";
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

      <div className="flex relative flex-col max-w-full lg:w-1/2 md:text-center mx-0 md:my-auto">
        <div className="flex flex-col w-full">
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

          <div className="buttons-container text-textWhite w-[80%] md:self-center">
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
      <Image
      src="/assets/images/services/arrowScroll.svg"
      width={10}
      height={10}
      alt="Scroll Down Arrow"
      className="object-contain self-center w-4 h-4 mt-9 rounded-none"
    />
    </section>
  );
};

export default HeroServices;
