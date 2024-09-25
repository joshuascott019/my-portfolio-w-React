import React from 'react';
import { FaLinkedin, FaGithub, FaFreeCodeCamp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-600 flex flex-col p-8">
      <div className="mx-auto my-5 text-white text-7xl flex space-x-20">
        <FaLinkedin />
        <FaGithub />
        <FaFreeCodeCamp />
      </div>
      <p className="mx-auto my-3">Developed by: Joshua Scott</p>
      <p className="mx-auto my-3">Designed by: Monica Marçal & Joshua Scott</p>
    </div>
  );
};

export default Footer;
