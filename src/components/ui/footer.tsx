import React from "react";
import Instagram from "../icons/InstagramIcon";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/Linkedln";
import Facebook from "../icons/FacebookIcon";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-slate-300 px-40 py-16">
      <div className="flex flex-row ">
        <div className="flex flex-col w-full">
          <h4 className="font-bold text-lg mb-2">Company</h4>
          <Link href="#" className="hover:font-bold opacity-60">
            About Us{" "}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Our Services
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Affiliate Program
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="font-bold text-lg mb-2">Get Help</h4>
          <Link href="#" className="hover:font-bold opacity-60">
            FAQ
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Shipping
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Returns
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Order Status
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Payment Options
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="font-bold text-lg mb-2">Online Shop</h4>
          <Link href="#" className="hover:font-bold opacity-60">
            Watch
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Shoes
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Phone
          </Link>
          <Link href="#" className="hover:font-bold opacity-60">
            Equipments
          </Link>
        </div>
        <div className="w-full">
          <h4 className="font-bold text-lg mb-2">Follow Us</h4>
          <div className="flex flex-row gap-x-4 items-center">
            <Instagram
              fontSize={24}
              className="grayscale hover:scale-105 hover:grayscale-0 ease-in-out duration-500 cursor-pointer"
            />
            <Twitter
              fontSize={24}
              className="grayscale hover:scale-105 hover:grayscale-0 ease-in-out duration-500 cursor-pointer"
            />
            <LinkedIn
              fontSize={24}
              className="grayscale hover:scale-105 hover:grayscale-0 ease-in-out duration-500 cursor-pointer"
            />
            <Facebook
              fontSize={24}
              className="grayscale hover:scale-105 hover:grayscale-0 ease-in-out duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-10">© Copyright 2024. All rights reserved</p>
    </footer>
  );
}

export default Footer;
