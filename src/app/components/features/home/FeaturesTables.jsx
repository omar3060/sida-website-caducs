import Image from "next/image";
import React from "react";

const FeaturesTables = () => {
  return (
    <section className="section-style x-spacing">
      <div className="flex flex-wrap gap-10 items-center mt-10 text-secondaryColor max-md:max-w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px] order-1 md:order-2">
            <h2 className="main-heading self-start">
              Stay in <span className="text-mainColor">Control</span>, Whenever,{" "}
              <span className="text-mainColor">Wherever</span>.
            </h2>
            <p className="main-paragraph">
              Integrate your front of house & kitchen staff seamlessly leaving no
              room for unnecessary delays or mistakes.
            </p>
          </article>
          <div className="relative order-2 md:order-1 w-full md:w-[45%] lg:w-[40%]">
            <Image
              src="/assets/images/home/svgs/featuresTables/firstTable.svg"
              alt="Feature illustration"
              className="object-contain self-stretch my-auto w-full"
              width={100}
              height={100}
            />
            <Image
              src="/assets/images/home/svgs/featuresTables/firstTableVector.svg"
              alt="Feature illustration"
              className="object-contain w-[131.75px] h-[131.75px] absolute bottom-[-47px] left-[-46px] z-[-1]"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 items-center mt-20 text-secondaryColor max-md:max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px]">
            <h2 className="main-heading self-start">
              <span className="text-mainColor">Streamline</span> Your Operations
              Even More with <span className="text-mainColor">SIDA</span>
            </h2>
            <p className="main-paragraph">
              Integrate your front of house & kitchen staff seamlessly leaving no
              room for unnecessary delays or mistakes.
            </p>
          </article>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <Image
              src="/assets/images/home/svgs/featuresTables/secondTable.svg"
              alt="Feature illustration"
              className="object-contain self-stretch my-auto w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTables;
