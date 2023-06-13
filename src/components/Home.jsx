import React from "react";
import "../style/home.css";
import Blog from "./home/Blog";
import Heading from "./home/Heading";
import AboutHome from "./AboutHome";

const Home = ({ theme }) => {
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Heading theme={theme} />
      <AboutHome theme={theme} />
      <Blog theme={theme} />

    </div>
  );
};

export default Home;
