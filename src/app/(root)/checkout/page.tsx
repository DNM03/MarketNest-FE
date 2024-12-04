import { Card } from "@/components/ui/card";
import Stepper from "@/components/ui/custom-stepper";
import React from "react";

function Page() {
  const steps = [
    { label: "Summary", description: "Summary of your order" },
    { label: "Address", description: "Shipping info" },
    { label: "Payment", description: "Complete payment" },
  ];
  return (
    <div className="p-8">
      <div>
        <Stepper steps={steps} currentStep={1} />
      </div>
      <div className="flex flex-row w-full mt-8 px-12">
        <Card className="p-6 w-full"></Card>
      </div>
    </div>
  );
}

export default Page;
