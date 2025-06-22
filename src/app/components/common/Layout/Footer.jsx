import Image from "next/image";
import Link from "next/link";
import React from "react";
import SVG from "react-inlinesvg";
import footerData from "../../../data/footer.json";

const Footer = () => {
  const {
    logo,
    description,
    socialMedia,
    navigation,
    contact,
    downloads,
    copyright,
  } = footerData;

  return (
    <footer className="overflow-hidden self-stretch pb-6 mt-3.5 w-full bg-textWhite">
      <hr className="w-full h-px bg-gray-100 border border-gray-100 border-solid" />

      <div className="x-spacing flex flex-col items-start mt-28 w-full max-md:mt-10">
        <div className="flex flex-wrap gap-5 items-start justify-between self-stretch w-full">
          
          <div className="flex flex-col min-w-60 w-[310px]">
            <Link href="/">
              <SVG
                src={logo.path}
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
            <p className="text-lg leading-8 text-textGray">{description}</p>
            <div className="flex gap-6 items-center self-start mt-6 ">
              {socialMedia.map((social) => (
                <Link key={social.id} href={social.link}>
                  <SVG
                    src={social.icon}
                    className="object-contain shrink-0 self-stretch my-auto w-[11px] svg-main-color"
                    alt="social icon"
                    width={21}
                    height={15}
                    style={{
                      width: "19px",
                      height: "18px",
                      display: "block",
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {navigation.map((nav) => (
            <nav key={nav.id} className={nav.id === 1 ? "w-[115px]" : ""}>
              <h3 className="text-xl font-bold leading-none text-secondaryColor">
                {nav.title}
              </h3>
              <ul className="flex flex-col items-start mt-10 text-lg leading-none text-center text-textGray">
                {nav.links.map((link) => (
                  <li key={link.id} className={link.id > 1 ? "mt-5" : ""}>
                    <Link href={link.path} className="hover:text-mainColor">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col text-lg leading-none text-textGray w-[227px]">
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
          </div>
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
          <p className="text-textGray">{copyright.text}</p>
          <div className="text-center md:text-right text-textGray mr-[84px] ">
            {copyright.allRights} |{" "}
            <Link
              href={copyright.terms.link}
              className="underline text-mainColor"
            >
              {copyright.terms.name}
            </Link>{" "}
            |{" "}
            <Link
              href={copyright.privacy.link}
              className="underline text-mainColor"
            >
              {copyright.privacy.name}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
