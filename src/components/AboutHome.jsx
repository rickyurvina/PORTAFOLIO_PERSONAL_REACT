import React, { useEffect } from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import "../style/about-home.css";
import backImage from "../assets/about_images/backend.webp"
import frontImage from "../assets/about_images/frontend.webp"
import toolsImage from "../assets/about_images/tools.webp"

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
            I’m Ricardo Urvina,a passionate and experienced software developer with a
            strong background in full-stack development. With a degree in Systems and Computer Engineering,
            My experience encompasses developing and maintaining robust systems, creating scalable web applications,
            and implementing innovative solutions. I am skilled in cloud infrastructure deployment and management,
            utilizing Microsoft Azure and AWS. Additionally, my proficiency extends to database administration,
            API integration, and DevOps practices. I am a dedicated and motivated professional,
            committed to delivering high-quality code and driving technological advancements.
            With a strong aptitude for problem-solving and a collaborative mindset.
          </p>

          <ul className="about_me_list">
            <li>
              🌱 I’m currently learning OpenAI, LangChain, MongoDB, NodeJs and NextJs
            </li>
            <li>
              💻 All of my projects are available at{" "}
              <Link to="/projects">rickyurvina/projects</Link>
            </li>
            <li>💬 Ask me about BackEnd , FrontEnd , Docker, Azure</li>
            <li>💪  Review the detailed responsibilities of my roles in my jobs at {""}
              <Link to="/about">rickyurvina/about</Link>
            </li>
            <li>
              📫 How to reach me{" "}
              <a href="mailto:ricky_uc12@hotmail.com.com">ricky_uc12@hotmail.com</a>
            </li>
            {/* <li>
              ⚡ Fun fact By Profesion I am a Web Developer but by Passion I am
              an Academic
            </li> */}
          </ul>

        </div>

        <div className="skill">
          <section className="skill_flex-box-2">
            <div className="frontend_skill skill_type_box_2">
              <div className="education_and_experience">
                <h3 className="education_section_title">
                  Education
                </h3>
                <p className="edu_description">
                  Here's a brief rundown of my education.
                </p>

                <div className="journey_graph">
                  
                <div className="graph">
                    <p className="title-1">Universidad Católica del Norte</p>
                    <p className="title-2">Master's Degree in Computer Science</p>
                    <p className="title-3">Antofagasta - Chile</p>
                    <p className="title-4">March 2022 - Present</p>
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
                <h3 className="education_section_title">
                  Work Experience
                </h3>
                <p className="edu_description">
                  Here's a brief rundown of my most recent activities.
                </p>

                <div className="journey_graph">
                  <div className="graph">
                    <p className="title-1">
                      Universidad Católica del Norte
                    </p>
                    <p className="title-2">
                      Adjunct Professor
                    </p>
                    <p className="title-4"> March 2022-Present</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">Software Developer at Laverix</p>
                    <p className="title-2">Quito, Ecuador, Chile · Remote</p>
                    <p className="title-4">Feb 2021 - May 2023</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">Software Developer at Proconty Solutions</p>
                    <p className="title-4">Ago 2020 - Dic 2021</p>
                  </div>
                  <div className="graph">
                    <p className="title-1">Web Developer at COTEDEM Solutions</p>
                    <p className="title-4">feb 2020 - Ago 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="skill">
          <h4 className="skill_heading">Skills</h4>

          <section className="skill_flex-box-3">

            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src={backImage}
                  alt="backend"
                  width="40px"
                  height="40px"
                />{" "}
                BACK-END
              </h2>

              <div className="skill_data">
                <p className="skill_name">Laravel-PHP</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, #FF2D20, #FF5A1F)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">ExpressJs</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "60%",
                      background: "linear-gradient(to right, #000000, #61DAFB)"
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
                      background: "linear-gradient(to right, #0C4B33, #092E20)"
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
                      background: "linear-gradient(to right, #9400FF, #5D00FF)"
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
                      background: "linear-gradient(to right, #61DAFB, #20232A)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Angular-JavaScript</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "85%",
                      background: "linear-gradient(to right, #DD0031, #C3002F)"
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
                      background: "linear-gradient(to right, #06B6D4, #2563EB)"
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
                      background: "linear-gradient(to right, #007FFF, #00BFFF)"
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
                      background: "linear-gradient(to right, #0DB7ED, #384D54)"
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
                      background: "linear-gradient(to right, #F34F29, #D50000)"
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
                      background: "linear-gradient(to right, #FF6C37, #FFCA3A)"
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
                      background: "linear-gradient(to right, #0052CC, #2684FF)"
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
                      background: "linear-gradient(to right, #21759B, #D54E21)"
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
