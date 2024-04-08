import { auth } from "@clerk/nextjs";
import { CheckCheckIcon } from "lucide-react";

import React from "react";

const NewHero = () => {
  return (
    <div
      className="w-screen bg-cover bg-center min-h-screen flex-center flex-col gap-6"
      style={{ backgroundImage: "url(/assets/bluepurple14.jpg)" }}
    >
      <div className="flex flex-col items-center gap-3 pt-20 md:py-0">
        <h3 className="text-6xl md:text-7xl text-blue-500 font-semibold text-center">
          Boost your production
        </h3>
        <p className=" md:hidden text-[16px] text-center md:text-[18px] text-gray-200 max-w-[82vw]">
          A boilerplate allowing you to create your startup in just days
        </p>
      </div>
      <div className="flex  flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <p className="hidden md:block text-center text-[16px] md:text-[18px] text-gray-200 max-w-[36vw]">
            A boilerplate allowing you to create your startup in just days
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
