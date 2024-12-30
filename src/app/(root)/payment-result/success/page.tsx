"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <CircleCheckBig className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Payment Successful!
        </h1>
        <p className="mt-4 text-gray-600">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        <div className="mt-6">
          <Button
            className="bg-slate-800 hover:bg-slate-600 text-white px-6 py-3 rounded-lg shadow-md"
            onClick={() => router.push("/")}
          >
            Go Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
