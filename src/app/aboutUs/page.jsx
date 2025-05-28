import React from "react";
import AboutUsHero from "../components/features/aboutUs/AboutUsHero";
import CidaCircle from "../components/features/aboutUs/CidaCircle";
import HowWeWork from "../components/features/aboutUs/HowWeWork";
import CoFounder from "../components/features/aboutUs/CoFounder";
import Leaders from "../components/features/aboutUs/Leaders";
import { generateMetadata } from "../components/common/shared/SEO";

export const metadata = generateMetadata({
  title: "SIDA - About Us",
  description: "Discover SIDA about us",
});

const AboutUs = () => {
  return (
    <main>
      <AboutUsHero />
      <CidaCircle />
      <HowWeWork />
      <CoFounder />
      <Leaders />
    </main>
  );
};

export default AboutUs;
