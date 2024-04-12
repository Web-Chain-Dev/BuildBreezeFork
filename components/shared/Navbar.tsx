"use client";

import { NavLinks } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import MobileMenuBar from "./MobileMenuBar";
import FeedBackDialog from "./FeedBackDialog";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const path = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <div className="header h-[10px] z-[20]">
      <div className="header-elements">
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <Image
            src="/assets/logo.png"
            alt="thundercloud"
            width={74}
            height={74}
          />
          <h1 className="text-[40px] md:text-[30px] font-semibold md:h1-semibold text-blue-500 ">
            BuildBreeze
          </h1>
        </div>
        {/* <div className="hidden lg:flex flex-row gap-10 pt-1 items-center">
           {NavLinks.map((link) => (
            <h3
              key={link.name}
              className="text-gray-300 text-xl cursor-pointer"
            >
              {link.name}
            </h3>
          ))} 
        </div> */}
      </div>

      {path === "/" ? (
        <>
          <SignedIn>
            <Link
              href="/profile"
              className="px-7 py-4 bg-blue-500 hover:bg-purple-700 text-xl font-semibold rounded-xl text-gray-200"
            >
              Your Profile
            </Link>
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-7 py-4 bg-blue-500 hover:bg-purple-700 text-xl font-semibold rounded-xl text-gray-200"
            >
              Your Profile
            </Link>
          </SignedOut>
          {/* <FeedBackDialog classes="hidden md:flex" /> */}
        </>
      ) : (
        <Button
          className="p-6 px-4 bg-blue-500 flex items-center flex-row gap-3 hover:bg-purple-700 text-xl font-semibold rounded-xl text-gray-200"
          onClick={() => signOut(() => router.push("/"))}
        >
          <UserButton /> Sign out
        </Button>
      )}

      <MobileMenuBar />
    </div>
  );
};

export default Navbar;
