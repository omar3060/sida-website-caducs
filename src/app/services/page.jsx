import React from "react";

import ServicesSection from "../components/features/services/ServicesSection";
import Testimonial from "../components/features/services/Testimonial";
import Features from "../components/common/shared/Features";
import HeroServices from "../components/features/services/HeroServices";

export const metadata = {
  title: "SIDA - Services",
  description:
    "Explore SIDA's comprehensive suite of restaurant management services. From POS systems to inventory management, discover solutions designed to streamline your operations.",
  icons: {
    icon: "/assets/images/home/svgs/S-Icon.svg",
  }
};

const ServicesPage = () => {
  return (
    <main>
      <HeroServices />
      <Features />
      <ServicesSection />
      <Testimonial />
    </main>
  );
};

export default ServicesPage;
