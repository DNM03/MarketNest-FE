"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getMe } from "@/services/user";
import { useRouter } from "next/navigation";
import React from "react";

function Address({
  onClick,
  onBack,
  calculateTotal,
  discountMoney,
  address,
  setAddress,
  user,
}: {
  onClick: () => void;
  onBack: () => void;
  calculateTotal: () => number;
  discountMoney: number;
  address: any;
  setAddress: (value: any) => void;
  user: any;
}) {
  const router = useRouter();
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">
        Please provide your information
      </h1>
      <div className="flex flex-col gap-y-4 px-16">
        <div className="flex flex-col gap-y-2">
          <label className="">Choose your information</label>
          <Select value={address} onValueChange={setAddress}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Address" />
            </SelectTrigger>
            <SelectContent onWheel={(e) => e.stopPropagation()}>
              {user?.addresses.map((address: any, index: number) => (
                <SelectItem key={index} value={address}>
                  {address.fullName} - {address.phoneNumber} - {address.street}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Input
          label="Full Name"
          placeholder="John Doe"
          readOnly
          value={address?.fullName}
        />
        <Input
          label="Phone number"
          placeholder="0123456789"
          readOnly
          value={address?.phoneNumber}
        />
        <Input
          label="Address"
          placeholder="HCM City"
          readOnly
          value={address?.street}
        />

        <div className="flex justify-end">
          <Button onClick={() => router.push("/setting/addresses")}>
            Add new address
          </Button>
        </div>
        {/* <div className="flex flex-col gap-y-2">
          <label className="">Shipping</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose shipping method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        {/* <div className="flex flex-col gap-y-2">
          <label className="">Note for shop</label>
          <Textarea placeholder="Enter your note" />
        </div> */}
      </div>
      <hr className="my-8" />
      <div>
        <div className="flex justify-between mt-8">
          <p className="text-lg font-bold">Order total</p>
          <p className="text-lg font-semibold">
            ${calculateTotal() - discountMoney}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-bold">Shipping fee</p>
          <p className="text-lg font-semibold text-red-500">$10</p>
        </div>
        <div className="flex justify-between mt-4 text-2xl">
          <p className="font-bold">Total</p>
          <p className="font-bold text-green-600">
            ${calculateTotal() - discountMoney + 10}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 gap-x-4">
        <Button variant="outline" onClick={onBack} className="px-24">
          Go Back
        </Button>
        <Button className="px-24" onClick={onClick}>
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}

export default Address;
