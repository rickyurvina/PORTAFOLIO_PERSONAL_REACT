import React, {useEffect} from "react";
import Heading from "./Heading";
import {Link} from "react-router-dom";
import "../style/about.css";
import misImage from "../assets/about_images/miss.webp"
import databaseImage from "../assets/about_images/database.webp"

const About = ({theme}) => {
    // code for scroll top on component render
    (() => {
        window.scrollTo(0, 0);
    })();

    return (
        <>
            <main className={`about ${theme === "dark" ? "dark" : "light"}`}>
                <Heading heading="about me" description="Detailed description of my work experience."/>

                <div className="education_and_experience">
                    <h3 className="education_section_title">
                        Work Experience
                    </h3>

                    <div className="journey_graph">
                        <div className="graph">
                            <p className="title-1">
                                DuocUC (San Bernardo)
                            </p>
                            <p className="title-2">
                                Assistant Professor
                            </p>
                            <p className="title-4"> March 2024-Present</p>
                            <p className="desc">
                                I specialize in teaching Software Engineering and Platforms Integration.
                                <br/>
                            </p>
                        </div>
                        <div className="graph">
                            <p className="title-1">
                                Universidad Católica del Norte
                            </p>
                            <p className="title-2">
                                Adjunct Professor
                            </p>
                            <p className="title-4"> March 2022-Jan 2024</p>
                            <p className="desc">
                              I specialize in teaching Cloud Computing, Mobile Solutions Development, Introduction to
                              Web and Mobile Development, and Platform-Based Development Projects. My practical
                              approach equips students with the skills to create scalable solutions, high-quality
                              mobile and web applications, and commercially viable projects. I guide them in achieving
                              excellence, continuously improving my teaching techniques.
                                <br/>
                            </p>
                        </div>
                        <div className="graph">
                            <p className="title-1">Software Developer at Laverix</p>
                            <p className="title-2">Quito, Ecuador, Chile · Remote</p>
                            <p className="title-4">Feb 2021 - Jul 2023</p>
                            <p className="desc">
                                In my role, I took responsibility for updating and maintaining an existing project
                                planning and
                                management system developed in Laravel, JavaScript, and jQuery. Throughout the
                                development of this
                                project, I provided continuous support to the system, delivering software development,
                                Laravel, Git, and
                                Docker training to the client's technical team.

                                Subsequently, I led a team of 4 people in a project where we developed a project
                                planning and budgeting
                                system from scratch using Laravel and Livewire. This system was integrated with various
                                other systems
                                and lasted approximately 2 years. It was hosted on an Azure architecture, where I
                                implemented a
                                continuous integration and development system using Azure DevOps and Docker.

                                One of my notable achievements was the creation of an information collection system
                                using Angular,
                                Laravel, and MySQL, which involved developing forms and containers using Docker for easy
                                implementation
                                and scalability. Additionally, in the latest project, I developed an API using Flask to
                                connect with the
                                OpenAI API, utilizing embedding techniques to extract relevant information from web
                                pages and provide
                                responses to specific questions using the OpenAI text completion feature.

                                Lastly, during my tenure at Laverix, I obtained the Azure Administrator certification,
                                enabling me to
                                design and implement a cloud architecture for one of our clients, optimizing their
                                operations and
                                ensuring greater efficiency.
                                <br/>
                            </p>
                        </div>

                        <div className="graph">
                            <p className="title-1">Software Developer at Proconty Solutions</p>
                            <p className="title-4">Ago 2020 - Dic 2021</p>
                            <p className="desc">
                                I had the opportunity to work as a Full Stack Web Developer in an exciting professional
                                environment.
                                During my tenure in this role, I engaged in a wide range of activities that allowed me
                                to apply my
                                skills and knowledge in various technologies.

                                My primary focus was on the development and maintenance of systems using .NET, actively
                                participating in
                                the creation of robust web applications. Additionally, I had the chance to work with
                                popular web
                                technologies such as React JS, Laravel, Angular, PHP, and WordPress, delivering dynamic
                                and
                                high-performance software solutions.

                                One of my key responsibilities involved the administration of SQL databases, where I
                                generated scripts
                                and carried out automated deployments using Azure WebServices through Azure DevOps and
                                Pipelines.
                                Furthermore, I performed automated deployments on AWS virtual machines using Laravel for
                                the backend,
                                and on AWS web services for Angular and React systems.

                                Moreover, I undertook the management and operation of Microsoft Azure web services for
                                the company's
                                services, ensuring their smooth operation and optimizing performance. During this time,
                                I also
                                implemented the DevOps philosophy, promoting collaboration between development and
                                operations teams to
                                achieve faster and more efficient project delivery.

                                My experience in this role allowed me to demonstrate my ability to work in dynamic and
                                demanding
                                environments, delivering high-quality software solutions. I take pride in contributing
                                to the
                                development of innovative and scalable systems while adhering to best practices
                                throughout the software
                                development lifecycle.
                            </p>
                        </div>
                        <div className="graph">
                            <p className="title-1">Web Developer at COTEDEM Solutions</p>
                            <p className="title-4">Feb 2020 - Ago 2020</p>
                            <p className="desc">
                                I was responsible for the development of systems using PHP, Laravel, and WordPress. I
                                collaborated with
                                the development team to create scalable and efficient solutions that met the
                                requirements of the
                                organization and its clients.

                                Using PHP, I leveraged my knowledge of this server-side scripting language to build
                                dynamic and
                                interactive web applications. I worked with Laravel, a powerful PHP framework, to
                                develop robust backend
                                systems, ensuring the security and performance of the applications. Additionally, I
                                utilized WordPress,
                                a popular content management system, to create customized websites and provide
                                easy-to-use interfaces
                                for clients.

                                Throughout my role, I actively participated in the entire software development
                                lifecycle, from gathering
                                requirements and designing system architecture to implementing and testing the
                                solutions. I worked
                                closely with senior developers, learning best practices and following coding standards
                                to deliver
                                high-quality code.

                                Moreover, I gained experience in database management, utilizing MySQL and other
                                relational database
                                systems to store and retrieve data efficiently. I implemented database queries and
                                optimized database
                                performance to ensure the smooth operation of the systems.

                                During my tenure, I also had the opportunity to work on troubleshooting and debugging
                                tasks, identifying
                                and resolving issues to ensure the stability and reliability of the developed systems.

                                By collaborating with the development team, I gained insights into Agile development
                                methodologies and
                                the importance of teamwork and effective communication in delivering successful
                                projects. I actively
                                contributed to code reviews and participated in brainstorming sessions, fostering a
                                collaborative
                                environment focused on continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    <h4 className="skill_heading">Other Skills</h4>

                    <section className="skill_flex-box">

                        <div className="frontend_skill skill_type_box">
                            <h2 className="skill_heading">
                                <img
                                    src={misImage}
                                    alt="Miscellaneous"
                                    width="40px"
                                    height="40px"
                                />{" "}
                                Miscellaneous
                            </h2>

                            <div className="skill_data">
                                <p className="skill_name">BitBucket-GitHub</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "100%",
                                            background: "linear-gradient(90deg,#136fc3, #76ef66)",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="skill_data">
                                <p className="skill_name">Linux</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "60%",
                                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="skill_data">
                                <p className="skill_name">Coppelia VREP</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "82%",
                                            background: "linear-gradient(to right, #1aa37a,#9dffb3)",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="skill_data">
                                <p className="skill_name">Matlab</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "65%",
                                            background: "linear-gradient(90deg,#136fc3, #76ef66)",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="skill_data">
                                <p className="skill_name">R and R Studio</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "65%",
                                            background: "linear-gradient(90deg,#136fc3, #76ef66)",
                                        }}
                                    ></div>
                                </div>
                            </div>


                            <div className="skill_data">
                                <p className="skill_name">Scrum</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "100%",
                                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                                        }}
                                    ></div>
                                </div>
                            </div>


                        </div>

                        <div className="frontend_skill skill_type_box">
                            <h2 className="skill_heading">
                                <img
                                    src={databaseImage}
                                    alt="Databases"
                                    width="40px"
                                    height="40px"
                                />{" "}
                                Databases
                            </h2>

                            <div className="skill_data">
                                <p className="skill_name">MySQL</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "100%",
                                            background: "linear-gradient(to right, #1aa37a,#9dffb3)",
                                        }}
                                    ></div>
                                </div>
                            </div>


                            <div className="skill_data">
                                <p className="skill_name">PostgreSQL</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "85%",
                                            background: "linear-gradient(90deg,#136fc3, #76ef66)",
                                        }}
                                    ></div>
                                </div>
                            </div>


                            <div className="skill_data">
                                <p className="skill_name">SQLServer</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "70%",
                                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                                        }}
                                    ></div>
                                </div>
                            </div>


                            <div className="skill_data">
                                <p className="skill_name">MongoDb</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "55%",
                                            background: "linear-gradient(to right, #1aa37a,#9dffb3)",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="skill_data">
                                <p className="skill_name">Firebase Stack</p>
                                <div className="progress">
                                    <div
                                        className="progress-value"
                                        style={{
                                            width: "55%",
                                            background: "linear-gradient(to right, #1aa37a,#9dffb3)",
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
