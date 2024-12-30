"use client";

import { Card } from "@/components/ui/card";
import Stepper from "@/components/ui/custom-stepper";
import Footer from "@/components/ui/footer";
import Address from "@/features/checkout/address";
import Payment from "@/features/checkout/payment";
import Summary from "@/features/checkout/summary";
import { useToast } from "@/hooks/use-toast";
import { getCart } from "@/services/cart";
import { getSystemDiscounts } from "@/services/discount";
import { getMe } from "@/services/user";
import React from "react";

function Page() {
  const [cart, setCart] = React.useState<any>([]);
  const [refetch, setRefetch] = React.useState(false);
  const [systemDiscounts, setSystemDiscounts] = React.useState<any>([]);
  const [discount, setDiscount] = React.useState<any>();
  const [user, setUser] = React.useState<any>(null);
  const [address, setAddress] = React.useState<any>();
  const [discountMoney, setDiscountMoney] = React.useState(0);
  const { toast } = useToast();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getMe();
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);
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

  React.useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart();
        console.log(response.data.cart);
        setCart(response.data.cart);
        setRefetch(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, [refetch]);
  const calculateTotal = () => {
    let total = 0;
    cart?.forEach((item: any) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };
  const calculateDiscount = () => {
    let dc = 0;
    if (discount) {
      dc = (calculateTotal() * (discount?.discountPercentage || 0)) / 100;
    }
    return dc;
  };
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
            {currentStep === 0 && (
              <Summary
                onClick={() => setCurrentStep(1)}
                calculateTotal={calculateTotal}
                cart={cart}
                discount={discount}
                setRefetch={setRefetch}
                setDiscount={setDiscount}
                systemDiscounts={systemDiscounts}
                calculateDiscount={calculateDiscount}
                discountMoney={discountMoney}
                setDiscountMoney={setDiscountMoney}
              />
            )}
            {currentStep === 1 && (
              <Address
                onClick={() => {
                  if (!address) {
                    toast({
                      title: "Please select an address",
                      variant: "destructive",
                    });
                    return;
                  }
                  setCurrentStep(2);
                }}
                onBack={() => setCurrentStep(0)}
                discountMoney={discountMoney}
                calculateTotal={calculateTotal}
                user={user}
                address={address}
                setAddress={setAddress}
              />
            )}
            {currentStep === 2 && (
              <Payment
                onBack={() => {
                  setCurrentStep(1);
                }}
                address={address}
                discount={discount}
                shopId={cart[0]?.shop?.id}
                total={calculateTotal()}
                cart={cart}
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
