import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { checkoutPlan } from "@/lib/actions/transaction.action";
import { SignedIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";
import PricingPlan from "./PricingPlan";
import { plans } from "@/constants";

const Pricing = async () => {
  return (
    <div className="w-full min-h-screen mx-auto px-4 py-8 bg-[#032B44]">
      <h2 className="text-6xl text-blue-500 font-bold text-center mb-8">
        Pricing Plans
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Free Plan */}
        {plans.map((plan, index) => (
          <PricingPlan
            type="main"
            image={plan.image}
            key={index}
            plan={plan.plan}
            amount={plan.amount}
            buyerId={""}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
