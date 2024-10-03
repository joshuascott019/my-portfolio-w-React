import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import initProjects from '../projects.json';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}');

const ProjectCards = () => {
  // Function to sort projects based on the sort option
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
  const [projects, setProjects] = useState(
    sortProjects(initProjects, sortOption)
  );
  const [loadedProjects, setLoadedProjects] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          const imageKey = `../assets/images/${project.image}`;
          if (images[imageKey]) {
            const imgModule = await images[imageKey]();
            return { ...project, image: imgModule.default };
          }
          return { ...project, image: '' };
        })
      );
      setLoadedProjects(updatedProjects);
    };

    loadImages();
  }, [projects]);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    const sortedData = sortProjects(projects, option); // Sort projects based on the new option
    setProjects(sortedData); // Update projects with sorted data
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
      <div className=" mb-24 mx-auto w-4/5 flex gap-12 flex-wrap justify-center">
        {loadedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
