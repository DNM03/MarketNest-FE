"use client";

import { Card } from "@/components/ui/card";
import Pagination from "@/components/ui/custom-pagination";
import LeftSection from "@/features/product/left-section";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function Page() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const products = [
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
      rating: 4,
    },
  ];
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 p-4 px-8 flex flex-row justify-between">
        <LeftSection />
        <div className="border-l-2 h-full border-foreground opacity-10"></div>
      </div>
      <div className="col-span-9 p-4">
        <div className="grid grid-cols-5 gap-x-6 gap-y-6 mb-10">
          {products.map((product, index) => (
            <Card key={index} className="">
              <Image
                src={product.imageLink}
                alt={product.name}
                width={180}
                height={180}
                className="rounded-md w-full"
              />
              <p className="text-xl ml-4 mt-1">{product.name}</p>
              <p className="ml-4">{product.price}$</p>
              <div className="mt-2 p-4 flex flex-row justify-between">
                <p className="flex justify-center items-center">
                  {product.rating}
                  <Star
                    size={16}
                    className="ml-1"
                    fill="#ebc934"
                    color="#ebc934"
                  />
                </p>
                <div className=" hover:bg-slate-200 flex justify-between items-center p-2 rounded-full">
                  <ShoppingCart size={16} />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Pagination
          totalPages={10}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Page;
