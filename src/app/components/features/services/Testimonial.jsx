"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    align: "center"
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const testimonials = [
    {
      image:
        "/assets/images/services/avatar.svg",
      text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
      name: "Mark, 29",
      company: "Koobs Cafe",
    },
    {
      image:
        "/assets/images/services/avatar.svg",
      text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
      name: "Mark, 29",
      company: "Koobs Cafe",
    },
    {
      image:
        "/assets/images/services/avatar.svg",
      text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
      name: "Mark, 29",
      company: "Koobs Cafe",
    },
  ];
  return (
    <section className="section-style x-spacing">
      <h2 className="mt-10 text-4xl font-bold text-secondaryColor max-md:max-w-full text-center">
        Be Part of <span className="text-mainColor">30,000+</span> Restaurants
        Thriving with <span className="text-mainColor">SIDA</span>!
      </h2>

      <p className="mt-10 text-xl text-center text-secondaryColor mx-auto w-[568px] max-md:w-full">
        Your growth is our mission. Discover how SIDA empowers many restaurants
        like yours to succeed—hear directly from our clients!
      </p>

      <div className="mt-16 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 ">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
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





// "use client";
// import React from "react";
// import TestimonialCard from "./TestimonialCard";
// import useEmblaCarousel from "embla-carousel-react";
// import { useEffect } from "react";

// const Testimonial = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ 
//     loop: true,
//     dragFree: true,
//     containScroll: "trimSnaps",
//     align: "center"
//   });

//   useEffect(() => {
//     if (!emblaApi) return;

//     const autoplay = () => {
//       if (emblaApi.canScrollNext()) {
//         emblaApi.scrollNext();
//       } else {
//         emblaApi.scrollTo(0);
//       }
//     };

//     const interval = setInterval(autoplay, 3000);
//     return () => clearInterval(interval);
//   }, [emblaApi]);

//   const testimonials = [
//     {
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/5cf69378ce14431f8020f99411ad1cfe/71a21f78827fa695e960af25dcef261e87b3f79d?placeholderIfAbsent=true",
//       text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
//       name: "Mark, 29",
//       company: "Koobs Cafe",
//     },
//     {
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/5cf69378ce14431f8020f99411ad1cfe/e094374d9dd4053ff64bb74d18036b111582148d?placeholderIfAbsent=true",
//       text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
//       name: "Mark, 29",
//       company: "Koobs Cafe",
//     },
//     {
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/5cf69378ce14431f8020f99411ad1cfe/e5035e2f314bd5791405c499b5a8e987986c0206?placeholderIfAbsent=true",
//       text: "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
//       name: "Mark, 29",
//       company: "Koobs Cafe",
//     },
//   ];
//   return (
//     <section className="section-style x-spacing">
//       <h2 className="main-heading max-md:max-w-full text-center">
//         Be Part of <span className="text-mainColor">30,000+</span> Restaurants
//         Thriving with <span className="text-mainColor">SIDA</span>!
//       </h2>
//       <p className="main-paragraph text-center mx-auto w-1/2 max-md:w-full">
//         Your growth is our mission. Discover how SIDA empowers many restaurants
//         like yours to succeed—hear directly from our clients!
//       </p>

//       <div className="mt-16 overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {[...testimonials, ...testimonials].map((testimonial, index) => (
//             <div key={index} className="flex-[0_0_33%] min-w-0 px-2">
//               <TestimonialCard {...testimonial} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
