"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import RotatingGradientCircleLeft from "./RotatingGradientCircleLeft";

const DownloadSida = () => {
  return (
    <section className="flex flex-col w-full x-spacing relative">
      <div className="flex flex-col md:flex-row gap-5 items-center mt-20 md:mt-32 lg:mt-40">
        <div className="w-full md:w-[45%] lg:w-[40%] order-2 md:order-1 relative z-10">
          <Image
            src="/svgs/app-preview.svg"
            alt="App preview"
            width={500}
            height={300}
            className="object-contain w-full"
          />
        </div>
        <div className="w-full md:w-[55%] lg:w-[60%] md:mb-50 order-1 md:order-2">
          <div className="flex flex-col self-stretch xl:gap-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              <span className="text-[#17242A]">Download</span>{" "}
              <span className="text-sky-600">SIDA</span>{" "}
              <span className="text-gray-900 relative inline-block">
                App
                <Image
                  src="/svgs/downloadSidaVector.svg"
                  className="object-contain mt-1 md:mt-2 pr-3 lg:mt-3 w-[100px] md:w-[150px] lg:w-[200px]"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>
            </h2>
            <p className="mt-4 md:mt-5 lg:mt-7 md:w-[80%] text-lg md:text-xl lg:text-2xl text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              placerat eget est sed fringilla. Etiam vestibulum ex non elit
              blandit commodo. Vestibulum sodales neque erat, a porta diam
              aliquet vel. Ut
            </p>
            <div className="download flex flex-col  md:flex-row items-center mt-10 md:mt-15 gap-4">
              <Link href="#" className="md:w-[500px]">
                <Image
                  src="/svgs/google-apple/apple.svg"
                  className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[30px] lg:rounded-[20px] bg-black"
                  width={100}
                  height={100}
                  alt="Download"
                />
              </Link>

              <Link href="#" className="md:w-[500px]">
                <Image
                  src="/svgs/google-apple/google.svg"
                  className="object-contain w-[215px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-black"
                  width={100}
                  height={100}
                  alt="Download"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <RotatingGradientCircleLeft />
    </section>
  );
};

export default DownloadSida;

{
  /* <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8 lg:mt-10">
<Link href="#" className="w-full md:w-auto">
  <Image
    src="/svgs/google-apple/apple.svg"
    className="w-full md:w-[200px] lg:w-[250px] rounded-[20px]"
    width={250}
    height={100}
    alt="Download on App Store"
  />
</Link>
<Link href="#" className="w-full md:w-auto">
  <Image
    src="/svgs/google-apple/google.svg"
    className="w-full md:w-[200px] lg:w-[250px] rounded-[20px]"
    width={250}
    height={100}
    alt="Get it on Google Play"
  />
</Link>
</div> */
}
