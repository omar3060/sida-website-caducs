"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RotatingGradientCircleLeft from "./RotatingGradientCircleLeft";


const DownloadSida = () => {
  return (
    <section className="section-style x-spacing relative">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="w-full md:w-[45%] lg:w-[40%] order-2 md:order-1 relative z-10">
        
          <Image
            src="/assets/images/home/svgs/app-preview.svg"
            alt="App preview"
            width={500}
            height={300}
            className="object-contain w-full"
          />
        </div>
        <div className="hidden lg:block relative w-0 ">
          <RotatingGradientCircleLeft />
        </div>
        <div className="w-full md:w-[55%] lg:w-[60%] md:mb-50 order-1 md:order-2">
          <div className="flex flex-col self-stretch xl:gap-5">
            <h2 className=" main-heading text-center md:text-left">
              <span className="text-secondaryColor">Download</span>{" "}
              <span className="text-mainColor">SIDA</span>{" "}
              <span className="text-secondaryColor relative inline-block">
                App
                <Image
                  src="/assets/images/home/svgs/downloadSidaVector.svg"
                  className="object-contain mt-1 md:mt-2 pr-3 lg:mt-3 w-[100px] md:w-[150px] lg:w-[200px]"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>
            </h2>
            <p className="main-paragraph md:w-[80%] text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              placerat eget est sed fringilla. Etiam vestibulum ex non elit
              blandit commodo. Vestibulum sodales neque erat, a porta diam
              aliquet vel. Ut
            </p>
            <div className="download flex flex-col  md:flex-row items-center mt-10 md:mt-15 gap-4">
              <Link href="#" className="md:w-[500px]">
                <Image
                  src="/assets/images/home/svgs/google-apple/apple.svg"
                  className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-blackColor"
                  width={100}
                  height={100}
                  alt="Download"
                />
              </Link>

              <Link href="#" className="md:w-[500px]">
                <Image
                  src="/assets/images/home/svgs/google-apple/google.svg"
                  className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-blackColor"
                  width={100}
                  height={100}
                  alt="Download"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
            src="/assets/images/home/svgs/halfCircleRight.svg"
            className="absolute w-[200px] sm:w-[250px] h-[450px] left-[-32px] sm:left-[-32px] md:left-[-383px] -bottom-10 sm:-bottom-20  md:w-[1000px] md:top-[294px] lg:hidden block overflow-hidden "
            alt="Hero illustration"
            width={500}
            height={300}
          />

    </section>
  );
};

export default DownloadSida;


