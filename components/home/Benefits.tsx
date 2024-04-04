import React from "react";
import InfoCard from "../shared/InfoCard";

const Benefits = () => {
  return (
    <div className="w-screen h-screen flex-center flex-col gap-12">
      <h3 className="text-5xl font-semibold text-blue-500">Flipping Card</h3>
      <InfoCard type="positive" />
    </div>
  );
};

export default Benefits;
