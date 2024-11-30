"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search, Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function LeftSection() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !(containerRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setSelectedRating(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
        <Input placeholder="Search..." className="pl-8" />
      </div>
      <div>
        <h2 className="font-bold">Category</h2>
        <div className="p-2">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Place</h2>
        <div className="flex flex-col gap-y-2 p-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="hcm" />
            <label
              htmlFor="hcm"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              HCM City
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hn" />
            <label
              htmlFor="hn"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ha Noi
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="dn" />
            <label
              htmlFor="dn"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Da Nang City
            </label>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Shipping Type</h2>
        <div className="flex flex-col gap-y-2 p-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="standard" />
            <label
              htmlFor="standard"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Standard
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="Expedited" />
            <label
              htmlFor="Expedited"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Expedited
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="Same-Day" />
            <label
              htmlFor="Same-Day"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Same-Day
            </label>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Price</h2>
        <div className="flex flex-row items-center p-2">
          <Input placeholder="Start price" />
          <span className="mx-2">-</span>
          <Input placeholder="End price" />
        </div>
      </div>
      <div ref={containerRef}>
        <h2 className="font-bold">Rating</h2>
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() => setSelectedRating(rating)}
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
      <Button className="w-full">Remove All</Button>
    </div>
  );
}

export default LeftSection;
