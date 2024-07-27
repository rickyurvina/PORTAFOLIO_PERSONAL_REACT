import React from "react";
import slam from "../../assets/blog_images/slam.png";
import nmpc from "../../assets/blog_images/nmpc.png";
import rrtMining from "../../assets/blog_images/rrtMining.png";
import nmpcInfornor from "../../assets/blog_images/nmpcinfornor.jpg";
import rrtHarvesting from "../../assets/blog_images/rrt_terrain.jpg";
import PaperCard from "./PaperCard.jsx";
import { Link } from "react-router-dom";

const Blog = ({ theme }) => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <section
        className={`${theme === "dark" ? "dark" : "light"} blog_section`}
      >
        <h1>I love to share my knowledge through writing.</h1>
        <h3>Check out a few of my recent publishings.</h3>

        <div className="blogs_container">
          <PaperCard
              paperImage={rrtHarvesting}
              paperHeading="An Integrated Route and Path Planning Strategy for Skid-Steer Mobile Robots in Assisted Harvesting Tasks with Terrain Traversability Constraint"
              paperPublishedDate="July, 2024 Agriculture MDPI"
              paperDOI={"https://doi.org/10.3390/agriculture14081206"}
              onClick={() => handleCardClick("https://doi.org/10.3390/agriculture14081206")}
          ></PaperCard>
          <PaperCard
              paperImage={nmpc}
              paperHeading="An Nonlinear Model Predictive Control Framework for Trajectory Planning of Skid-Steer Mobile Robots in Agricultural Environments"
              paperPublishedDate="July, 2023 IEEE CONFERENCE ON AGRIFOOD ELECTRONICS - CAFE TORINO, SEPTEMBER 25-27"
              paperDOI={"https://doi.org/10.1109/CAFE58535.2023.10291643"}
              onClick={() => handleCardClick("https://doi.org/10.1109/CAFE58535.2023.10291643")}
          ></PaperCard>
          <PaperCard
            paperImage={rrtMining}
            paperHeading="An RRT*-informed Q-learning strategy for path planning of unicycle-type mobile robots in open-pit mines"
            paperPublishedDate="Sep, 2023 Revista Iberomaricana de Automátoca e Informática Industrial"
            paperDOI={"https://doi.org/10.4995/riai.2024.21581"}
            onClick={() => handleCardClick("https://doi.org/10.4995/riai.2024.21581")}
          ></PaperCard>
          <PaperCard
            paperImage={nmpcInfornor}
            paperHeading="Potential Field-Based Trajectory Planning using Nonlinear Model Predictive Controller for Obstacle Avoidance of Autonomous Mobile Robots"
            paperPublishedDate="Sep, 2023 INFONOR, Chile"
            onClick={() => handleCardClick("https://indico.cern.ch/event/1218114/contributions/5535449/contribution.pdf")}
          ></PaperCard>
          <PaperCard
              paperImage={slam}
              paperHeading="Simultaneous location and mapping for control of an autonomous mobile robot using LiDAR point cloud scans and Machine Learning methods"
              paperPublishedDate="Aug, 2023 Ingeneriare. Revista chilena de Ingeniería"
              paperDOI={"http://dx.doi.org/10.4067/s0718-33052023000100213"}
              onClick={() => handleCardClick("http://dx.doi.org/10.4067/s0718-33052023000100213")}
          ></PaperCard>

        </div>

        <Link to="https://orcid.org/0000-0001-8293-551X" target="_blank" className="blog_link">
        See all articles<i className="ri-arrow-right-s-line"></i>
        </Link>
      </section>
    </>
  );
};

export default Blog;
