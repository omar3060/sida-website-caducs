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
    console.error("Error fetching hero data:", error);
  }
};
