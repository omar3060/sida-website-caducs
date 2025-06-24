"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const PricingToggle = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const billing = searchParams.get("billing") || "quarterly";

  const handleBillingChange = (newBillingType) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("billing", newBillingType);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="x-spacing">
      <div className="box-border flex gap-5 justify-center items-center p-0 m-0 mb-10 max-sm:flex-col">
        <div className="flex items-center space-x-8">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="billing"
              value="monthly"
              checked={billing === "monthly"}
              onChange={() => handleBillingChange("monthly")}
              className="form-radio h-4 w-4 text-mainColor"
            />
            <span className="ml-2 text-sm font-medium text-secondaryColor">
              Monthly
            </span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="billing"
              value="quarterly"
              checked={billing === "quarterly"}
              onChange={() => handleBillingChange("quarterly")}
              className="form-radio h-4 w-4 text-mainColor"
            />
            <span className="ml-2 text-sm font-medium text-secondaryColor">
              Quarterly
            </span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="billing"
              value="yearly"
              checked={billing === "yearly"}
              onChange={() => handleBillingChange("yearly")}
              className="form-radio h-4 w-4 text-mainColor"
            />
            <span className="ml-2 text-sm font-medium text-secondaryColor">
              Yearly
            </span>
            <span className="text-sm font-medium text-mainColor ml-1">
              ( Save 17% )
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
