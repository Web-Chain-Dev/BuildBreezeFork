"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { imagesArray, techStack } from "@/constants";
import { HeartIcon } from "lucide-react";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: isLargeScreen ? "82vw" : "92vw",
    },
    collapsed: {
      width: isLargeScreen ? "260px" : "260px", // Adjust as needed
    },
  };

  return (
    <section className=" bg-transparent w-full h-full flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-12">
        <div className=" flex flex-col lg:flex-row justify-center items-center gap-5">
          {techStack.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.name}
              className={`card cursor-pointer ${
                index === 1 ? "h-[522px]" : "h-[500px]"
              }  bg-cover bg-center rounded-[20px] `}
              variants={cardVariants}
              initial="expanded"
              animate={index !== expandedIndex ? "collapsed" : "expanded"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${project.src})`,
              }}
            >
              <div
               
                className="card-content h-full flex flex-col justify-end"
              >
                <div  onClick={(e) => e.stopPropagation()} className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold text-white text-center">
                    Card {index + 1}
                  </h2>
                  {index === expandedIndex && (
                    <p className="mt-2 text-gray-300 text-center">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className=" flex flex-col lg:flex-row justify-center items-center gap-5">
          {techStack.slice(3, 7).map((project, index) => {
            index = index + 3;
            return (
              <motion.div
                key={project.name}
                className={`card cursor-pointer ${
                  index === 4 || index === 5 ? "h-[522px]" : "h-[500px]"
                }  bg-cover bg-center rounded-[20px] `}
                variants={cardVariants}
                initial="expanded"
                animate={index !== expandedIndex ? "collapsed" : "expanded"}
                transition={{ duration: 0.5 }}
                onClick={() => handleCardClick(index)}
                style={{
                  backgroundImage: `url(${project.src})`,
                }}
              >
                <div 
             
                className="card-content h-full flex flex-col justify-end">
                  <div    onClick={(e) => e.stopPropagation()} className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-white text-center">
                      Card {index + 1}
                    </h2>
                    {index === expandedIndex && (
                      <p className="mt-2 text-gray-300 text-center">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpenCards;
