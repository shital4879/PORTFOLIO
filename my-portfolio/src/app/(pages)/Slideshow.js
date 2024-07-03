import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



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
    }, 5000);

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

  // const{isHovered,setIsHovered} = useContext(newcontext);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };


  return (
  <div>
        
<div 
className="invisible 2xl:visible xl:visible lg:visible 2xl:flex 2xl:flex-row xl:flex-row lg:flex-row xl:flex lg:flex md:flex md:invisible sm:invisible space-y-20 sm:flex justify-evenly xl:space-x-6 lg:space-x-5  pl-10 pr-10"
>
      <div   className=" flex transition-transform ease-in-out duration-500 -translate-x-[${currentIndex * (100 / 3)}%]">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={index}
            className="h-auto w-full md:w-1/3 flex items-center justify-center  px-4 md:p-6 lg:p-8"
          >
          <div className="bg-slate-950 pt-5 rounded-lg 2xl:w-[18rem] 2xl:h-[33rem] xl:w-[18rem] xl:h-[33rem] lg:h-[36rem] lg:w-[18rem]  pb-4 pl-2 pr-2">
            <div className="relative flex justify-center items-center"
            //  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
             >
              <img
                src={card.imageUrl}
                className="w-72 h-48 pl-2 pr-2 bg-gray-800 rounded-xl"
              />
             <a href={card.url} className='absolute top-2 right-3 pl-2 pr-2 pt-1 pb-1 rounded-md text-sm bg-black font-semibold cursor-pointer text-rose-600'>Visit</a>
            </div>
    
            <p className="text-white ml-5 pt-2 text-2xl font-semibold mt-2 mb-2 pl-2">
              {card.name}
            </p>

            <div className="ml-2 text-sm text-gray-400 pl-5 pb-3 pr-5">
           {card.featureName}.
            </div>
            <div>
            <span className="text-blue-600 pl-6 text-base">{card.content1}</span>
              <span className="pl-3 text-pink-400 text-base">{card.content2}</span>
              <span className="pl-3 text-green-400 text-base">{card.content3}</span>
              {/* <a href={cards}></a> */}
            </div>
          </div>
          </div>
        ))}
      </div>

      <button className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-600 px-4 py-2 rounded-lg " onClick={prevSlide}><ChevronLeftIcon/></button>
      <button className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-600 px-4 py-2 rounded-lg" onClick={nextSlide}><KeyboardArrowRightIcon/></button>

    </div>

   <div className='2xl:invisible xl:invisible lg:invisible sm:visible visible md:visible sm:-mt-[50rem] -mt-[50rem] h-auto space-y-16 '>
        {cards.map((card, index) => (
          <div
            key={index}
            className="h-auto w-full md:w-1/3 flex items-center justify-center  px-4 md:p-6 lg:p-8"
          >
          <div className="bg-slate-950 pt-5 rounded-lg w-[18rem] h-[34rem] sm:h-[34rem] sm:w-[18rem] md:h-[33rem] md:w-[30rem] pb-4 pl-2 pr-2">
            <div className="relative flex justify-center items-center"
            //  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
             >
              <img
                src={card.imageUrl}
                className="w-72 h-48 pl-2 pr-2 bg-gray-800 rounded-xl"
              />
             <a href={card.url} className='absolute top-2 right-3 pl-2 pr-2 pt-1 pb-1 rounded-md text-sm bg-black font-semibold cursor-pointer text-rose-600'>Visit</a>
            </div>
    
            <p className="text-white ml-5 pt-2 text-2xl font-semibold mt-2 mb-2 pl-2">
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


    </div>
  );
};
