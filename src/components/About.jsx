/* eslint-disable react/no-unescaped-entities */
import {
  FaHtml5,
  FaCss3Alt,
  FaGitSquare,
  FaNpm,
  FaReact,
  FaNode,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import YearSpan from './YearSpan';

// Years Calc

const About = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row justify-between mx-auto my-16 w-4/5 text-lg md:text-xl md:p-4">
      <div className="md:p-4 mx-5 lg:w-1/2">
        <h1 className="font-Montserrat text-4xl mb-10">About</h1>
        <p className="w-full my-5 text-blue-300">Hello there!</p>
        <div className="flex flex-col lg:flex-row text-blue-300">
          <p className="font-Montserrat lg:w-1/2 my-3 lg:mr-3">
            I'm Joshua, a Frontend Developer with a passion for crafting
            interactive and functional user interfaces. I've been on this
            exciting career journey since January 2023, and I’m currently diving
            into backend development to achieve my goal of becoming a Fullstack
            Developer.
          </p>
          <p className="font-Montserrat lg:w-1/2 my-3 lg:ml-3">
            This portfolio reflects my growth—from my earliest projects to more
            sophisticated applications. Keep an eye out for updates as I
            continue learning, building, and expanding my expertise!
          </p>
        </div>
      </div>

      <div className="md:p-4 mx-5 lg:w-1/2">
        <h1 className="font-Montserrat text-4xl mb-10 w-min lg:w-fit text-center">
          Technologies <span className="text-lg">& Experience</span>
        </h1>
        <h3 className="mb-4 mt-16 text-2xl">Frontend</h3>
        <div className="flex gap-8 justify-center lg:justify-normal flex-wrap">
          <span
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.open(
                'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <FaHtml5 className="text-orange-600 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              HTML5 <br />
              <YearSpan startDate="2023-01-01" />
            </p>
          </span>
          <span
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.open(
                'https://developer.mozilla.org/en-US/docs/Web/CSS',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <FaCss3Alt className="text-blue-900 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              CSS <br />
              <YearSpan startDate="2023-01-01" />
            </p>
          </span>
          <span
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.open(
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <IoLogoJavascript className="text-yellow-400 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              JavaScript <br />
              <YearSpan startDate="2023-07-01" />
            </p>
          </span>
          <span
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.open(
                'https://git-scm.com/',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <FaGitSquare className="text-orange-600 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              Git <br />
              <YearSpan startDate="2023-06-28" />
            </p>
          </span>
          <span
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.open(
                'https://docs.npmjs.com/about-npm',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <FaNpm className="text-red-600 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              NPM <br />
              <YearSpan startDate="2024-06-01" />
            </p>
          </span>
          <span
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.open('https://react.dev/', '_blank', 'noopener,noreferrer')
            }
          >
            <FaReact className="text-cyan-400 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              React <br />
              <YearSpan startDate="2024-06-01" />
            </p>
          </span>
          <span
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.open(
                'https://tailwindcss.com/',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <RiTailwindCssFill className="text-teal-600 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              Tailwind <br />
              <YearSpan startDate="2024-07-01" />
            </p>
          </span>
        </div>
        <h3 className="mb-4 mt-16 text-2xl">
          Backend
          <span className="ml-1 text-sm animate-pulse">
            (Learning in progress...)
          </span>
        </h3>
        <div className="flex gap-8 justify-center lg:justify-normal flex-wrap">
          <span
            className="flex flex-col items-center animate-pulse cursor-pointer"
            onClick={() =>
              window.open(
                'https://nodejs.org/en',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <FaNode className="text-green-700 hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              Node.js <br />
              {/* <YearSpan startDate="2024-11-15" /> */}
            </p>
          </span>
          <span
            className="flex flex-col items-center animate-pulse cursor-pointer"
            onClick={() =>
              window.open(
                'https://expressjs.com/',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <SiExpress className="text-white hover:scale-110 transition-transform duration-300 text-6xl" />
            <p className="text-xs text-center">
              Express.js <br />
              {/* <YearSpan startDate="2024-11-15" /> */}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
