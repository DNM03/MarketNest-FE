import React from "react";
import teamwork from "@/assets/images/teamwork.jpg";
import workspace from "@/assets/images/workspace.jpeg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Page() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={teamwork}
            alt="Team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl">
            Crafting exceptional shopping experiences since 2024. We're more
            than just an e-commerce platform – we're your partner in discovering
            quality products that enhance your lifestyle.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-lg text-slate-600">
              We believe in making quality products accessible to everyone. Our
              mission is to create a seamless shopping experience that connects
              people with products they'll love, while maintaining the highest
              standards of customer service and satisfaction.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Core Values
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {[
                  "Quality First",
                  "Customer Satisfaction",
                  "Innovation",
                  "Sustainability",
                ].map((value) => (
                  <div key={value} className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 text-green-500">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={workspace}
              alt="Our workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our diverse team of experts is passionate about delivering the
              best possible experience to our customers.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Mẫn Dương",
                role: "CEO & Founder",
                image: "https://github.com/shadcn.png",
              },
              {
                name: "Tường Huỳnh",
                role: "Head of Operations",
                image: "https://github.com/shadcn.png",
              },
              {
                name: "Khiêm Nguyễn",
                role: "Customer Experience Lead",
                image: "https://github.com/shadcn.png",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="flex justify-center flex-col items-center"
              >
                <div className="relative">
                  <Avatar className="w-[200px] h-[200px]">
                    <AvatarImage src={member.image} alt="@shadcn" />
                    <AvatarFallback>{member.name}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-slate-900 text-center">
                    {member.name}
                  </h3>
                  <p className="text-base text-slate-600 text-center">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Happy Customers", value: "50K+" },
              { label: "Products", value: "10K+" },
              { label: "Countries", value: "25+" },
              { label: "Team Members", value: "100+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-base text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
