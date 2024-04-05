import { NavLinks } from "@/constants";
import link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileMenuBar from "./MobileMenuBar";
import FeedBackDialog from "./FeedBackDialog";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="header h-[10px]">
      <div className="header-elements">
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <Image
            src="/assets/logo.png"
            alt="thundercloud"
            width={74}
            height={74}
          />
          <h1 className="text-[30px] font-semibold md:h1-semibold text-blue-500 ">
            BuildBreeze
          </h1>
          <UserButton />
        </div>
        <div className="hidden lg:flex flex-row gap-10 pt-1 items-center">
          {/* {NavLinks.map((link) => (
            <h3
              key={link.name}
              className="text-gray-300 text-xl cursor-pointer"
            >
              {link.name}
            </h3>
          ))} */}
        </div>
      </div>

      <FeedBackDialog classes="hidden md:flex" />

      <MobileMenuBar />
    </div>
  );
};

export default Navbar;
