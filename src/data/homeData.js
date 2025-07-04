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
    console.error("Error fetching about data:", error);
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
    console.error("Error fetching about data:", error);
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
