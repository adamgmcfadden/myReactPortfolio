import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectList = ({ category }) => {
  const [currentProject, setCurrentProject] = useState();

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
        {projects.map((image, i) => (
          <div className="project-container" key={image.name}>
            <img
              src={require(`../../assets/small/${i}.jpg`).default}
              alt={image.name}
              className="project img-thumbnail "
              key={image.name}
            />
            <div className="project-text-cont">
              <a className="link-style" href={image.link} target="_blank">
                {" "}
                <span className="project-title-style">{image.name}</span>
              </a>
              <a className="link-style" href={image.gitLink} target="_blank">
                {" "}
                <FaGithub className="github-link-style" size="3em" />{" "}
              </a>
              <h3 className="project-desc-style">{image.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
