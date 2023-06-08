import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projectcard = ({
  projectImage,
  projectTitle,
  projectDescription,
  liveLinkUrl,
  linkBtnText,
  githubLink,
  githubLinkF,
  githubLinkB
}) => {
  return (
    <>
      <div className="project_card">
        <div className="project_image">
          <LazyLoadImage alt={projectTitle} effect="blur" src={projectImage} />
        </div>
        <div className="project_text_content" data-aos="zoom-in">
          <h2 className="project_title">{projectTitle}</h2>
          <p className="project_description">{projectDescription}</p>
          <div className="btn_group">
            {liveLinkUrl == null ? (
              null
            ) : (
              <a href={liveLinkUrl} target="_blank" className="live_link">
                <i className="remix-icon ri-external-link-line"></i> {linkBtnText}
              </a>
            )}

            {githubLink == null ? (
              null
            ) : (
              <a href={githubLink} target="_blank" className="live_link">
                <i className="remix-icon ri-github-fill"></i> Source code
              </a>
            )}

            {githubLinkF == null ? (
              null
            ) : (
              <a href={githubLinkF} target="_blank" className="live_link">
                <i className="remix-icon ri-github-fill"></i> Frontend
              </a>
            )}

            {githubLinkB == null ? (
              null
            ) : (
              <a href={githubLinkB} target="_blank" className="live_link">
                <i className="remix-icon ri-github-fill"></i> Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectcard;
