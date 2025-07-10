import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonialData } from "@/data/homeData";

const Testimonial = async ({ locale }) => {
  const data = await testimonialData();
  const isArabic = locale === "ar";

  console.log("Testimonial data:", data);

  // Handle case where data might be undefined or empty
  if (!data || data.length === 0) {
    return null;
  }

  const heading = data.findIndex((test) => {
    return test.arabic?.name == "header" && test.english?.name == "header";
  });

  console.log("Header index found:", heading);

  let header = null;
  let testimonials = [...data];

  // Extract header if it exists
  if (heading !== -1) {
    header = testimonials.splice(heading, 1)[0];
    console.log("Extracted header:", header);
  }

  console.log("Remaining testimonials:", testimonials);

  return (
    <section className="section-style x-spacing pt-10 md:pt-16 lg:pt-20">
      {/* Always show some title even if no header found */}
      <h2 className="mt-10 text-4xl font-bold text-secondaryColor max-md:max-w-full text-center">
        {header
          ? isArabic
            ? // Handle Arabic title - get the text property
              typeof header.arabic?.text === "string"
              ? header.arabic.text
              : "شهادات العملاء"
            : // Handle English title - get the text property and split for alternating colors
            typeof header.english?.text === "string"
            ? header.english.text.split(" ").map((word, index) =>
                index % 2 === 0 ? (
                  <span key={index} className="text-mainColor">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )
            : "Customer Testimonials"
          : // Fallback when no header found
          isArabic
          ? "شهادات العملاء"
          : "Customer Testimonials"}
      </h2>

      {/* Always show some content */}
      <p className="mt-10 text-xl text-center text-secondaryColor mx-auto w-[568px] max-md:w-full">
        {header
          ? isArabic
            ? typeof header.arabic?.company === "string"
              ? header.arabic.company
              : "آراء عملائنا المميزين"
            : typeof header.english?.company === "string"
            ? header.english.company
            : "What our valued customers say"
          : // Fallback when no header found
          isArabic
          ? "آراء عملائنا المميزين"
          : "What our valued customers say"}
      </p>

      {/* Show testimonials slider only if we have testimonials (excluding header) */}
      {testimonials.length > 0 && (
        <>
          <TestimonialCarousel
            testimonials={testimonials}
            isArabic={isArabic}
          />
          <div className="static-testimonials mt-16 overflow-hidden">
            <div className="flex gap-4 ">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-none last:pr-4">
                  <TestimonialCard {...testimonial} isArabic={isArabic} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Testimonial;
