import { CheckCheckIcon } from "lucide-react";
import React from "react";

const TrueHero = () => {
  return (
    <div
      className="w-screen relative bg-cover bg-center min-h-screen flex-center flex-col gap-6 z-[1]"
      style={{ backgroundImage: "url(/assets/bluepurple14.jpg)" }}
    >
      {/* <div className="absolute w-full h-full inset-0 top-0 left-0 bg-black bg-opacity-10" /> */}
      <div className="flex flex-col items-center gap-3 pt-20 md:py-0 z-[20]">
        <h3 className="text-6xl md:text-7xl text-[#C4F3F7] bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-blue-500 font-semibold text-center">
          {/* Work on what actually matters */}
          {/* The speed of innovation is the key to success */}
          {/* From vision to reality <br /> faster than ever */}
          {/* Simplifying complexity, <br /> amplifying success */}
          {/* Faster development, <br /> bigger impact */}
          {/* From dream to reality, faster than ever */}
          {/* From concept to success in no time */}
          From concept to reality <br /> in no time
        </h3>
        <p className=" md:hidden text-[16px] text-center md:text-[18px] text-gray-200 max-w-[82vw]">
          A boilerplate that handles all the boring parts of your project
          allowing you to create your actual software
        </p>
      </div>
      <div className="flex  flex-col items-center gap-8 z-[20]">
        <div className="flex flex-col items-center gap-3">
          <p className="hidden md:block text-center text-[16px] md:text-[18px] text-gray-200 max-w-[36vw]">
            A boilerplate that handles all the boring parts of your project
            allowing you to create your actual software
          </p>
          <div className=" grid grid-cols-2 max-w-[90vw] items-start gap-4 pt-2 font-semibold">
            <div className="flex flex-row items-center p-3 rounded-xl hover:bg-purple-700 bg-blue-500  gap-2 pl-2">
              <CheckCheckIcon />
              <h3 className="text-gray-200 blue-500 text-[18px] cursor-pointer">
                Saas Typescript + Stripe
              </h3>
            </div>
            <div className="flex flex-row items-center p-3 rounded-xl hover:bg-purple-700 bg-blue-500 gap-2 pl-2">
              <CheckCheckIcon />
              <h3 className="text-gray-200 blue-500 text-[18px] cursor-pointer">
                Saas Typescript + Paddle
              </h3>
            </div>

            <div className="flex flex-row items-center p-3 rounded-xl hover:bg-purple-700 bg-blue-500 gap-2 pl-2">
              <CheckCheckIcon />
              <h3 className="text-gray-200 blue-500 text-[18px] cursor-pointer">
                Saas Javascript + Stripe
              </h3>
            </div>
            <div className="flex flex-row items-center p-3 rounded-xl hover:bg-purple-700 bg-blue-500 gap-2 pl-2">
              <CheckCheckIcon />
              <h3 className="text-gray-200 blue-500 text-[18px] cursor-pointer">
                Saas Javascript + Paddle
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueHero;
