// src/app/components/menus/MobileMenuToggle.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import ResourcesDropdown from "./ResourcesDropdown";

export default function MobileMenuToggle({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="lg:hidden inline-flex items-center p-1 pr-0 focus:pr-1 w-10 h-10 justify-center text-sm text-mainColor rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-mainColor"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`lg:hidden fixed top-[60px] sm:top-[70px] md:top-[80px] left-0 w-full bg-textWhite shadow-md transition-all duration-300 z-40  ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-20px] opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 divide-y divide-gray-100">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="block py-3 text-secondaryColor hover:text-mainColor font-medium transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="py-3">
            <ResourcesDropdown closeMobileMenu={() => setIsMenuOpen(false)} />
          </div>
        </ul>
      </div>
    </>
  );
}
