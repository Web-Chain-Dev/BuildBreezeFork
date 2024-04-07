import PricingPlan from "@/components/home/PricingPlan";
import { plans } from "@/constants";
import { getUserById, getUserPayPlanById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

// Define a type for the user object

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user: any = await getUserById(userId);

  const plan = await getUserPayPlanById(user._id);

  if (plan.toLowerCase() === "basic") {
    redirect("/githubaccess");
  }

  return (
    <div className="w-screen h-screen flex-center">
      {plans.slice(0, 1).map((plan, index) => (
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
