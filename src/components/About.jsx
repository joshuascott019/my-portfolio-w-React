import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaGitSquare,
  FaNpm,
  FaReact,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';

const About = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row justify-between mx-auto my-16 w-4/5 text-xl md:p-4">
      <div className="md:p-4 mx-5 lg:w-1/2">
        <h1 className="font-Montserrat text-4xl mb-10">About</h1>
        <p className="w-full my-5 text-blue-300">Hello there,</p>
        <div className="flex flex-col lg:flex-row text-blue-300">
          <p className="font-Montserrat lg:w-1/2 my-3 lg:mr-3">
            I'm Joshua, a currently aspiring Frontend Developer and eventually
            onto Fullstack. Despite the difficulty, I very much love learning to
            code and program and make various creations from interfaces, tools,
            and games.
          </p>
          <p className="font-Montserrat lg:w-1/2 my-3 lg:ml-3">
            This portfolio is where I'll be adding my available projects ranging
            from humble beginnings to more robust and complex projects over
            time, including my portfolio itself.
          </p>
        </div>
      </div>

      <div className="md:p-4 mx-5 lg:w-1/2">
        <h1 className="font-Montserrat text-4xl mb-10">Technologies</h1>
        <div className="flex flex-row justify-center lg:justify-normal text-6xl flex-wrap">
          <FaHtml5 className="text-orange-600 m-6" />
          <FaCss3Alt className="text-blue-900 m-6" />
          <IoLogoJavascript className="text-yellow-400 m-6" />
          <FaGitSquare className="text-orange-600 m-6" />
          <FaNpm className="text-red-600 m-6" />
          <FaReact className="text-cyan-400 m-6" />
          <RiTailwindCssFill className="text-teal-600 m-6" />
        </div>
      </div>
    </div>
  );
};

export default About;
