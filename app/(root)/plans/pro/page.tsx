import PricingPlan from "@/components/home/PricingPlan";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <div className="w-screen h-screen flex-center">
      {plans.slice(1).map((plan, index) => (
        <PricingPlan
          key={index}
          type="payment"
          plan={plan.plan}
          amount={plan.amount}
          image={plan.image}
          buyerId={user._id}
        />
      ))}
    </div>
  );
};

export default Page;
