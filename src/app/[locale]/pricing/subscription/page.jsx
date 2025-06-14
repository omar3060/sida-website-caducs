"use client";

import React, { useState, useMemo } from "react";
import SVG from "react-inlinesvg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";

const SubscriptionForm = () => {
  const [formValid, setFormValid] = useState(true);
  const options = useMemo(() => countryList().getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      window.location.href = "/pricing/subscription/verification";
    } else {
      setFormValid(false);
    }
  };

  return (
    <section className="section-style x-spacing xl:px-40 mx-auto">
      <h2 className="main-heading text-center text-secondaryColor mb-15">
        Subscriptions <span className="text-mainColor">Form</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-[50%] relative z-10 pb-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 md:p-8 bg-textWhite text-secondaryColor rounded-[24px] shadow-xl relative"
            noValidate={!formValid}
          >
            {!formValid && (
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-700">
                  Please fill in all required fields correctly.
                </p>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Phone Number *
              </label>
              <PhoneInput
                country={"eg"}
                enableSearch={true}
                inputProps={{
                  required: true,
                  name: "phone",
                }}
                containerClass="phone-input-container"
                inputClass="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                buttonClass="phone-dropdown-button"
                dropdownClass="phone-dropdown"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Business Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  Number of CDS *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1 whitespace-nowrap">
                  Number of KDS *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Country Name *
              </label>
              <select
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor bg-textWhite"
                required
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" className="mt-1" required />
              <label className="text-xs text-secondaryColor">
                By checking this box, I confirm that I have read, understood and
                agree to the Terms and Conditions. *
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <label className="text-xs text-secondaryColor">
                By using this form you agree with the storage and handling of
                your data by this website in accordance with our Privacy Policy
                *
              </label>
            </div>

            <button
              type="submit"
              className="w-[120px] mt-4 px-6 py-2 bg-mainColor text-textWhite rounded-xl hover:bg-lightBlue transition-colors"
            >
              Submit
            </button>
            <SVG
              src="/assets/images/home/svgs/featuresTables/firstTableVector.svg"
              alt="Contact Vector"
              className="absolute top-[-35px]  -left-[20px] md:top-[-55px] md:-left-[54px] w-[100] md:w-[132px] -z-10 svg-main-color"
              width={100}
              height={100}
            />
          </form>
        </div>
      </div>

      <style jsx global>{`
        .phone-input-container {
          width: 100%;
        }
        .phone-input-container .form-control {
          width: 100%;
          height: 42px;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
        }
        .phone-input-container .form-control:focus {
          border-color: var(--color-mainColor);
          box-shadow: none;
          outline: none;
        }
        .phone-dropdown-button {
          border-top-left-radius: 0.75rem;
          border-bottom-left-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          border-right: none;
        }
        .phone-dropdown {
          width: 300px;
        }
      `}</style>
    </section>
  );
};

export default SubscriptionForm;
