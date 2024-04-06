"use client";

import { Button } from "@/components/ui/button";
import { addUserToGitHubRepo } from "@/lib/actions/user.actions";
import React from "react";

const Page = () => {
  const githubUsername = "WebchainDevelopment";
  const repoOwner = "Mif2006";
  const repoName = "BuildBreezeBoilerplate";
  return (
    <div className="w-screen h-screen flex-center">
      <Button
        onClick={async () =>
          await addUserToGitHubRepo(githubUsername, repoOwner, repoName)
        }
        className="p-6 bg-blue-500 hover:bg-blue-700 text-xl font-semibold rounded-xl text-white z-[10]"
      >
        Get Github access
      </Button>
    </div>
  );
};

export default Page;
