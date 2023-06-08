import React from "react";
import Heading from "./Heading";
import "../index.css";
import "../style/project.css";
import Projectcard from "./projects/Projectcard";

import projectsData from "./data/projectsData";

const Projects = ({ theme }) => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <main className={`${theme === "dark" ? "dark" : "light"} projects`}>
        <Heading
          heading="project"
          description="A selection of my favorite works."
        />

        <section className="project_container">
        {projectsData.map((project, index) => (
            <Projectcard
              key={index}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              liveLinkUrl={project.liveLinkUrl}
              linkBtnText={project.linkBtnText}
              githubLink={project.githubLink}
              githubLinkF={project.githubLinkF}
              githubLinkB={project.githubLinkB}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Projects;
