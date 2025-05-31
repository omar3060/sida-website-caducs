"use client";
import React, { useState, useEffect } from "react";

const AnimatedHeroWrapper = ({ children }) => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Apply initial styles to hide elements
    const heroImage = document.querySelector(".hero-image");
    const heroContent = document.querySelector(".hero-content");
    const heroArrow = document.querySelector(".hero-arrow");
    
    if (heroImage) heroImage.style.opacity = "0";
    if (heroContent) heroContent.style.opacity = "0";
    if (heroArrow) heroArrow.style.opacity = "0";
    
    // Start animation sequence
    setTimeout(() => setShowImage(true), 300);
    setTimeout(() => setShowContent(true), 1400);
    setTimeout(() => setShowArrow(true), 2500);
  }, []);

  useEffect(() => {
    const heroImage = document.querySelector(".hero-image");
    if (showImage && heroImage) {
      heroImage.style.transition = "transform 0.8s, opacity 0.8s";
      heroImage.style.transform = "translateY(0)";
      heroImage.style.opacity = "1";
    }
  }, [showImage]);

  useEffect(() => {
    const heroContent = document.querySelector(".hero-content");
    if (showContent && heroContent) {
      heroContent.style.transition = "transform 0.8s, opacity 0.8s";
      heroContent.style.transform = "scale(1)";
      heroContent.style.opacity = "1";
    }
  }, [showContent]);

  useEffect(() => {
    const heroArrow = document.querySelector(".hero-arrow");
    if (showArrow && heroArrow) {
      heroArrow.style.transition = "transform 0.8s, opacity 0.8s";
      heroArrow.style.transform = "translateY(0)";
      heroArrow.style.opacity = "1";
    }
  }, [showArrow]);

  return (
    <>
      <style jsx global>{`
        .hero-image {
          transform: translateY(100%);
          opacity: 0;
        }
        .hero-content {
          transform: scale(0.8);
          opacity: 0;
        }
        .hero-arrow {
          transform: translateY(100px);
          opacity: 0;
        }
      `}</style>
      {children}
    </>
  );
};

export default AnimatedHeroWrapper;