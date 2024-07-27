import React from "react";
import profilePic from "../../assets/profile_pic.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Heading = ({ theme }) => {
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div className="heading">
        <h1 className="heading_text">
          I'm <span>Ricardo Urvina</span>. I'm a PhD Student in Engineering Sciences in the area of Computer Sciences.
        </h1>
        <div className="devloper_img">
          <LazyLoadImage alt="ricardo urvina" effect="blur" src={profilePic} />
        </div>
      </div>
      {/* <div className="btn_group">
        <Link to="/blogs" className="blog_link">
          Read the blogs <i className="ri-arrow-right-s-line"></i>
        </Link>
        <Link to="/about" className="about_link">
          More about me <i className="ri-arrow-right-s-line"></i>
        </Link>
      </div> */}

      <h1 className="heading_end">∿∿∿</h1>
    </main>
  );
};

export default Heading;
