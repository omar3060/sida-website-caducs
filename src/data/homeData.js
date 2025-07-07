// "use cache";
// Base API URL
const API_BASE_URL = process.env.API_BASE_URL;

// Hero section data
export const heroData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/hero`);
    const data = await res.json();

    return {
      arabic: data.section.arabic,
      english: data.section.english,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching hero data:", error);
    // Fallback data if fetch fails
    return {
      arabic: {
        title: "نظام إدارة مطاعم متكامل",
        content: "سيدا يوفر حلول شاملة لإدارة المطاعم بكفاءة عالية"
      },
      english: {
        title: "Complete Restaurant Management System",
        content: "SIDA provides comprehensive solutions for efficient restaurant management"
      },
      images: [
        { secure_url: "/assets/images/home/svgs/hero-right.svg" }
      ]
    };
  }
};

// About section data
export const aboutData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/about`);
    const data = await res.json();

    return {
      title: data.section.title,
      content: data.section.content,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
  }
};
// Features section data
export const featuresData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/features`);
    const data = await res.json();

    return {
      arabic: data.section.arabic,
      english: data.section.english,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching features data:", error);
    // Fallback data if fetch fails
    return {
      arabic: {
        title: "مميزات سيدا",
        content: "نوفر أفضل الحلول لإدارة مطعمك"
      },
      english: {
        title: "SIDA Features",
        content: "We provide the best solutions for managing your restaurant"
      },
      images: [
        { secure_url: "/assets/images/home/svgs/features-vector.svg" }
      ]
    };
  }
};

// Partners section data
export const partnersData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/slider/home/partners`);
    const data = await res.json();
    console.log(data);

    return data.slider;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    // Fallback data if fetch fails
    return {
      slides: [
        {
          title: "Partner 1",
          image: "/assets/images/home/svgs/partners/partner-1.svg"
        }
      ]
    };
  }
};
// Testimonial section data
// export const testimonialData = async () => {
//   try {
//     const res = await fetch(`${API_BASE_URL}/section/home/testimonial`);
//     const data = await res.json();

//     return {
//       title: data.section.title,
//       content: data.section.content,
//       images: data.section.images,

//     };
//   } catch (error) {
//     console.error("Error fetching about data:", error);
//   }
// };

export const testimonialData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`);
    const data = await res.json();

    return data.testimonials;
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
  }
};

// Hero Services section data
export const plansData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/plan`);
    const data = await res.json();

    return data.plans;
  } catch (error) {
    console.error("Error fetching plans data:", error);
  }
};

// SidaOffers section data
export const sidaOffersData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/slider/home/sidaoffers`);
    const data = await res.json();

    return {
      title: data.slider.title,
      content: data.slider.content,
      slides: data.slider.slides,
      _id: data.slider._id,
    };
  } catch (error) {
    console.error("Error fetching sidaOffers data:", error);
    // Fallback data if fetch fails
    return {
      title: "SIDA Offers",
      content: "Explore our amazing offers",
      slides: [
        {
          title: "Special Offer",
          description: "Get the best deals on our services",
          image: "/assets/images/home/SidaOffers/slide1.svg"
        }
      ],
      _id: "fallback"
    };
  }
};

// FeaturesTables section data
export const featuresTablesData = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/section/slider/home/featurestables`
    );
    const data = await res.json();

    return {
      title: data.slider.title,
      content: data.slider.content,
      slides: data.slider.slides,
      _id: data.slider._id,
    };
  } catch (error) {
    console.error("Error fetching featuresTablesData:", error);
    // Fallback data if fetch fails
    return {
      title: "Features Tables",
      content: "Compare our features",
      slides: [
        {
          title: "Feature Table",
          description: "See all our amazing features",
          image: "/assets/images/home/svgs/featuresTables/firstTable.svg"
        }
      ],
      _id: "fallback"
    };
  }
};

// ServicesSlider section data
export const servicesSliderData = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/section/slider/home/servicesslider`
    );
    const data = await res.json();

    return {
      title: data.slider.title,
      slides: data.slider.slides,
      _id: data.slider._id,
    };
  } catch (error) {
    console.error("Error fetching servicesSliderData:", error);
    // Fallback data if fetch fails
    return {
      title: JSON.stringify({
        arabic: "توفر سيدا الكثير من الميزات",
        english: "SIDA Provides A lot of Features"
      }),
      slides: [
        {
          title: "POS System",
          description: "Complete point of sale solution for your restaurant",
          image: "/assets/images/home/ServicesSlider/service1.svg"
        }
      ],
      _id: "fallback"
    };
  }
};

// WhoWeServe section data
export const whoWeServeData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/whoWeServe`);
    const data = await res.json();

    return {
      title: data.section.title,
      content: data.section.content,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
    // // Fallback data if fetch fails
    // return {
    //   title: "About Our Company",
    //   content:
    //     "Founded in 2020, we've been helping businesses transform their digital presence.",
    //   images: [{ secure_url: "/images/about-image.png" }],
    // };
  }
};

// ContactForm section data
export const contactFormData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/contactform`);
    const data = await res.json();

    return {
      title: data.section.title,
      content: data.section.content,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
    // // Fallback data if fetch fails
    // return {
    //   title: "About Our Company",
    //   content:
    //     "Founded in 2020, we've been helping businesses transform their digital presence.",
    //   images: [{ secure_url: "/images/about-image.png" }],
    // };
  }
};

// DownloadSida section data
export const downloadSidaData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/downloadSida`);
    const data = await res.json();

    return {
      title: data.section.title,
      content: data.section.content,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
    // // Fallback data if fetch fails
    // return {
    //   title: "About Our Company",
    //   content:
    //     "Founded in 2020, we've been helping businesses transform their digital presence.",
    //   images: [{ secure_url: "/images/about-image.png" }],
    // };
  }
};
