import React from "react";

function Resume() {
  const frontend = [
    "HTML",
    "CSS",
    "javaScript",
    "jQuery",
    "responsive design",
    "React",
    "Bootstrap",
  ];

  const backend = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL",
  ];
  return (
    <div className="container-style">
      <h1 className="page-title">Resume</h1>
      <h3>
        Download my&nbsp;
        <a className="resume-link" href="#resumelink">
          Resume
        </a>
      </h3>
      <h2>
        Front-end Proficiencies
        <ul>
          {frontend.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </h2>
      <h2>
        Back-end Proficiencies
        <ul>
          {backend.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </h2>
    </div>
  );
}

export default Resume;
