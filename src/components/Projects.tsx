import React from "react";
import Project from "./Project";
// import PropTypes from "prop-types";

export interface IProjectsProps {
  projects: any[];
}
const Projects = ({ projects }: IProjectsProps) => {
  return (
    <ul className="w-full relative">
      {projects &&
        projects.map((project, projectIndex) => {
          return (
            <Project
              key={`project-${project.id}-${projectIndex}`}
              project={project}
              index={projectIndex}
            />
          );
        })}
    </ul>
  );
};

export default Projects;

// Projects.propTypes = {
//   projects: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
