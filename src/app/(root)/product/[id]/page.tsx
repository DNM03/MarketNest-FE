"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Lens } from "@/components/ui/lens";
import { Star } from "lucide-react";

function Page() {
  const [hovering, setHovering] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
  ];
  return (
    <div className="px-20 py-10 flex flex-row gap-x-8">
      <div className="relative z-10 w-1/2 flex-1">
        <div className="flex justify-center items-center">
          <Lens hovering={hovering} setHovering={setHovering}>
            <Image
              src="https://placehold.co/600x600"
              alt="Product image"
              width={600}
              height={600}
              className="rounded-md"
            />
          </Lens>
        </div>
        <div className="flex flex-row overflow-auto gap-x-4 mt-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[100px] flex justify-center items-center"
            >
              <div key={index} className="w-[100px] h-[100px]">
                <Image
                  src={image}
                  alt="Product image"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex-1 overflow-hidden flex flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Iphone 16 Pro Max 512GB 8GB RAM</h1>
        <h2>Brand: Apple - Category: Electronics</h2>
        <div className="flex flex-row gap-x-1 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={20} fill="#ebc934" color="#ebc934" />
          ))}
          <p className="ml-3">567 Ratings</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
