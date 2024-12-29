import { privateApi } from "./auth";

export const getRatingSummary = async (productId: string) => {
  try {
    const response = await privateApi.get(`/ratings/${productId}/summary`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rating summary:", error);
    throw error;
  }
};

export const getRatings = async (productId: string) => {
  try {
    const response = await privateApi.get(`/ratings/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ratings:", error);
    throw error;
  }
};
