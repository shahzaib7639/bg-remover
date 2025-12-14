import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <div className="mx-4 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-xl px-6 sm:px-8 py-6 shadow-sm">
        {/* Image Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img
              className="w-full rounded-lg border object-cover"
              src={assets.image_w_bg}
              alt="Original image"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Background Removed
            </p>
            <div className="relative w-full h-full rounded-lg border border-gray-300 bg-gray-100 overflow-hidden bg-layer">
              <img
                className="w-full h-full object-cover"
                src={assets.image_wo_bg}
                alt="Background removed"
              />
              {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              </div> */}
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700">Try another image</button>
          <a className="px-8 py-2.5 text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full" href="">Download Image</a>
        </div>
      </div>
    </div>
  );
};

export default Result;
