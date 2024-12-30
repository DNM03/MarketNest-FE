import { privateApi } from "./auth";

export const createOrder = async (data: any) => {
  try {
    const response = await privateApi.post("/orders", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (orderId: string) => {
  try {
    const response = await privateApi.get(`/users/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
