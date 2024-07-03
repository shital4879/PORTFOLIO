"use client";
import Ex from '@/app/ex'
import React from 'react'

export default function page() {
  return (
    <div>
      <Ex/>
   
    <div className='pt-14 pl-14 pr-20 bg-black text-white w-dvw h-dvh'>
   <button className="pl-4 pr-4 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
   Learning
      </button>
      <div className="mt-4 text-3xl font-medium">Education</div>

      <div className='pb-10 mt-2'>
        <div className='2xl:mt-14 2xl:flex sm:flex items-center 2xl:pl-4 2xl:h-36 lg:h-36 lg:pl-4 bg-gray-900 rounded-sm 2xl:w-[85%] xl:w-[88%] shadow-lg border border-solid border-gray-700 shadow-neutral-800'>
            <img src='./vsm.jpeg' className='h-28 w-72 rounded-sm'/>
            <div className='2xl:ml-16 lg:ml-12 ml-5 '>
                <div className='2xl:text-3xl xl:text-3xl lg:text-2xl font-semibold'>BE | Civil Engineering</div>
                <p className='text-gray-400 font-light pt-1 pb-1 2xl:text-lg'>VSM Institute of Technology</p>
                <p>2017-2021</p>
            </div>
        </div>
        <div className='lg:h-36 lg:pl-4 mt-14 2xl:flex sm:flex items-center 2xl:pl-4 2xl:h-36 bg-gray-900 rounded-sm 2xl:w-[85%] xl:w-[88%] shadow-lg border border-solid border-gray-700 shadow-neutral-800'>
            <img src='./gss.jpg' className='h-28 w-72 rounded-sm'/>
            <div className='2xl:ml-16 ml-5 lg:ml-12'>
                <div className='2xl:text-3xl xl:text-3xl font-semibold lg:text-2xl'>Class XII | Science</div>
                <p className='text-gray-400 font-light pt-1 pb-1 2xl:text-lg'>Govindram Seksaria Science College</p>
                <p>2016-2017</p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
