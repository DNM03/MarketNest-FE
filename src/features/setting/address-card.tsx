"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { deleteAddress, updateAddress } from "@/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type AddressCardProps = {
  fullName?: string;
  address?: string;
  phoneNumber?: string;
  id: string;
  setRefetch?: React.Dispatch<React.SetStateAction<boolean>>;
  toast: any;
};

function AddressCard({
  fullName,
  address,
  phoneNumber,
  id,
  setRefetch,
  toast,
}: AddressCardProps) {
  const handleDelete = async () => {
    try {
      await deleteAddress(id);
      setRefetch?.(true);
      toast({
        title: "Delete successful",
        variant: "success",
      });
    } catch (error) {
      console.error("Error deleting address:", error);
      toast({
        title: "Delete failed",
        variant: "error",
      });
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: fullName,
      phoneNumber: phoneNumber,
      address: address,
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
      toast({
        variant: "success",
        title: "Update successful",
        description: "Your address has been updated successfully",
      });
      await updateAddress(id, {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        street: data.address,
      });
      setRefetch?.(true);
    } catch (error) {
      console.error("Error adding address:", error);
      toast({
        variant: "destructive",
        title: "Update failed",
        description: "Failed to update your address",
      });
    }
  };
  return (
    <Card className="p-4">
      <div>
        <p className="text-lg font-semibold">
          Full name: <span className="font-normal">{fullName || ""}</span>
        </p>
        <p className="text-lg font-semibold">
          Phone number: <span className="font-normal">{phoneNumber || ""}</span>
        </p>
        <p className="text-lg font-semibold">
          Address: <span className="font-normal">{address || ""}</span>
        </p>
      </div>
      <div className="flex space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Edit</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Address</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-4">
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
                <Button type="submit">Save</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:text-red-500"
            >
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure to delete this address?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                address and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="border-red-500 bg-red-500 hover:bg-red-300"
                onClick={handleDelete}
              >
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
}

export default AddressCard;
