import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import initProjects from '../projects.json';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}');

const ProjectCards = () => {
  const sortProjects = (projects, option) => {
    switch (option) {
      case 'date-asc':
        return [...projects].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      case 'date-desc':
        return [...projects].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      case 'name-asc':
        return [...projects].sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return [...projects].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return projects;
    }
  };

  const [sortOption, setSortOption] = useState('date-desc');
  const [projects, setProjects] = useState(initProjects);
  const [loadedProjects, setLoadedProjects] = useState([]);

  useEffect(() => {
    const loadImages = async (sortedProjects) => {
      const updatedProjects = await Promise.all(
        sortedProjects.map(async (project) => {
          const imageKey = `../assets/images/${project.image}`;
          let imgModule;
          if (images[imageKey]) {
            imgModule = await images[imageKey]();
          }
          return {
            ...project,
            image: imgModule ? imgModule.default : '',
            loaded: false,
          };
        })
      );
      setLoadedProjects(updatedProjects);
    };

    const sortedProjects = sortProjects(initProjects, sortOption);
    loadImages(sortedProjects);
  }, [sortOption]);

  const handleImageLoad = (index) => {
    setLoadedProjects((prevProjects) =>
      prevProjects.map((proj, i) =>
        i === index ? { ...proj, loaded: true } : proj
      )
    );
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <div className="mt-10 mx-auto w-11/12 xl:w-4/5 flex justify-center sm:justify-normal sm:flex-row-reverse px-20 py-10">
        <div>
          <label htmlFor="sort">Sort by: </label>
          <select
            className="text-black"
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="name-asc">A-Z</option>
            <option value="name-desc">Z-A</option>
            <option value="date-asc">Oldest</option>
            <option value="date-desc">Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-auto w-11/12 xl:w-4/5 min-h-screen">
        {loadedProjects.map((project, index) => (
          <div
            key={index}
            className={`opacity-0 transition-opacity duration-500 delay-${
              index * 200
            }ms ${project.loaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <ProjectCard
              project={project}
              onImageLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
