"use client";
import React from 'react'
import Ex from '@/app/ex'

export default function page() {
  return (
    <div>
      <Ex/>
   
    <div className='pt-14 pl-14 pr-20 bg-black text-white w-dvw h-dvh'>
       <button className="pl-4 pr-4 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
       Expertise
      </button>
      <div className="mt-4 text-3xl font-medium">My Skills</div>
      <div className='mt-5 text-gray-300 font-semibold'>CREATIVITY &nbsp;  |&nbsp;
      TEAMWORK &nbsp; | &nbsp; LEADERSHIP </div>
      <p className="mt-4 text-gray-500 w-[90%]"> 
      I have a broad range of applicable skills that will enable me to be a valuable member of your team.these include specific technical skills I have developed over the last year along with strong soft skills developed over the course of my career.
        </p>
        <div className='mt-20 flex flex-wrap space-y-7 2xl:space-x-28 xl:space-x-16 lg:space-x-4 md:flex-wrap md:space-x-10 sm:space-x-10'>

            <div className='bg-fuchsia-200 p-2  mt-7 transform rounded-lg hover:-translate-y-2 hover:animate-spin'>
            <img src='./Images/java.png' className='h-28 w-28'/>
            <div className='text-gray-900 font-bold text-lg flex justify-center items-center pt-1'>Java</div>
            </div>
     
            <div className='bg-fuchsia-200 p-2 rounded-lg hover:-translate-y-2 hover:animate-spin'>
            <img src='./Images/html-5.png' className='h-28 w-28'/>
            <div className='text-gray-900 font-bold text-lg flex justify-center items-center pt-1'>HTML</div>
            </div>
            <div className='bg-fuchsia-200 p-2 rounded-lg hover:-translate-y-2 hover:animate-spin'>
            <img src='./Images/css-3.png' className='h-28 w-28'/>
            <div className='text-gray-900 font-bold text-lg flex justify-center items-center pt-1'>CSS</div>
            </div>
            <div className='bg-fuchsia-200 p-2 rounded-lg hover:-translate-y-2 hover:animate-spin'>
            <img src='./Images/java-script.png' className='h-28 w-28'/>
            <div className='text-gray-900 font-bold text-lg flex justify-center items-center pt-1'>Java-Script</div>
            </div>
            <div className='bg-fuchsia-200 p-2 rounded-lg hover:-translate-y-2 hover:animate-spin'>
            <img src='./Images/reactjs.png' className='h-28 w-28'/>
            <div className='text-gray-900 font-bold text-lg flex justify-center items-center pt-1'>ReactJs</div>
            </div>
            <div className='bg-fuchsia-200 p-2 rounded-lg hover:-translate-y-2 hover:animate-spin'>
            <img src='./Images/node-js.png' className='h-28 w-28'/>
            <div className='text-gray-900 font-bold text-lg flex justify-center items-center pt-1'>Node-Js</div>
            </div>
            
            </div>  
        </div>
    </div>
  )
}
