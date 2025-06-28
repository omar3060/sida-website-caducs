import React from "react";
import PricingSection from "../../components/features/pricing/PricingSection";

export const metadata = {
  title: "SIDA - Pricing Plans",
  description:
    "Choose the perfect pricing plan for your restaurant management needs with SIDA. Explore our flexible pricing options designed to fit businesses of all sizes.",
  icons: {
    icon: "/assets/images/home/svgs/S-Icon.svg",
  },
};

const PricingPlans = async ({ searchParams, params }) => {
  const locale = params?.locale || "en";
  return (
    <main>
      <PricingSection searchParams={searchParams} locale={locale} />
    </main>
  );
};

export default PricingPlans;
