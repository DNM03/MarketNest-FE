import { publicApi } from "./auth";

export const getAllProducts = async ({
  pageSize,
  pageIndex,
}: {
  pageSize: string;
  pageIndex: string;
}) => {
  try {
    const response = await publicApi.get(
      `/public/products?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await publicApi.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
