"use client";
import Image from "next/image";
import React from "react";

const ScrollToTop = () => {
  return (
    <div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-mainColor text-textWhite px-2 py-2 md:px-4 md:py-4 rounded-full shadow-lg z-10"
      >
        <Image
          src="/assets/images/services/arrowScroll.svg"
          width={50}
          height={50}
          alt="Scroll Down Arrow"
          className="object-contain w-[30px] h-[30px] animate-bounce rotate-180 rounded-full"
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
