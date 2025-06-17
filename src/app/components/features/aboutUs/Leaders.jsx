import Image from "next/image";
import React from "react";
import { leaders } from "./membersData";
import TeamMember from "./TeamMember";
import SVG from "react-inlinesvg";
const Leaders = () => {
  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center justify-center">
      <h2 className="main-heading mb-12 text-secondaryColor">
                  {(() => {
                    const text = "Our Leaders";
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
        {/* <h2 className="main-heading mb-12 text-secondaryColor">
          Our{" "}
          <span className="relative inline-block text-mainColor">
            Leaders
            <SVG
              src="/assets/images/aboutUs/vector.svg"
              className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
              alt="underline element vector"
              width={50}
              height={30}
            />
          </span>
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 w-full max-w-[992px] justify-items-center">
          {leaders.map((employee, index) => (
            <TeamMember key={index} {...employee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
