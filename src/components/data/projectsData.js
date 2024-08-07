// projectsData.js
import procredit from "../../assets/project_images/procredit.webp";
import portfolio from "../../assets/project_images/portfolio.webp";
import mintur from "../../assets/project_images/mintur.webp";
import chatdoc from "../../assets/project_images/chatdoc.webp";
import simulators from "../../assets/project_images/simulators.webp";
import api_web_q_a from "../../assets/project_images/api_web_q_a.webp";
import congope from "../../assets/project_images/congope.webp";
import workshop from "../../assets/project_images/workshop.webp";
import api_financiero from "../../assets/project_images/api_financiero.webp";
import notAvailable from "../../assets/project_images/not_available.webp";
import rrtHarvesting from "../../assets/blog_images/rrt_terrain.jpg"
import olespana from "../../assets/project_images/olespana.webp"

const projectsData = [
    {
        projectImage: olespana,
        projectTitle: "Web site for Olespaña restaurant located in Boston. This site was developed with Wordpress and Elementor.",
        projectDescription: "This project was developed with Wordpress and Elementor. The site has a menu section, a gallery, a contact form, and a reservation system. The site is fully responsive and has a modern design.",
        liveLinkUrl: "https://olespana.com/",
    },
    {
        projectImage: rrtHarvesting,
        projectTitle: "An Integrated Route and Path Planning Strategy for Skid-Steer Mobile Robots in Assisted Harvesting Tasks with Terrain Traversability Constraint",
        projectDescription: "This article presents a combined route and path planning strategy to guide Skid-Steer Mobile Robots (SSMRs) in scheduled harvest tasks within expansive crop rows with complex terrain conditions. The proposed strategy integrates: i) a global planning algorithm based on the Traveling Salesman Problem under the Capacitated Vehicle Routing approach and Optimization Routing (OR-tools from Google) to prioritize harvesting positions by minimum path length, unexplored harvest points, and vehicle payload capacity, and ii) a local planning strategy using Informed Rapidly-exploring Random Tree",
        githubLink: "https://github.com/rickyurvina/path_planning_python_coppelia"
    },
    {
        projectImage: notAvailable,
        projectTitle: "Planning System Ecuadorian Red Cross",
        projectDescription: "In collaboration with the Ecuadorian Red Cross, I spearheaded the development of a cutting-edge planning system that revolutionized operational efficiency. Powered by Laravel with Livewire, this dynamic application is seamlessly dockerized for effortless deployment through Azure's CI/CD pipeline. Boasting fortified security with Microsoft Single Sign-On (SSO), it guarantees confidential access for authorized personnel. The comprehensive suite encompasses three pivotal modules: Annual Operational Planning, Project Planning and Execution, and Budget Allocation. By consolidating these crucial components, we streamlined the entire planning process for the national Red Cross, ensuring optimal resource utilization and strategic decision-making.",
        githubLink: "https://github.com/rickyurvina/SISTEMAPLANIFICACION-CRUZROJA-LARAVEL1r",
    },
    {
        projectImage: portfolio,
        projectTitle: "Personal Portfolio Website",
        projectDescription: "Embark on an extraordinary journey through my personal portfolio, meticulously crafted using a powerful trio of technologies: React JS, Next JS, and Tailwind. This captivating website showcases the very best of my skills and achievements. With its seamless deployment on Azure and automated CI/CD pipelines, my portfolio shines effortlessly, leaving a lasting impression. This sensational application leverages the combined strength of React JS, Next JS, and Tailwind, resulting in a visually stunning and highly interactive user experience. The fluidity of React JS and Next JS, coupled with the rapid development capabilities of Tailwind, brings my portfolio to life in a captivating and efficient manner.",
        githubLink: "https://github.com/rickyurvina/PORTAFOLIO_PERSONAL_REACT",
    },
    {
        projectImage: congope,
        projectTitle: "Planning System Consortium of Provincial Governments of Ecuador",
        projectDescription: "In this groundbreaking project, I developed a state-of-the-art planning system that is set to transform the way governments operate. Leveraging the power of Laravel, jQuery, and JavaScript, I created an extraordinary application that surpasses expectations. With its seamless deployment on Azure using CI/CD pipelines, this dockerized application offers unparalleled convenience and efficiency. It is ingeniously designed as a multi-tenant solution, allowing multiple provincial governments to coexist on a single server, streamlining resource allocation and optimizing infrastructure utilization. Immerse yourself in a world of strategic planning with a comprehensive suite of modules I played a pivotal role in the implementation of the Azure architecture, ensuring a robust and scalable foundation for the application. By harnessing the power of Azure, we guarantee reliability, security, and seamless scalability for the entire system.",
        githubLink: "https://github.com/rickyurvina/GPRD2.0-LARAVEL.git"
    },
    {
        projectImage: api_financiero,
        projectTitle: "Financial API for Consortium of Provincial Governments of Ecuador",
        projectDescription: "In this game-changing project, I developed a cutting-edge Laravel API that revolutionizes financial management across the board. Say goodbye to the limitations of stored procedures and embrace a seamless connection with the database like never before. I created a robust and scalable API that handles the financial intricacies of the Consortium of Provincial Governments. This groundbreaking solution eliminates the complexities of traditional methods, enabling smooth data access and seamless integration with various systems within the consortium. With its dockerized implementation, this API delivers unmatched flexibility and portability. Seamlessly deployed and ready to be consumed from any system within the consortium, it empowers provincial governments to efficiently manage their financial processes.",
        githubLinkB: "https://github.com/rickyurvina/API-FINANCIERO-GPRD2-LARAVEL"
    },
    {
        projectImage: mintur,
        projectTitle: "Form system for the Ministry of Tourism",
        projectDescription: "",
        githubLinkF: "https://github.com/rickyurvina/FRONTEND-MINTURISMO",
        githubLinkB: "https://github.com/rickyurvina/BACKEND-MINTURISMO"
    },
    {
        projectImage: workshop,
        projectTitle: "Workshop Courses",
        projectDescription: "Project developed in .NET Core5 and Angular",
        githubLink: "https://github.com/rickyurvina/SISTEMAWORKSHOP-NET5-ANGULAR"
    },
    {
        projectImage: procredit,
        projectTitle: "Procredit Bank",
        projectDescription: "Project developed in WordPress",
        liveLinkUrl: "https://www.bancoprocredit.com.ec/",
        linkBtnText: "Visit Procredit Bank",
    },
    {
        projectImage: simulators,
        projectTitle: "Procredit Simulators",
        projectDescription: "Project developed in Laravel & Angular",
        liveLinkUrl: "https://bpsm.bancoprocredit.com.ec/creditoInversionPersonal",
        linkBtnText: "Visit Simulators",
        githubLinkF: "https://github.com/rickyurvina/FRONTEND-PROCREDIT-SIMULATORS-ANGULAR",
        githubLinkB: "https://github.com/rickyurvina/BACKEND-PROCREDIT-SIMULATORS-LARAVEL",
    },
    {
        projectImage: chatdoc,
        projectTitle: "Chat with your documents",
        projectDescription: "I develop a React application using Next.js that uses the OpenAI API, LangChaining, MongoDB and Pinecone. This application provides a unique platform for users to chat while viewing and manipulating documents. Users can create multiple topics to discuss and participate in real-time conversations. The application features seamless integration with Google OAuth for secure user authentication and stores chat logs in MongoDB associated with each user's email. One of the key features is the ability to upload multiple file types, including PDF, DOCX, and TXT formats, for each theme. These files are then converted to embeds and stored in a namespace within Pinecone. Users can easily access and retrieve these document embeds during their chat sessions, allowing for efficient document referencing and cheating. The application supports the creation of multiple chat windows for each topic, which facilitates organized and context-specific discussions. Users can effortlessly upload files, convert them to embeds, store them in Pinecone, and retrieve them in real time during their chat conversations. Additionally, integration with MongoDB ensures that chat histories are automatically saved and easily accessible for future reference.",
        githubLink: "https://github.com/rickyurvina/doc-chatbot"
    },
    {
        projectImage: api_web_q_a,
        projectTitle: "Chat with your Web Page-API",
        projectDescription: "WebQA-API offers a state-of-the-art Q&A endpoint for web pages. Processes incoming JSON post requests that contain data from the web page and user questions. The API initially starts by chunking the data on a web page and requesting OpenAI embeds. Obtained embeds and fragmented web page documents are temporarily stored in Chroma's embed database. The API takes as context an entry of embeddings that are generated with another openai api. With this API you can generate an intelligent chatbot with the integration of OpenAI models",
        githubLink: "https://github.com/rickyurvina/WEB-QA-API"
    },
    {
        projectImage: notAvailable,
        projectTitle: "EstoyFit-System Gym Client System",
        projectDescription: "Project developed React JS",
        githubLinkF: "https://github.com/rickyurvina/FRONTEND-ADMIN-ESTOYFIT-REACT",
        githubLinkB: "https://github.com/rickyurvina/BACKEND-ESTOYFIT-LARAVEL"
    },
    {
        projectImage: notAvailable,
        projectTitle: "EstoyFit-System Gym Administrator System",
        projectDescription: "Project developed React JS & Laravel",
        githubLinkF: "https://github.com/rickyurvina/FRONTEND-CLIENT-ESTOYFIT-REACT",
        githubLinkB: "https://github.com/rickyurvina/BACKEND-ESTOYFIT-LARAVEL",
    },
    {
        projectImage: notAvailable,
        projectTitle: "ID card system",
        projectDescription: "Project developed in Laravel",
        githubLink: "https://github.com/rickyurvina/SISTEMA-CARNETS-LARAVEL.git"
    },
];


export default projectsData;
