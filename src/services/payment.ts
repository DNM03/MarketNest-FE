import { privateApi } from "./auth";

export const createPayment = async (data: any) => {
  try {
    const response = await privateApi.post("/payment/zalopay", data);
    return response;
  } catch (error) {
    throw error;
  }
};
