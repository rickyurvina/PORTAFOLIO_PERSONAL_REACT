import React from "react";
import "../style/home.css";
import Blog from "./home/Blog";
import Heading from "./home/Heading";
import NewsLetter from "./home/NewsLetter";
import AboutHome from "./AboutHome";

const Home = ({ theme }) => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Heading theme={theme} />
      {/* <Blog theme={theme} /> */}
      {/* <NewsLetter theme={theme} /> */}
      <AboutHome theme={theme} />
    </div>
  );
};

export default Home;
