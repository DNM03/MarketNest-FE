"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Lens } from "@/components/ui/lens";
import { Heart, ShoppingCart, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
    <>
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
          <div className="w-full flex justify-center">
            <Carousel
              className="w-full max-w-xl mt-5"
              opts={{
                align: "start",
              }}
            >
              <CarouselContent className="gap-x-4">
                {images.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <Image
                      key={index}
                      src={images[index]}
                      alt="Product image"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="w-full flex-1 overflow-hidden flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">
            Iphone 16 Pro Max 512GB 8GB RAM
          </h1>
          <h2>
            <span className="font-semibold">Brand:</span> Apple -{" "}
            <span className="font-semibold">Category: </span>
            Electronics
          </h2>
          <h3>
            <span className="font-semibold">Shop: </span>CellphoneS
          </h3>
          <div className="flex flex-row gap-x-1 items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} fill="#ebc934" color="#ebc934" />
            ))}
            <p className="ml-3">567 Ratings</p>
          </div>
          <h3 className="font-semibold">Description:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tristique nibh quis quam placerat tempor. Etiam quis hendrerit
            lectus, at pretium erat. Praesent malesuada quam lorem, nec
            fermentum purus semper sed. Mauris hendrerit tincidunt ornare. Donec
            magna dui, ornare ut ex ac, iaculis ultrices nulla. Cras ante massa,
            euismod sed dui in, rutrum maximus lacus. Nam dolor magna, lacinia
            in orci a, lacinia consectetur quam. Nulla commodo erat est, sed
            vulputate nisi varius vel. Vivamus in magna nibh. Suspendisse
            feugiat vel nisl vel dapibus.{" "}
          </p>
          <hr />
          <h3 className="font-semibold">Quantity: </h3>
          <div className="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-200 border border-slate-300 rounded-s-lg p-3 h-11 focus:ring-slate-100 dark:focus:ring-slate-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-slate-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className="bg-slate-50 border-x-0 border-slate-300 h-11 text-center text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-200 border border-slate-300 rounded-e-lg p-3 h-11 focus:ring-slate-100 dark:focus:ring-slate-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-slate-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-row gap-x-4 mt-4 w-full">
            <Button variant="outline">
              <div className="flex flex-row justify-center gap-x-4">
                <ShoppingCart size={20} />
                Add to cart
              </div>
            </Button>
            <Button>
              <div className="flex flex-row justify-center gap-x-4">
                <Heart size={20} />
                Buy now
              </div>
            </Button>
          </div>
        </div>
      </div>
      <Card className="m-8 p-6">
        <h3 className="font-bold text-lg mb-4">
          Rating of Iphone 16 Pro Max 512GB 8GB RAM:
        </h3>
        <div className="flex flex-row gap-x-28">
          <div className="flex flex-col gap-y-2 w-1/5">
            <p className="text-6xl font-medium">4.5 / 5</p>
            <div className="flex flex-row gap-x-1 items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={28} fill="#ebc934" color="#ebc934" />
              ))}
            </div>
            <p className="opacity-60">567 Ratings</p>
          </div>
          <div className="w-full">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div
                key={rating}
                className={`flex items-center w-full gap-2 p-2 rounded`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill="#ebc934"
                      color="#ebc934"
                    />
                  ))}
                  {Array.from({ length: 5 - rating }).map((_, index) => (
                    <Star
                      key={index + rating}
                      size={20}
                      className="text-slate-300"
                    />
                  ))}
                </div>
                <Progress value={33} className="w-1/3 ml-4 rounded-sm" />
                <span className="text-sm text-slate-700 ml-4">123</span>
              </div>
            ))}
          </div>
        </div>
        <h4 className="my-4">Product Ratings:</h4>
        <div>
          <div className="flex flex-row gap-x-4">
            <Image
              src="https://placehold.co/50x50"
              alt="User image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center">
              <p>Username</p>
              <div className="flex flex-row gap-x-1 items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="#ebc934" color="#ebc934" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Page;
