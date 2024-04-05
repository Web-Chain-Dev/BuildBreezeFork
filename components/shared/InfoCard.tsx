"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { tasks } from "@/constants";

interface Props {
  image: string;
  image1: string;
  title: string;
  text: string;
}

const InfoCard = ({ image, image1, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
 }, [text]);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  
  return (
    <div className="flex-center flex-col gap-6">
      
    <div
      className="flip-card  w-[36vw] h-[80vh] rounded-xl cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          className="flip-card-front w-full h-full flex items-center group relative bg-cover bg-center  text-white rounded-xl p-4"
          style={{ backgroundImage: `url(${image})` }}
        >

<div className="absolute inset-0 w-full  h-full rounded-md bg-black opacity-20" />

          <div className="flex flex-col gap-4 z-[10] text-left">
          <h3 className=" text-5xl md:text-5xl font-semibold">
        {isFlipped ? "When you can..": "Why waste time on.."}
      
      </h3>
            {tasks.map((task, index) => (
              <p key={index} className="text-gray-300 blue-400 font-semibold text-[20px] md:text-[24px]">
                {task.description} - <span className="text-red-600"> {task.hours} hrs </span>
              </p>
            ))}
          </div>
          {/* <div className="absolute inset-0 w-full rounded-md  h-full bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full text-[20px] pb-10 h-full hidden group-hover:flex items-center z-[20]  justify-center ">
            Learn more &gt;
          </div> */}
        </div>

        <div
          className="flip-card-back w-[100%] h-[100%] bg-cover bg-center  text-white rounded-xl p-4"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="absolute inset-0 w-full  h-full rounded-md bg-black opacity-20 z-[-1]" />

          <div className="flex flex-col gap-20 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default InfoCard;
