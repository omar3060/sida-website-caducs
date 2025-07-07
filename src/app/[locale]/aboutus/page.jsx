import React from "react";
import AboutUsHero from "../../components/features/aboutUs/AboutUsHero";
import CidaCircle from "../../components/features/aboutUs/CidaCircle";
import HowWeWork from "../../components/features/aboutUs/HowWeWork";
import CoFounder from "../../components/features/aboutUs/CoFounder";
import Leaders from "../../components/features/aboutUs/Leaders";
import ValueAdded from "@/app/components/features/aboutUs/ValueAdded";
import LocaleProvider from "../../components/common/shared/LocaleProvider";

export const metadata = {
  title: "SIDA - About Us",
  description: "Discover SIDA about us",
  icons: {
    icon: "/assets/images/home/svgs/S-Icon.svg",
  },
};

const AboutUs = async ({ params }) => {
  return (
    <main>
      <LocaleProvider params={params}>
        <AboutUsHero />
        <CidaCircle />
        <HowWeWork />
        <ValueAdded />
        <CoFounder />
        <Leaders />
      </LocaleProvider>
    </main>
  );
};

export default AboutUs;
