import Image from "next/image";
import React from "react";
import { coFounders } from "./membersData";
import TeamMember from "./TeamMember";
import SVG from "react-inlinesvg";
const CoFounder = () => {
  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center justify-center">
        <h2 className="main-heading mb-12">
          <span className="text-mainColor">Our</span>{" "}
          <span className="relative inline-block text-secondaryColor">
            Co-Founders
            <SVG
              src="/assets/images/aboutUs/vector.svg"
              className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%] svg-main-color"
              alt="underline element vector"
              width={50}
              height={30}
            />
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[992px] justify-items-center">
          {coFounders.map((employee, index) => (
            <div key={index} className={`${index === 0 ? 'md:col-span-2 lg:col-span-1 md:max-w-[450px] lg:max-w-none' : ''}`}>
              <TeamMember {...employee} />
            </div>
          ))}  
        </div>
      </div>
    </section>
  );
};

export default CoFounder;
