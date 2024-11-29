import React, { useEffect } from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import "../style/about-home.css";
import backImage from "../assets/about_images/backend.webp";
import frontImage from "../assets/about_images/frontend.webp";
import toolsImage from "../assets/about_images/tools.webp";
import visionImage from "../assets/about_images/vision.png";
import researchImage from "../assets/about_images/research.png";

const About = ({ theme }) => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <main className={`about-home ${theme === "dark" ? "dark" : "light"}`}>
        <Heading heading="about me" description="Here's my story." />
        <div className="description">
          <p className="about_me_description">
            I am Ricardo, an experienced software developer with a background in
            full-stack application development, currently in the first year of a
            PhD in Engineering Sciences. My research focuses on Human-Computer
            Interaction, aiming to improve the delivery of insulin pumps through
            real-time ingestion detection using non-invasive interfaces for
            users and AI for food detection. With a degree in Systems and
            Computer Engineering and a Master's in Computer Science, my
            experience encompasses the development and maintenance of robust
            systems, the creation of scalable web applications, and the
            implementation of innovative solutions. During my Master's in
            Computer Science, I researched autonomous navigation and harvesting
            with mobile robots. I am a dedicated and motivated professional,
            committed to delivering high-quality products and driving
            technological advancements.{" "}
          </p>

          <ul className="about_me_list">
            <li>
              🌱 I’m currently learning Human-Computer Interaction (HCI),
              Computer Vision, Machine Learning, Artificial Intelligence, and
              Deep Learning.
            </li>
            <li>
              💻 All of my projects are available at{" "}
              <Link to="/projects">rickyurvina/projects</Link>
            </li>
          
            <li>
            💬 Ask me about BackEnd, FrontEnd, Docker, Azure, Mobile Robotics, 
            Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision 
            (Image Processing, Object Detection, Deep Learning Models), 
            Research Tools (Mendeley, LaTeX, Overleaf, Academic Databases).
            </li>

            <li>
              💪 Review the detailed responsibilities of my roles in my jobs at{" "}
              {""}
              <Link to="/about">rickyurvina/about</Link>
            </li>
            <li>
              📫 How to reach me{" "}
              <a href="mailto:ricky_uc12@hotmail.com.com">
                ricky_uc12@hotmail.com or rurvinac@estudiante.uc.cl
              </a>
            </li>
          </ul>
        </div>

        <div className="skill">
          <section className="skill_flex-box-2">
            <div className="frontend_skill skill_type_box_2">
              <div className="education_and_experience">
                <h3 className="education_section_title">Education</h3>
                <p className="edu_description">
                  Here's a brief rundown of my education.
                </p>

                <div className="journey_graph">
                  <div className="graph">
                    <p className="title-1">
                      Pontificia Universidad Católica de Chile
                    </p>
                    <p className="title-2">
                      Student of Ph.D. in Engineering Sciences, Computer Science
                    </p>
                    <p className="title-3">Santiago - Chile</p>
                    <p className="title-4">March 2024 - Present</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">Universidad Católica del Norte</p>
                    <p className="title-2">
                      Master's Degree in Computer Science
                    </p>
                    <p className="title-3">Antofagasta - Chile</p>
                    <p className="title-4">March 2022 - March 2024</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">
                      Pontificia Universidad Católica del Ecuador
                    </p>
                    <p className="title-2">
                      Degree in Systems and Computer Engineering
                    </p>
                    <p className="title-4"> Sep 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frontend_skill skill_type_box-2">
              <div className="education_and_experience">
                <h3 className="education_section_title">Work Experience</h3>
                <p className="edu_description">
                  Here's a brief rundown of my most recent activities.
                </p>
                <div className="journey_graph">
                  <div className="graph">
                    <p className="title-1">
                      Pontificia Universidad Católica de Chile
                    </p>
                    <p className="title-2">Assistant Professor</p>
                    <p className="title-4"> July 2024-Present</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">DuocUC (San Bernardo)</p>
                    <p className="title-2">Assistant Professor</p>
                    <p className="title-4"> March 2024-August 2024</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">Universidad Católica del Norte</p>
                    <p className="title-2">Assistant Professor</p>
                    <p className="title-4"> March 2022-Jan 2024</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">Software Developer at Laverix</p>
                    <p className="title-2">Ecuador · Remote</p>
                    <p className="title-4">Feb 2021 - Jul 2023</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">
                      Software Developer at Proconty Solutions
                    </p>
                    <p className="title-2">Quito, Ecuador · Remote</p>
                    <p className="title-4">Ago 2020 - Dic 2021</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">
                      Web Developer at COTEDEM Solutions
                    </p>
                    <p className="title-2">Quito, Ecuador · Remote</p>
                    <p className="title-4">feb 2020 - Ago 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="skill">
          <h4 className="skill_heading">Skills</h4>

          <section className="skill_flex-box-2">
       

            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src={researchImage} 
                  alt="Research Skills"
                  width="40px"
                  height="40px"
                />{" "}
                Research Skills
              </h2>

              <div className="skill_data">
                <p className="skill_name">
                  Reference Management (Mendeley, Zotero)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "95%",
                      background: "linear-gradient(to right, #FF6D00, #FFAB00)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Document Preparation (LaTeX, Overleaf)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #1976D2, #64B5F6)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Academic Databases (PubMed, Scopus, Web of Science)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #673AB7, #9575CD)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Academic Writing & Editing</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "85%",
                      background: "linear-gradient(to right, #C2185B, #E91E63)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Research Programming (Python, R, MATLAB)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #FF9800, #FFC107)",
                    }}
                  ></div>
                </div>
              </div>
          
            </div>

            <div className="frontend_skill skill_type_box">
            <br /><br />

              <div className="skill_data">
                <p className="skill_name">
                  Systematic Literature Review (SLR Tools)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "85%",
                      background: "linear-gradient(to right, #388E3C, #81C784)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Research Data Management (Jupyter)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "85%",
                      background: "linear-gradient(to right, #00BCD4, #4DD0E1)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Visualization (Tableau, Matplotlib)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "75%",
                      background: "linear-gradient(to right, #E64A19, #FF7043)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Research Presentation 
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #3F51B5, #7986CB)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Collaboration Tools (Slack, Teams, Zoom)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #2196F3, #64B5F6)",
                    }}
                  ></div>
                </div>
              </div>

          
            </div>
            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src={visionImage}
                  alt="Computer Vision"
                  width="40px"
                  height="40px"
                />{" "}
                Computer Vision
              </h2>

              <div className="skill_data">
                <p className="skill_name">
                  Image Filtering (Smoothing, Sharpening)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #0D47A1, #1976D2)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Object Detection (SIFT, SURF, ORB)</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "75%",
                      background: "linear-gradient(to right, #1B5E20, #388E3C)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Machine Learning (SVM, PCA)</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "85%",
                      background: "linear-gradient(to right, #BF360C, #FF5722)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">
                  Deep Learning (CNN, Transfer Learning, YOLO, ResNet, ArcFace,
                  AdaFace, Unet, GAN, Transformers)
                </p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #01579B, #0288D1)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img src={backImage} alt="backend" width="40px" height="40px" />{" "}
                BACK-END
              </h2>

              <div className="skill_data">
                <p className="skill_name">Laravel-PHP</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, #FF2D20, #FF5A1F)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">NodeJs-ExpressJs</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "60%",
                      background: "linear-gradient(to right, #000000, #61DAFB)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Flask-Django-Python</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "75%",
                      background: "linear-gradient(to right, #0C4B33, #092E20)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">ASP.NET-C#</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "80%",
                      background: "linear-gradient(to right, #9400FF, #5D00FF)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src={frontImage}
                  alt="FRONT-END"
                  width="40px"
                  height="40px"
                />{" "}
                FRONT-END
              </h2>

              <div className="skill_data">
                <p className="skill_name">React JS & Native</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #61DAFB, #20232A)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Angular-JavaScript-TypeScript</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "85%",
                      background: "linear-gradient(to right, #DD0031, #C3002F)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">TailwindCss</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #06B6D4, #2563EB)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Vue.js</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #35495E, #42B883)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Android Studio</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #3DDC84, #282828)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src={toolsImage}
                  alt=" Tools & Technologies"
                  width="40px"
                  height="40px"
                />{" "}
                Tools & Technologies
              </h2>

              <div className="skill_data">
                <p className="skill_name">Azure</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "80%",
                      background: "linear-gradient(to right, #007FFF, #00BFFF)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Docker</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, #0DB7ED, #384D54)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Git</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, #F34F29, #D50000)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Postman</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, #FF6C37, #FFCA3A)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Jira</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, #0052CC, #2684FF)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">WordPress</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #21759B, #D54E21)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
