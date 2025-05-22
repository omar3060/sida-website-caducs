"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
const HeroService = ({ hero }) => {
  const dashAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="section-style x-spacing mt-5">
      <div className="relative self-center">
        <Image
          src={hero.image}
          alt="Hero"
          width={773}
          height={364}
          className="box-border p-0 m-0 mb-10 h-[364px] rounded-[31.844px] w-[773px] max-md:w-full max-md:h-auto md:self-center"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={dashAnimation}
          className="absolute z-0 w-[50px] sm:w-[60px] lg:w-[85px] h-auto aspect-[0.92] bottom-0 left-[-4%] transform translate-x-0 translate-y-0 pointer-events-none"
        >
          <Image
            src="/assets/images/home/svgs/dashes.svg"
            alt="Decorative element"
            width={83}
            height={90}
            className="w-full h-full"
          />
        </motion.div>
      </div>
      <div className="box-border p-0 mx-auto my-0 w-1/2">
        <h1 className="main-heading text-secondaryColor text-center text-4xl md:text-5xl">
          {hero.title.split(" ").map((word, index) =>
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">
                {word}{" "}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h1>
        <p className="main-paragraph text-center mr-0">{hero.description}</p>
      </div>
    </section>
  );
};

export default HeroService;
