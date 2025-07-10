import React from "react";
import WhoWeServe from "../../components/common/shared/WhoWeServe";
import ServiceLayout from "../../components/features/whoweserve/ServiceLayout";
import LocaleProvider from "@/app/components/common/shared/LocaleProvider";

export const metadata = {
  title: "SIDA - Who We Serve",
  description:
    "Discover how SIDA helps businesses across different industries optimize their operations with our comprehensive restaurant management solutions.",
  icons: {
    icon: "/assets/images/home/svgs/S-Icon.svg",
  },
};

const Page = async ({ params }) => {
  return (
    <main className="section-style pt-18 md:pt-26 lg:pt-30">
      <LocaleProvider params={params}>
        <WhoWeServe />
        <ServiceLayout />
      </LocaleProvider>
    </main>
  );
};

export default Page;
