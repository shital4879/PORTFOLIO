import React from 'react'
import { useRouter } from "next/navigation";

export default function Ex() {
    const router = useRouter();
  return (
    <div className='pl-14 pr-14  bg-black  w-dvw'>
      <div className="pt-5 flex justify-between">
        <div className="text-red-600 font-bold text-3xl">PORTFOLIO</div>
        <div className="-ml-10 text-lg flex space-x-36 text-gray-300 border-b border-solid">
          <div className="hover:scale-125 cursor-pointer" onClick={()=>router.push("/")}>Home</div>
          <div onClick={()=>router.push("About")}>About</div>
          <div onClick={()=>router.push("Services")}>Services</div>
        </div>

        <div className="h-7 w-7 bg-gray-500 rounded-lg"></div>
      </div>
    </div>
  )
}
