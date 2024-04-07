import Benefits from "@/components/home/Benefits";
import Demo from "@/components/home/Demo";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import RealHero from "@/components/home/RealHero";
import RealTechStack from "@/components/home/RealTechStack";
import ImageSlider from "@/components/home/TechStack";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-12 w-screen overflow-x-hidden">
      <RealHero />
      <Benefits />
      <RealTechStack />
      <Demo />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
