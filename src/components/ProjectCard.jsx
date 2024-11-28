/* eslint-disable react/prop-types */
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const techIcons = {
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-900" />,
  JavaScript: <IoLogoJavascript className="text-yellow-400" />,
  React: <FaReact className="text-cyan-400" />,
  Tailwind: <RiTailwindCssFill className="text-teal-600" />,
};

const ProjectCard = ({ project, onImageLoad }) => {
  const { techs, projectLink, image, title, category } = project;
  const cardStyle =
    projectLink === ''
      ? 'relative flex flex-col justify-between border-black border-opacity-50 border-8 text-center bg-blue-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-600 hover:border-red-600 transition-all duration-300 hover:animate-shake'
      : 'relative flex flex-col justify-between border-transparent border-8 text-center bg-blue-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:scale-110';

  return (
    <Link
      to={projectLink === '' ? 'javascript:void(0)' : projectLink}
      target={projectLink === '' ? '' : '_blank'}
      className={cardStyle}
      aria-label={projectLink === '' ? 'No link available' : `Visit ${title}`}
    >
      {projectLink === '' && (
        <div className="absolute w-full h-full bg-black bg-opacity-50 hover:bg-red-600 hover:bg-opacity-50 hover:z-20"></div>
      )}

      {image && (
        <img
          className="object-cover w-full h-48"
          src={image}
          alt={title}
          onLoad={onImageLoad}
        />
      )}

      <h1 className="font-Montserrat text-lg sm:text-xl tracking-tight text-black p-2">
        {title}
      </h1>
      <p className="text-black text-xs sm:text-sm">{category}</p>
      {projectLink === '' && (
        <p className="text-xs text-red-700 font-bold z-10">
          ***NO LINK DETECTED!***
        </p>
      )}

      <div className="flex justify-center gap-1 text-3xl sm:text-4xl p-2">
        {techs.map((tech) => (
          <span key={tech}>{techIcons[tech]}</span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
