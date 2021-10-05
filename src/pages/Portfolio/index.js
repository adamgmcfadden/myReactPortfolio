import React, { useState } from "react";

const ProjectList = ({ category }) => {
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Space Camp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Lettuce Plan This Thyme",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Random Password Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "MVC-Developer Blog",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "PWA-Help Me Budget",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "MySQL-Employee Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
          <img
            src={require(`../../assets/small/${i}.jpg`).default}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
