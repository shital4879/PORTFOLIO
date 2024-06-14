"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div
      className="w-dvw h-dvh bg-black text-white pl-14 pr-14"
      //  style={{backgroundImage: "url('/1.jpg')"}}
    >
      <div className="pt-5   flex justify-between">
        <div className="text-red-600 font-bold text-3xl">PORTFOLIO</div>
        <div className="-ml-10 text-lg flex space-x-36 text-gray-300 border-b border-solid">
          <div className="hover:scale-125 cursor-pointer">Home</div>
          <div onClick={()=>router.push("About")}>About</div>
          <div onClick={()=>router.push("Services")}>Services</div>
        </div>

        <div className="h-7 w-7 bg-gray-500 rounded-lg"></div>
      </div>
      <div className="mt-14 flex ">
        <div className="w-[53%]">
          <div>SUMMARY | SHORT BIOGRAPHY | WORK HISTORY</div>
          <div className="text-6xl font-bold mt-6">Shital Patil</div>
          <div className="mt-6">
            Roll :{" "}
            <span className="text-gray-500">
              {" "}
              Front End Developer | Back End Developer
            </span>
          </div>
          <p className="mt-4 text-gray-500"> 
          A self-tought Frontend Web Developer BE student looking for an
          opportunity in Web Development. Who is committed to study web
          development. Mindset to fulfill the life with wonderful memories and
          knowledge.
        </p>
        <div className="flex space-x-12 mt-5">
          <a className="pl-4 pr-4 bg-red-600 rounded text-black font-semibold cursor-pointer">Resume</a>
          <button className="pl-4 pr-4  rounded font-semibold border border-white cursor-pointer" onClick={()=>router.push("Hireme")} >Hire me</button>
          {/* <hire /> */}
        </div>
<div className="mt-8">
  <p>EXPLORE</p>
  <div className="mt-4 flex space-x-10">
    <div className="">
      <img src="./skill.jpg" className="w-32 h-40 border border-gray-300 hover:scale-105 mb-1"/>
      <div className="flex text-center justify-center ">
        <p>Skill</p> </div>
    </div>
    <div className="">
      <img src="./edu.webp" className="w-32 h-40 border border-gray-300 hover:scale-105 mb-1"/>
      <div className="flex text-center justify-center ">
        <p>Education</p> </div>
    </div>
    <div className="">
      <img src="./project.jpg" className="w-32 h-40 border border-gray-300 hover:scale-105 mb-1"/>
      <div className="flex text-center justify-center ">
        <p>Project</p> </div>
    </div>
    <div className="">
      <img src="./co.jpg" className="w-32 h-40 border border-gray-300 hover:scale-105 mb-1"/>
      <div className="flex text-center justify-center ">
        <p>Contact</p> </div>
    </div>
  </div>
</div>

        </div>
       
        <div></div>
      </div>
    </div>
  );
}
