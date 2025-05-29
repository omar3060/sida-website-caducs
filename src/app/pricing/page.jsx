import React from "react";
import PricingSection from "../components/features/pricing/PricingSection";

export const metadata = {
  title: 'SIDA - Pricing Plans',
  description: 'Choose the perfect pricing plan for your restaurant management needs with SIDA. Explore our flexible pricing options designed to fit businesses of all sizes.',
  icons: {
    icon: '/assets/images/home/svgs/S-Icon.svg',
  }
}

const Pricing = ({ searchParams }) => {
  return (
    <main>
      <PricingSection searchParams={searchParams} />
    </main>
  );
};

export default Pricing;
