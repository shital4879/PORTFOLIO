"use client";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Ex from "@/app/ex";

export default function page() {
  return (
    <div>
      <Ex/>
     
    <div className="pt-14 pl-14 pr-20 bg-black text-white w-dvw h-dvh">
      <button className="pl-4 pr-4 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
        Drop Us Line
      </button>
      <div className="mt-4 text-3xl font-medium">Contact</div>

      <div>
        <div className="mt-10 2xl:w-[85%] flex border items-center rounded-sm bg-gray-950 border-solid pt-4 pb-4 border-gray-900 hover:translate-x-4 hover:scale-105">
          <LocationOnIcon className="2xl:ml-10 xl:ml-10 ml-2 2xl:text-[40px] xl:text-[40px] text-gray-400" />
          <p className="2xl:text-[25px] xl:text-[22px] 2xl:ml-10 xl:ml-10 ml-4 text-gray-400"> A/P Kunnur,Dist-Belgaum, Karnakataka</p>
        </div>
        <div className="mt-10 2xl:w-[85%] flex border items-center rounded-sm bg-gray-950 border-solid pt-4 pb-4 border-gray-900 hover:translate-x-4 hover:scale-105">
          <MailIcon className="2xl:ml-10 xl:ml-10 ml-2 2xl:text-[40px] xl:text-[40px] text-gray-400" />
          <p className="2xl:text-[25px] xl:text-[22px] 2xl:ml-10 xl:ml-10 ml-4 text-gray-400"> shitalpatil4801@gmail.com</p>
        </div>
        <div className="mt-10 2xl:w-[85%] flex border items-center rounded-sm bg-gray-950 border-solid pt-4 pb-4 border-gray-900 hover:translate-x-4 hover:scale-105">
          <PhoneIcon className="2xl:ml-10 xl:ml-10 ml-2 2xl:text-[40px] xl:text-[40px] text-gray-400" />
          <p className="2xl:text-[25px] xl:text-[22px] 2xl:ml-10 xl:ml-10 ml-4 text-gray-400">  +91 8147824801</p>
        </div>
      </div>

      <div className=" flex justify-center items-center mt-10 space-x-3 2xl:-ml-20">
        {/* <a href="https://www.facebook.com/profile.php?id=100016102950862" className="rounded-2xl p-1 text-violet-800 hover:bg-gray-200 hover:text-gray-800 hover:scale-110"><FacebookRoundedIcon className="text-[35px]"/></a>
        <a href="https://instagram.com/shital._patil_?igshid=YWYwM2I1ZDdmOQ==" className="rounded-2xl p-1 text-violet-800 hover:bg-gray-200 hover:text-gray-800 hover:scale-110"><InstagramIcon className="text-[35px]"/></a> */}
        <a href="https://github.com/" className="rounded-2xl p-1 text-violet-800 hover:bg-white hover:text-gray-800"><GitHubIcon className="text-[35px]"/></a>
        <a href="https://www.linkedin.com/in/shital-patil-115473259/" className="rounded-2xl p-1 text-violet-800 hover:bg-white hover:text-gray-800"><LinkedInIcon className="text-[35px]"/></a>
      </div>
    </div>
    </div>
  );
}
