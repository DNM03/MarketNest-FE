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
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
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
import { getMe } from "@/services/user";

function Header() {
  const { isAuthenticated, logout } = useAuth();
  // const [showCategories, setShowCategories] = useState(false);
  // const [categories, setCategories] = useState([]);
  const [user, setUser] = useState<any>({});
  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/product?search=${search}`);
    }
  };

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await getMe();
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchMe();
  }, []);

  const getUserShortName = (name: string) => {
    if (!name.trim()) {
      return "";
    }

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    return words
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

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
              <Link href="/category" className="relative group">
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
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
          <Input
            placeholder="Search..."
            className="pl-8"
            value={search}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearch(e.target.value)}
          />
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
              <div className="flex justify-center ">
                <Bell />
              </div>
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
              <div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>
                    {getUserShortName(user.displayName || "")}
                  </AvatarFallback>
                </Avatar>
              </div>
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
                    href="/order"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <PackageSearch /> <span>Order</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              {/* <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/setting/history"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <History /> <span>History</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup> */}
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/feedback"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <ClipboardType /> <span>Feedback</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/chat"
                    className="flex flex-row items-center gap-x-4 w-full hover:bg-slate-100 rounded-md"
                  >
                    <MessageCircleMore /> <span>Chat</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    href="/register-to-sell"
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
