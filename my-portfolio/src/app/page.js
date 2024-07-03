"use client";
import { useRouter } from "next/navigation";
import Ex from "./ex";
import { keyframes } from "@emotion/react";
import { Translate } from "@mui/icons-material";
// import Context from "./(pages)/Context";
// import { Component } from "react";


export default function Home({ Component, pageProps }) {
  const router = useRouter();

  const handledownload = () =>{
    const downloadurl = "./resume.pdf";
    window.open(downloadurl,"_blank");
    
  }

  return (
    <div
      className="w-dvw h-full bg-black text-white "
      //  style={{backgroundImage: "url('/1.jpg')"}}
    >
      <Ex/>
      <div className="mt-14 flex pl-14 pr-14 sm:flex-col-reverse 2xl:flex-row xl:flex-row lg:flex-row md:flex-row ">
        <div className="2xl:w-[53%] xl:w-[53%] lg:w-[50%] md:w-[60%] ">
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
          <a className="pl-4 pr-4 bg-red-600 rounded text-black font-semibold cursor-pointer" onClick={handledownload}>Resume</a>
          <button className="pl-4 pr-4  rounded font-semibold border border-white cursor-pointer" onClick={()=>router.push("Contact")} >Hire me</button>
          {/* <hire /> */}
        </div>
<div className="mt-10 mb-8">
  <p>EXPLORE</p>
  <div className="mt-4 flex 2xl:space-x-10 xl:space-x-10 lg:space-x-6 md:space-x-3 sm:space-x-6">
    <div className="hover:animate-pulse cursor-pointer" onClick={()=>router.push("Skill")}>
      <img src="./skill.jpg" className="w-32 h-40 border border-gray-300 hover:scale-105   mb-1 transform transition-transform duration-500 "/>
      <div className="flex text-center justify-center ">
        <p>Skill</p> </div>
    </div>
    <div className="hover:animate-pulse cursor-pointer" onClick={()=>router.push("Education")}>
      <img src="./edu.webp" className="w-32 h-40 border border-gray-300 hover:scale-105 mb-1 transform transition-transform duration-500"/>
      <div className="flex text-center justify-center ">
        <p>Education</p> </div>
    </div>
    <div className="hover:animate-pulse cursor-pointer"  onClick={()=>router.push("Project")}>
      <img src="./project.jpg" className="w-32 h-40 border border-gray-300 hover:scale-105 mb-1 transform transition-transform duration-500 "/>
      <div className="flex text-center justify-center ">
        <p>Project</p> </div>
    </div>
    <div className="hover:animate-pulse cursor-pointer" onClick={()=>router.push("Contact")}>
      <img src="./co.jpg" className="w-32 h-40 border border-gray-300 hover:scale-105 mb-1 transform transition-transform duration-500"/>
      <div className="flex text-center justify-center ">
        <p>Contact</p> </div>
    </div>
  </div>
</div>

        </div>
       
        <div className="mt-12 2xl:ml-32 xl:ml-32 md:ml-10 flex justify-center ">
          <img src="./profile.png"
           style={{
          animation:"move 5s linear infinite"
          }}
          className="2xl:[22rem] 2xl:w-[22rem] xl:h-80 xl:w-80 lg:h-80 lg:w-80 md:h-52 md:w-52"
          />

<style jsx>{`

  @keyframes move {
    0%{
      transform: TranslateY(0);
    }
    50%{
      transform: TranslateY(30px);
    }
    100%{
      transform: TranslateY(0);
    }
  }

`}</style>

        </div>
      </div>
    </div>
  );
}
