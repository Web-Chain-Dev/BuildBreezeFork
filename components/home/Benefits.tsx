import React from "react";
import InfoCard from "../shared/InfoCard";
import RealInfoCard from "../shared/RealInfoCard";

const Benefits = () => {
  return (
    <div
      className="w-screen py-20 bg-cover bg-center flex flex-col gap-12 min-h-screen flex-center"
      id="benefits"
      // style={{ backgroundImage: `url(/assets/bluepurple14.jpg)` }}
    >
      <h3 className="text-purple-500 text-center text-5xl md:text-6xl lg:text-7xl font-semibold ">
        Stop wasting time on the mundane
      </h3>
      <RealInfoCard
        image="/assets/bluepurple16.jpg"
        image1="/assets/GreenCity.jpg"
        title="Instead of"
        text="working on the repetitive and mundane"
      />
    </div>
  );
};

export default Benefits;
