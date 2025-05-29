// src/app/components/SEO.jsx
import { Metadata } from "next";

export const generateMetadata = ({ title, description, icons }) => {
  const defaultTitle = "SIDA";
  const defaultDescription =
    "SIDA offers innovative POS and restaurant management solutions to streamline your operations.";

  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: "/assets/images/home/svgs/S-Icon.svg",
    },
  };
};

const SEO = ({ title, description, icons }) => {
  return null;
};

export default SEO;
