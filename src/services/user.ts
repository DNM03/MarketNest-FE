import { privateApi } from "./auth";

export const getMe = async () => {
  try {
    const response = await privateApi.get("/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
