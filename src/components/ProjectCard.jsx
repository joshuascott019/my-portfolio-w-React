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
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const techs = project.techs;
  const hasHTML = techs.includes('HTML');
  const hasCSS = techs.includes('CSS');
  const hasJavaScript = techs.includes('JavaScript');
  const hasReact = techs.includes('React');
  const hasTailwind = techs.includes('Tailwind');
  const projectLink = project.projectLink;

  const cardStyle =
    projectLink === ''
      ? 'flex flex-col justify-between text-center w-60 bg-red-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-600'
      : 'flex flex-col justify-between text-center w-60 bg-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-600';

  return (
    <Link to={projectLink} target="_blank" className={cardStyle}>
      <img
        className="object-cover h-3/4 border-b-4 border-blue-400"
        src={project.img}
        alt=""
      />

      <h1 className="text-xl text-black">{project.title}</h1>

      <div className="flex justify-center gap-1 text-4xl p-2 ">
        {hasHTML ? <FaHtml5 className="text-orange-600 shadow-xl" /> : null}
        {hasCSS ? <FaCss3Alt className="text-blue-900 shadow-xl" /> : null}
        {hasJavaScript ? (
          <IoLogoJavascript className="text-yellow-400 shadow-xl" />
        ) : null}
        {hasReact ? <FaReact className="text-cyan-400 shadow-xl" /> : null}
        {hasTailwind ? (
          <RiTailwindCssFill className="text-teal-600 shadow-xl" />
        ) : null}
      </div>
    </Link>
  );
};

export default ProjectCard;
