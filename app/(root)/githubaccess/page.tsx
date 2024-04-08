import PlanForm from "@/components/shared/PlanForm";
import {
  getIsLoggedInToGithub,
  getUserById,
  getUserPayPlanById,
} from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { CheckCheckIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const repoOwner = "Mif2006";
  const repoName = "BuildBreezeBoilerplate";

  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user: any = await getUserById(userId);

  const plan = await getUserPayPlanById(user._id);

  const loggedInToGithubResult = await getIsLoggedInToGithub(user._id);
  const loggedInToGithub = loggedInToGithubResult.loggedInToGithub;

  if (plan.toLowerCase() !== "pro" && plan.toLowerCase() !== "basic") {
    redirect("/");
  }

  if (loggedInToGithub === true) {
    redirect("/profile");
  }

  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center flex-center flex-col gap-6"
      style={{ backgroundImage: "url(/assets/bluepurple15.jpg)" }}
    >
      <div className="flex flex-col items-center gap-3 pt-20 md:py-0">
        <h3 className="text-6xl md:text-7xl text-blue-500 font-semibold text-center">
          Welcome to BuildBreeze
        </h3>
        <p className=" md:hidden text-[16px] text-center md:text-[18px] text-gray-400 max-w-[82vw]">
          By entering your github username you get access to these repositories:
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <p className="hidden md:block text-center text-[16px] md:text-[18px] text-gray-400 max-w-[36vw]">
            By entering your github username you get access to these
            repositories:
          </p>

          {plan.toLowerCase() === "pro" ? (
            <div className=" grid grid-cols-2 max-w-[90vw] items-start gap-4 pt-2 font-semibold">
              <div className="flex flex-row items-center p-3 rounded-xl bg-blue-500 gap-2 pl-2">
                <CheckCheckIcon />
                <h3 className="text-gray-200 blue-500 text-[18px]">
                  Saas Typescript + Stripe
                </h3>
              </div>
              <div className="flex flex-row items-center p-3 rounded-xl bg-blue-500 gap-2 pl-2">
                <CheckCheckIcon />
                <h3 className="text-gray-200 blue-500 text-[18px]">
                  Saas Typescript + Paddle
                </h3>
              </div>

              <div className="flex flex-row items-center p-3 rounded-xl bg-blue-500 gap-2 pl-2">
                <CheckCheckIcon />
                <h3 className="text-gray-200 blue-500 text-[18px]">
                  Saas Javascript + Stripe
                </h3>
              </div>
              <div className="flex flex-row items-center p-3 rounded-xl bg-blue-500 gap-2 pl-2">
                <CheckCheckIcon />
                <h3 className="text-gray-200 blue-500 text-[18px]">
                  Saas Javascript + Paddle
                </h3>
              </div>
            </div>
          ) : (
            <div className="flex flex-col max-w-[90vw] items-start gap-4 pt-2 font-semibold">
              <div className="flex flex-row gap-3">
                <div className="flex flex-row items-center p-3 rounded-xl bg-blue-500 gap-2 pl-2">
                  <CheckCheckIcon />
                  <h3 className="text-gray-200 blue-500 text-[18px]">
                    Saas Javascript + Stripe
                  </h3>
                </div>

                <div className="flex flex-row items-center p-3 rounded-xl bg-blue-500 gap-2 pl-2">
                  <CheckCheckIcon />
                  <h3 className="text-gray-200 blue-500 text-[18px]">
                    Saas Typescript + Stripe
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
        <PlanForm
          buyerId={user._id}
          repoName={repoName}
          repoOwner={repoOwner}
        />
      </div>
    </div>
  );
};

export default Page;
