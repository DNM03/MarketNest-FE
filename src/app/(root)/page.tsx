import HomeCarousel from "@/features/home/home-carousel";
import Image from "next/image";
import fashion_clothes from "@/assets/images/fashion_clothes.jpg";
import macmini from "@/assets/images/macmini.png";
import vacuum_cleaner from "@/assets/images/vacuum_cleaner.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const categories = [
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Electronics",
    },
  ];
  const products = [
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
    {
      imageLink: "https://placehold.co/180x180",
      name: "Iphone 16",
      price: 1000,
    },
  ];
  return (
    <div>
      <section className="w-full flex justify-center">
        <HomeCarousel />
      </section>
      <section className="flex flex-row overflow-auto gap-x-4 px-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full h-64 flex justify-center items-center"
          >
            <div className="w-64 h-64 rounded-md flex flex-col justify-center items-center gap-y-4">
              <Image
                src={category.imageLink}
                alt={category.name}
                width={180}
                height={180}
                className="rounded-md"
              />
              <p className="font-bold text-base">{category.name}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-10 flex flex-row">
        <Image src={fashion_clothes} alt="fashion clothes" width={600} />
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-5xl font-bold text-slate-700 text-center w-full">
            Chic and Timeless
            <br />
            <span className="font-normal">Find Your Perfect Outfit!</span>
          </h1>
          <Button variant="outline" className="mt-8 w-40">
            Explore
          </Button>
        </div>
      </section>
      <section className="flex flex-row w-full mt-10">
        <div className="p-4 w-full">
          <Card>
            <CardHeader>
              <CardTitle>New Arrival</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-[400px]">
              <Image src={macmini} alt="mac mini" width={600} />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center gap-y-4">
              <p className="text-3xl">See what's new here</p>
              <Button variant="outline">Let's see now</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="p-4 w-full ">
          <Card>
            <CardHeader>
              <CardTitle>Top Choice</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-[400px]">
              <Image
                src={vacuum_cleaner}
                alt="mac mini"
                width={350}
                height={600}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center gap-y-4">
              <p className="text-3xl">See what's people choose</p>
              <Button variant="outline">Let's see now</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="p-6">
        <h3 className="font-bold text-xl mb-4">Top products</h3>
        <div className="grid grid-cols-6 gap-x-6 gap-y-6">
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
              <div className="mt-2 p-4">
                <p>{product.price}$</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <div className="mb-4 flex justify-center items-center">
        <Button variant="outline" className="w-48 mx-auto mt-4">
          Explore more
          <ArrowRight size={20} className="text-slate-700" />
        </Button>
      </div>
    </div>
  );
}
