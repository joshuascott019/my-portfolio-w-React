import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projects.json';

const ProjectCards = () => {
  return (
    <>
      <div className="mt-10 mb-24 mx-auto w-3/4 flex gap-10 flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
