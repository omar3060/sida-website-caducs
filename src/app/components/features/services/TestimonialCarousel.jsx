"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import React from 'react';
import TestimonialCard from "./TestimonialCard";
import { useEmblaRtlConfig } from "@/app/lib/useEmblaRtlConfig";

const TestimonialCarousel = ({testimonials}) => {
  const emblaOptions = useEmblaRtlConfig({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    align: "center"
  });
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  useEffect(()=> {
    const staticTestimonials = document.querySelector(".static-testimonials");
    
    if (staticTestimonials) {
      staticTestimonials.style.display = "none";
    }
  }, [])

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
  
  return (
    <div className="mt-16 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 ">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="flex-none last:pr-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
  )
}

export default TestimonialCarousel