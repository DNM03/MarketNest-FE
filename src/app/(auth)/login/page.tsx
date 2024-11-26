import React from "react";
import bg_image from "@/assets/images/background_image.png";
import Image from "next/image";
import app_logo from "@/assets/images/marketnest_logo.png";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import google_icon from "@/assets/images/google_icon.svg";

function Page() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-slate-900 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg_image.src})` }}
    >
      <div className="rounded-xl bg-slate-200 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <form className="flex flex-col items-center text-slate-700 gap-y-4">
          <Image src={app_logo} width={200} height={200} alt="App logo" />
          <h1 className="text-3xl font-bold">Login</h1>
          <Input
            placeholder="Enter username or email"
            className="text-slate-900 focus:ring-slate-900 rounded-md min-w-72"
          />
          <Input
            placeholder="Enter password"
            type="password"
            className="text-slate-900 focus:ring-slate-900 rounded-md"
          />
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Checkbox id="rememberMe" />
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <div className="inline-block">
              <Link href="/forgot-password" className="text-sm relative group">
                Forgot password
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-slate-700 focus:ring-2 focus:ring-offset-1 focus:ring-slate-900"
          >
            Login
          </Button>
          <div className="text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-slate-900 font-bold  relative group"
            >
              Register
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] rounded-full bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <p>OR</p>
          <div className="w-full relative">
            <Button
              type="button"
              className="w-full bg-white text-slate-700 hover:text-slate-200 focus:ring-2 focus:ring-offset-1 focus:ring-slate-900"
            >
              Continue with Google
            </Button>
            <Image
              src={google_icon}
              width={20}
              height={20}
              alt="Google icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
