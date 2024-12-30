import { privateApi } from "./auth";

export const getSystemDiscounts = async () => {
  try {
    const response = await privateApi.get("/discounts");
    return response.data;
  } catch (error) {
    console.error("Error fetching discounts:", error);
    throw error;
  }
};
