
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { checkoutPlan } from "@/lib/actions/transaction.action";
import { SignedIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";
import PricingPlan from "./PricingPlan";

const Pricing = async () => {

  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (

    <div className="w-full min-h-screen mx-auto px-4 py-8 bg-[#032B44]">
      <h2 className="text-6xl text-blue-500 font-bold text-center mb-8">
        Pricing Plans
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Free Plan */}
       <PricingPlan buyerId={user._id} />
        {/* Pro Plan */}
        <div className="w-[90%] sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-gray-800 rounded-xl bg-center bg-cover relative border-[3px] border-blue-500 shadow-lg p-6" style={{backgroundImage: "url(/assets/planet2.png)"}}>
          <div className="absolute inset-0 w-full  h-full rounded-md bg-black opacity-10 " />

            <div className="flex absolute w-full h-[40px] inset-0 -top-4 justify-center z-[10]">
              <div className=" w-[200px] h-[30px] bg-blue-500 rounded-xl text-white text-center font-bold text-xl">
                Popular
              </div>
            </div>
            <h3 className="text-4xl font-bold text-center mb-4 text-purple-600 z-[10]">
              All In
            </h3>
            <h3 className="text-5xl text-gray-800 text-center pb-4 font-semibold">
              $25 USD
            </h3>
            <ul className="text-center text-white text-[18px] z-[10]">
              <li className="mb-2"> 20 users included</li>
              <li className="mb-2">10 GB of storage</li>
              <li className="mb-2">Help center access</li>
              <li className="mb-2">Priority email support</li>
              <li className="mb-2">20 users included</li>
              <li className="mb-2">10 GB of storage</li>
              <li className="mb-2">20 users included</li>
              <li className="mb-2">10 GB of storage</li>
              <li className="mb-2">20 users included</li>
              <li className="mb-2">10 GB of storage</li>
            </ul>
            <div className="text-center flex-center mt-6 z-[10]">
              <Button className="flex flex-row p-6 bg-blue-500 hover:bg-blue-700 text-xl font-semibold rounded-xl text-white z-[10]">
                <Image
                  src="/assets/logo.png"
                  alt="thundercloud logo"
                  width={50}
                  height={50}
                />
                Get BuildBreeze
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Pricing;
