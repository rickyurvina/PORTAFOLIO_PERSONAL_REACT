import React from "react";
import slam from "../../assets/blog_images/slam.png";
import nmpc from "../../assets/blog_images/nmpc.png";
import Blogcard from "./Blogcard";
import slamPdf from "../../assets/papers/slam.pdf";
import nmpcPdf from "../../assets/papers/nmpc.pdf";
const Blog = ({ theme }) => {
  const handleCardClick = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            blogImage={slam}
            blogHeading="Simultaneous location and mapping for control of an autonomous mobile robot using LiDAR point cloud scans and Machine Learning methods"
            blogPublishedDate="Sep, 2022 (Under Publication- Ingeneriare, Chile)"
            onClick={() => handleCardClick(nmpcPdf)}
          ></Blogcard>

          <Blogcard
            blogImage={nmpc}
            blogHeading="An Nonlinear Model Predictive Control Framework
            for Trajectory Planning of Skid-Steer Mobile
            Robots in Agricultural Environments"
            blogPublishedDate="July, 2023 (Under revision-  IEEE CONFERENCE ON AGRIFOOD ELECTRONICS - CAFE TORINO, SEPTEMBER 25-27)"
            onClick={() => handleCardClick(slamPdf)}
          ></Blogcard>

     
        </div>

        {/* <Link to="/blog" className="blog_link">
          See all articles<i className="ri-arrow-right-s-line"></i>
        </Link> */}
      </section>
    </>
  );
};

export default Blog;
