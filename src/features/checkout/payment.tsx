import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

function Payment({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 mt-8 mb-8">
      <Image
        src="https://placehold.co/400x400"
        alt="QR code"
        height={400}
        width={400}
        className="rounded-md"
      />
      <p className="text-lg">Pay with ZaloPay</p>
      <div className="flex flex-row gap-x-4">
        <Button variant="outline" onClick={onBack} className="px-24">
          Go Back
        </Button>
        <Button className="px-24">Place order</Button>
      </div>
    </div>
  );
}

export default Payment;
