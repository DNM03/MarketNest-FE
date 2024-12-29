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

export const addToCart = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  try {
    const response = await privateApi.post("/carts", {
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const updateQuantity = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  try {
    const response = await privateApi.put(`/carts`, {
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating quantity:", error);
    throw error;
  }
};

export const clearOne = async (productId: string) => {
  try {
    const response = await privateApi.put(`/carts/clear-one`, {
      productId,
    });
    return response.data;
  } catch (error) {
    console.error("Error clearing one:", error);
    throw error;
  }
};
