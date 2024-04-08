import React from "react";
import { tasks } from "@/constants";
import Image from "next/image";

interface Props {
  image: string;
  image1: string;
  title: string;
  text: string;
}

const RealInfoCard = ({ image, image1, title, text }: Props) => {
  return (
    <div
      className="w-[90vw] overflow-hidden rounded-xl relative  p-3 md:p-12  items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 rounded-xl h-full w-full bg-black opacity-10" />
      <div className="flex justify-center w-full z-[10]">
        <div className="flex flex-col gap-4 md:gap-3 items-center z-[10]">
          {tasks.map((task, index) => (
            <div key={index} className="flex flex-row gap-12 items-center">
              <div className="text-[16px] 2xs:text-[14px] md:text-[18px] text-white font-semibold">
                {task.description} -{" "}
                <span className="text-red-500">{task.hours} hrs</span>
              </div>
              <Image
                src="/assets/arrow2.png"
                alt="arrow"
                width={110}
                height={22}
                className="w-[60px] md:w-[110px]"
              />

              <p className="text-[16px] md:text-[18px] text-white font-semibold z-[10]">
                {task.counterDescription} -{" "}
                <span className="text-green-500">{task.counterHours}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealInfoCard;
