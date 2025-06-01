// src/app/components/menus/ResourcesDropdown.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ResourcesDropdown({ closeMobileMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => {
    setIsOpen(false);
    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <li className="relative">
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center text-secondaryColor hover:text-mainColor font-medium transition-colors md:text-base lg:text-xl"
      >
        Resources
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        className={`absolute z-10 ${
          isOpen ? "block" : "hidden"
        } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-0`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul className="py-2 text-sm text-gray-700 ">
          <li>
            <Link
              href="/help"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-mainColor"
              onClick={closeDropdown}
            >
              Help Center
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-mainColor"
              onClick={closeDropdown}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
}
