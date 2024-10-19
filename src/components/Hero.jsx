import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/images/HeroBanner.png';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Staggered text fade-in effect
  useEffect(() => {
    if (isImageLoaded) {
      const portfolioTimer = setTimeout(
        () => setIsPortfolioVisible(true),
        1000
      ); // 1s after image fade-in
      const nameTimer = setTimeout(() => setIsNameVisible(true), 1300); // 0.5s after "Portfolio"
      const ctaTimer = setTimeout(() => setIsCtaVisible(true), 1600); // 0.5s after "Joshua Scott"

      // Cleanup timers when component unmounts
      return () => {
        clearTimeout(portfolioTimer);
        clearTimeout(nameTimer);
        clearTimeout(ctaTimer);
      };
    }
  }, [isImageLoaded]);

  return (
    <div className="relative w-full h-[600px] xl:h-[800px]">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero Banner"
        className={`object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
        {/* Portfolio Title */}
        <h1
          className={`text-4xl md:text-6xl xl:text-8xl mb-2.5 tracking-wide transition-opacity duration-1000 ease-in-out ${
            isPortfolioVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Portfolio
        </h1>

        {/* Joshua Scott Name */}
        <h1
          className={`font-Montserrat text-blue-300 text-5xl md:text-7xl xl:text-9xl font-bold tracking-tighter drop-shadow-lg transition-opacity duration-1000 ease-in-out ${
            isNameVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          JOSHUA SCOTT
        </h1>

        {/* Call to Action */}
        <a
          href="/portfolio"
          className={`mt-8 px-6 py-3 bg-blue-600 text-white text-xl md:text-2xl rounded-full hover:bg-blue-500 transition-all duration-300 transition-opacity ease-in-out ${
            isCtaVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
