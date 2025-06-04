import React from "react";
import Image from "next/image";
import styles from './contactVector.module.css';
import SVG from "react-inlinesvg";

const ContactForm = () => {
  return (
    <section className="section-style x-spacing xl:px-40 mx-auto">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="w-full md:w-[50%] lg:w-[45%] order-2 md:order-1 relative z-10">
          <form className="flex flex-col gap-4 p-6 md:p-8 bg-textWhite text-secondaryColor rounded-[24px] shadow-xl relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-[120px]">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  Phone Numbers
                </label>
                <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor bg-textWhite">
                  <option>Egypt (+20)</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  &nbsp;
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondaryColor mb-1 whitespace-nowrap">
                  Number of branches
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondaryColor mb-1">
                Country Name
              </label>
              <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-mainColor bg-textWhite">
                <option>Egypt</option>
              </select>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" className="mt-1" />
              <label className="text-xs text-secondaryColor">
                By checking this box, I confirm that I have read, understood and
                agree to the Terms and Conditions.
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label className="text-xs text-secondaryColor">
                By using this form you agree with the storage and handling of
                your data by this website in accordance with our Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-[120px] mt-4 px-6 py-2 bg-mainColor text-textWhite rounded-xl hover:bg-sky-700 transition-colors"
            >
              Submit
            </button>
            <Image
              src="/assets/images/home/svgs/contactVector.svg"
              width={500}
              height={300}
              alt="Contact Vector"
              unoptimized
              className={`absolute top-[-35px] -left-[45px] md:top-[-55px] md:-left-[54px] w-[100] md:w-[132px] -z-10 ${styles.vectorIcon}`}
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
          {/* className="w-[180px] h-auto mb-8" */}
          <h2 className="main-heading text-center text-secondaryColor">
            <span className="text-mainColor">Request</span> a free demo of{" "}
            <span className="text-mainColor">SIDA</span> restaurant management
            system
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;