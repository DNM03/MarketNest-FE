"use client";

import Footer from "@/components/ui/footer";
import { getAllCategories } from "@/services/categoty";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  useEffect(() => {
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
  return (
    <>
      <div>
        <h1 className="text-center my-4 text-3xl font-semibold">
          Shop by category
        </h1>
        <div className="grid grid-cols-5 gap-4">
          {categories.map((category: any, index) => (
            <div
              key={index}
              onClick={() => router.push(`/product?category=${category.id}`)}
              className="w-full h-64 flex justify-center items-center hover:bg-slate-100 rounded-lg hover:scale-110 ease-in-out transition-transform duration-300"
            >
              <div className="w-64 h-64 rounded-md flex flex-col justify-center items-center gap-y-4">
                <div className="flex justify-center items-center w-[180px] h-[180px]">
                  <Image
                    src={category.image || "https://placehold.co/180x180"}
                    alt={category.name}
                    width={180}
                    height={180}
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-base">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
