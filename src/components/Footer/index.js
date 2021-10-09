// import dependencies -- React and react icons
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="col-12">
      <ul className="d-flex flex-row justify-content-center icon-cont">
        <li>
          {/* link to github */}
          <a className="icon-style" href="https://github.com/adamgmcfadden">
            {/* github icon import */}
            <FaGithub size="3em" />
          </a>
        </li>
        <li>
          <a
            className="icon-style"
            // link to linked in page
            href="https://www.linkedin.com/in/adam-mcfadden-70768b47"
          >
            {/* linked icon import */}
            <FaLinkedin size="3em" />
          </a>
        </li>
        <li>
          {/* link to my email address */}
          <a className="icon-style" href="mailto:adam_m_20@hotmail.com">
            {/* email icon import */}
            <FaEnvelope size="3em" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

// export footer function
export default Footer;
