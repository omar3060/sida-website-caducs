"use client";

import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-foreground rounded-md"
    >
      {theme === "light" ? (
        <Image
          src="/assets/images/moonLight.svg"
          width={100}
          height={100}
          alt="lightTheme"
          className="p-1 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px]"
        />
      ) : (
        <Image
          src="/assets/images/moonDark.svg"
          width={100}
          height={100}
          alt="darkTheme"
          className="p-1 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px]"
        />
      )}
    </button>
  );
}
