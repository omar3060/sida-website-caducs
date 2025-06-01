// src/app/components/menus/Navbar.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenuToggle from "./MobileMenuToggle";
import ResourcesDropdown from "./ResourcesDropdown";

const navLinks = [
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/aboutus" },
  { name: "Who We Serve", path: "/whoweserve" },
  { name: "Pricing", path: "/pricing" },
];

export default function Navbar() {
  return (
    <nav className="bg-textWhite fixed w-full z-20 top-0 start-0 border-b border-gray-200 x-spacing z-100">
      <div className="py-3 flex items-center justify-between">
        <div className="flex items-center gap-16 flex-1">
          <Link href="/">
            <Image
              src="/assets/images/home/svgs/sida-logo.svg"
              width={180}
              height={77}
              alt="SIDA Logo"
              className="w-[64px] h-[25px] md:w-[150px] md:h-[59px] lg:w-[180px] lg:h-[77px]"
            />
          </Link>
          <ul className="hidden md:flex items-center gap-6 te">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-secondaryColor hover:text-mainColor font-medium transition-colors text-sm md:text-base lg:text-xl flex flex-nowrap"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <ResourcesDropdown />
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 lg:gap-10">
          <Image
            src="/assets/images/home/svgs/global-icon-svg.svg"
            width={40}
            height={40}
            alt="Language Selector Icon"
            className="rounded-full border border-blackColor p-2 w-[40px] lg:w-[50px]"
          />
          <button className="border-mainColor text-mainColor hover:bg-mainColor hover:text-textWhite transition-colors duration-300 px-4 lg:px-10 py-1 border rounded-xl text-sm lg:text-base cursor-pointer">
            Subscribe
          </button>
          <Link href="https://sida-2025.netlify.app/auth/login" target="_blank">
            <button className="border-mainColor text-mainColor hover:bg-mainColor hover:text-textWhite transition-colors duration-300 px-4 lg:px-10 py-1 border rounded-xl text-sm lg:text-base cursor-pointer">
              Login
            </button>
          </Link>
          <MobileMenuToggle navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}