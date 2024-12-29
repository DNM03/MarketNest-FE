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
import React from "react";

function Address({
  onClick,
  onBack,
}: {
  onClick: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">
        Please provide your information
      </h1>
      <div className="flex flex-col gap-y-4 px-16">
        <Input label="Full Name" placeholder="John Doe" />
        <Input label="Phone number" placeholder="0123456789" />
        <div className="flex flex-col gap-y-2">
          <label className="">Address</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Address" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end">
          <Button>Add new address</Button>
        </div>
        <div className="flex flex-col gap-y-2">
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
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="">Note for shop</label>
          <Textarea placeholder="Enter your note" />
        </div>
      </div>
      <hr className="my-8" />
      <div>
        <div className="flex justify-between mt-8">
          <p className="text-lg font-bold">Order total</p>
          <p className="text-lg font-semibold">$1700</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-bold">Shipping fee</p>
          <p className="text-lg font-semibold text-red-500">$150</p>
        </div>
        <div className="flex justify-between mt-4 text-2xl">
          <p className="font-bold">Total</p>
          <p className="font-bold text-green-600">$1850</p>
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
