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
        className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-mainColor rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <ul className={`md:hidden ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-textWhite p-4' : 'hidden'}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="block py-2 text-[#17242A] hover:text-mainColor font-medium transition-colors text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <ResourcesDropdown />
      </ul>
    </>
  );
}