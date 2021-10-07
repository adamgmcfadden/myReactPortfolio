import React from "react";
import ProjectList from "../../pages/Portfolio";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Project(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}

export default Project;
