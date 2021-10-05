import React, { useState } from "react";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./components/Project";
// import ContactForm from "./components/Contact";

function App() {
  // set up for future portfolio expansion
  const [projects] = useState([
    {
      name: "portfolio",
      description:
        "List of all projects completed by myself or with a team of web developing students",
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);
  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Project currentProject={currentProject}></Project>

      <Footer></Footer>
    </div>
  );
}

export default App;
