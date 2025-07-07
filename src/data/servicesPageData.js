// "use cache";
// Base API URL
const API_BASE_URL = process.env.API_BASE_URL;

// Hero Services section data
export const heroServicesData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/services/heroservices`);
    const data = await res.json();

    return {
      arabic: data.section.arabic,
      english: data.section.english,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching hero services data:", error);
    // Fallback data if fetch fails
    return {
      arabic: {
        title: "خدماتنا المتميزة",
        content: "نوفر مجموعة شاملة من الخدمات لإدارة مطعمك بكفاءة",
      },
      english: {
        title: "Our Outstanding Services",
        content:
          "We provide a comprehensive suite of services to manage your restaurant efficiently",
      },
      images: [{ secure_url: "/assets/images/services/heroImage.svg" }],
    };
  }
};

// servicesData section data
export const servicesData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/slider/services/servicescards`);
    const data = await res.json();

    return {
      title: data.slider.title,
      content: data.slider.content,
      text: data.slider.text,
      slides: data.slider.slides,
      _id: data.slider._id,
    };
  } catch (error) {
    console.error("Error fetching servicesData data:", error);
  }
};