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

export const getProductByCategory = async (
  categoryId: string,
  sortBy?: string,
  orderBy?: string
) => {
  try {
    const response = await publicApi.get(
      `/public/categories/${categoryId}/products?${
        sortBy ? `sortBy=${sortBy}` : ""
      }${orderBy ? `&orderBy=${orderBy}` : ""}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
