import React from 'react';
import HeroImage from '../assets/images/HeroBanner.png';

const Hero = () => {
  return (
    <div className="m-auto w-4/5 relative">
      <div className="absolute top-1/2 right-[-100px] text-[3.8rem] tracking-[--10px] leading-[1.8em] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-8xl mb-2.5 tracking-normal">Portfolio</h1>
        <h1 className=" font-Montserrat w-min text-blue-300 text-9xl font-bold tracking-tighter">
          JOSHUA SCOTT
        </h1>
      </div>
      <img
        src={HeroImage}
        className="m-auto object-cover w-full h-[600px] border border-white border-l-0 border-r-0"
      />
    </div>
  );
};

export default Hero;
