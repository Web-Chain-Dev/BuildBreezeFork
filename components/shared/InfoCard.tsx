import { tasks } from "@/constants";
import React from "react";

type InfoCardType = {
  type: string;
};

const InfoCard = ({ type }: InfoCardType) => {
  return (
    <div
      className={`w-[90vw] h-[60vh] md:w-[40vw] flex flex-col gap-6 relative p-6 rounded-xl ${
        type === "positive" ? "bg-green-600" : "bg-red-600"
      } `}
    >
      <h3 className="text-center text-gray-200 text-[26px] z-[12]">
        Time Saved
      </h3>

      <div className="flex flex-col gap-2 text-lg text-gray-200 z-[10] ">
        {tasks.map((task, index) => (
          <h2 key={index} className="">
            {task.hours} hrs {task.description}
          </h2>
        ))}
        <div className="absolute inset-0 w-full bg-opacity-20 h-full rounded-xl bg-black z-[1]" />
      </div>
    </div>
  );
};

export default InfoCard;
