"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddressCard from "@/features/setting/address-card";
import { useToast } from "@/hooks/use-toast";
import { addAddress, getMe } from "@/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

function Page() {
  const [user, setUser] = React.useState<any>(null);
  const [refetch, setRefetch] = React.useState(false);
  const { toast } = useToast();
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getMe();
        setUser(response.data);
        setRefetch(false);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [refetch]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
    },
    resolver: zodResolver(
      z.object({
        fullName: z.string().nonempty("Full Name is required"),
        phoneNumber: z.string().length(10, { message: "Invalid phone number" }),
        address: z.string().nonempty("Address is required"),
      })
    ),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      await addAddress({
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        street: data.address,
      });
      toast({
        variant: "success",
        title: "Add successful",
        description: "Your address has been added successfully",
      });
      setRefetch(true);
      reset();
    } catch (error) {
      console.error("Error adding address:", error);
      toast({
        variant: "destructive",
        title: "Add failed",
        description: "Failed to add your address",
      });
    }
  };

  return (
    <div>
      <div className="mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Address</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Address</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="w-full">
                  <Controller
                    control={control}
                    name="fullName"
                    render={({ field: { value, onChange } }) => (
                      <div>
                        <Label>Full Name</Label>
                        <Input
                          placeholder="John Doe"
                          value={value}
                          onChange={onChange}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 ">
                            {errors.fullName?.message?.toString()}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="w-full">
                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field: { value, onChange } }) => (
                      <div>
                        <Label>Phone Number</Label>
                        <Input
                          placeholder="0123456789"
                          value={value}
                          onChange={onChange}
                        />
                        {errors.phoneNumber && (
                          <p className="text-red-500 ">
                            {errors.phoneNumber?.message?.toString()}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    control={control}
                    name="address"
                    render={({ field: { value, onChange } }) => (
                      <div>
                        <Label>Address</Label>
                        <Input
                          placeholder="1234 Main St"
                          value={value}
                          onChange={onChange}
                        />
                        {errors.address && (
                          <p className="text-red-500 ">
                            {errors.address?.message?.toString()}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col space-y-4">
        {user?.addresses?.map((data: any, index: number) => (
          <AddressCard
            key={index}
            fullName={data.fullName || ""}
            phoneNumber={data.phoneNumber || ""}
            address={data.street || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
