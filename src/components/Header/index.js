import React, { useState } from "react";
import Nav from "../Navigation";
import Portfolio from "../../pages/Portfolio";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import ContactForm from "../../pages/Contact";

function Header() {
  const [currentPage, handlePageChange] = useState("About");
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
        <header className="flex-row px-1">
          <h1> Adam Girard-McFadden</h1>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      {renderPage(currentPage)}
    </div>
  );

export default Header;
