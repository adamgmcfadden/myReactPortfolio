// import react amd PDF'd resume
import React from "react";
import Pdf from "../../assets/resume/Resume.pdf";

function Resume() {
  // array of technologies to map through
  const frontend = [
    "HTML",
    "CSS",
    "javaScript",
    "jQuery",
    "responsive design",
    "React",
    "Bootstrap",
  ];
  // array of technologies to map through
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
      <div className="main-cont-background">
        <h3 className="mb-4">
          {/* whitespace after my */}
          Download my&nbsp;
          {/* pdf link */}
          <a className="link-style" href={Pdf} target="_blank">
            resume
          </a>
        </h3>
        <div className="body-container">
          <h2 className="section-title">Front-end Proficiencies </h2>
          <ul className="list-style">
            {/* map through front end technologies */}
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
            {/* map through back end technologies */}
            {backend.map((tech) => (
              <li className="list-item-style" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// export Resume function
export default Resume;
