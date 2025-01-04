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

export const deleteAddress = async (addressId: string) => {
  try {
    const response = await privateApi.delete(`/addresses/${addressId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting address:", error);
    throw error;
  }
};

export const updateAddress = async (addressId: string, data: any) => {
  try {
    const response = await privateApi.put(`/addresses/${addressId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating address:", error);
    throw error;
  }
};

export const getMyOrders = async () => {
  try {
    const response = await privateApi.get("/users/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const registerToSale = async (data: any) => {
  try {
    const response = await privateApi.post("/users/register-to-sell", data);
    return response.data;
  } catch (error) {
    console.error("Error registering to sale:", error);
    throw error;
  }
};
