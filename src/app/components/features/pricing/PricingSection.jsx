import React from "react";
import { PricingToggle } from "./PricingToggle";
import PricingCard from "./PricingCard";
import MobilePricingCard from "./MobilePricingCard";
import { plansData } from "@/data/plansData";

const PricingSection = async ({ searchParams, locale }) => {
  const plans = await plansData();

  const billing = (await searchParams)?.billing ?? "quarterly";
  const isYearly = billing === "yearly";
  const isMonthly = billing === "monthly";

  // Base prices are quarterly
  // const pricingPlans = [
  //   {
  //     title: "Start",
  //     price: "19",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringill",
  //     features: [
  //       "Lorem ipsum dolor",
  //       "Lorem ipsum dolor",
  //       "Lorem ipsum dolor",
  //       "Lorem ipsum dolor",
  //     ],
  //     activeFeatures: [0, 1],
  //   },
  //   {
  //     title: "Enterprise",
  //     price: "49",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringill",
  //     features: [
  //       "Lorem ipsum dolor",
  //       "Lorem ipsum dolor",
  //       "Lorem ipsum dolor",
  //       "Lorem ipsum dolor",
  //     ],
  //     isHighlighted: true,
  //     activeFeatures: [0, 1, 2],
  //   },
  //   // {
  //   //   title: "Enterprise Pro",
  //   //   price: "99",
  //   //   description:
  //   //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eget est sed fringill",
  //   //   features: [
  //   //     "Lorem ipsum dolor",
  //   //     "Lorem ipsum dolor",
  //   //     "Lorem ipsum dolor",
  //   //     "Lorem ipsum dolor",
  //   //   ],
  //   //   activeFeatures: [0, 1, 2, 3],
  //   // },
  // ];

  // Helper function to calculate price based on billing period
  const calculatePrice = (basePrice) => {
    if (isYearly) {
      return String(Number(basePrice) * 10); // Annual price (10x quarterly)
    } else if (isMonthly) {
      return String(Math.round(Number(basePrice) / 3)); // Monthly price (quarterly / 3)
    }
    return basePrice; // Quarterly price (default)
  };

  const isArabic = locale === "ar";

  const pricingPlans = plans.map((plan, index) => {
    const langData = isArabic ? plan.arabic : plan.english;
    return {
      title: langData.name,
      price: String(plan.price),
      description: langData.description,
      features: langData.features,
      // isHighlighted: langData.isHighlighted,
      isHighlighted: index === 1,
      activeFeatures: plan.activeFeatures,
      key: index,
    };
  });

  return (
    <section className="section-style x-spacing mb-15">
      <h2 className="main-heading self-center text-mainColor text-center">
        {isArabic ? (
          <>
            اختر <span className="text-secondaryColor">الخطة المثالية</span>{" "}
            <span className="text-secondaryColor relative inline-block">
              لك
            </span>
          </>
        ) : (
          <>
            Choose <span className="text-secondaryColor">the Perfect </span>{" "}
            <span className="text-secondaryColor relative inline-block">
              for you
            </span>
          </>
        )}
      </h2>
      <p className="main-paragraph self-center text-center text-secondaryColor w-full md:w-[70%] lg:w-[30%] mr-0">
        {isArabic
          ? "نحن قمنا بتصميم خطط الفوتر والميزات لتناسب متطلباتك المالية والعملية."
          : "We designed our billing plans & features to fit your financial and operational requirements."}
      </p>
      <PricingToggle isArabic={isArabic} />

      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap relative gap-6 justify-center p-0 m-0">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            price={calculatePrice(plan.price)}
            isYearly={isYearly}
            isMonthly={isMonthly}
            billing={billing}
            isArabic={isArabic}
          />
        ))}
      </div>

      {/* Mobile View - Using CSS order to put Enterprise first */}
      <div className="flex flex-col md:hidden relative gap-6 items-center p-0 m-0 self-center">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`w-full ${plan.isHighlighted ? "order-first" : ""} `}
          >
            <MobilePricingCard
              {...plan}
              price={calculatePrice(plan.price)}
              isYearly={isYearly}
              isMonthly={isMonthly}
              billing={billing}
              expandedByDefault={plan.isHighlighted} // Enterprise plan is expanded by default
              isArabic={isArabic}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
