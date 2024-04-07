"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { imagesArray, techStack } from "@/constants";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "520px",
    },
    collapsed: {
      width: "300px",
    },
  };

  return (
    <section className=" bg-transparent w-full h-full flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-12">
        <div className=" flex flex-col md:flex-row justify-center items-center gap-5">
          {techStack.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.name}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] `}
              variants={cardVariants}
              initial="expanded"
              animate={index !== expandedIndex ? "collapsed" : "expanded"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${project.src})`,
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
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

        <div className=" flex flex-col md:flex-row justify-center items-center gap-5">
          {techStack.slice(3, 7).map((project, index) => {
            index = index + 3;
            return (
              <motion.div
                key={project.name}
                className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] `}
                variants={cardVariants}
                initial="expanded"
                animate={index !== expandedIndex ? "collapsed" : "expanded"}
                transition={{ duration: 0.5 }}
                onClick={() => handleCardClick(index)}
                style={{
                  backgroundImage: `url(${project.src})`,
                }}
              >
                <div className="card-content h-full flex flex-col justify-end">
                  <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
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
