import React from "react";
import Image from "next/image";
import styles from './contactVector.module.css';

const ContactForm = () => {
  return (
    <section className="flex flex-col w-full x-spacing xl:px-40 mx-auto">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center mt-20 md:mt-32 lg:mt-40">
        <div className="w-full md:w-[50%] lg:w-[45%] order-2 md:order-1 relative z-10">
          <form className="flex flex-col gap-4 p-6 md:p-8 bg-white rounded-[24px] shadow-xl relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-[120px]">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Phone Numbers
                </label>
                <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600 bg-white">
                  <option>Egypt (+20)</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  &nbsp;
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Number of branches
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Country Name
              </label>
              <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-600 bg-white">
                <option>Egypt</option>
              </select>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" className="mt-1" />
              <label className="text-xs text-gray-600">
                By checking this box, I confirm that I have read, understood and
                agree to the Terms and Conditions.
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label className="text-xs text-gray-600">
                By using this form you agree with the storage and handling of
                your data by this website in accordance with our Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-[120px] mt-4 px-6 py-2 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors"
            >
              Submit
            </button>
            <Image
              src="/svgs/contactVector.svg"
              width={500}
              height={300}
              alt="Contact Vector"
              unoptimized
              className={`absolute top-[-35px] -left-[45px] md:top-[-55px] md:-left-[54px] w-[100] md:w-[132px] -z-10 ${styles.vectorIcon}`}
            />
          </form>
        </div>

        <div className="w-full md:w-[50%] lg:w-[55%] order-2 flex flex-col items-center">
          <Image
            src="/svgs/sida-logo.svg"
            width={500}
            height={300}
            alt="Sida-Logo"
            className="w-[200px] md:w-[292px] h-auto mb-8"
          />
          {/* className="w-[180px] h-auto mb-8" */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            <span className="text-[#018ED5]">Request</span> a free demo of{" "}
            <span className="text-[#018ED5]">SIDA</span> restaurant management
            system
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;