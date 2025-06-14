// src/app/components/menus/Navbar.jsx
import React from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import MobileMenuToggle from "./MobileMenuToggle";
import ResourcesDropdown from "./ResourcesDropdown";
import ThemeToggle from "../shared/ThemeToggle";
import SVG from "react-inlinesvg";
import LanguageToggle from "../shared/LanguageToggle";



export default async function Navbar() {
  const t = await getTranslations("navigation");

  const navLinks = [
    // { name: "Products", path: "/products" },
    { name: t("services"), path: "/services" },
    { name: t("aboutUs"), path: "/aboutus" },
    { name: t("whoWeServe"), path: "/whoweserve" },
    { name: t("pricing"), path: "/pricing" },
  ];

  return (
    <nav className="bg-textWhite fixed w-full top-0 start-0 border-b border-gray-200 z-50 x-spacing">
      <div className="py-2 sm:py-3 md:py-4 flex items-center justify-between mx-auto">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          <Link href="/" className="flex-shrink-0">
            <SVG
              src="/assets/images/home/svgs/sida-logo.svg"
              width={180}
              height={77}
              alt="SIDA Logo"
              className="w-[70px] h-auto sm:w-[90px] md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[180px] svg-main-color"
              priority
            />
          </Link>
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-secondaryColor hover:text-mainColor font-medium transition-colors md:text-base lg:text-lg 2xl:text-xl whitespace-nowrap px-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <ResourcesDropdown />
          </ul>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-3">
          <ThemeToggle />
          <LanguageToggle />
          
          <Link href="/pricing/subscription">
            {" "}
            <button className="border-mainColor text-mainColor hover:bg-mainColor hover:text-textWhite transition-colors duration-300 px-1 sm:px-2 md:px-2 lg:px-5 xl:px-8 py-2 border rounded-xl text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </Link>

          <Link href="https://sida-2025.netlify.app/auth/login" target="_blank">
            <button className="border-mainColor text-mainColor hover:bg-mainColor hover:text-textWhite transition-colors duration-300 px-1 sm:px-2 md:px-2 lg:px-5 xl:px-8 py-2 border rounded-xl text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base cursor-pointer whitespace-nowrap">
              Login
            </button>
          </Link>
          <MobileMenuToggle navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
