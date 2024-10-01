import React from 'react';
import HeroImage from '../assets/images/HeroBanner.png';

const Hero = () => {
  return (
    <div className="mx-auto my-10 w-4/5 relative">
      <div className="absolute top-1/2 left-3/4 transform -translate-x-3/4 md:-translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-4xl md:text-6xl xl:text-8xl mb-2.5 tracking-normal">
          Portfolio
        </h1>
        <h1 className=" font-Montserrat w-min text-blue-300 text-5xl md:text-7xl xl:text-9xl font-bold tracking-tighter">
          JOSHUA SCOTT
        </h1>
      </div>
      <img
        src={HeroImage}
        className="m-auto object-cover w-full h-[400px] xl:h-[600px] border border-white border-l-0 border-r-0"
      />
    </div>
  );
};

export default Hero;
