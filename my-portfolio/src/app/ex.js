"use client";
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

export default function Ex() {
    const router = useRouter();
    const[open,setOpen] = useState(false);
  return (
    <div className='pl-14 pr-14  bg-black  w-dvw'>
      <div className="pt-5 flex justify-between">
        <div className="text-red-600 font-bold text-3xl">PORTFOLIO</div>
        <div className="-ml-10 text-lg flex space-x-36 text-gray-300 border-b border-solid">
          <div className="hover:scale-125 cursor-pointer" onClick={()=>router.push("/")}>Home</div>
          <div onClick={()=>router.push("About")}>About</div>
          <div onClick={()=>router.push("Services")}>Services</div>
        </div>

        <div className="h-7 w-7 bg-gray-400 rounded-lg hover:animate-bounce" onClick={()=>setOpen(!open)}>
          <img src='./profile.png' className='h-6 w-6' />
        {
          open && (
            <div className="-ml-24 mt-4 font-medium text-gray-200 bg-gray-900 pl-4 pt-2 pb-2 rounded-md hover:text-gray-900 hover:bg-gray-200 shadow-2xl shadow-gray-500 border border-solid border-gray-800">
              <div className='text-lg  '>Shital Patil</div>
              {/* <div>patilshital9730@gmail.com</div> */}
            </div>
          )
        }
        </div>
      </div>
    </div>
  )
}
