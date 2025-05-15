import Image from "next/image";
import React from "react";

const FeaturesTables = () => {
  return (
    <section className="flex flex-col w-full x-spacing">
      <div className="flex flex-wrap gap-10 items-center mt-10 text-gray-900 max-md:max-w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px] order-1 md:order-2">
            <h2 className="self-start text-3xl md:text-4xl lg:text-5xl font-bold">
              Stay in <span className="text-[#018ED5]">Control</span>, Whenever,{" "}
              <span className="text-[#018ED5]">Wherever</span>.
            </h2>
            <p className="mt-10 text-lg md:text-xl lg:text-2xl">
              Integrate your front of house & kitchen staff seamlessly leaving no
              room for unnecessary delays or mistakes.
            </p>
          </article>
          <div className="relative order-2 md:order-1 w-full md:w-[45%] lg:w-[40%]">
            <Image
              src="/svgs/featuresTables/firstTable.svg"
              alt="Feature illustration"
              className="object-contain self-stretch my-auto w-full"
              width={100}
              height={100}
            />
            <Image
              src="/svgs/featuresTables/firstTableVector.svg"
              alt="Feature illustration"
              className="object-contain w-[131.75px] h-[131.75px] absolute bottom-[-47px] left-[-46px] z-[-1]"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 items-center mt-20 text-gray-900 max-md:max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <article className="self-stretch my-auto min-w-60 w-full md:w-[45%] lg:w-[626px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[#018ED5]">Streamline</span> Your Operations
              Even More with <span className="text-[#018ED5]">SIDA</span>
            </h2>
            <p className="mt-10 text-lg md:text-xl lg:text-2xl">
              Integrate your front of house & kitchen staff seamlessly leaving no
              room for unnecessary delays or mistakes.
            </p>
          </article>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <Image
              src="/svgs/featuresTables/secondTable.svg"
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
