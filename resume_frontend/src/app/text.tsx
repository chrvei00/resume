// Header
const headerTitle = "Christian Veiby";
const headerSubTitle = "Data Science & Artificial Intelligence";
const headerBread = "NTNU, Norway";

export const header = {
  headerTitle,
  headerSubTitle,
  headerBread,
};

// Education
const educationBerkeley = {
  title: "Exchange - Data Science",
  company: "UC Berkeley",
  startDate: "August 2024",
  endDate: "(december 2024)",
  description:
    "Exchange semester at UC Berkeley in California. I took courses in machine learning, cognitive science and user experience design.",
};

const educationNTNU = {
  title: "Data Science & Artificial Intelligence",
  company: "NTNU",
  startDate: "August 2021",
  endDate: "(june 2026)",
  description:
    "My current studies are in data science and artificial intelligence at NTNU Trondheim in Norway.",
};

const educationUIT = {
  title: "Business economics",
  company: "UIT",
  startDate: "August 2019",
  endDate: "June 2021",
  description:
    "I studied business economics at UIT Alta in Norway. This is a one year study split up by a one year military service which started january 2020.",
};

export const education = [educationBerkeley, educationNTNU, educationUIT];

// Experience

const experienceECIT = {
  title: "Consultant at Axan Invest AS",
  company: "ECIT",
  startDate: "Januar 2022",
  endDate: "July 2022",
  description:
    "As a consultant at ECIT, placed with the investment company Axan Invest AS, I was responsible for preparing and analyzing parts of the financial statements using PowerOffice. In this role, I worked independently, which allowed me to develop my skills by taking on challenging tasks, often in areas where I had limited prior knowledge. I received valuable support and guidance from my manager, Birgitte Kristiansen.",
};

const experienceNTNU = {
  title: "Learning Assistant - Object Oriented Programming",
  company: "NTNU",
  startDate: "Januar 2023",
  endDate: "June 2024",
  description: "",
};

const experienceBankkom = {
  title: "Vice Leader",
  company: "Bankkom - Abakus Student Organization",
  startDate: "August 2022",
  endDate: "June 2024",
  description: "",
};

const experienceNTNUIGolf = {
  title: "Board Member - Economy",
  company: "NTNUI Golf",
  startDate: "February 2023",
  endDate: "February 2024",
  description: "",
};

export const experience = [
  experienceECIT,
  experienceNTNU,
  experienceBankkom,
  experienceNTNUIGolf,
];

// Technologies

// Technology icons
import javaIcon from "../../public/icons/java.svg";
import reactIcon from "../../public/icons/react.svg";
import pythonIcon from "../../public/icons/python.svg";
import gitHubIcon from "../../public/icons/github.svg";
import dockerIcon from "../../public/icons/docker.svg";
import htmlIcon from "../../public/icons/html.svg";
import cssIcon from "../../public/icons/css.svg";
import javaScriptIcon from "../../public/icons/javascript.svg";
import excelIcon from "../../public/icons/excel.svg";

const technologyJava = {
  name: "Java",
  image: javaIcon,
};

const technologyReact = {
  name: "React",
  image: reactIcon,
};

const technologyPython = {
  name: "Python",
  image: pythonIcon,
};

const technologyGitHub = {
  name: "GitHub",
  image: gitHubIcon,
};

const technologyDocker = {
  name: "Docker",
  image: dockerIcon,
};

const technologyHTML = {
  name: "HTML",
  image: htmlIcon,
};

const technologyCSS = {
  name: "CSS",
  image: cssIcon,
};

const technologyJavaScript = {
  name: "JavaScript",
  image: javaScriptIcon,
};

const technologyExcel = {
  name: "Excel",
  image: excelIcon,
};

export const technologies = [
  technologyJava,
  technologyReact,
  technologyPython,
  technologyGitHub,
  technologyDocker,
  technologyHTML,
  technologyCSS,
  technologyJavaScript,
  technologyExcel,
];

//Projects
import { project } from "./components/projects";

export const projects: project[] = [];
