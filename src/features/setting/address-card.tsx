"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

type AddressCardProps = {
  fullName?: string;
  address?: string;
  phoneNumber?: string;
};

function AddressCard({ fullName, address, phoneNumber }: AddressCardProps) {
  return (
    <Card className="p-4">
      <div>
        <p className="text-lg font-semibold">
          Full name: <span className="font-normal">{fullName || ""}</span>
        </p>
        <p className="text-lg font-semibold">
          Phone number: <span className="font-normal">{phoneNumber || ""}</span>
        </p>
        <p className="text-lg font-semibold">
          Address: <span className="font-normal">{address || ""}</span>
        </p>
      </div>
      <div className="flex space-x-4">
        <Button>Edit</Button>
        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:text-red-500"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default AddressCard;
