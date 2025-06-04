"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const PricingToggle = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isYearly = searchParams.get("billing") === "yearly";

  const handleToggle = () => {
    const newParams = new URLSearchParams(searchParams);
    if (isYearly) {
      newParams.set("billing", "quarterly");
    } else {
      newParams.set("billing", "yearly");
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="x-spacing">
      <div className="box-border flex gap-3.5 justify-center items-center p-0 m-0 mb-10 max-sm:flex-col">
        <label className="inline-flex items-center my-5">
          <span className="me-3 text-sm font-medium text-secondaryColor">
            Quarterly
          </span>
          <input 
            type="checkbox" 
            checked={isYearly}
            onChange={handleToggle}
            className="sr-only peer" 
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lightBlue rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mainColor cursor-pointer"></div>
          <span className="ms-3 text-sm font-medium text-secondaryColor">
            Yearly
          </span>
        </label>
      </div>
    </div>
  );
};