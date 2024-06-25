import React from 'react'
import { useEffect, useState } from 'react';


export default function Slideshow({ cards}) {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [showRemainingCards, setShowRemainingCards] = useState(false);

  useEffect(() => {
    const slider = setTimeout(() => {
   if(currentIndex < cards.length-3){
    setCurrentIndex((previndex)=> previndex+1)
   }
   else{
    setShowRemainingCards(true);
   }
    }, 3000);

    return () => {
      clearTimeout(slider);
    };
  }, [currentIndex, cards]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };




  return (
  
        
<div className="relative overflow-hidden pl-10 pr-10">
      <div className=" flex transition-transform ease-in-out duration-500 -translate-x-[${currentIndex * (100 / 3)}%]">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={index}
            className="h-auto w-full md:w-1/3 flex items-center justify-center px-4 md:p-6 lg:p-8"
          >
          <div className="bg-slate-950 pt-5 rounded-lg w-[18rem] h-[33rem] pb-4 pl-2 pr-2">
            <div className=" flex justify-center items-center">
              <img
                src={card.imageUrl}
                className="w-72 h-48 pl-2 pr-2 bg-gray-800 rounded-xl"
              />
            </div>
            <p className="text-white ml-4 pt-2 text-2xl font-semibold mt-2 mb-2 pl-2">
              {card.name}
            </p>

            <div className="ml-2 text-sm text-gray-400 pl-5 pb-3 pr-5">
           {card.featureName}.
            </div>
            <div>
            <span className="text-blue-600 pl-6 text-base">{card.content1}</span>
              <span className="pl-3 text-pink-400 text-base">{card.content2}</span>
              <span className="pl-3 text-green-400 text-base">{card.content3}</span>
            </div>
          </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 px-4 py-2 rounded-lg" onClick={prevSlide}>Prev</button>
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 rounded-lg" onClick={nextSlide}>Next</button>
    
    </div>
  );
};
