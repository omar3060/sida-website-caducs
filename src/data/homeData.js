// Base API URL
const API_BASE_URL = "https://super-admin-eta.vercel.app";

// Hero section data
export const heroData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/hero`);
    const data = await res.json();

    return {
      title: data.section.title,
      content: data.section.content,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching hero data:", error);
    // Fallback data if fetch fails
    // return {
    //   title: ["Empower", "Your Business", "With", "Modern Solutions"],
    //   content:
    //     "We provide innovative digital solutions to help your business thrive in today's competitive market.",
    //   images: [
    //     { secure_url: "/images/hero-illustration.png" },
    //     { secure_url: "/images/underline-vector.svg" },
    //   ],
    // };
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
    // // Fallback data if fetch fails
    // return {
    //   title: "About Our Company",
    //   content:
    //     "Founded in 2020, we've been helping businesses transform their digital presence.",
    //   images: [{ secure_url: "/images/about-image.png" }],
    // };
  }
};
// Features section data
export const featuresData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/features`);
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

// Partners section data
export const partnersData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/partners`);
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
// Testimonial section data
export const testimonialData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/testimonial`);
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
// SidaOffers section data
export const sidaOffersData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/sidaOffers`);
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

// ServicesSlider section data
export const servicesSliderData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/home/servicesSlider`);
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


