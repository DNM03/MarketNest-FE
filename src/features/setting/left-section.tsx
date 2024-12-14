"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { getMe } from "@/services/user";
import { CreditCard, History, MapPinHouse, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function LeftSection() {
  const [user, setUser] = React.useState<any>({});
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getMe();
        console.log("User:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);
  return (
    <Card className="p-8 w-1/3 flex flex-col items-center gap-y-4">
      <Avatar className="w-[200px] h-[200px]">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="font-bold text-xl">{user.displayName || ""}</p>
      <hr className="w-full" />
      <button className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5">
        <User className="w-6 h-6" />
        <p>Personal Information</p>
      </button>
      <button className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5">
        <MapPinHouse className="w-6 h-6" />
        <p>Address</p>
      </button>
      <button className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5">
        <History className="w-6 h-6" />
        <p>History</p>
      </button>
    </Card>
  );
}

export default LeftSection;
