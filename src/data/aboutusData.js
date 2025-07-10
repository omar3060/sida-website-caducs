// "use cache";
// Base API URL
const API_BASE_URL = process.env.API_BASE_URL;

// Hero section data
export const heroData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/aboutus/aboutushero`);
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
        title: "نحن نمكن مطعمك من النجاح",
        content:
          "سيدا هو نظام إدارة مطاعم شامل يساعدك على تبسيط عملياتك وزيادة كفاءتك.",
      },
      english: {
        title: "We Empower Your Restaurant Success",
        content:
          "SIDA is a comprehensive restaurant management system that helps you streamline your operations and boost efficiency.",
      },
      images: [{ secure_url: "/assets/images/aboutUs/aboutUs-hero.svg" }],
    };
  }
};

// CidaCircle section data
export const cidaCircleData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/aboutus/cidacircledata`);
    const data = await res.json();

    return {
      arabic: data.section.arabic,
      english: data.section.english,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching cidacircle data:", error);
  }
};
// howWeWork section data
export const howWeWorkData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/aboutus/howwework`);
    const data = await res.json();

    return {
      arabic: data.section.arabic,
      english: data.section.english,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching howWeWork data:", error);
  }
};
// ValueAdded section data
export const valueAddedData = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/section/aboutus/valueadded`);
    const data = await res.json();

    return {
      arabic: data.section.arabic,
      english: data.section.english,
      images: data.section.images,
    };
  } catch (error) {
    console.error("Error fetching ValueAdded data:", error);
  }
};

// CoFounder section data
export const coFounderData = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/section/slider/aboutus/cofounders`
    );
    const data = await res.json();
    console.log("API Response:", data);
    console.log("Slides from API:", data.slider.slides);

    return {
      title: data.slider.title,
      // content: data.slider.content,
      slides: data.slider.slides,
      _id: data.slider._id,
    };
  } catch (error) {
    console.error("Error fetching coFounderData:", error);
    // Fallback data if fetch fails
    return {
      title: {
        arabic: "مؤسسونا المشاركون",
        english: "Our Co-Founders",
      },
      slides: [
        {
          arabic: {
            title: "محمود علي",
            content: "المؤسس المشارك والرئيس التنفيذي",
          },
          english: {
            title: "Mahmoud Ali",
            content: "Co-Founder & Chief Executive Officer",
          },
          image: {
            secure_url: "/assets/images/aboutUs/coFounders/employee1.svg",
          },
          _id: "fallback1",
        },
        {
          arabic: {
            title: "عمر محمد",
            content: "الشريك المؤسس ومدير التطوير",
          },
          english: {
            title: "Omar Mohamed",
            content: "Co-Founder & Development Manager",
          },
          image: {
            secure_url: "/assets/images/aboutUs/coFounders/employee2.svg",
          },
          _id: "fallback2",
        },
      ],
      _id: "fallback",
    };
  }
};
// OurLeaders section data
export const ourLeadersData = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/section/slider/aboutus/ourleaders`
    );
    const data = await res.json();
    console.log("API Response:", data);
    console.log("Slides from API:", data.slider.slides);

    return {
      title: data.slider.title,
      // content: data.slider.content,
      slides: data.slider.slides,
      _id: data.slider._id,
    };
  } catch (error) {
      console.error("Error fetching ourLeadersData:", error);
    // Fallback data if fetch fails
    return {
      title: {
        arabic: "قادة المؤسسة",
        english: "Our Leaders",
      },
      slides: [
        {
          arabic: {
            title: "محمود علي",
            content: "المؤسس المشارك والرئيس التنفيذي",
          },
          english: {
            title: "Mahmoud Ali",
            content: "Co-Founder & Chief Executive Officer",
          },
          image: {
            secure_url: "/assets/images/aboutUs/coFounders/employee1.svg",
          },
          _id: "fallback1",
        },
        {
          arabic: {
            title: "عمر محمد",
            content: "الشريك المؤسس ومدير التطوير",
          },
          english: {
            title: "Omar Mohamed",
            content: "Co-Founder & Development Manager",
          },
          image: {
            secure_url: "/assets/images/aboutUs/coFounders/employee2.svg",
          },
          _id: "fallback2",
        },
      ],
      _id: "fallback",
    };
  }
};


// export const coFounderData = async () => {
//   try {
//     const res = await fetch(
//       `${API_BASE_URL}/section/slider/home/featurestables`
//     );
//     const data = await res.json();

//     return {
//       title: data.slider.title,
//       content: data.slider.content,
//       slides: data.slider.slides,
//       _id: data.slider._id,
//     };
//   } catch (error) {
//     console.error("Error fetching featuresTablesData:", error);
//     // Fallback data if fetch fails
//     return {
//       title: "Features Tables",
//       content: "Compare our features",
//       slides: [
//         {
//           title: "Feature Table",
//           description: "See all our amazing features",
//           image: "/assets/images/home/svgs/featuresTables/firstTable.svg"
//         }
//       ],
//       _id: "fallback"
//     };
//   }
// };