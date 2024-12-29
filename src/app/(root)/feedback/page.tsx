"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Page() {
  return (
    <>
      <div className="p-8 flex justify-center">
        <Card className="p-8 w-[800px]">
          <h1 className="font-bold text-2xl">
            Give your feedback about the app
          </h1>
          <div className="w-full">
            <label className="block mt-4">Full Name</label>
            <Input type="text" className="w-full" />
          </div>
          <div className="w-full">
            <label className="block mt-4">Content</label>
            <Textarea
              className="w-full h-[200px]"
              onWheel={(e) => e.stopPropagation()}
            />
          </div>
          <div className="flex justify-end">
            <Button className="mt-8">Submit</Button>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default Page;
