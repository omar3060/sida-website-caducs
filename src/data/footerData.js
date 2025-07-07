// Base API URL
const API_BASE_URL = process.env.API_BASE_URL;
export const FooterData = async () => {
  try {
    const resLogo = await fetch(`${API_BASE_URL}/section/home/footer`);
    const dataLogo = await resLogo.json();

    const resFooter = await fetch(`${API_BASE_URL}/footer`);
    const dataFooter = await resFooter.json();

    const resSocial = await fetch(`${API_BASE_URL}/footer/social`);
    const dataSocial = await resSocial.json();
    console.log(dataLogo);

    return {
      section: dataLogo.section,
      images: dataLogo.section.images,
      dataFooter,
      dataSocial,
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    // Fallback data if fetch fails
    return {
      section: {
        arabic: {
          content: "سيدا - نظام إدارة مطاعم شامل"
        },
        english: {
          content: "SIDA - Complete Restaurant Management System"
        },
        images: [
          { secure_url: "/assets/images/home/svgs/sida-logo.svg" }
        ]
      },
      images: [
        { secure_url: "/assets/images/home/svgs/sida-logo.svg" }
      ],
      dataFooter: {
        links: [
          {
            category: "services",
            arabic: { title: "نقاط البيع" },
            english: { title: "POS System" },
            link: "/services/pos"
          },
          {
            category: "company",
            arabic: { title: "من نحن" },
            english: { title: "About Us" },
            link: "/aboutus"
          },
          {
            category: "support",
            arabic: { title: "المساعدة" },
            english: { title: "Help" },
            link: "/help"
          },
          {
            category: "contactus",
            arabic: { title: "info@sida.com" },
            english: { title: "info@sida.com" },
            link: "mailto:info@sida.com"
          }
        ]
      },
      dataSocial: {
        socialLinks: [
          {
            icon: "facebook",
            link: "#"
          },
          {
            icon: "twitter",
            link: "#"
          },
          {
            icon: "instagram",
            link: "#"
          }
        ]
      }
    };
  }
};
