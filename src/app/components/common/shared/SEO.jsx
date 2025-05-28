// src/app/components/SEO.jsx
import { Metadata } from "next";

export const generateMetadata = ({ title, description }) => {
  const defaultTitle = "SIDA";
  const defaultDescription =
    "SIDA offers innovative POS and restaurant management solutions to streamline your operations.";

  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: "/assets/images/home/svgs/S-icon.svg"
    }
  };
};

const SEO = ({ title, description }) => { 
  return null;
}

export default SEO;
