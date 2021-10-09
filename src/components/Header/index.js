// import all dependencies - React + {useState} and components/pages
import React, { useState } from "react";
import Nav from "../Navigation";
import Portfolio from "../../pages/Projects";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import ContactForm from "../../pages/Contact";

function Header() {
  // useState to set current page and handleChange
  const [currentPage, handlePageChange] = useState("About");
  // switch statement to render pages based on nav-tab clicked
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <div>
        <header>
          {/* useState for current page and handlepagechange */}
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      {/* handle page change */}
      {renderPage(currentPage)}
    </div>
  );
}

// export header function
export default Header;
