import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topfixedimage from "./components/Topfixedimage";

import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";

import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import rayImage from "./assets/rays_bg.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#111827";
    } else {
      document.body.style.background = "#ffffff";
    }
  }, [theme]);

  return (
    <div className={`${theme ? "dark" : "light"} main_container`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Topfixedimage image={rayImage} />
        <Routes>
          <Route path="/" exact element={<Home theme={theme} />}></Route>
          <Route path="/about" exact element={<About theme={theme} />}></Route>
          <Route
            path="/projects"
            exact
            element={<Projects theme={theme} />}
          ></Route>
          {/* <Route path="/blogs" exact element={<Blogs theme={theme} />}></Route> */}

          {/* all blogs route */}
          {/* <Route
            path="/iife"
            exact
            element={<Iife theme={theme}></Iife>}
          ></Route>
          <Route
            path="/Excecontext"
            exact
            element={<Excecontext theme={theme} />}
          ></Route>
          <Route
            path="/hoisting"
            exact
            element={<Hoisting theme={theme} />}
          ></Route> */}
        </Routes>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
