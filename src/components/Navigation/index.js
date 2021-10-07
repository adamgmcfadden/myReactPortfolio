import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  useEffect(() => {
    document.title = capitalizeFirstLetter(props.currentPage);
  });

  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="  flex-row">
          {tabs.map((tab) => (
            <li className="mx-2" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link-active" : "nav-link"
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
