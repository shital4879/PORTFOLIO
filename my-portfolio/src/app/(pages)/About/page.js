"use client";
import Ex from "@/app/ex";
import React from "react";

export default function page() {
  return (
    <div>
      <Ex/>
    <div className="2xl:pl-20 pt-10 2xl:pr-32 bg-black text-white flex justify-between w-dvw h-dvh flex-col sm:flex-col 2xl:flex-row  xl:flex-row lg:flex-row md:flex-row">
      <div className="w-[100%] mt-20 justify-center sm:justify-center flex" >
        <img src="./about.gif" className="rounded-full 2xl:-ml-28 lg:ml-10 sm:flex xl:ml-28 md:ml-6 w-[20rem] h-[20rem]"/>
      </div>
      <div className="w-[100%] mt-24 lg:-ml-12 sm:ml-10 2xl:ml-10 ">
        <div className="pl-4 pr-4 w-24 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
          Discover
        </div>
        <div className="text-3xl font-medium mt-5 mb-5">About me</div>
        <div className="mb-2">
          Name:
          <span className="text-gray-500 font-semibold">&nbsp; Shital Patil</span> | Date Of Birth:
          <span className="text-gray-500 font-semibold" >&nbsp; 29/10/1998</span>
        </div>
        <p className="text-gray-500 font-semibold lg:w-[85%] sm:w-[90%]" >
          I am a web developer with an amazing ability to develop websites that
          are both functional and aesthetically pleasing. I am a team player who
          is always willing to lend a helping hand, and I am confident in my
          ability to contribute to any project. I am looking for an opportunity
          to use my skills and experience to make a positive impact on the web.
        </p>
      </div>
    </div>
    </div>
  );
}
