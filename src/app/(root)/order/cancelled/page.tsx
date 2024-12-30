"use client";

import OrderCard from "@/features/order/order-card";
import { getMyOrders } from "@/services/user";
import React, { useEffect } from "react";

function Page() {
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getMyOrders();
        setOrders(
          response.data.orders.filter(
            (order: any) => order.orderStatus === "Cancelled"
          )
        );
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);
  return (
    <div className="flex flex-col gap-4 p-6">
      {orders.map((order: any, index) => (
        <OrderCard
          key={index}
          status="cancelled"
          totalAmount={Math.round(order?.totalAmount) || 0}
          productsTotal={
            order?.orderDetails?.reduce(
              (sum: number, product: any) => sum + (product.quantity || 0),
              0
            ) || 0
          }
          orderId={order.id}
        />
      ))}
    </div>
  );
}

export default Page;
