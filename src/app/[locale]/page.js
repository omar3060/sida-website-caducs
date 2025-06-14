import React from "react";
import Hero from "../components/features/home/hero/Hero";
import Features from "@/app/components/common/shared/Features";
import Partners from "@/app/components/features/home/partners/Partners";
import FeaturesTables from "@/app/components/features/home/FeaturesTables";
import ServicesSlider from "@/app/components/features/home/serviceSlider/ServicesSlider";
import WhoWeServe from "@/app/components/common/shared/WhoWeServe";
import ImageComparison from "@/app/components/features/home/ImageComparison";
import DownloadSida from "@/app/components/features/home/DownloadSida/DownloadSida";
import ContactForm from "@/app/components/common/shared/ContactForm/ContactForm";
import PricingSection from "@/app/components/features/home/PricingSection";
import SidaOffers from "../components/features/home/SidaOffers/SidaOffers";

export const metadata = {
  title: "SIDA",
  description:
    "Discover SIDA's innovative POS and restaurant management solutions designed to simplify your operations and boost efficiency. Streamline your restaurant operations with our all-in-one platform.",
  icons: {
    icon: "/assets/images/home/svgs/S-Icon.svg",
  },
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Partners />
      <FeaturesTables />
      <SidaOffers />
      <WhoWeServe />
      <ImageComparison />
      <ServicesSlider />
      <DownloadSida />
      <ContactForm />
      <PricingSection />
    </div>
  );
};

export default Home;
