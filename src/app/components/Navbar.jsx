"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="x-spacing px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/">
            <Image
              src="/svgs/sida-logo.svg"
              width={500}
              height={300}
              alt="Sida-Logo"
              className="w-[64px] h-[25px] md:w-[150px] md:h-[58.588px] lg:w-[180px] lg:h-[77.177px]"
            />
          </Link>
          <ul className={`md:flex items-center gap-6 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white p-4 md:p-0 md:static md:flex-row' : 'hidden md:flex'}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-[#17242A] hover:text-[#018ED5] font-medium transition-colors md:text-base lg:text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 lg:gap-10">
          <Image
            src="/svgs/global-icon-svg.svg"
            className="rounded-full border border-black p-2 text-black w-[40px] lg:w-[50px]"
            alt="underline element vector"
            width={50}
            height={30}
          />
          <button className="border-[#018ED5] text-[#018ED5] hover:bg-[#018ED5] hover:text-white transition-colors duration-300 px-4 lg:px-10 py-1 border rounded-xl text-sm lg:text-base">
            Subscribe
          </button>
          <button className="border-[#018ED5] text-[#018ED5] hover:bg-[#018ED5] hover:text-white transition-colors duration-300 px-4 lg:px-10 py-1 border rounded-xl text-sm lg:text-base">
            Log In
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-[#018ED5] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
