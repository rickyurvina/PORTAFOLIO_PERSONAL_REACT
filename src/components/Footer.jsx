import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = ({ theme }) => {

  // collecting inpuit email
  const [email, setEmail] = useState("");

  // set response from axios request
  const [response_msg, setResponse_msg] = useState(false);

  // change input value on change
  function manageEmailInput(e) {
    setEmail(String(e.target.value).toLowerCase());
  }

  // function for handling on submit 
  async function submitEmail(e) {

    // prevent default action
    e.preventDefault();

    // validate email
    let checkEmail = validator.isEmail(email);
    if (!checkEmail) {
      setEmail("");
      setResponse_msg("Please enter a valid email");
      setTimeout(() => {
        setResponse_msg(false);
      }, 5000);
    }

    try {
      const response = await axios.post("https://newsletter-subscription-app.onrender.com/getEmail", {
        email: email,
      });

      // if email stored succesfully in database
      if (response.data.success) {
        setEmail("");
        setResponse_msg(response.data.message);
        setTimeout(() => {
          setResponse_msg(false);
        }, 5000);
      }
      // if error accurs
      else {
        setEmail("");
        setResponse_msg(response.data.message);
        setTimeout(() => {
          setResponse_msg(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <footer className={`${theme === "dark" ? "dark" : "light"}`}>
      <hr />
      <div className="footer_bottom">
        <p className="author">© {new Date().getFullYear()} Ricardo Urvina Córdova</p>
        <div className="social_links">
          <Link to="https://github.com/rickyurvina">
            <i className="ri-github-fill"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/ricardo-urvina/">
            <i className="ri-linkedin-fill"></i>
          </Link>

          <Link to="https://hub.docker.com/u/rickyurvina">
            <i className="ri-cloud-fill"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
