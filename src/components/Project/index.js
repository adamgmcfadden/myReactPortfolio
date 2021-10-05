import React from "react";
import ProjectList from "../../pages/Portfolio";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Project(props) {
  const { currentProject } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
      <ProjectList category={currentProject.name} />
    </section>
  );
}

export default Project;
