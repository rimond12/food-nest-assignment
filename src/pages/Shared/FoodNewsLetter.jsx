import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const FoodNewsLetter = () => {
  return (
    <div className="md:mt-10 -mt-10 relative top-60 z-10 px-4 flex justify-center ">
      <div className="bg-[#f5f9f1] text-green-900 rounded-xl shadow-lg flex flex-col md:flex-row items-center max-w-6xl w-full p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-10 border-t-5 border-green-600">
        {/* Image Section */}
        <div className="relative hidden md:block">
          <div className="w-[90vw] max-w-[500px] h-[220px] md:h-90 flex items-center justify-center overflow-hidden">
            <div className="w-[220px] h-[220px] md:w-90 md:h-90 rounded-full bg-yellow-400 relative z-0" />
            <img
              src="/images/6.webp"
              alt="Farmer with vegetables"
              className="w-full absolute h-[550px] -top-36  object-cover"
            />
          </div>
        </div>

        {/* Text & Form */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Subscribe to FoodNest Updates
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Get the latest updates on food sharing events and surplus
            availability in your area.
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden border-2 border-gray-300 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 outline-none text-gray-700 text-sm sm:text-base"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-3">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodNewsLetter;
