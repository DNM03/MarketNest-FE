import { Card } from "@/components/ui/card";
import { CreditCard, History, MapPinHouse, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function LeftSection() {
  return (
    <Card className="p-8 w-1/3 flex flex-col items-center gap-y-4">
      <Image
        src="https://placehold.co/200x200"
        alt="user avatar"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="font-bold text-xl">Username</p>
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
