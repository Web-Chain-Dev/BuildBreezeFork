import Benefits from "@/components/home/Benefits";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import RealHero from "@/components/home/RealHero";
import ImageSlider from "@/components/home/TechStack";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-12 w-screen overflow-x-hidden">
      <RealHero />
      <Benefits />
      <ImageSlider />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
