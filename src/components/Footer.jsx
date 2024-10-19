import React from 'react';
import { FaLinkedin, FaGithub, FaFreeCodeCamp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-600 flex flex-col p-3 md:p-9 xl:p-24">
      <div className="m-auto text-white flex text-4xl mb-3 space-x-12 md:text-6xl md:mb-6 xl:text-7xl xl:mb-12 xl:space-x-24">
        <a
          href="https://www.linkedin.com/in/joshua-scott-295a3b265/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Joshua Scott's LinkedIn"
        >
          <FaLinkedin className="hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://github.com/joshuascott019"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Joshua Scott's GitHub"
        >
          <FaGithub className="hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://www.freecodecamp.org/Joshua_Scott"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Joshua Scott's FreeCodeCamp"
        >
          <FaFreeCodeCamp className="hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
      <p className="font-Montserrat m-auto text-sm my-1 md:text-lg md:my-3">
        Developed by: Joshua Scott
      </p>
      <p className="font-Montserrat m-auto text-sm my-1 md:text-lg md:my-3">
        Designed by: Monica Marçal & Joshua Scott
      </p>
    </div>
  );
};

export default Footer;
