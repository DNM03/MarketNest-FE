import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuantityInput from "@/components/ui/quantity-input";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { Fragment } from "react";

function Summary({ onClick }: { onClick: () => void }) {
  const data = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 1,
      total: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 1,
      total: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      quantity: 1,
      total: 300,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      quantity: 1,
      total: 400,
    },
  ];
  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-7 mb-8 text-lg font-bold">
        <div className="col-span-3">
          <p>Product</p>
        </div>
        <div className="flex justify-center">
          <p>Price</p>
        </div>
        <div className="flex justify-center">
          <p>Quantity</p>
        </div>
        <div className="flex justify-center">
          <p>Total</p>
        </div>
        <div className="flex justify-center">
          <p>Remove</p>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-6">
        {data.map((item) => (
          <Fragment key={item.id}>
            <div className="col-span-3 flex flex-row gap-x-6">
              <Image
                src="https://placehold.co/120x160"
                alt="Product image"
                height={160}
                width={120}
                className="rounded-md"
              />
              <div className=" flex flex-col justify-center">
                <p className="font-semibold text-lg">{item.name}</p>
                <p>Brand: brand</p>
                <p>Shop: shop</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p>${item.price}</p>
            </div>
            <div className="flex justify-center items-center">
              <QuantityInput />
            </div>
            <div className="flex justify-center items-center text-green-600 font-bold text-lg">
              <p>${item.total}</p>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-2 hover:bg-slate-200 rounded-full">
                <Trash size={24} className="text-red-500 " />
              </button>
            </div>
          </Fragment>
        ))}
      </div>
      <hr className="mt-8" />
      <div>
        <h2 className="my-4 text-xl font-bold">Voucher Code</h2>
        <p className="mb-4">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ut turpis id diam venenatis maximus.
        </p>
        <Input placeholder="Enter Voucher Code" />
        <div className="flex justify-center">
          <Button className="w-1/4 my-4">Appply</Button>
        </div>
      </div>
      <hr className="mt-8" />
      <div>
        <div className="flex justify-between mt-8">
          <p className="text-lg font-bold">Subtotal</p>
          <p className="text-lg font-semibold">$1800</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-bold">Discount</p>
          <p className="text-lg font-semibold text-red-500">-$100</p>
        </div>
        <div className="flex justify-between mt-4 text-2xl">
          <p className="font-bold">Total</p>
          <p className="font-bold text-green-600">$1700</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="w-1/3 mt-8" onClick={onClick}>
          Proceed to Address
        </Button>
      </div>
    </div>
  );
}

export default Summary;
