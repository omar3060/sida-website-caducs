import React from "react";




import { servicesData } from "../../../data/servicesData";
import FeaturesService from "@/app/components/features/service/FeaturesService";
import HeroService from "@/app/components/features/service/HeroService";
import MoreFeaturesServices from "@/app/components/features/service/MoreFeaturesServices";
import RelatedServices from "@/app/components/features/service/RelatedServices";
import ContactForm from "@/app/components/features/home/ContactForm";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    serviceId: service.id,
  }));
}

export default async function Service({ params }) {
  const { serviceId } = await params;
  const service =  servicesData.find((s) => s.id === serviceId);

  return (
    <main>
      <HeroService hero={service.hero} />
      <FeaturesService features={service.features} featuresTitle={service.featuresTitle} />
      <MoreFeaturesServices />
      <RelatedServices currentServiceId={service.id} />
      <div className="-mt-10 md:-mt-16 lg:-mt-20">
      <ContactForm />
      </div>

    </main>
  );
}