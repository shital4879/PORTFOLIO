"use client";
import Ex from "@/app/ex";
import React, { useState } from "react";
import Slideshow from "../Slideshow";

const cards = [
  {
    imageUrl: '/booking.png',
    name: " Booking.com clone",
    featureName: ' Booking.com is an online platform that offers flexible booking options like flights and hotels. allowing travelers to easily search, compare, and book accommodations based on various criteria such as location, price, amenities.',
    content: '#React',
  },
  {
    imageUrl: '/reddit.png',
    name:"Reddit app clone",
    featureName: '  Implemented essential functionalities, including user authentication, login/logout processes, post liking, search capabilities, commenting on posts. The platform showcases a user-friendly replica of a social media experience.',
    content1: "#React",
    content2:"#Tailwind css",
   
  },
  {
    imageUrl: '/isro.png',
    name:" ISRO Centres",
    featureName: "ISRO Centers project is a dynamic web application designed to provide easy access to information about various ISRO centers.Users can search for any center by name or location.This interactive platform aims to appreciation of ISRO's significant contributions to space research and technology development.",
    content1: "#HTML",
    content2:"#CSS",
    content3:"#JavaScript"
  },
  {
    imageUrl: 'vadapav.png',
    name:"  A1 Vadapav",
    featureName: 'My Vada Pav project is a comprehensive web application showcasing a variety of Vada Pav options with their respective prices and reviews. HTML structures the content and layout of the various Vadapav options, CSS styles ensure each item is presented attractively with customizable designs',
    content1: "#HTML",
    content2:"#CSS",
  },
  {
    imageUrl: 'amazon.png',
    name:"Amazon clone",
    featureName: '  My Amazon clone project is a meticulously crafted replica of the popular e-commerce platform, developed purely with HTML and CSS. This project highlights my proficiency in leveraging HTML and CSS to create functional and visually appealing web applications.',
    content1: "#HTML",
    content2:"#CSS",
  },
];



export default function page() {
  return (
    <div className="">
      <Ex />
      <div className="bg-black h-full pb-10 w-dvw text-white pl-14 pt-10 pr-12">
        <button className="pl-4 pr-4 pt-1 pb-1 bg-red-600 rounded text-white font-semibold">
          Success Slope
        </button>
        <div className="mt-4 text-3xl font-medium">PROJECT</div>

        
      <Slideshow cards={cards} />
      </div>


    </div>
  );
}
