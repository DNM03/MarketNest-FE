"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import QuantityInput from "@/components/ui/quantity-input";
import { getProductById } from "@/services/product";
import Footer from "@/components/ui/footer";
import { addToCart } from "@/services/cart";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { getRatings, getRatingSummary } from "@/services/rating";

function Page({ params }: { params: { id: string } }) {
  const [hovering, setHovering] = useState(false);
  const [product, setProduct] = useState<any>({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [ratingSummary, setRatingSummary] = useState<any>({});
  const [ratings, setRatings] = useState<any>([]);
  const router = useRouter();
  const { toast } = useToast();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(params.id);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
    const fetchRatingSummary = async () => {
      try {
        const response = await getRatingSummary(params.id);
        setRatingSummary(response.data);
      } catch (error) {
        console.error("Error fetching rating summary:", error);
      }
    };
    fetchRatingSummary();
    const fetchRatings = async () => {
      try {
        const response = await getRatings(params.id);
        setRatings(response.data.ratings);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };
    fetchRatings();
  }, []);
  const handleAddToCart = async (productId: string) => {
    try {
      if (quantity > 0) {
        await addToCart({ productId: productId, quantity: quantity });
        toast({
          title: "Product added to cart",
          variant: "success",
        });
      } else {
        toast({
          title: "Quantity must be greater than 0",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const ratingMap: { [key: number]: string } = {
    5: "five",
    4: "four",
    3: "three",
    2: "two",
    1: "one",
  };
  return (
    <>
      <div className="px-20 py-10 flex flex-row gap-x-8">
        <div className="relative z-10 w-1/2 flex-1">
          <div className="flex justify-center items-center">
            <Lens hovering={hovering} setHovering={setHovering}>
              <div className="flex justify-center items-center w-[600px] h-[600px]">
                <Image
                  src={
                    product.images?.length !== 0
                      ? product.images?.[selectedImage]?.imageUrl
                      : "https://placehold.co/600x600"
                  }
                  alt="Product image"
                  width={600}
                  height={600}
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
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
                {(product.images || []).map((_: any, index: number) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <div
                      className="flex justify-center items-center w-full aspect-square"
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        key={index}
                        src={product.images[index]?.imageUrl}
                        alt="Product image"
                        width={100}
                        height={100}
                        className="rounded-md w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="w-full flex-1 overflow-hidden flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">{product.name || ""}</h1>
          <h2>
            <span className="font-semibold">Category: </span>
            {(product.categories || [])
              .map((category: any) => category.name)
              .join(", ")}
          </h2>
          <h3>
            <span className="font-semibold">Shop: </span>
            {product.shop?.name || ""}
          </h3>
          <div className="flex flex-row gap-x-1 items-center">
            {Array.from({ length: Math.round(product.rate || 0) }).map(
              (_, index) => (
                <Star key={index} size={20} fill="#ebc934" color="#ebc934" />
              )
            )}
            {Array.from({ length: 5 - Math.round(product.rate || 0) }).map(
              (_, index) => (
                <Star key={index} size={20} fill="#ffffff" color="#ebc934" />
              )
            )}
            {/* <p className="ml-3">567 Ratings</p> */}
          </div>
          <h3 className="font-semibold">Description:</h3>
          <p>{product.description || ""}</p>
          <hr />
          <h3 className="font-semibold text-4xl text-amber-500">
            {product.price || ""}$
          </h3>
          <h3 className="font-semibold">
            Stock: <span className="font-normal">{product.stock || ""}</span>
          </h3>
          <h3 className="font-semibold">Choose quantity:</h3>
          <QuantityInput value={quantity} onChange={setQuantity} />
          <div className="flex flex-row gap-x-4 mt-4 w-full">
            <Button
              variant="outline"
              onClick={() => {
                handleAddToCart(params.id);
              }}
            >
              <div className="flex flex-row justify-center gap-x-4">
                <ShoppingCart size={20} />
                Add to cart
              </div>
            </Button>
            <Button
              onClick={() => {
                handleAddToCart(params.id);
                router.push("/cart");
              }}
            >
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
          Rating of {product.name || ""}:
        </h3>
        <div className="flex flex-row gap-x-28">
          <div className="flex flex-col gap-y-2 w-1/5">
            <p className="text-6xl font-medium">{product.rate || 0} / 5</p>
            <div className="flex flex-row gap-x-1 items-center">
              {Array.from({ length: Math.round(product.rate || 0) }).map(
                (_, index) => (
                  <Star key={index} size={28} fill="#ebc934" color="#ebc934" />
                )
              )}
              {Array.from({ length: 5 - Math.round(product.rate || 0) }).map(
                (_, index) => (
                  <Star key={index} size={28} fill="#ffffff" color="#ebc934" />
                )
              )}
            </div>
            <p className="opacity-60">{ratingSummary.total || 0} Ratings</p>
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
                <Progress
                  value={
                    Math.round(
                      ratingSummary[`${ratingMap[rating]}Star`] /
                        ratingSummary.total
                    ) * 100
                  }
                  className="w-1/3 ml-4 rounded-sm"
                />
                <span className="text-sm text-slate-700 ml-4">
                  {ratingSummary[`${ratingMap[rating]}Star`] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>
        <h4 className="my-4">Product Ratings:</h4>
        <div>
          {ratings.map((rating: any, index: number) => (
            <div className="flex flex-row gap-x-4" key={index}>
              <Image
                src={rating.user.avatar || "https://placehold.co/70x70"}
                alt="User image"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <p className="font-semibold">{rating.user.username}</p>
                <div className="flex flex-row gap-x-1 items-center">
                  {Array.from({ length: rating.value || 0 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="#ebc934"
                      color="#ebc934"
                    />
                  ))}
                </div>
                <p>{rating.comment || ""}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Footer />
    </>
  );
}

export default Page;
