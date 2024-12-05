import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

function Payment() {
  return (
    <Tabs defaultValue="cod" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="cod">COD</TabsTrigger>
        <TabsTrigger value="zalopay">ZaloPay</TabsTrigger>
        <TabsTrigger value="creditcard">Credit Card</TabsTrigger>
      </TabsList>
      <TabsContent value="cod">
        <div className="flex flex-col justify-center items-center gap-y-4 mt-8 mb-8">
          <p className="font-semibold text-3xl">Cash on delivery</p>
          <p className="text-lg">Pay when you receive the product</p>
          <Button className="px-32">Place order</Button>
        </div>
      </TabsContent>
      <TabsContent value="zalopay">
        <div className="flex flex-col justify-center items-center gap-y-4 mt-8 mb-8">
          <Image
            src="https://placehold.co/400x400"
            alt="QR code"
            height={400}
            width={400}
            className="rounded-md"
          />
          <p className="text-lg">Pay with ZaloPay</p>
          <Button className="px-32">Place order</Button>
        </div>
      </TabsContent>
      <TabsContent value="creditcard">
        <div className="flex flex-col gap-y-4 mt-8 mb-8 w-full px-80">
          <p className="text-lg text-center">
            Pay securely with your Bank Account using Visa or Mastercard
          </p>
          <Input
            label="Card number"
            placeholder="1234 5678 9101 1121"
            className="w-full"
          />
          <Input label="Name on card" placeholder="John Doe" />
          <Input label="Expiry date" placeholder="MM/YY" />
          <Input label="CVV" placeholder="123" />
          <Button className="mx-32">Place order</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default Payment;
