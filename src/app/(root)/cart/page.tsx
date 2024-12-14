"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import QuantityInput from "@/components/ui/quantity-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCart } from "@/services/cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { Fragment } from "react";

function Page() {
  const [cart, setCart] = React.useState<any>({});
  const [discount, setDiscount] = React.useState(0);
  React.useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart();
        console.log("Cart:", response.data.cart);
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cart.cartDetails?.forEach((item: any) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="p-8">
      <div>
        <h1 className="font-bold text-3xl">Shopping Cart</h1>
        <p>
          <span className="font-semibold">
            {cart.cartDetails?.length || 0} items
          </span>{" "}
          in your bag
        </p>
      </div>
      <div className="flex flex-row w-full mt-8 gap-x-4">
        <Card className="p-6 w-full">
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
            {(cart.cartDetails || []).map((item: any) => (
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
                    <p className="font-semibold text-lg">
                      {item.product.name || ""}
                    </p>
                    <p>Shop: shop</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p>${item.product.price || 0}</p>
                </div>
                <div className="flex justify-center items-center">
                  <QuantityInput value={item.quantity || 0} />
                </div>
                <div className="flex justify-center items-center text-green-600 font-bold text-lg">
                  <p>${item.product.price * item.quantity || 0}</p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="p-2 hover:bg-slate-200 rounded-full">
                    <Trash size={24} className="text-red-500 " />
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
        </Card>
        <Card className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Address</h2>
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
          <Button className="w-full my-4">Add address</Button>
          <hr />
          <h2 className="my-4 text-xl font-bold">Voucher Code</h2>
          <p className="mb-4">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed ut turpis id diam venenatis maximus.
          </p>
          <Input placeholder="Enter Voucher Code" />
          <Button className="w-full my-4">Appply</Button>
          <hr />
          <Card className="bg-orange-300 p-4 mt-4">
            <h2 className="text-xl font-bold mb-6">Cart Total</h2>
            <div className="flex flex-row justify-between">
              <p>Cart Subtotal</p>
              <p>${calculateTotal() || 0}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Discount</p>
              <p className="text-white">-${discount}</p>
            </div>
            <div className="flex flex-row justify-between font-bold text-lg">
              <p>Cart Total</p>
              <p>${calculateTotal() - discount}</p>
            </div>
            <Button className="w-full mt-6" variant="outline">
              Proceed to Checkout
            </Button>
          </Card>
        </Card>
      </div>
    </div>
  );
}

export default Page;
