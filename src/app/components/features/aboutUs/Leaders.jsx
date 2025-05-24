import Image from "next/image";
import React from "react";
import { leaders } from "./membersData";
import TeamMember from "./TeamMember";
const Leaders = () => {
  return (
    <section className="section-style x-spacing py-6">
      <div className="flex flex-col items-center justify-center">
        <h2 className="main-heading mb-12">
          Our{" "}
          <span className="relative inline-block text-mainColor">
            Leaders
            <Image
              src="/assets/images/aboutUs/vector.svg"
              className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-0 w-[120%] md:w-[130%] lg:w-[140%]"
              alt="underline element vector"
              width={50}
              height={30}
            />
          </span>
        </h2>
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
