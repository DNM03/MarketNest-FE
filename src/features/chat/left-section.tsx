import { Card } from "@/components/ui/card";
import React from "react";
import ChatCard from "./chat-card";

function LeftSection() {
  const fakeData = [
    {
      name: "Shad",
      message: "Hey, how are you?",
      avatarUrl: "https://github.com/shadcn.png",
    },
    {
      name: "Shad 2",
      message: "how are you?",
      avatarUrl: "https://github.com/shadcn.png",
    },
    {
      name: "Shad 3",
      message: "Hey, how are you?",
      avatarUrl: "https://github.com/shadcn.png",
    },
  ];
  return (
    <Card className="p-4 w-1/3 flex flex-col items-center gap-y-4">
      {fakeData.map((data, index) => (
        <ChatCard key={index} {...data} />
      ))}
    </Card>
  );
}

export default LeftSection;
