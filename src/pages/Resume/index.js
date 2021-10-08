import React from "react";
import Pdf from "../../assets/resume/Resume.pdf";

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
      <h1 className="page-title mb-5">Resume</h1>
      <h3 className="mb-4">
        Download my&nbsp;
        <a className="resume-link" href={Pdf} target="_blank">
          resume
        </a>
      </h3>
      <div className="body-container">
        <h2 className="section-title">Front-end Proficiencies </h2>
        <ul className="list-style">
          {frontend.map((tech) => (
            <li className="list-item-style" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="body-container">
        <h2 className="section-title">Back-end Proficiencies</h2>
        <ul className="list-style">
          {backend.map((tech) => (
            <li className="list-item-style" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
