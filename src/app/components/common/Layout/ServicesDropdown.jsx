"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import servicesData from "@/app/data/services.json";

export default function ServicesDropdown({ closeMobileMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
    if (closeMobileMenu) closeMobileMenu();
  };

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Link
        href="/services"
        className="text-secondaryColor hover:text-mainColor font-medium transition-colors md:text-base lg:text-lg 2xl:text-xl whitespace-nowrap inline-flex"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => {
          if (closeMobileMenu) closeMobileMenu();
        }}
      >
        <span className="flex items-center cursor-pointer">
          Services
          <svg
            className="w-2.5 h-2.5 ml-2.5 transition-transform hidden md:block"
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
        </span>
      </Link>
      <div
        className={`absolute z-10 mt-0 ${
          isOpen ? "block" : "hidden"
        } font-normal bg-textWhite divide-y divide-gray-100 rounded-lg shadow-md w-44`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul className="py-2 text-sm text-secondaryColor">
          {servicesData.map((service) => (
            <li key={service.id}>
              <Link
                href={service.path}
                className="block px-4 py-2 hover:bg-cardColor hover:text-mainColor"
                onClick={closeDropdown}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
