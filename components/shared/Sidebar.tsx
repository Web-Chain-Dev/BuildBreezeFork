"use client";

import { sidebarItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  // Split the pathname by '/' and get the last segment
  const currentPathSegment = pathname.split("/").pop();

  return (
    <div className="bg-gray-800 text-white w-[20vw] min-h-screen p-4">
      <div className="flex items-center justify-center mb-8">
        <Image src="/assets/logo.png" alt="Logo" width={56} height={56} />
        <span className="text-2xl ml-2">BuildBreeze</span>
      </div>
      <ul>
        {sidebarItems.map((item, index) => {
          // Extract the last part of the item.href
          const itemPathSegment = item.href.split("/").pop();
          return (
            <li key={index} className="mb-2">
              <Link href={item.href} className="flex items-center space-x-2">
                <div
                  className={`p-6 text-white rounded-xl ${
                    currentPathSegment === itemPathSegment
                      ? "bg-blue-500"
                      : "bg-transparent"
                  } text-xl font-semibold`}
                >
                  {item.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
