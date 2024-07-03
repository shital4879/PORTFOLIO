"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";

export default function Ex() {
    const router = useRouter();
    const[open,setOpen] = useState(false);
    const[active,setActive] = useState(1);

    function handlebtn(value){
      setActive(value)
      sessionStorage.setItem("value",value);
      if(value == 1)
        {
          router.push("/")
        }
        else if(value == 2){
          router.push("About")
        }
        else if(value == 3){
          router.push("Services")
        }
    }
    useEffect(()=>{
      if(sessionStorage.getItem("value")){
         setActive(sessionStorage.getItem("value"));
      }
    },[])

  return (
    <div className='pl-14 pr-14  bg-black  w-dvw'>
      <div className="pt-5 flex justify-between">
        <div className="text-red-600 font-bold text-3xl">PORTFOLIO</div>
        <div className="-ml-10 text-lg flex 2xl:space-x-36 xl:space-x-36 lg:space-x-28 md:space-x-12 sm:space-x-7 space-x-4 text-gray-300 border-b border-solid">
          <div className={` ${active == 1 ? "text-yellow-600 cursor-pointer":"cursor-pointer"} `} onClick={()=>handlebtn(1)}>Home</div>
          <div onClick={()=>handlebtn(2)} className={`${active == 2 ? "text-yellow-600 cursor-pointer":"cursor-pointer"}`}>About</div>
          <div onClick={()=>handlebtn(3)} className={`${active == 3 ? "text-yellow-600 cursor-pointer":"cursor-pointer"}`}>Services</div>
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
