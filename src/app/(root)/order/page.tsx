import {
  BadgeMinus,
  CircleOff,
  ClockArrowUp,
  PackageCheck,
  Truck,
  Undo2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Welcome to Your Orders
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Manage all your orders in one place. Use the tabs to navigate through
        different states of order.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
          href={"/setting/personal-information"}
        >
          <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4">
            <BadgeMinus size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Update your name, email, and password.
          </p>
        </Link>

        <Link
          className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
          href={"/setting/addresses"}
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-4">
            <ClockArrowUp size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Address</h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Manage your saved addresses.
          </p>
        </Link>

        <Link
          className="flex flex-col items-center p-6 bg-yellow-50 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
          href={"/setting/history"}
        >
          <div className="w-16 h-16 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full mb-4">
            <Truck size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">History</h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Review your past orders and activities.
          </p>
        </Link>
        <Link
          className="flex flex-col items-center p-6 bg-red-50 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
          href={"/setting/history"}
        >
          <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center rounded-full mb-4">
            <PackageCheck size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Completed</h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Review your past orders and activities.
          </p>
        </Link>
        <Link
          className="flex flex-col items-center p-6 bg-fuchsia-50 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
          href={"/setting/history"}
        >
          <div className="w-16 h-16 bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center rounded-full mb-4">
            <CircleOff size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Cancelled</h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Review your past orders and activities.
          </p>
        </Link>
        <Link
          className="flex flex-col items-center p-6 bg-teal-50 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
          href={"/setting/history"}
        >
          <div className="w-16 h-16 bg-teal-100 text-teal-600 flex items-center justify-center rounded-full mb-4">
            <Undo2 size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Returned</h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Review your past orders and activities.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Page;
