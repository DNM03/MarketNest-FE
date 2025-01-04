"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getAllCategories } from "@/services/categoty";
import { registerToSale } from "@/services/user";
import React from "react";

function Page() {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string[]>([]);
  const [shopName, setShopName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [address, setAddress] = React.useState("");
  const { toast } = useToast();

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response.data.productCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  const handleSubmit = async () => {
    try {
      console.log({
        shopName,
        description,
        address,
        selectedCategory,
      });
      const response = await registerToSale({
        name: shopName,
        description,
        address,
        categories: selectedCategory,
        image: "",
        city: "",
        state: "",
        country: "",
      });
      toast({
        title: "Register successful",
        variant: "success",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div className="p-8 flex justify-center">
        <Card className="p-8 w-[800px]">
          <h1 className="font-bold text-2xl">Register to sell your products</h1>
          <div className="w-full">
            <label className="block mt-4">Shop Name</label>
            <Input
              type="text"
              className="w-full"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mt-4">Description</label>
            <Textarea
              className="w-full h-[200px]"
              onWheel={(e) => e.stopPropagation()}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mt-4">Address</label>
            <Input
              type="text"
              className="w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mt-4">Categories</label>
            <MultiSelect
              options={categories.map((category: any) => ({
                label: category.name,
                value: category.id,
              }))}
              onValueChange={setSelectedCategory}
              defaultValue={selectedCategory}
              placeholder="Select categories"
              variant="inverted"
              animation={2}
              maxCount={3}
            />
          </div>
          <div className="flex justify-end">
            <Button className="mt-8" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default Page;
