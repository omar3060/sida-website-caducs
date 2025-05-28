import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="overflow-hidden self-stretch pb-6 mt-3.5 w-full bg-textWhite">
      <hr className="w-full h-px bg-gray-100 border border-gray-100 border-solid" />

      <div className="x-spacing flex flex-col items-start mt-28 w-full max-md:mt-10">
        <div className="flex flex-wrap gap-5 items-start justify-between self-stretch w-full">
          {/* Logo and social section */}
          <div className="flex flex-col min-w-60 w-[310px]">
            <Link href="/">
              <Image
                src="/assets/images/home/svgs/sida-logo.svg"
                width={500}
                height={300}
                alt="Sida-Logo"
                className="w-[120px] h-[50px] md:w-[150px] md:h-[58.588px] lg:w-[180px] lg:h-[77.177px]"
              />
            </Link>
            <p className="text-lg leading-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <div className="flex gap-6 items-center self-start mt-6 ">
              <Image
                src="/assets/images/home/svgs/social-icons/facebook.svg"
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.58] w-[11px]"
                alt="Facebook"
                width={11}
                height={21}
              />
              <Image
                src="/assets/images/home/svgs/social-icons/x.svg"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.27] w-[19px]"
                alt="Twitter"
                width={11}
                height={21}
              />
              <Image
                src="/assets/images/home/svgs/social-icons/insta.svg"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[19px]"
                alt="Instagram"
                width={11}
                height={21}
              />
              <Image
                src="/assets/images/home/svgs/social-icons/linkedin.svg"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[19px]"
                alt="LinkedIn"
                width={11}
                height={21}
              />
              <Image
                src="/assets/images/home/svgs/social-icons/youtube.svg"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.4] w-[21px]"
                alt="YouTube"
                width={11}
                height={21}
              />
            </div>
          </div>

          {/* Navigation sections */}
          <nav className="w-[115px]">
            <h3 className="text-xl font-bold leading-none text-indigo-950">
              Product
            </h3>
            <ul className="flex flex-col items-start mt-10 text-lg leading-none text-center text-slate-500">
              <li>
                <Link href="#features" className="hover:text-mainColor">
                  Features
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#pricing" className="hover:text-mainColor">
                  Pricing
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#case-studies" className="hover:text-mainColor">
                  Case Studies
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#reviews" className="hover:text-mainColor">
                  Reviews
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#updates" className="hover:text-mainColor">
                  Updates
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <h3 className="text-xl font-bold leading-none text-indigo-950">
              Company
            </h3>
            <ul className="flex flex-col items-start mt-10 text-lg leading-none text-center text-slate-500">
              <li>
                <Link href="#about" className="hover:text-mainColor">
                  About
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#contact" className="hover:text-mainColor">
                  Contact us
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#careers" className="hover:text-mainColor">
                  Careers
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#culture" className="hover:text-mainColor">
                  Culture
                </Link>
              </li>
              <li className="mt-5">
                <Link href="/blog" className="hover:text-mainColor">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <h3 className="text-xl font-bold leading-none text-indigo-950">
              Support
            </h3>
            <ul className="flex flex-col items-start mt-10 text-lg leading-none text-center text-slate-500">
              <li>
                <Link href="#getting-started" className="hover:text-mainColor">
                  Getting started
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#help" className="hover:text-mainColor">
                  Help center
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#status" className="hover:text-mainColor">
                  Server status
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#report" className="hover:text-mainColor">
                  Report a bug
                </Link>
              </li>
              <li className="mt-5">
                <Link href="#chat" className="hover:text-mainColor">
                  Chat support
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact section */}
          <div className="flex flex-col text-lg leading-none text-slate-500 w-[227px]">
            <h3 className="self-start text-xl font-bold leading-none text-indigo-950">
              Contact us
            </h3>
            <Link
              href="mailto:contact@company.com"
              className="flex items-center mt-11 hover:text-mainColor max-md:mt-10"
            >
              contact@company.com
            </Link>
            <Link
              href="tel:(414)687-5892"
              className="flex items-center mt-6 hover:text-mainColor"
            >
              (414) 687 - 5892
            </Link>
            <address className="flex gap-2 items-start mt-6 leading-8 not-italic max-md:mr-0.5">
              <p className="text-slate-500 w-[198px]">
                794 Mcallister St
                <br />
                San Francisco, 94102
              </p>
            </address>
          </div>
          <div className="download flex flex-row md:flex-col gap-4 ">
            <Link href="#">
              <Image
                src="/assets/images/home/svgs/google-apple/apple.svg"
                className="object-contain w-[160px] md:w-full rounded-[22px] md:rounded-[30px] lg:rounded-[20px] bg-black"
                width={100}
                height={100}
                alt="Download"
              />
            </Link>

            <Link href="#">
              <Image
                src="/assets/images/home/svgs/google-apple/google.svg"
                className="object-contain w-[160px] md:w-full rounded-[22px] md:rounded-[34px] lg:rounded-[20px] bg-black"
                width={100}
                height={100}
                alt="Download"
              />
            </Link>
          </div>
        </div>

        <hr className="shrink-0 mt-28 ml-7 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 w-[1241px] max-md:mt-10" />

        <div className="flex flex-wrap gap-5 justify-between mt-6 ml-9 max-w-full text-lg leading-loose w-[1218px]">
          <p className="text-slate-500">Copyright © 2022 BRIX Templates</p>
          <div className="text-center md:text-right text-slate-500 mr-[84px] ">
            All Rights Reserved |{" "}
            <Link href="#terms" className="underline text-mainColor">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link href="#privacy" className="underline text-mainColor">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
