import { publicApi } from "./auth";

export const getAllCategories = async () => {
  try {
    const response = await publicApi.get(`/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
