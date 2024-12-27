"use client";

import { Card } from "@/components/ui/card";
import React, { useEffect } from "react";
import ChatCard from "./chat-card";
import { getChatForUser } from "@/services/chat";
import { usePathname, useRouter } from "next/navigation";

function LeftSection() {
  const [chats, setChats] = React.useState([]);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await getChatForUser();
        setChats(response.data.chat_rooms.chatsRooms);
      } catch (error) {
        console.error(error);
      }
    };
    const intervalId = setInterval(fetchChats, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Card className="p-4 w-1/3 flex flex-col items-center gap-y-4">
      {chats.map((chat: any, index) => (
        <ChatCard
          key={index}
          name={chat.shop.name}
          message={chat.lastMessage.message}
          avatarUrl={chat.shop.image || "https://github.com/shadcn.png"}
          onClick={() => router.push(`/chat/${chat.id}`)}
          isChatActive={path === `/chat/${chat.id}`}
        />
      ))}
    </Card>
  );
}

export default LeftSection;
