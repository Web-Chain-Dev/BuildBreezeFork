import React from "react";

const Demo = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center h-full py-12 " id="demo"  style={{ backgroundImage: `url(/assets/bluepurple20.jpg)` }}>
      <div className="text-center flex-center text-purple-500  text-6xl lg:text-7xl font-semibold flex-col gap-12">
        <h3>Project Demo</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QWcDMWhDCLY?si=nxncQ0RDXf7yb3G3"
          title="YouTube video player"
          allow="accelerometer; autoplay; fullscreen; full-screen; allowfullscreen; fullScreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-[44vh] rounded-xl w-[82vw] md:w-[42vw] md:h-[50vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default Demo;
