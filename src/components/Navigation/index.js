import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  useEffect(() => {
    document.title = capitalizeFirstLetter(props.currentPage);
  });

  return (
    <header className="d-flex flex-row">
      <h1> Adam Girard-McFadden</h1>
      <nav className="col-8 nav-cont">
        <ul className="d-flex flex-row justify-content-between nav-ul">
          {tabs.map((tab) => (
            <li className="nav-li" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-tab-active" : "nav-tab"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
