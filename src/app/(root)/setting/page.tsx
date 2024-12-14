import { History, MapPinHouse, User } from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Welcome to Your Settings
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Manage all your account details in one place. Use the tabs to navigate
        through different settings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4">
            <User size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Update your name, email, and password.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-4">
            <MapPinHouse size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Address</h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Manage your saved addresses.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-yellow-50 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full mb-4">
            <History size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">History</h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Review your past orders and activities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
