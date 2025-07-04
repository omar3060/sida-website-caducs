import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonialData } from "@/data/homeData";
// const testimonials = [
//   {
//     image: "/assets/images/services/avatar.svg",
//     text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
//     name: "Mark, 29",
//     company: "Koobs Cafe",
//   },
//   {
//     image: "/assets/images/services/avatar.svg",
//     text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
//     name: "Mark, 29",
//     company: "Koobs Cafe",
//   },
//   {
//     image: "/assets/images/services/avatar.svg",
//     text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
//     name: "Mark, 29",
//     company: "Koobs Cafe",
//   },
// ];

const Testimonial = async () => {
  const data = await testimonialData();
 
  const heading = data.findIndex((test) => {
    return test.name == "header"
  })

  const header = data.splice(heading, 1)[0]
  // const content = data.splice(heading, 1)[0]

  // console.log(data);
  // console.log(header);
  

  
  
  return (
    <section className="section-style x-spacing pt-10 md:pt-16 lg:pt-20">
      <h2 className="mt-10 text-4xl font-bold text-secondaryColor max-md:max-w-full text-center">
        {header.text
          .split(" ")
          .map((word, index) =>
            index % 2 === 0 ? (
              <span key={index} className="text-mainColor">
                {word}{" "}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
      </h2>

      <p className="mt-10 text-xl text-center text-secondaryColor mx-auto w-[568px] max-md:w-full">
        {header.company}
      </p>
      <TestimonialCarousel testimonials={data} />
      <div className="static-testimonials mt-16 overflow-hidden">
        <div className="flex gap-4 ">
          {data.map((testimonial, index) => (
            <div key={index} className="flex-none last:pr-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
