"use client";
import React, { useState, useEffect } from "react";

const HelpWrapper = ({ children }) => {
  const [showHeading, setShowHeading] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    // Apply initial styles to hide elements
    const heroHeading = document.querySelector(".hero-Heading");
    const heroParagraph = document.querySelector(".hero-Paragraph");
    const heroInput = document.querySelector(".hero-Input");
    
    if (heroHeading) heroHeading.style.opacity = "0";
    if (heroParagraph) heroParagraph.style.opacity = "0";
    if (heroInput) heroInput.style.opacity = "0";
    
    // Start animation sequence
    setTimeout(() => setShowHeading(true), 300);
    setTimeout(() => setShowParagraph(true), 1400);
    setTimeout(() => setShowInput(true), 2500);
  }, []);

  useEffect(() => {
    const heroHeading = document.querySelector(".hero-Heading");
    if (showHeading && heroHeading) {
      heroHeading.style.transition = "transform 0.8s, opacity 0.8s";
      heroHeading.style.transform = "translateY(0)";
      heroHeading.style.opacity = "1";
    }
  }, [showHeading]);

  useEffect(() => {
    const heroParagraph = document.querySelector(".hero-Paragraph");
    if (showParagraph && heroParagraph) {
      heroParagraph.style.transition = "transform 0.8s, opacity 0.8s";
      heroParagraph.style.transform = "scale(1)";
      heroParagraph.style.opacity = "1";
    }
  }, [showParagraph]);

  useEffect(() => {
    const heroInput = document.querySelector(".hero-Input");
    if (showInput && heroInput) {
      heroInput.style.transition = "transform 0.8s, opacity 0.8s";
      heroInput.style.transform = "translateY(0)";
      heroInput.style.opacity = "1";
    }
  }, [showInput]);

  return (
    <>
      <style jsx global>{`
        .hero-Heading {
          transform: translateY(100%);
          opacity: 0;
        }
        .hero-Paragraph {
          transform: scale(0.8);
          opacity: 0;
        }
        .hero-Input {
          transform: translateY(100px);
          opacity: 0;
        }
      `}</style>
      {children}
    </>
  );
};

export default HelpWrapper;