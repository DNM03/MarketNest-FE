import React from "react";
import logo_icon from "@/assets/images/marketnest_logo_icon.png";
import logo_text from "@/assets/images/marketnest_logo_text.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Input } from "./input";
import { Search } from "lucide-react";

function Header() {
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
            <li>
              {" "}
              <Link href="/" className="relative group">
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="relative group">
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
