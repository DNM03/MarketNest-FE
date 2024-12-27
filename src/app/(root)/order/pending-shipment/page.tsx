import OrderCard from "@/features/order/order-card";
import React from "react";

function Page() {
  return (
    <div>
      {" "}
      <OrderCard status="pendingShipment" />
    </div>
  );
}

export default Page;
