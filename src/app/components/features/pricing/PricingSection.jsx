import React from "react";
import { PricingToggle } from "./PricingToggle";
import PricingCard from "./PricingCard";

const PricingSection = async ({ searchParams }) => {
  const billing = (await searchParams)?.billing ?? "quarterly"; 
  const isYearly = billing === "yearly";
  const pricingPlans = [
    {
      title: "Start",
      price: "19",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringill",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      activeFeatures: [0, 1],
    },
    {
      title: "Enterprise",
      price: "49",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringill",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      isHighlighted: true,
      activeFeatures: [0, 1, 2],
    },
    {
      title: "Enterprise",
      price: "99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringill",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      activeFeatures: [0, 1, 2, 3],
    },
  ];

  return (
    <section className="section-style x-spacing mb-15">
      <h2 className="main-heading self-center text-secondaryColor text-center">
                   {"Choose the Perfect Plan for you".split(' ').map((word, index) => (
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
      </h2>
      {/* <h2 className="main-heading self-center text-mainColor text-center">
        Choose <span className="text-secondaryColor">the Perfect </span> Plan{" "}
        <span className="text-secondaryColor relative inline-block">
          for you
        </span>
      </h2> */}
      <p className="main-paragraph self-center text-center text-secondaryColor w-full md:w-[70%] lg:w-[30%] mr-0">
        We designed our billing plans & features to fit your financial and
        operational requirements.
      </p>
      <PricingToggle />
      <div className="box-border flex flex-wrap relative gap-6 justify-center p-0 m-0 max-md:flex-col max-md:items-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            price={isYearly ? String(Number(plan.price) * 10) : plan.price}
            isYearly={isYearly}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
