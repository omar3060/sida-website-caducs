import React from "react";
import { servicesData } from "../../../data/servicesData";
import FeaturesService from "@/app/components/features/service/FeaturesService";
import HeroService from "@/app/components/features/service/HeroService";
import MoreFeaturesServices from "@/app/components/features/service/MoreFeaturesServices";
import RelatedServices from "@/app/components/features/service/RelatedServices";
import ContactForm from "@/app/components/common/shared/ContactForm/ContactForm";

export async function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.id === params.serviceId);

  if (!service) {
    return {
      title: "Service Not Found - SIDA",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.hero.title} - SIDA Services`,
    description: service.hero.description,
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    serviceId: service.id,
  }));
}

export default async function Service({ params }) {
  const service = servicesData.find((s) => s.id === params.serviceId);

  return (
    <main>
      <HeroService hero={service.hero} />
      <FeaturesService
        features={service.features}
        featuresTitle={service.featuresTitle}
      />
      <MoreFeaturesServices />
      <RelatedServices currentServiceId={service.id} />
      <div className="-mt-10 md:-mt-16 lg:-mt-20">
        <ContactForm />
      </div>
    </main>
  );
}
