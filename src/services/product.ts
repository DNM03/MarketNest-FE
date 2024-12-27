import { publicApi } from "./auth";

export const getAllProducts = async ({
  pageSize,
  pageIndex,
  searchName,
  facet,
  place,
  minPrice,
  maxPrice,
  rating,
  orderBy,
  sortBy,
}: {
  pageSize: string;
  pageIndex: string;
  searchName?: string;
  facet?: string;
  place?: string;
  minPrice?: string;
  maxPrice?: string;
  rating?: string;
  orderBy?: string;
  sortBy?: boolean;
}) => {
  try {
    const response = await publicApi.get(
      `/public/products?pageSize=${pageSize}&pageIndex=${pageIndex}${
        searchName ? `&searchName=${searchName}` : ""
      }${facet ? `&facet=${facet}` : ""}${place ? `&place=${place}` : ""}${
        minPrice ? `&minPrice=${minPrice}` : ""
      }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
        rating ? `&rating=${rating}` : ""
      }${orderBy ? `&orderBy=${orderBy}` : ""}${sortBy ? `&sortBy=price` : ""}`
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
