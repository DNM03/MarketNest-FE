"use client";

import { Card } from "@/components/ui/card";
import {
  BadgeMinus,
  CircleOff,
  ClockArrowUp,
  PackageCheck,
  Truck,
  Undo2,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function LeftSection() {
  const router = useRouter();
  const path = usePathname();

  return (
    <Card className="p-8 w-1/3 flex flex-col items-center gap-y-4">
      <button
        className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5"
        style={{
          backgroundColor: path === "/order/unverified" ? "#e2e8f0" : "",
        }}
        onClick={() => router.push("/order/unverified")}
      >
        <BadgeMinus className="w-6 h-6" />
        <p>Unverified</p>
      </button>
      <button
        className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5"
        style={{
          backgroundColor: path === "/order/pending-shipment" ? "#e2e8f0" : "",
        }}
        onClick={() => router.push("/order/pending-shipment")}
      >
        <ClockArrowUp className="w-6 h-6" />
        <p>Pending Shipment</p>
      </button>
      <button
        className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5"
        style={{
          backgroundColor: path === "/order/delivery" ? "#e2e8f0" : "",
        }}
        onClick={() => router.push("/order/delivery")}
      >
        <Truck className="w-6 h-6" />
        <p>Delivery</p>
      </button>
      <button
        className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5"
        style={{
          backgroundColor: path === "/order/completed" ? "#e2e8f0" : "",
        }}
        onClick={() => router.push("/order/completed")}
      >
        <PackageCheck className="w-6 h-6" />
        <p>Completed</p>
      </button>
      <button
        className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5"
        style={{
          backgroundColor: path === "/order/cancelled" ? "#e2e8f0" : "",
        }}
        onClick={() => router.push("/order/cancelled")}
      >
        <CircleOff className="w-6 h-6" />
        <p>Cancelled</p>
      </button>
      <button
        className="flex flex-row items-center gap-x-6 w-full hover:bg-slate-200 p-3 rounded-md px-5"
        style={{
          backgroundColor: path === "/order/returned" ? "#e2e8f0" : "",
        }}
        onClick={() => router.push("/order/returned")}
      >
        <Undo2 className="w-6 h-6" />
        <p>Returned</p>
      </button>
    </Card>
  );
}

export default LeftSection;
