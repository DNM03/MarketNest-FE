import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Star, Store, Undo2, X } from "lucide-react";
import Image from "next/image";
import React from "react";

type OrderStatus =
  | "unverified"
  | "pendingShipment"
  | "delivery"
  | "completed"
  | "cancelled"
  | "returned";

function OrderCard({ status }: { status?: OrderStatus }) {
  const buttons = {
    unverified: [
      {
        label: "Cancel order",
        icon: <X />,
      },
      {
        label: "Contact shop",
        icon: <Store />,
      },
    ],
    pendingShipment: [
      {
        label: "Cancel order",
        icon: <X />,
      },
      {
        label: "Contact shop",
        icon: <Store />,
      },
    ],
    delivery: [],
    completed: [
      {
        label: "Rating",
        icon: <Star />,
      },
      {
        label: "Buy again",
        icon: <ShoppingCart />,
      },
      {
        label: "Return",
        icon: <Undo2 />,
      },
    ],
    cancelled: [
      {
        label: "Buy again",
        icon: <ShoppingCart />,
      },
    ],
    returned: [],
  };
  return (
    <Card className="p-4 ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-x-4">
          <Image
            src="https://placehold.co/160x160"
            alt="Product image"
            height={160}
            width={160}
            className="rounded-md"
          />
          <div className=" flex flex-col justify-center">
            <p className="font-semibold text-lg">Name</p>
            <p>Brand: brand</p>
            <p>Shop: shop</p>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <p>
            Total Price: <span className="text-2xl font-semibold">$1000</span>
          </p>
          <p>Quantity: 2</p>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          {status &&
            buttons[status].map((button, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-row justify-start gap-x-2"
              >
                {button.icon} {button.label}
              </Button>
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button variant="outline" className="w-36">
          Detail <ArrowRight />
        </Button>
      </div>
    </Card>
  );
}

export default OrderCard;
