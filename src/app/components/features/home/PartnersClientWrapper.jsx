"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const PartnersCarousel = dynamic(() => import("./PartnersCarousel"), { ssr: false });

const PartnersClientWrapper = ({ partners }) => {
  useEffect(() => {
    // Hide static list when carousel is rendered
    const staticList = document.querySelector(".static-partners");
    if (staticList) {
      staticList.style.display = "none";
    }
  }, []);

  return <PartnersCarousel partners={partners} />;
};

export default PartnersClientWrapper;