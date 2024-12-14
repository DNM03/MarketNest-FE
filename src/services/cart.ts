import { privateApi } from "./auth";

export const getCart = async () => {
  try {
    const response = await privateApi.get("/carts");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
