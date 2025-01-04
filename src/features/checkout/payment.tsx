import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import zalopay from "@/assets/images/zalopay_logo.webp";
import { createOrder } from "@/services/order";
import { useToast } from "@/hooks/use-toast";
import { createPayment } from "@/services/payment";

function Payment({
  onBack,
  address,
  discount,
  shopId,
  total,
  cart,
}: {
  onBack: () => void;
  address: any;
  discount: any;
  shopId: string;
  total: number;
  cart: any;
}) {
  const { toast } = useToast();
  const handleCreateOrder = async () => {
    // const data = {
    //   paymentMethodId: "4d3e83d0-58cd-4771-be4b-e63dc958372d",
    //   shippingMethodId: "5b3725d9-ebe2-4558-8ab4-cb179131c4cf",
    //   addressId: address.id,
    //   discountId: discount?.id || "",
    //   shopId,
    //   shippingFee: 10 * 25485,
    //   totalAmount: total * 25485,
    //   orderDetails: cart.map((item: any) => ({
    //     productId: item.product.id,
    //     quantity: item.quantity,
    //     price: item.product.price * 25485,
    //   })),
    // };
    // console.log(data);
    try {
      const response = await createOrder({
        paymentMethodId: "4d3e83d0-58cd-4771-be4b-e63dc958372d",
        shippingMethodId: "5b3725d9-ebe2-4558-8ab4-cb179131c4cf",
        addressId: address.id,
        discountId: discount?.id || "",
        shopId,
        shippingFee: 10,
        totalAmount: total,
        orderDetails: cart.map((item: any) => ({
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
        })),
      });
      if (response) {
        const finalAmount =
          total * 25485 -
          (total * 25485 * (discount?.discountRate || 0)) / 100 +
          10 * 25485;
        const responsePayment = await createPayment({
          orderId: response.data.id,
          amount: finalAmount,
        });
        window.open(responsePayment.data.data.result.order_url, "_blank");
      }
    } catch (error: any) {
      console.error("Error creating order:", error);
      if (error.response.data.status === 406) {
        toast({
          title: "Product out of stock",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Error creating order",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 mt-8 mb-8">
      <Image
        src={zalopay}
        alt="QR code"
        height={400}
        width={400}
        className="rounded-md"
      />
      <p className="text-lg font-semibold">Pay with ZaloPay</p>
      <div className="flex flex-row gap-x-4">
        <Button variant="outline" onClick={onBack} className="px-24">
          Go Back
        </Button>
        <Button className="px-24" onClick={() => handleCreateOrder()}>
          Place order
        </Button>
      </div>
    </div>
  );
}

export default Payment;
