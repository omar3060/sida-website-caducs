"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./contactVector.module.css";
import SVG from "react-inlinesvg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";
import { useLocale } from "next-intl";
const ContactForm = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const options = useMemo(() => countryList().getData(), []);

  return (
    <section className="section-style x-spacing xl:px-40 mx-auto">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="w-full md:w-[50%] lg:w-[45%] order-2 md:order-1 relative z-10">
          <form className="flex flex-col gap-4 p-6 md:p-8 bg-textWhite text-secondaryColor rounded-[24px] shadow-xl relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  First Name *
                </label>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
                <p
                  className="error-message text-red-500 text-xs mt-1"
                  id="firstName-error"
                ></p>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  Last Name *
                </label>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
                <p
                  className="error-message text-red-500 text-xs mt-1"
                  id="lastName-error"
                ></p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Email *
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
              />
              <p
                className="error-message text-red-500 text-xs mt-1"
                id="email-error"
              ></p>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Phone Number *
              </label>
              <PhoneInput
                country={"sa"}
                enableSearch={true}
                inputProps={{
                  required: true,
                  dir: isArabic ? "rtl" : "ltr",
                }}
                containerClass={`phone-input-container ${
                  isArabic ? "rtl" : "ltr"
                }`}
                inputClass="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor text-secondaryColor"
                buttonClass="phone-dropdown-button"
                dropdownClass="phone-dropdown"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Business Name *
              </label>
              <input
                name="businessName"
                type="text"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
              />
              <p
                className="error-message text-red-500 text-xs mt-1"
                id="businessName-error"
              ></p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  Number of CDS *
                </label>
                <input
                  name="cdsCount"
                  type="number"
                  required
                  min="1"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
                <p
                  className="error-message text-red-500 text-xs mt-1"
                  id="cdsCount-error"
                ></p>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1 whitespace-nowrap">
                  Number of KDS *
                </label>
                <input
                  name="kdsCount"
                  type="number"
                  required
                  min="1"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
                <p
                  className="error-message text-red-500 text-xs mt-1"
                  id="kdsCount-error"
                ></p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Country Name *
              </label>
              <select
                name="country"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor bg-textWhite"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input
                type="checkbox"
                name="termsAccepted"
                required
                className="mt-1"
              />
              <label className="text-xs text-secondaryColor">
                By checking this box, I confirm that I have read, understood and
                agree to the Terms and Conditions. *
              </label>
            </div>
            <p
              className="error-message text-red-500 text-xs mt-1"
              id="termsAccepted-error"
            ></p>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="privacyAccepted"
                required
                className="mt-1"
              />
              <label className="text-xs text-secondaryColor">
                By using this form you agree with the storage and handling of
                your data by this website in accordance with our Privacy Policy
                *
              </label>
            </div>
            <p
              className="error-message text-red-500 text-xs mt-1"
              id="privacyAccepted-error"
            ></p>

            <button
              type="submit"
              className="w-[120px] mt-4 px-6 py-2 bg-mainColor text-textWhite rounded-xl hover:bg-lightBlue transition-colors"
            >
              Submit
            </button>
            <Image
              src="/assets/images/home/svgs/contactVector.svg"
              width={500}
              height={300}
              alt="Contact Vector"
              unoptimized
              className={`absolute top-[-35px] -left-[20px] md:top-[-55px] md:-left-[20px] w-[100] md:w-[132px] -z-10 ${styles.vectorIcon}`}
            />
          </form>
        </div>

        <div className="w-full md:w-[50%] lg:w-[55%] order-2 flex flex-col items-center">
          <SVG
            src="/assets/images/home/svgs/sida-logo.svg"
            width={500}
            height={300}
            alt="Sida-Logo"
            className="w-[200px] md:w-[292px] h-auto mb-8 svg-main-color"
          />
                    <h2 className="main-heading text-center text-secondaryColor">
                  {"Request a free demo of SIDA restaurant management system".split(' ').map((word, index) => (
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
      </h2>
          {/* <h2 className="main-heading text-center text-secondaryColor">
            <span className="text-mainColor">Request</span> a free demo of{" "}
            <span className="text-mainColor">SIDA</span> restaurant management
            system
          </h2> */}
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

        /* RTL Support */
        .phone-input-container.rtl .form-control {
          padding-right: 48px;
          padding-left: 12px;
          text-align: right;
        }
        .phone-input-container.rtl .flag-dropdown {
          right: 0;
          left: auto;
        }
        .phone-input-container.rtl .selected-flag {
          border-radius: 0 0.75rem 0.75rem 0;
          border-left: 1px solid #e5e7eb;
          border-right: none;
        }
        .phone-dropdown.rtl {
          text-align: right;
        }
        .phone-dropdown.rtl .country-list {
          text-align: right;
        }
        .phone-dropdown.rtl .search-box {
          padding-right: 10px;
          padding-left: 30px;
        }
        .phone-dropdown.rtl .search-box::placeholder {
          text-align: right;
        }
          /* Phone Input Dark Mode Styles */
.dark .react-tel-input .form-control {
  background-color: var(--color-textWhite);
}

.dark .react-tel-input .selected-flag,
.dark .react-tel-input .country-list {
  background-color: var(--color-textWhite);
}

.dark .react-tel-input .country-list .country {
  color: var(--color-secondaryColor);
}

.dark .react-tel-input .country-list .country.highlight,
.dark .react-tel-input .country-list .country:hover {
  background-color: #374151;
}

.dark .react-tel-input .selected-flag:hover,
.dark .react-tel-input .selected-flag:focus {
  background-color: #374151;
}

.dark .react-tel-input .country-list .search {
  background-color: var(--color-textWhite);
}

.dark .react-tel-input .country-list .search-box {
  background-color: var(--color-textWhite);
}
      `}</style>
    </section>
  );
};

export default ContactForm;
