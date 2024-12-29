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
import { getMe, updateMe } from "@/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

function Page() {
  const [user, setUser] = React.useState<any>(null);
  const { toast } = useToast();
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getMe();
        setUser(response.data);
        reset({
          username: response.data.username,
          displayName: response.data.displayName,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          avatar: response.data.avatar,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: user?.username,
      displayName: user?.displayName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      avatar: user?.avatar,
    },
    resolver: zodResolver(
      z.object({
        displayName: z.string().nonempty("Display Name is required"),
        email: z.string().email("Invalid email address"),
        phoneNumber: z.string().length(10, { message: "Invalid phone number" }),
      })
    ),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await updateMe({
        displayName: data.displayName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        username: user?.username,
        avatar: user?.avatar,
      });
      toast({
        variant: "success",
        title: "Update successful",
        description: "Your information has been updated successfully",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        variant: "destructive",
        title: "Update failed",
        description: "Failed to update your information",
      });
    }
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div
        className="p-2 rounded-md w-fit text-white"
        style={{
          backgroundColor: user?.status === "ACTIVE" ? "#1ba160" : "#c2a03a",
        }}
      >
        {user?.status}
      </div>
      <div className="w-full">
        <Label>Username</Label>
        <Input placeholder="John" value={user?.username} readOnly />
      </div>
      <div className="w-full">
        <Controller
          control={control}
          name="displayName"
          render={({ field: { value, onChange } }) => (
            <div>
              <Label>Display Name</Label>
              <Input placeholder="John" value={value} onChange={onChange} />
              {errors.displayName && (
                <p className="text-red-500 ">
                  {errors.displayName?.message?.toString()}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <div>
              <Label>Email</Label>
              <Input
                placeholder="john@doe.com"
                value={value}
                onChange={onChange}
              />
              {errors.email && (
                <p className="text-red-500 ">
                  {errors.email?.message?.toString()}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div>
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

      <div className="flex justify-end space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" type="button">
              Change Password
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
            </DialogHeader>
            <div>
              <div className="w-full">
                <Label>Old Password</Label>
                <Input placeholder="**********" />
              </div>
              <div className="w-full">
                <Label>New Password</Label>
                <Input placeholder="**********" />
              </div>
              <div>
                <Label>Confirm Password</Label>
                <Input placeholder="**********" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="button">Submit</Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default Page;
