"use client";

import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`bg-primary text-foreground rounded-full flex-shrink-0 border-2 ${
        theme === "light" ? "border-[#018ed5]" : "border-[#53a29d]"
      }`}
    >
      {theme === "light" ? (
        <Image
          src="/assets/images/moonLight.svg"
          width={100}
          height={100}
          alt="lightTheme"
          className="p-1 w-[22px] h-[22px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[25px] lg:h-[25px]"
        />
      ) : (
        <Image
          src="/assets/images/moonDark.svg"
          width={100}
          height={100}
          alt="darkTheme"
          className="p-1 w-[22px] h-[22px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[25px] lg:h-[25px]"
        />
      )}
    </button>
  );
}
