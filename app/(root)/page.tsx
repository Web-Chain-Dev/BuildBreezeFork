import Benefits from "@/components/home/Benefits";
import Demo from "@/components/home/Demo";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import NewHero from "@/components/home/NewHero";
import Pricing from "@/components/home/Pricing";
import RealHero from "@/components/home/RealHero";
import RealTechStack from "@/components/home/RealTechStack";
import TrueHero from "@/components/home/TrueHero";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-12 w-screen overflow-x-hidden">
      <TrueHero />
      {/* <RealHero /> */}
      {/* <NewHero /> */}
      <Benefits />
      <RealHero />
      {/* <RealTechStack /> */}
      <Demo />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
