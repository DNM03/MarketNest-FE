import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import React from "react";

function ChatCard({
  avatarUrl,
  name,
  message,
}: {
  avatarUrl: string;
  name: string;
  message: string;
}) {
  return (
    <Card className="w-full p-2 flex flex-row gap-x-4 items-center hover:cursor-pointer hover:bg-slate-50">
      <div>
        <Avatar>
          <AvatarImage
            src={avatarUrl || "https://github.com/shadcn.png"}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="font-semibold">{name || "Shad"}</p>
        <p>{message || "Hey, how are you?"}</p>
      </div>
    </Card>
  );
}

export default ChatCard;
