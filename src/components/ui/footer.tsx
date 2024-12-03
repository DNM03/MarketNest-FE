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
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            About Us
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Our Services
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Affiliate Program
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="font-bold text-lg mb-2">Get Help</h4>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            FAQ
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Shipping
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Returns
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Order Status
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Payment Options
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="font-bold text-lg mb-2">Online Shop</h4>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Watch
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Shoes
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
            Phone
          </Link>
          <Link href="#" className="hover:font-bold opacity-60 w-fit">
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
