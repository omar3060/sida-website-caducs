import Image from "next/image";
import React from "react";

const FeaturesService = () => {
  const features = [
    {
      title: "Simple & Easy Set Up",
      icon: "/assets/images/service/icon1.svg",
      description:
        "Smoothly shift to Foodics, thanks to our plug &amp; play model",
    },
    {
      title: "Real-Time Reporting & BI​",
      icon: "/assets/images/service/icon2.svg",
      description:
        "Adopt data-driven business decisions with real-time, intelligent reports and analytics",
    },
    {
      title: "Cloud-based Solution​",
      icon: "/assets/images/service/icon3.svg",
      description: "Stay in control of your business anytime, anywhere",
    },
  ];
  return (
    <section className="section-style x-spacing box-border  text-center">
      <h2 className="main-heading self-center text-mainColor text-center">
        SIDA <span className="text-secondaryColor">Restaurant</span> Point{" "}
        <span className="text-secondaryColor relative inline-block">
          of Sale Features
        </span>
      </h2>
      <div className="box-border flex gap-11 justify-center p-0 m-0 mt-10 max-md:flex-col max-md:items-center">
        {features.map((feature, index) => (
          <article className="box-border px-9 py-14 m-0 bg-white rounded-3xl shadow-[0px_69.233px_19.117px_rgba(0,0,0,0.00),0px_44.433px_17.567px_rgba(0,0,0,0.01),0px_24.8px_14.983px_rgba(0,0,0,0.05),0px_10.85px_10.85px_rgba(0,0,0,0.09),0px_2.583px_6.2px_rgba(0,0,0,0.10)] w-[285px] max-sm:w-full">
            <Image
              src={feature.icon}
              alt="Feature Icon 1"
              width={48}
              height={48}
              className="box-border p-0 m-0 mb-3 justify-self-center"
            />
            <h3 className="box-border p-0 m-0 mb-3 text-xl font-semibold text-[color:var(--text-color)]">
              {feature.title}
            </h3>
            <p className="box-border p-0 m-0 text-sm text-[color:var(--text-color)]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesService;
