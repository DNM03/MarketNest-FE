"use client";

import React, { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { usePathname } from "next/navigation";
import { getChatDetail, sendMessage } from "@/services/chat";
import { getMe } from "@/services/user";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

const ChatDetail = () => {
  const pathname = usePathname();
  const roomId = pathname.split("/")[2];
  const [messages, setMessages] = useState<Message[]>([]);
  const [meId, setMeId] = useState("");
  const prevMessagesRef = useRef(messages);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getChatDetail(roomId);
        setMessages(response.data.chatDetails);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    const intervalId = setInterval(fetchMessages, 1000);

    return () => clearInterval(intervalId);
  }, [roomId]);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await getMe();
        setMeId(response.data.id);
      } catch (error) {
        console.error("Error fetching me:", error);
      }
    };
    fetchMe();
  }, []);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (
      prevMessagesRef.current.length !== messages.length ||
      !prevMessagesRef.current.every(
        (msg, index) => msg.id === messages[index]?.id
      )
    ) {
      scrollToBottom();
    }
    prevMessagesRef.current = messages;
  }, [messages]);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.trim()) {
      try {
        setNewMessage("");
        await sendMessage({
          chatRoomId: roomId,
          message: newMessage,
          senderId: meId,
        });
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b bg-white">
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>

      {/* Messages Area */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
        onWheel={(e) => e.stopPropagation()}
      >
        {[...messages].reverse().map((message: any) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender.id === meId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender.id === meId
                  ? "bg-slate-500 text-white rounded-br-none"
                  : "bg-white text-slate-800 rounded-bl-none"
              }`}
            >
              {message.image && message.image !== "" && (
                <Image
                  src={message?.image || "https://placehold.co/160x160"}
                  alt="message image"
                  width={160}
                  height={160}
                />
              )}
              <p className="mb-1">{message.message}</p>
              <p
                className={`text-xs ${
                  message.sender.id === meId
                    ? "text-slate-100"
                    : "text-slate-500"
                }`}
              >
                {new Date(message.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <button
            type="submit"
            className="p-3 text-white bg-slate-500 rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatDetail;
