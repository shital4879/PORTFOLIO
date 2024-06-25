"use client";
import Ex from "@/app/ex";
import React from "react";

export default function page() {
  return (
    <div>
      <Ex/>
    <div className="pl-20 pt-10 pr-32 bg-black text-white flex justify-between w-dvw h-dvh">
      <div className="w-[100%] mt-20" >
        <img src="./about.gif" className="rounded-full ml-28 w-[20rem] h-[20rem]"/>
      </div>
      <div className="w-[100%] mt-24">
        <div className="pl-4 pr-4 w-24 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
          Discover
        </div>
        <div className="text-3xl font-medium mt-5 mb-5">About me</div>
        <div className="mb-2">
          Name:
          <span className="text-gray-500 font-semibold">&nbsp; Shital Patil</span> | Date Of Birth:
          <span className="text-gray-500 font-semibold" >&nbsp; 29/10/1998</span>
        </div>
        <p className="text-gray-500 font-semibold" >
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
