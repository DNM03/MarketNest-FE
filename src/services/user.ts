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

export const updateMe = async (data: any) => {
  try {
    const response = await privateApi.put("/me", data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const addAddress = async (data: any) => {
  try {
    const response = await privateApi.post("/addresses", data);
    return response.data;
  } catch (error) {
    console.error("Error adding address:", error);
    throw error;
  }
};
