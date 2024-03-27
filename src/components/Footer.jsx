import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = ({ theme }) => {

  return (
      <footer className={`${theme === "dark" ? "dark" : "light"}`}>
        <hr/>
        <div className="footer_bottom">
          <p className="author">© {new Date().getFullYear()} Ricardo Urvina Córdova</p>
          <div className="social_links">
            <Link to="https://github.com/rickyurvina" target="_blank">
              <i className="ri-github-fill"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/ricardo-urvina/" target="_blank">
              <i className="ri-linkedin-fill"></i>
            </Link>
            <Link to="https://hub.docker.com/u/rickyurvina" target="_blank">
              <i className="ri-cloud-fill"></i>
            </Link>
            <Link to="https://orcid.org/0000-0001-8293-551X" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91c0-41.64-26.54-76.9-84.67-76.9M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57a19.64 19.64 0 0 1-19.57 19.57M300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
