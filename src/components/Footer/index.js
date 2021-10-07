import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="col-12">
      <ul className="d-flex flex-row justify-content-center icon-cont">
        <li>
          <a className="icon-style" href="https://github.com/adamgmcfadden">
            <FaGithub size="3em" />
          </a>
        </li>
        <li>
          <a
            className="icon-style"
            href="https://www.linkedin.com/in/adam-mcfadden-70768b47"
          >
            <FaLinkedin size="3em" />
          </a>
        </li>
        <li>
          <a className="icon-style" href="mailto:adam_m_20@hotmail.com">
            <FaEnvelope size="3em" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
