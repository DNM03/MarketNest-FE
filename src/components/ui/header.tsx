import React from "react";
import logo_icon from "@/assets/images/marketnest_logo_icon.png";
import logo_text from "@/assets/images/marketnest_logo_text.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className=" p-2 flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <Image src={logo_icon} width={40} height={40} alt="Logo icon" />
        <Image src={logo_text} width={140} height={50} alt="Logo text" />
        <nav>
          <ul className="font-bold flex flex-row items-center ml-12 gap-x-12 text-slate-900  cursor-default">
            <li>
              <Link href="/" className="relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
