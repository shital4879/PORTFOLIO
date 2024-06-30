"use client";
import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import Ex from "@/app/ex";

export default function page() {
  return (
    <div className="">
      <Ex/>
    <div className="bg-black text-white w-dvw h-dvh pt-12 pl-14">
      <button className="pl-4 pr-4 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
        Service
      </button>
      <h3 className="mt-4 text-3xl font-medium">My Best Service</h3>

      <div>
        <div className="flex pr-2 mt-8 w-[90%] 2xl:h-28 sm:h-36 border-gray-800 border rounded-s-md">
          <div className=" 2xl:w-[15%] sm:w-44 flex justify-center items-center bg-gray-500 rounded-md">
            <PhoneAndroidIcon className="text-[40px] " />
          </div>
          <div className="mt-5 pl-5">
            <h3 className="text-xl ">Web Design</h3>
            <p className="text-gray-500">
              Web design is the creation of websites and pages to reflect a
              company's brand and information and ensure a user-friendly
              experience.
            </p>
          </div>
        </div>

        <div className="flex mt-8 w-[90%] 2xl:h-28 sm:h-36 border-gray-800 border rounded-s-md">
        <div className=" 2xl:w-[15%] sm:w-32 xl:w-40 flex justify-center items-center bg-gray-500 rounded-md">
          <DeveloperModeIcon className="text-[40px] "/>
          </div>
          <div className="mt-5 pl-5">
            <h3 className="text-xl ">Web Developer</h3>
            <p className="text-gray-500">
              A Web Developer is a professional who is responsible for the
              design and construction of websites.
            </p>
          </div>
        </div>

        <div className="flex mt-8 w-[90%] 2xl:h-28 sm:h-36 border-gray-800 border rounded-s-md">
        <div className=" 2xl:w-[15%] sm:w-48 flex justify-center items-center bg-gray-500 rounded-md">
          <WebAssetIcon className="text-[40px] " />
          </div>
          <div className="mt-5 pl-5">
            <h3 className="text-xl ">UI/UX</h3>
            <p className="text-gray-500">
              The UI UX Designer helps create products with a good user
              experience. They are responsible for understanding what users want
              from their device.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
