"use client";

import React, { useEffect, useRef, useState } from "react";
import logo_icon from "@/assets/images/marketnest_logo_icon.png";
import logo_text from "@/assets/images/marketnest_logo_text.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Input } from "./input";
import { ChevronDown, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowCategories(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const categories = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Books",
    "Sports",
  ];
  return (
    <header className=" p-2 py-4 flex flex-row justify-between items-center sticky top-0 bg-slate-100 bg-opacity-50 backdrop-blur-md z-40">
      <div className="flex flex-row items-center">
        <Image src={logo_icon} width={40} height={40} alt="Logo icon" />
        <Image src={logo_text} width={140} height={50} alt="Logo text" />
        <nav>
          <ul className="font-bold flex flex-row items-center ml-12 gap-x-12 text-slate-700  cursor-default">
            <li>
              <Link href="/" className="relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              {" "}
              <button
                className="relative group flex flex-row items-center"
                onClick={() => setShowCategories(!showCategories)}
              >
                Categories
                <ChevronDown className="w-4 h-4 ml-2" />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <AnimatePresence>
                {showCategories && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 bg-white rounded-lg shadow-sm py-2 min-w-[200px]"
                  >
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`#`}
                        className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                      >
                        {category}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              {" "}
              <Link href="/product" className="relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <div className="w-full relative">
          <Search
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-slate-700"
            size={16}
          />
          <Input placeholder="Search..." className="pl-8" />
        </div>
        <Link href="/register">
          <Button variant="ghost" className="w-24">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-slate-700 text-slate-200 w-24">Login</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
