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
      ? 'relative flex flex-col justify-between border-black border-opacity-50 border-8 text-center w-52 lg:w-60 bg-blue-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-600 hover:border-red-600 transition-all duration-300 hover:animate-shake'
      : 'relative flex flex-col justify-between border-transparent border-8 text-center w-52 lg:w-60 bg-blue-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:scale-110';

  return (
    <Link
      to={projectLink === '' ? 'javascript:void(0)' : projectLink}
      target={projectLink === '' ? '' : '_blank'}
      className={cardStyle}
    >
      {projectLink === '' ? (
        <div className="absolute w-full h-full bg-black bg-opacity-50 hover:bg-red-600 hover:bg-opacity-50 hover:z-20"></div>
      ) : null}

      {project.image && (
        <img
          className="object-cover h-40 w-full"
          src={project.image}
          alt={project.title}
        />
      )}

      <h1 className="font-Montserrat text-xl tracking-tight text-black">
        {project.title}
      </h1>
      <p className="text-black text-xs">{project.category}</p>
      {projectLink === '' ? (
        <p className="text-xs text-red-700 font-bold z-10">
          ***NO LINK DETECTED!***
        </p>
      ) : null}

      <div className="flex justify-center gap-1 text-4xl p-2">
        {hasHTML && (
          <FaHtml5 className="text-orange-600 border-black bg-transparent" />
        )}
        {hasJavaScript && (
          <IoLogoJavascript className="text-yellow-400 border-black bg-transparent" />
        )}
        {hasReact && (
          <FaReact className="text-cyan-400 border-black bg-transparent" />
        )}
        {hasCSS && (
          <FaCss3Alt className="text-blue-900 border-black bg-transparent" />
        )}
        {hasTailwind && (
          <RiTailwindCssFill className="text-teal-600 bg-transparent" />
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
