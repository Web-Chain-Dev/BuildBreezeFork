"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import city1 from "/assets/city1.png";
import city2 from "/assets/city2.png";
import city3 from "/assets/city3.png";
import planet1 from "/assets/planet1.png";
import planet2 from "/assets/planet2.png";
import SpaceCity2 from "/assets/SpaceCity2.jpeg";
import SpaceCity3 from "/assets/SpaceCity3.jpeg";
import SpaceCity4 from "/assets/SpaceCity4.jpeg";
import SpaceCity5 from "/assets/SpaceCity5.jpeg";
import { imagesArray } from "@/constants";
import { imageVariants } from "@/motion/variants";
import TechMotion from "../shared/TechMotion";
import { difference } from "next/dist/build/utils";
import {
  ArrowBigLeft,
  ArrowLeft,
  ArrowBigLeftDash,
  StepBack,
  StepForward,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = (number?: number) => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) =>
          (prevIndex + (number != undefined ? number : 1)) % positions.length
      );
      return updatedIndexes;
    });
  };

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       if (!isPaused) {
  //         // Check if the interval should be active
  //         handleBack();
  //       }
  //     }, 19000);

  //     return () => clearInterval(intervalId);
  //   }, [isPaused]);

  const handleBack = (number?: number) => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => {
        // Calculate the new index by moving it back by the specified number
        // and ensuring it wraps around correctly
        return (
          (prevIndex - (number != undefined ? number : 1) + positions.length) %
          positions.length
        );
      });
      return updatedIndexes;
    });
  };

  const handleClick = (clickedIndex: number) => {
    console.log(`Card with index ${clickedIndex} was clicked.`);
    // Example: Update the state to reflect the clicked card's index
    setCurrentIndex(clickedIndex);

    setIsPaused(true);

    // Find the index of the card that is currently in the center position
    const centerCardIndex = positionIndexes.findIndex(
      (index) => positions[index] === "center"
    );

    // Calculate the difference between the center index and the clicked index
    // Considering the circular nature of the slider
    let difference = Math.abs(centerCardIndex - clickedIndex);
    if (difference > positions.length / 2) {
      difference = positions.length - difference;
    }

    console.log(
      `The difference between the center card and the clicked card is: ${difference}`
    );

    // Determine the position of the clicked card
    const clickedPosition = positions[positionIndexes[clickedIndex]];

    // If the clicked card is in the left positions, call handleNext with the difference
    if (
      clickedPosition === "right1" ||
      clickedPosition === "right2" ||
      clickedPosition === "right3"
    ) {
      handleNext(difference);
    } else if (
      clickedPosition === "left1" ||
      clickedPosition === "left2" ||
      clickedPosition === "left3"
    ) {
      handleBack(difference);
    }

    setTimeout(() => {
      setIsPaused(false);
    }, 12000);
  };

  const positions = [
    "center",
    "left1",
    "left2",
    "left3",
    "right3",
    "right2",
    "right1",
  ];

  return (
    <div className="flex items-center flex-col gap-2 md:gap-4 pt-52 justify-center bg-[#032B44]  md:h-screen py-24 w-screen">
      <div className="flex  flex-col gap-2 text-center">
        <h3 className="text-purple-500  text-5xl lg:text-6xl font-semibold">
          Boost your Production
        </h3>
        <p className="text-gray-300 text-[16px] md:text-[18px]">
          A boilerplate allowing you to create your startup in just days
        </p>
      </div>
      {imagesArray.map((image, index) => (
        <TechMotion
          key={index}
          src={image.src}
          name={image.name}
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          imagelogo={image.logo}
          handleClick={() => handleClick(index)}
          details={image.details}
        />
        // <motion.img
        //   key={index}
        //   src={image.path}
        //   alt={image.path}
        //   className="rounded-[12px] w-[200px] h-[300px] object-cover"
        //   initial="center"
        //   animate={positions[positionIndexes[index]]}
        //   variants={imageVariants}
        //   transition={{ duration: 0.5 }}
        //   style={{ width: "40%", position: "absolute" }}
        // />
      ))}

      <div className="flex flex-row items-center gap-6 pb-12 z-[20] mt-[480px] md:mt-[400px]">
        <button
          className="text-white  bg-indigo-400 rounded-[12px] py-2 px-4"
          onClick={() => handleNext(1)}
        >
          <StepBack />
        </button>
        <Button className="flex flex-row p-6 bg-blue-500 hover:bg-purple-700 text-xl font-semibold rounded-xl text-gray-200">
          <Image
            src="/assets/logo.png"
            alt="thundercloud logo"
            width={50}
            height={50}
          />
          Get BuildBreeze
        </Button>
        <button
          className="text-white  bg-indigo-400 rounded-[12px] py-2 px-4"
          onClick={() => handleBack(1)}
        >
          <StepForward />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
