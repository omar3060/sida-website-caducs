import Image from "next/image";
import Link from "next/link";
import React from "react";
import SVG from "react-inlinesvg";
import { FooterData } from "@/data/footerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = async ({ params }) => {
  const locale = params?.locale || "en";

  const isArabic = locale === "ar";

  const { section, images, dataFooter, dataSocial } = await FooterData();
  const socialArray = dataSocial.socialLinks;
  const footerLinks = dataFooter.links;
  // console.log("locale:", locale);
  // console.log("isArabic:", isArabic);
  // console.log("section:", section);
  // console.log("footerLinks:", footerLinks);

  const content = isArabic ? section.arabic.content : section.english.content;

  const downloads = [
    {
      id: 1,
      name: "Apple Store",
      image: "/assets/images/home/svgs/google-apple/apple.svg",
      link: "#",
    },
    {
      id: 2,
      name: "Google Play",
      image: "/assets/images/home/svgs/google-apple/google.svg",
      link: "#",
    },
  ];

  return (
    <footer className="overflow-hidden self-stretch pb-6 mt-3.5 w-full bg-textWhite">
      <hr className="w-full h-px bg-gray-100 border border-gray-100 border-solid" />

      <div className="x-spacing flex flex-col items-start mt-28 w-full max-md:mt-10">
        <div className="flex flex-wrap gap-5 items-start justify-between self-stretch w-full">
          <div className="flex flex-col min-w-60 w-[310px]">
            <Link href="/">
              <SVG
                src={images[0].secure_url}
                width={180}
                height={77}
                alt="Sida-Logo"
                className="w-[120px] md:w-[150px] lg:w-[180px] svg-main-color"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Link>
            <p className="text-lg leading-8 text-textGray">{content}</p>
            <div className="flex gap-6 items-center self-start mt-6 ">
              {socialArray.map((social) => (
                <Link
                  key={social.icon}
                  href={social.link}
                  aria-label={social.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svg-main-color hover:opacity-70 transition"
                >
                  <FontAwesomeIcon
                    icon={["fab", social.icon]}
                    className="w-5 h-5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <nav className="w-[115px]">
              <h3 className="text-xl font-bold leading-none text-secondaryColor">
                {isArabic ? "خدمات" : "Services"}
              </h3>
              <ul className="flex flex-col items-start mt-6 text-lg leading-none text-center text-textGray">
                {footerLinks.map((link) =>
                  link.category === "services" ? (
                    <li key={link.arabic.title} className="mt-5">
                      <Link href={link.link} className="hover:text-mainColor">
                        {isArabic ? link.arabic.title : link.english.title}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </nav>
          </div>
          <div>
            <nav className="w-[115px]">
              <h3 className="text-xl font-bold leading-none text-secondaryColor">
                {isArabic ? "الشركة" : "Company"}
              </h3>
              <ul className="flex flex-col items-start mt-6 text-lg leading-none text-center text-textGray">
                {footerLinks.map((link) =>
                  link.category === "company" ? (
                    <li key={link.arabic.title} className="mt-5">
                      <Link href={link.link} className="hover:text-mainColor">
                        {isArabic ? link.arabic.title : link.english.title}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </nav>
          </div>
          <div>
            <nav className="w-[115px]">
              <h3 className="text-xl font-bold leading-none text-secondaryColor">
                {isArabic ? "الدعم" : "Support"}
              </h3>
              <ul className="flex flex-col items-start mt-6 text-lg leading-none text-center text-textGray">
                {footerLinks.map((link) =>
                  link.category === "support" ? (
                    <li key={link.arabic.title} className="mt-5">
                      <Link href={link.link} className="hover:text-mainColor">
                        {isArabic ? link.arabic.title : link.english.title}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col text-lg leading-none  text-textGray w-[227px]">
            <h3 className="self-start text-xl font-bold leading-none text-secondaryColor">
              {isArabic ? "تواصل معنا" : "Contact us"}
            </h3>
            {footerLinks
              .filter((link) => link.category === "contactus")
              .map((link, index) => (
                <Link
                  key={link.arabic.title}
                  href={link.link}
                  className={`flex items-center mt-${index === 0 ? 9 : 6} ${index === -1 ? "leading-1" : "leading-8"} hover:text-mainColor`}
                >
                  {isArabic ? link.arabic.title : link.english.title}
                </Link>
              ))}
            
          </div>

          {/* <div className="flex flex-col text-lg leading-none text-textGray w-[227px]">
            <h3 className="self-start text-xl font-bold leading-none text-secondaryColor">
              Contact us
            </h3>
            <Link
              href={`mailto:${contact.email}`}
              className="flex items-center mt-11 hover:text-mainColor max-md:mt-10"
            >
              {contact.email}
            </Link>
            <Link
              href={`tel:${contact.phone}`}
              className="flex items-center mt-6 hover:text-mainColor"
            >
              {contact.phone}
            </Link>
            <address className="flex gap-2 items-start mt-6 leading-8 not-italic max-md:mr-0.5">
              <p className="text-textGray w-[250px]">
                {contact.address.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < contact.address.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </address>
          </div> */}

          <div className="download flex flex-row md:flex-col gap-4 ">
            {downloads.map((download) => (
              <Link key={download.id} href={download.link}>
                <Image
                  src={download.image}
                  className="object-contain w-[160px] md:w-full rounded-[22px] md:rounded-[30px] lg:rounded-[20px] bg-black"
                  width={100}
                  height={100}
                  alt="Download"
                  style={{ width: "auto ", height: "auto" }}
                />
              </Link>
            ))}
          </div>
        </div>

        <hr className="shrink-0 mt-28 ml-7 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 w-[1241px] max-md:mt-10" />

        <div className="flex flex-wrap gap-5 justify-between mt-6 ml-9 max-w-full text-lg leading-loose w-[1218px]">
          <p className="text-textGray">
            {isArabic
              ? `جميع الحقوق محفوظة © ${new Date().getFullYear()} BRIX Templates`
              : `Copyright © ${new Date().getFullYear()} BRIX Templates`}
          </p>
          <div className="text-center md:text-right text-textGray mr-[84px] ">
            {isArabic ? "جميع الحقوق محفوظة" : "All Rights Reserved"} |{" "}
            <Link href="#" className="underline text-mainColor">
              {isArabic ? "الشروط والأحكام" : "Terms and Conditions"}
            </Link>{" "}
            |{" "}
            <Link href="#" className="underline text-mainColor">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
