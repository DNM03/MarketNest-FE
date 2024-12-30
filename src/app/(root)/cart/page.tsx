"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import QuantityInput from "@/components/ui/quantity-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { clearOne, getCart, updateQuantity } from "@/services/cart";
import { getSystemDiscounts } from "@/services/discount";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

function Page() {
  const [cart, setCart] = React.useState<any>([]);
  const [systemDiscounts, setSystemDiscounts] = React.useState<any>([]);
  const [discount, setDiscount] = React.useState<any>();

  const [discountMoney, setDiscountMoney] = React.useState(0);
  const { toast } = useToast();
  const router = useRouter();
  const [refetch, setRefetch] = React.useState(false);
  React.useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart();
        setCart(response.data.cart);
        setRefetch(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, [refetch]);

  React.useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const response = await getSystemDiscounts();
        setSystemDiscounts(response.data.discounts);
      } catch (error) {
        console.error("Error fetching discounts:", error);
      }
    };
    fetchDiscounts();
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cart?.forEach((item: any) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  const handleUpdateQuantity = async (productId: string, quantity: number) => {
    try {
      await updateQuantity({ productId, quantity });

      setRefetch(true);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleClearOne = async (productId: string) => {
    try {
      await clearOne(productId);
      toast({
        title: "Clear successful",
        variant: "success",
      });
      setRefetch(true);
    } catch (error) {
      console.error("Error clearing one:", error);
    }
  };

  const calculateDiscount = () => {
    let dc = 0;
    if (discount) {
      dc = (calculateTotal() * (discount?.discountPercentage || 0)) / 100;
    }
    return dc;
  };

  return (
    <>
      <div className="p-8">
        <div>
          <h1 className="font-bold text-3xl">Shopping Cart</h1>
          <p>
            <span className="font-semibold">{cart?.length || 0} items</span> in
            your bag
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
              {(cart?.length !== 0 ? cart : []).map((item: any) => (
                <Fragment key={item.id}>
                  <div
                    className="col-span-3 flex flex-row gap-x-6 hover:cursor-pointer"
                    onClick={() => router.push(`/product/${item.product.id}`)}
                  >
                    <div className="flex justify-center items-center aspect-square ">
                      <Image
                        src={
                          item.product.images[0]?.imageUrl ||
                          "https://placehold.co/120x120"
                        }
                        alt="Product image"
                        height={120}
                        width={120}
                        className="rounded-md h-full object-cover"
                      />
                    </div>
                    <div className=" flex flex-col justify-center">
                      <p className="font-semibold text-lg">
                        {item.product.name || ""}
                      </p>
                      <p>Shop: {item.shop.name || ""}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>${item.product.price || 0}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <QuantityInput
                      value={item.quantity || 0}
                      onChange={(value) => {
                        handleUpdateQuantity(item.product.id, value);
                        setRefetch(true);
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center text-green-600 font-bold text-lg">
                    <p>${item.product.price * item.quantity || 0}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="p-2 hover:bg-slate-200 rounded-full"
                      onClick={() => handleClearOne(item.product.id)}
                    >
                      <Trash size={24} className="text-red-500 " />
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
          </Card>
          <Card className="w-1/3 p-4">
            {/* <h2 className="text-xl font-bold mb-4">Address</h2>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Address" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select> */}
            {/* <Button className="w-full my-4">Add address</Button> */}
            {/* <hr /> */}
            <h2 className="my-4 text-xl font-bold">Voucher Code</h2>
            <p className="mb-4">
              {
                "Save big with our exclusive voucher code! Redeem now for amazing discounts."
              }
            </p>
            {/* <Input placeholder="Enter Voucher Code" /> */}
            <Select
              value={discount}
              onValueChange={(value) => setDiscount(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Voucher" />
              </SelectTrigger>
              <SelectContent onWheel={(e) => e.stopPropagation()}>
                {systemDiscounts.map((discount: any, index: number) => (
                  <SelectItem key={index} value={discount}>
                    {discount?.code} - {discount?.campaign} (
                    {discount?.discountPercentage}%)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              className="w-full my-4"
              onClick={() => setDiscountMoney(calculateDiscount())}
            >
              Appply
            </Button>
            <hr />
            <Card className="bg-orange-300 p-4 mt-4">
              <h2 className="text-xl font-bold mb-6">Cart Total</h2>
              <div className="flex flex-row justify-between">
                <p>Cart Subtotal</p>
                <p>${calculateTotal() || 0}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>Discount</p>
                <p className="text-white">-${discountMoney}</p>
              </div>
              <div className="flex flex-row justify-between font-bold text-lg">
                <p>Cart Total</p>
                <p>${calculateTotal() - discountMoney}</p>
              </div>
              <Button
                className="w-full mt-6"
                variant="outline"
                onClick={() => router.push("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
