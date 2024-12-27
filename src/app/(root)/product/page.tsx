"use client";

import { Card } from "@/components/ui/card";
import Pagination from "@/components/ui/custom-pagination";
import LeftSection from "@/features/product/left-section";
import { getAllProducts } from "@/services/product";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Head from "next/head";
import Footer from "@/components/ui/footer";

function Page() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const [products, setProducts] = React.useState([]);

  const [totalPages, setTotalPages] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts({
          pageSize: "15",
          pageIndex: currentPage.toString(),
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [currentPage]);
  return (
    <>
      <Head>
        <title>Our Products - MarketNest | Quality E-Commerce Solutions</title>
        <meta
          name="description"
          content="Explore our wide range of products at MarketNest. Find quality e-commerce solutions tailored to elevate your online business."
        />
        <meta
          name="keywords"
          content="products, e-commerce solutions, MarketNest, online shopping, quality products"
        />
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-span-3 p-4 px-8 flex flex-row justify-between">
          <LeftSection
            setProducts={setProducts}
            setCurrentPage={setCurrentPage}
            setTotalPages={setTotalPages}
          />
          <div className="border-l-2 h-full border-foreground opacity-10"></div>
        </div>
        <div className="col-span-9 p-4">
          <div className="grid grid-cols-5 gap-x-6 gap-y-6 mb-10">
            {products.map((product: any, index) => (
              <Card
                key={index}
                className="flex flex-col hover:cursor-pointer"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                <div className="flex justify-center items-center w-full aspect-square ">
                  <Image
                    src={product.images[0] || "https://placehold.co/180x180"}
                    alt={product.name}
                    width={180}
                    height={180}
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="text-xl ml-4 mt-1">{product.name}</p>
                  <p className="ml-4 mt-auto">{product.price}$</p>
                  <div className=" p-4 flex flex-row justify-between">
                    <p className="flex justify-center items-center">
                      {product.rate}
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
                </div>
              </Card>
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
