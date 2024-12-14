"use client";

import React, { useEffect, useRef, useState } from "react";
import logo_icon from "@/assets/images/marketnest_logo_icon.png";
import logo_text from "@/assets/images/marketnest_logo_text.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Input } from "./input";
import {
  Bell,
  Bolt,
  ChevronDown,
  ClipboardType,
  History,
  LogOut,
  MessageCircleMore,
  PackageSearch,
  Search,
  ShoppingCart,
  Store,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { getAllCategories } from "@/services/categoty";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);

  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        console.log(response.data.productCategories);
        setCategories(response.data.productCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();

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

  return (
    <header className=" p-2 py-4 flex flex-row justify-between items-center sticky top-0 bg-slate-100 bg-opacity-50 backdrop-blur-md z-40">
      <div className="flex flex-row items-center">
        <Image
          src={logo_icon}
          width={40}
          height={40}
          alt="Logo icon"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <Image
          src={logo_text}
          width={140}
          height={50}
          alt="Logo text"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
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
                    className="absolute top-8 left-0 bg-white rounded-lg shadow-sm py-2 min-w-[700px] overflow-y-auto z-50 grid grid-cols-4 gap-x-4 gap-y-2"
                  >
                    {categories.map((category: any) => (
                      <Link
                        key={category.id}
                        href={`#`}
                        className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                      >
                        {category.name}
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
                Orders
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about-us" className="relative group">
                About
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
        {!isAuthenticated && (
          <Link href="/register">
            <Button variant="ghost" className="w-24">
              Register
            </Button>
          </Link>
        )}
        {!isAuthenticated && (
          <Link href="/login">
            <Button className="bg-slate-700 text-slate-200 w-24">Login</Button>
          </Link>
        )}
        {isAuthenticated && (
          <button onClick={() => router.push("/cart")}>
            <ShoppingCart />
          </button>
        )}
        {isAuthenticated && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex justify-center ">
                <Bell />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {isAuthenticated && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/setting"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <Bolt /> <span>Setting</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/cart"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <ShoppingCart /> <span>Cart</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/profile"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <PackageSearch /> <span>Order</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/profile"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <History /> <span>History</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/profile"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <ClipboardType /> <span>Feedback</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/profile"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <MessageCircleMore /> <span>Chat</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/profile"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <Store /> <span>Register to sell</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <div
                    onClick={() => {
                      logout();
                      router.push("/login");
                    }}
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md "
                  >
                    <LogOut className="text-red-600" />{" "}
                    <span className="text-red-600">Logout</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}

export default Header;
