// "use cache";
// Base API URL
const API_BASE_URL = "https://super-admin-eta.vercel.app";

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
