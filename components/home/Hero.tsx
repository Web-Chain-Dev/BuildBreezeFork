import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import InfoCard from "../shared/InfoCard";

const Hero = () => {
  return (
    <div className="w-screen h-full md:min-h-screen pt-28 md:pt-8 lg:pt-16 md:px-12 flex flex-col flex-center md:flex-row gap-16">
      <div className="flex flex-col gap-10 max-w-[90vw] md:max-w-[38vw]">
        <h1 className="text-6xl md:text-5xl lg:text-6xl font-semibold  text-purple-400">
          Deploy your project in Days, not Weeks
        </h1>
        <p className="text-gray-300 text-[20px] md:text-[18px] lg:text-[20px]">
          A boilerplate with auth, database, payments and much more ready out of
          the box
        </p>
        <Button className="flex flex-row p-6 bg-blue-500 hover:bg-purple-700 text-xl font-semibold rounded-xl text-gray-200">
          <Image
            src="/assets/logo.png"
            alt="thundercloud logo"
            width={50}
            height={50}
          />
          Get BuildBreeze
        </Button>
        {/* <h3>Learn more</h3> */}
      </div>

      <div className="rounded-full  w-[500px] h-[375px] -rotate-45 overflow-hidden relative">
        <video
          className="absolute inset-0  rotate-45 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/assets/Cubes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
