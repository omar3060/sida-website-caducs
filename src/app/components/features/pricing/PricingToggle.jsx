"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const PricingToggle = ({ isArabic = false }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const billing = searchParams.get("billing") || "quarterly";

  const arabicNumbers = (str) =>
    str.replace(/[0-9]/g, (d) =>
      String.fromCharCode(d.charCodeAt(0) + 0x0660 - 0x0030)
    );

  const monthlyLabel = isArabic ? "شهرياً" : "Monthly";
  const quarterlyLabel = isArabic ? "ربع سنوي" : "Quarterly";
  const yearlyLabel = isArabic ? "سنوي" : "Yearly";
  const saveLabel = isArabic
    ? `( وفر ${arabicNumbers("17")}٪ )`
    : "( Save 17% )";

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
            <span
              className={`${
                isArabic ? "mr-2" : "ml-2"
              } text-sm font-medium text-secondaryColor`}
            >
              {monthlyLabel}
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
            <span
              className={`${
                isArabic ? "mr-2" : "ml-2"
              } text-sm font-medium text-secondaryColor`}
            >
              {quarterlyLabel}
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
            <span
              className={`${
                isArabic ? "mr-2" : "ml-2"
              } text-sm font-medium text-secondaryColor`}
            >
              {yearlyLabel}
            </span>
            <span
              className={`${
                isArabic ? "mr-1" : "ml-1"
              } text-sm font-medium text-mainColor`}
            >
              {saveLabel}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
