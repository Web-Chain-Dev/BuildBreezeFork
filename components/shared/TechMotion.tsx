"use client";

import { imageVariants } from "@/motion/variants";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import image from "next/image";
import { MouseEventHandler } from "react";

type TechMotionType = {
  src: string;
  name: string;
  animate: string;
  variants: Variants;
  imagelogo: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
  details: { name: string }[];
};

const TechMotion = ({
  src,
  name,
  animate,
  variants,
  imagelogo,
  handleClick,
  details,
}: TechMotionType) => {
  return (
    // <motion.img
    //   src={src}
    //   alt={name}
    //   className="rounded-[12px] w-[200px] h-[300px] object-cover"
    //   initial="center"
    //   animate={animate}
    //   variants={variants}
    //   transition={{ duration: 0.5 }}
    //   style={{ width: "40%", position: "absolute" }}
    // />
    <motion.div
      className="rounded-[40px] mt-20 md:mt-10 lg:mt-0 absolute  cursor-pointer w-[200px] h-[420px] md:w-[200px]  lg:h-[340px] overflow-hidden bg-gray-800 bg-cover bg-center p-2 flex-center flex-col md:flex-row gap-0 md:gap-4 lg:gap-12  "
      onClick={handleClick}
      initial="center"
      animate={animate}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        width: "42%",
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-60 rounded-xl" />
      <Image
        src={imagelogo}
        alt="product icon"
        width={200}
        height={200}
        className="z-[10] w-[160px] h-[160px] md:w-[200px] md:h-[200px]"
      />
      <div className="flex flex-col gap-3 md:gap-5 z-[10]">
        <h3 className="text-[24px] md:text-5xl text-white text-center md:text-left">
          {name}
        </h3>
        <div className="flex flex-col gap-3 md:gap-3 text-gray-200 text-[16px] md:text-xl">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-row gap-1 ">
              <Image
                src="/assets/check-mark.png"
                alt="check mark"
                width={24}
                height={24}
                className="object-contain"
              />
              <p>{detail.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechMotion;
