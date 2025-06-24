// Base API URL
const API_BASE_URL = "https://super-admin-eta.vercel.app";

// Hero section data
export const heroData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/aboutus/aboutushero`);
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

// CidaCircle section data
export const cidaCircleData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/aboutus/cidacircle`);
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