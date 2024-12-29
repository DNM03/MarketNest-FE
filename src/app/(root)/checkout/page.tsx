"use client";

import { Card } from "@/components/ui/card";
import Stepper from "@/components/ui/custom-stepper";
import Footer from "@/components/ui/footer";
import Address from "@/features/checkout/address";
import Payment from "@/features/checkout/payment";
import Summary from "@/features/checkout/summary";
import React from "react";

function Page() {
  const steps = [
    { label: "Summary", description: "Summary of your order" },
    { label: "Address", description: "Shipping info" },
    { label: "Payment", description: "Complete payment" },
  ];
  const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <>
      <div className="p-8">
        <div>
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div className="flex flex-row w-full mt-8 px-12">
          <Card className="p-6 w-full">
            {currentStep === 0 && <Summary onClick={() => setCurrentStep(1)} />}
            {currentStep === 1 && (
              <Address
                onClick={() => setCurrentStep(2)}
                onBack={() => setCurrentStep(0)}
              />
            )}
            {currentStep === 2 && (
              <Payment
                onBack={() => {
                  setCurrentStep(1);
                }}
              />
            )}
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
