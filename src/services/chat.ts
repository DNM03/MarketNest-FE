import { privateApi } from "./auth";

export const getChatForUser = async () => {
  try {
    const response = await privateApi.get("/chats/user");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChatDetail = async (roomId: string) => {
  try {
    const response = await privateApi.get(`/chats/chat-rooms/${roomId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const sendMessage = async ({
  senderId,
  chatRoomId,
  image,
  message,
}: {
  senderId: string;
  chatRoomId: string;
  image?: string;
  message: string;
}) => {
  try {
    const response = await privateApi.post(`/chats/send`, {
      senderId,
      chatRoomId,
      image,
      message,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createChatRoom = async ({
  userId,
  shopId,
  title,
}: {
  userId: string;
  shopId: string;
  title: string;
}) => {
  try {
    const response = await privateApi.post(`/chats/chat-rooms`, {
      userId,
      shopId,
      title,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
