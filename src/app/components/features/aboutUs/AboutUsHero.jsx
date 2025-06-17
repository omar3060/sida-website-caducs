import Image from 'next/image'
import React from 'react'
import SVG from "react-inlinesvg";


const AboutUsHero = () => {
  return (
    <section id="services" className="section-style x-spacing">
    <div className="">
      <div className="flex flex-col md:flex-row gap-5 justify-center">

        <div className="w-full md:w-[50%] flex items-center md:ml-5 order-2 md:order-1">
          <div className="flex flex-col self-stretch my-auto text-secondaryColor">
          <h2 className="main-heading text-center md:text-left">
                  {(() => {
                    const text = "Who We Are";
                    const words = text.split(" ");
                    return words.map((word, index) => {
                      if (index === words.length - 1) {
                        return (
                          <span key={index} className={`relative inline-block ${index % 2 === 0 ? 'text-mainColor' : ''}`}>
                            {word}
                            <SVG
                              src="/assets/images/home/svgs/hero-vector.svg"
                              className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
                              alt="underline element vector"
                              width={50}
                              height={30}
                            />
                          </span>
                        );
                      }
                      return (
                        <span key={index} className={index % 2 === 0 ? 'text-mainColor' : 'text-secondaryColor'}>
                          {word}{' '}
                        </span>
                      );
                    });
                  })()}
            </h2>
            {/* <h2 className="main-heading text-center md:text-left">
             Who{" "}
              <span className="text-mainColor">We{" "}</span>
              <span className="relative inline-block">
                Are?
                <SVG
                  src="/assets/images/aboutUs/vector.svg"
                  className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
                  alt="underline element vector"
                  width={50}
                  height={30}
                />
              </span>
            </h2> */}
            <p className="main-paragraph text-center md:text-left">
            SIDA is a rapidly growing SaaS company disrupting the restaurant industry. Our cloud-based software provides a unique, all-in-one accounting, store operations, and workforce solution for restaurants. We are passionate about the restaurant industry and are dedicated to facilitating optimal productivity and profitability for restaurants everyday.
            </p>
          </div>
        </div>
        <div className="relative order-2 md:order-2 w-full md:w-[45%] lg:w-[40%]">
            <Image
              src="/assets/images/aboutUs/aboutUs-hero.svg"
              alt="Feature illustration"
              className="object-contain self-stretch my-auto w-full"
              width={100}
              height={100}
            />
            <SVG
              src="/assets/images/home/svgs/featuresTables/firstTableVector.svg"
              alt="Feature illustration"
              className="object-contain w-[131.75px] h-[131.75px] absolute bottom-[-47px] left-[-20px] lg:left-[-46px] z-[-1] svg-main-color"
              width={100}
              height={100}
            />
          </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUsHero