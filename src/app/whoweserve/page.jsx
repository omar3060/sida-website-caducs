import React from "react";
import WhoWeServe from "../components/features/home/WhoWeServe";
import ServiceLayout from "../components/features/whoweserve/ServiceLayout";

export const metadata = {
  title: 'SIDA - Who We Serve',
  description: 'Discover how SIDA helps businesses across different industries optimize their operations with our comprehensive restaurant management solutions.',
}

const Page = () => {
  return (
    <main className="section-style pt-18 md:pt-26 lg:pt-30">
      <WhoWeServe />
      <ServiceLayout />
    </main>
  );
};

export default Page;
