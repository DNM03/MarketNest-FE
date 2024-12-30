import { Button } from "@/components/ui/button";
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
import { Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

function Summary({
  onClick,
  setRefetch,
  cart,
  calculateTotal,
  discount,
  setDiscount,
  systemDiscounts,
  discountMoney,
  setDiscountMoney,
  calculateDiscount,
}: {
  onClick: () => void;
  setRefetch: (value: boolean) => void;
  cart: any;
  calculateTotal: () => number;
  discount: any;
  setDiscount: (value: any) => void;
  systemDiscounts: any[];
  discountMoney: number;
  setDiscountMoney: (value: number) => void;
  calculateDiscount: () => number;
}) {
  const { toast } = useToast();
  const router = useRouter();

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
      <hr className="mt-8" />
      <div>
        <h2 className="my-4 text-xl font-bold">Voucher Code</h2>
        <p className="mb-4">
          {
            "Save big with our exclusive voucher code! Redeem now for amazing discounts."
          }
        </p>
        <Select value={discount} onValueChange={(value) => setDiscount(value)}>
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
        <div className="flex justify-center">
          <Button
            className="w-1/4 my-4"
            onClick={() => setDiscountMoney(calculateDiscount())}
          >
            Appply
          </Button>
        </div>
      </div>
      <hr className="mt-8" />
      <div>
        <div className="flex justify-between mt-8">
          <p className="text-lg font-bold">Subtotal</p>
          <p className="text-lg font-semibold">${calculateTotal() || 0}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-bold">Discount</p>
          <p className="text-lg font-semibold text-red-500">
            -${discountMoney}
          </p>
        </div>
        <div className="flex justify-between mt-4 text-2xl">
          <p className="font-bold">Total</p>
          <p className="font-bold text-green-600">
            ${calculateTotal() - discountMoney}
          </p>
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
