import React from "react";

function Footer() {
  return (
    <footer className="flex-row px-1">
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#github">
            <span>Github img</span>
          </a>
        </li>
        <li className="mx-2">
          <a href="#linkedIn">
            <span>LinkedIn img</span>
          </a>
        </li>
        <li className="mx-2">
          <a href="#email">
            <span>Email img</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
