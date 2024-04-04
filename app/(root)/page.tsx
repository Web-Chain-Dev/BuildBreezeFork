import Benefits from "@/components/home/Benefits";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import ImageSlider from "@/components/home/TechStack";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#032B44] w-screen overflow-x-hidden">
      <Hero />
      <Benefits />
      <ImageSlider />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
