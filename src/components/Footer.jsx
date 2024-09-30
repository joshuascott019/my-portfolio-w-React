import React from 'react';
import { FaLinkedin, FaGithub, FaFreeCodeCamp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-blue-600 flex flex-col p-12">
      <div className="mx-auto my-6 text-white text-7xl flex space-x-20">
        <Link
          to="https://www.linkedin.com/in/joshua-scott-295a3b265/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/joshuascott019" target="_blank">
          <FaGithub />
        </Link>
        <Link to="https://www.freecodecamp.org/Joshua_Scott" target="_blank">
          <FaFreeCodeCamp />
        </Link>
      </div>
      <p className="font-Montserrat mx-auto my-6">Developed by: Joshua Scott</p>
      <p className="font-Montserrat mx-auto my-6">
        Designed by: Monica Marçal & Joshua Scott
      </p>
    </div>
  );
};

export default Footer;
