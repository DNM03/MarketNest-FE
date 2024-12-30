"use client";

import { Card } from "@/components/ui/card";
import { getOrder } from "@/services/order";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [order, setOrder] = React.useState<any>();
  useEffect(() => {
    const fetchOrder = async () => {
      if (params.id) {
        try {
          const response = await getOrder(params.id);
          setOrder(response.data);
          console.log("Order:", response.data);
        } catch (error) {
          console.error("Error fetching order:", error);
        }
      }
    };
    fetchOrder();
  }, [params.id]);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">Order information</p>
        <p className="text-lg">
          Order status:{" "}
          <span className="font-semibold">{order?.orderStatus}</span>
        </p>
        <p className="text-lg">
          Total amount:{" "}
          <span className="font-semibold">
            ${Math.round(order?.totalAmount || 0)}
          </span>
        </p>
        <p className="text-lg">
          Shipping fee: <span className="font-semibold">$10</span>
        </p>
        <p className="text-lg">
          Payment method: <span className="font-semibold">ZaloPay</span>
        </p>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">My information</p>
        <p className="text-lg">
          Full name:{" "}
          <span className="font-semibold">{order?.address?.fullName}</span>
        </p>
        <p className="text-lg">
          Phone number:{" "}
          <span className="font-semibold">{order?.address?.phoneNumber}</span>
        </p>
        <p className="text-lg">
          Address:{" "}
          <span className="font-semibold">{order?.address?.street}</span>
        </p>
      </div>
      <hr className="my-8" />

      <div className="flex flex-col gap-4 mb-8">
        {order?.orderDetails?.map((product: any, index: number) => (
          <Card
            className="p-4 flex flex-row gap-4 items-center"
            key={index}
            onClick={() => router.push(`/product/${product.product.id}`)}
          >
            <div className="flex justify-center items-center w-[120px] h-[120px]">
              <Image
                src={
                  product?.product?.images[0] || "https://placehold.co/120x120"
                }
                alt={product?.product?.name}
                width={120}
                height={120}
                className="rounded-md w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold">{product?.product?.name}</p>
              <p>Price: ${product?.product?.price}</p>
              <p>Quantity: {product?.quantity}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
