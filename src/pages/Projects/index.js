// import react and useState + react icons
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectList = ({ category }) => {
  // set state at current project
  const [currentProject, setCurrentProject] = useState();

  // array of project objects
  const [projects] = useState([
    {
      name: "Space Camp",
      description: "HTML/JavaScript/CSS",
      link: "https://jackloveday-git.github.io/space-camp/",
      gitLink: "https://github.com/jackloveday-git/space-camp",
    },
    {
      name: "Lettuce Plan This Thyme",
      description: "Node.js - Handlebars.js/JavaScript, CSS",
      link: "https://polar-mesa-03802.herokuapp.com/",
      gitLink: "https://github.com/adamgmcfadden/Lettuce-Plan-This-Thyme",
    },
    {
      name: "Random Password Generator",
      description: "HTML, JavaScript, CSS",
      link: "https://adamgmcfadden.github.io/random-password-generator/",
      gitLink: "https://github.com/adamgmcfadden/random-password-generator",
    },
    {
      name: "MVC-Developer Blog",
      description: "Node.js - Handlebars.js/JavaScript, CSS",
      link: "https://sleepy-wave-96682.herokuapp.com/",
      gitLink: "https://github.com/adamgmcfadden/MVC-Developer-Blog",
    },
    {
      name: "PWA-Help Me Budget",
      description: "Node.js - Express.js/MongoDB+Mongoose",
      link: "https://stark-beach-28767.herokuapp.com/",
      gitLink: "https://github.com/adamgmcfadden/PWA-help-me-budget",
    },
    {
      name: "The Weather Lounge",
      description: "Node.js - mySQL",
      link: "https://adamgmcfadden.github.io/The-Weather-Lounge/",
      gitLink: "https://github.com/adamgmcfadden/The-Weather-Lounge",
    },
  ]);

  return (
    <div className="container-style">
      <h1 className="page-title">Portfolio</h1>
      <div className="flex-images main-cont-background">
        {/* map through projects */}
        {projects.map((project, i) => (
          <div className="project-container" key={project.name}>
            <img
              // require image saved in assets - in numbered order
              src={require(`../../assets/small/${i}.jpg`).default}
              alt={project.name}
              className="project img-thumbnail "
              key={project.name}
            />
            <div className="project-text-cont">
              {/* link to deployed website - target blank for new page*/}
              <a className="link-style" href={project.link} target="_blank">
                {" "}
                <span className="project-title-style">{project.name}</span>
              </a>
              {/* link to github page - target blank for new page*/}
              <a className="link-style" href={project.gitLink} target="_blank">
                {" "}
                {/* import github icon */}
                <FaGithub className="github-link-style" size="3em" />{" "}
              </a>
              <h3 className="project-desc-style">{project.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export project list function
export default ProjectList;
