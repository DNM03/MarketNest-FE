"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories } from "@/services/categoty";
import { getAllProducts } from "@/services/product";
import { Filter, Search, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

function LeftSection({ setProducts, setCurrentPage, setTotalPages }: any) {
  const searchParams = useSearchParams();
  const searchParamCategopryValue = searchParams.get("category");
  const searchParamSearchValue = searchParams.get("search");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const containerRef = useRef(null);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState<
    string | undefined
  >(searchParamCategopryValue || undefined);

  const [search, setSearch] = React.useState(searchParamSearchValue || "");
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [isSortByPrice, setIsSortByPrice] = React.useState(false);

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

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      try {
        const fetchProducts = async () => {
          const response = await getAllProducts({
            pageSize: "15",
            pageIndex: "1",
            ...(selectedCategory && { facet: selectedCategory }),
            ...(search !== "" && { searchName: search }),
            ...(minPrice !== "" && { minPrice }),
            ...(maxPrice !== "" && { maxPrice }),
            ...(orderBy !== "" && { orderBy }),
            ...(selectedRating && { rating: selectedRating.toString() }),
            ...(place !== "" && { place }),
            ...(isSortByPrice && { sortBy: isSortByPrice }),
          });
          setProducts(response.data.products);
          setTotalPages(response.data.totalPages);
          setCurrentPage(1);
        };
        fetchProducts();
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    }, 300);
    return () => clearTimeout(debounceTimeout);
  }, [
    selectedCategory,
    search,
    minPrice,
    maxPrice,
    orderBy,
    selectedRating,
    place,
    isSortByPrice,
    searchParamCategopryValue,
    searchParamSearchValue,
  ]);

  const handleRemoveAllFilters = () => {
    setSelectedCategory(undefined);
    setSelectedRating(null);
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setOrderBy("");
    setPlace("");
    setIsSortByPrice(false);
  };
  return (
    <div className="flex flex-col gap-y-4 w-full px-8">
      <div className="flex flex-row items-center">
        <Filter size={18} />
        <h1 className="ml-4 font-bold">SORT & FILTERS</h1>
      </div>
      <div className="w-full relative">
        <Search
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-slate-700"
          size={16}
        />
        <Input
          placeholder="Search..."
          className="pl-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <h2 className="font-bold">Category</h2>
        <div className="p-2">
          <Select
            value={selectedCategory ?? undefined}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full">
              {selectedCategory ? (
                <SelectValue />
              ) : (
                <span className="text-slate-500">Choose Category</span>
              )}
            </SelectTrigger>
            <SelectContent onWheel={(e) => e.stopPropagation()}>
              {categories.map((category: any, index) => (
                <SelectItem key={index} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Sort By Price</h2>
        <div className="flex flex-row items-center p-2">
          <Checkbox
            id="sortBy"
            checked={isSortByPrice}
            onCheckedChange={(e) => setIsSortByPrice(e === true)}
          />
          <label
            htmlFor="sortBy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-4"
          >
            Sort by price
          </label>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Order By</h2>
        <div className="flex flex-col gap-y-2 p-2">
          <RadioGroup
            defaultValue={orderBy}
            value={orderBy}
            onValueChange={setOrderBy}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asc" id="r1" />
              <Label htmlFor="r1">ASC</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desc" id="r2" />
              <Label htmlFor="r2">DESC</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Place</h2>
        <div className="flex flex-col gap-y-2 p-2">
          <RadioGroup
            defaultValue={place}
            value={place}
            onValueChange={setPlace}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Ho Chi Minh" id="r1" />
              <Label htmlFor="r1">HCM City</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Ha Noi" id="r2" />
              <Label htmlFor="r2">Ha Noi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Da Nang" id="r3" />
              <Label htmlFor="r2">Da Nang</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Price</h2>
        <div className="flex flex-row items-center p-2">
          <Input
            placeholder="Start price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span className="mx-2">-</span>
          <Input
            placeholder="End price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <div ref={containerRef}>
        <h2 className="font-bold">Rating</h2>
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() => {
              if (rating === selectedRating) {
                setSelectedRating(null);
              } else {
                setSelectedRating(rating);
              }
            }}
            className={`flex items-center w-full gap-2 p-2 rounded hover:bg-slate-100 ${
              selectedRating === rating ? "bg-slate-100" : ""
            }`}
          >
            <div className="flex gap-1">
              {Array.from({ length: rating }).map((_, index) => (
                <Star key={index} size={20} fill="#ebc934" color="#ebc934" />
              ))}
              {Array.from({ length: 5 - rating }).map((_, index) => (
                <Star
                  key={index + rating}
                  size={20}
                  className="text-slate-300"
                />
              ))}
            </div>
            <span className="text-sm text-slate-700">({rating})</span>
          </button>
        ))}
      </div>
      <Button className="w-full" onClick={handleRemoveAllFilters}>
        Remove All
      </Button>
    </div>
  );
}

export default LeftSection;
