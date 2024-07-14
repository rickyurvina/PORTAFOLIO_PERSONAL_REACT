import React from "react";
import slam from "../../assets/blog_images/slam.png";
import nmpc from "../../assets/blog_images/nmpc.png";
import rrtMining from "../../assets/blog_images/rrtMining.png";
import nmpcInfornor from "../../assets/blog_images/nmpcinfornor.jpg";
import rrtHarvesting from "../../assets/blog_images/rrt_terrain.jpg";
import Blogcard from "./Blogcard";
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
          <Blogcard
              blogImage={rrtHarvesting}
              blogHeading="An Integrated Route and Path Planning Strategy for Skid-Steer Mobile Robots in Assisted Harvesting Tasks with Terrain Traversability Constraint"
              blogPublishedDate="July, 2024 Agriculture MDPI (under revision) Preprint available"
              onClick={() => handleCardClick("https://doi.org/10.20944/preprints202406.0326.v1")}
          ></Blogcard>
          <Blogcard
              blogImage={nmpc}
              blogHeading="An Nonlinear Model Predictive Control Framework for Trajectory Planning of Skid-Steer Mobile Robots in Agricultural Environments"
              blogPublishedDate="July, 2023 (IEEE CONFERENCE ON AGRIFOOD ELECTRONICS - CAFE TORINO, SEPTEMBER 25-27)"
              onClick={() => handleCardClick("https://ieeexplore.ieee.org/document/10291643")}
          ></Blogcard>
          <Blogcard
            blogImage={rrtMining}
            blogHeading="An RRT*-informed Q-learning strategy for path planning of unicycle-type mobile robots in open-pit mines"
            blogPublishedDate="Sep, 2023 (Revista Iberomaricana de Automátoca e Informática Industrial, Chile)"
            onClick={() => handleCardClick("https://infonorchile.cl/event/1218114/attachments/2616506/4679692/Abstracts_Papers_Aprobados.pdf")}
          ></Blogcard>
          <Blogcard
            blogImage={nmpcInfornor}
            blogHeading="Potential Field-Based Trajectory Planning using Nonlinear Model Predictive Controller for Obstacle Avoidance of Autonomous Mobile Robots"
            blogPublishedDate="Sep, 2023 (INFONOR, Chile)"
            onClick={() => handleCardClick("https://indico.cern.ch/event/1218114/contributions/5535449/contribution.pdf")}
          ></Blogcard>
          <Blogcard
              blogImage={slam}
              blogHeading="Simultaneous location and mapping for control of an autonomous mobile robot using LiDAR point cloud scans and Machine Learning methods"
              blogPublishedDate="Sep, 2022 (Ingeneriare, Chile)"
              onClick={() => handleCardClick("https://www.scielo.cl/pdf/ingeniare/v31/0718-3305-ingeniare-31-13.pdf")}
          ></Blogcard>

        </div>

        <Link to="https://orcid.org/0000-0001-8293-551X" target="_blank" className="blog_link">
        See all articles<i className="ri-arrow-right-s-line"></i>
        </Link>
      </section>
    </>
  );
};

export default Blog;
