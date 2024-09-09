import projectImage from "../../../public/project_2.jpeg";
import Image from "next/image";
import githubIcon from "../../../public/icons/github.svg";
import HeaderText from "./ui/headerText";

import "./projects.css";

export interface project {
  title: string;
  description: string;
  link: string;
}

export interface ProjectProps {
  projects: project[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className="projectsSection">
      {/* Temporary */}
      <HeaderText title="Projects" subTitle="" bread="" />
      <div className="imageContainer">
        <Image src={projectImage} alt="project" className="projectImage" />
        <div className="overlayContainer">
          <div>
            Showcase section is currently a work in progress. In the meantime,
            check out my repositories on github:
          </div>
          <div>
            <a href="https://github.com/chrvei00" target="_blank">
              <Image src={githubIcon} alt="github" width={50} />
            </a>
          </div>
        </div>
      </div>
      {/* Temporary */}
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

const Project: React.FC<project> = ({ title, description, link }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Link</a>
    </div>
  );
};

export default Projects;
