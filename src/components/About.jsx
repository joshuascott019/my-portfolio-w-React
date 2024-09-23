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
    <div className="flex flex-row justify-between m-auto w-3/4 text-xl">
      <div className="p-10 mx-5 w-1/2">
        <h1 className="text-4xl mb-10">About</h1>
        <div className="flex flex-row text-blue-300">
          <p className="w-1/2 mr-3">
            Hello there,
            <br /> I'm Joshua, a currently aspiring Frontend Developer and
            eventually onto Fullstack. Despite the difficulty, I very much love
            learning to code and program and make various creations from
            interfaces, tools, and games.
          </p>
          <p className="w-1/2 ml-3">
            This portfolio is where I'll be adding my available projects ranging
            from humble beginnings to more robust and complex projects over
            time, including my portfolio itself.
          </p>
        </div>
      </div>

      <div className="p-10 mx-5 w-1/2">
        <h1 className="text-4xl mb-10">Technologies</h1>
        <div className="flex flex-row text-6xl flex-wrap">
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
