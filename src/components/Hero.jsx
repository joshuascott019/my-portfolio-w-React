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

  useEffect(() => {
    if (isImageLoaded) {
      const portfolioTimer = setTimeout(
        () => setIsPortfolioVisible(true),
        1000
      );
      const nameTimer = setTimeout(() => setIsNameVisible(true), 1500);
      const ctaTimer = setTimeout(() => setIsCtaVisible(true), 2000);

      return () => {
        clearTimeout(portfolioTimer);
        clearTimeout(nameTimer);
        clearTimeout(ctaTimer);
      };
    }
  }, [isImageLoaded]);

  return (
    <div className="relative w-full h-[600px] xl:h-[800px]">
      <img
        src={HeroImage}
        alt="Portfolio hero image of Joshua Scott"
        className={`object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
        <h1
          className={`text-4xl md:text-6xl xl:text-8xl mb-2.5 tracking-wide transition-opacity duration-1000 ease-in-out ${
            isPortfolioVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          } transform transition-transform`}
        >
          Portfolio
        </h1>

        <h1
          className={`font-Montserrat text-blue-300 text-5xl md:text-7xl xl:text-9xl font-bold tracking-tighter drop-shadow-lg transition-opacity duration-1000 ease-in-out ${
            isNameVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          } transform transition-transform`}
        >
          JOSHUA SCOTT
        </h1>

        <a
          href="#portfolio"
          className={`mt-8 px-6 py-3 bg-blue-600 text-white text-xl md:text-2xl rounded-full hover:bg-blue-500 transition-all duration-300 transition-opacity ease-in-out ${
            isCtaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          } transform transition-transform`}
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
