import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#032B44]">
      <Navbar />
      <div className="">{children}</div>
    </main>
  );
};

export default Layout;
