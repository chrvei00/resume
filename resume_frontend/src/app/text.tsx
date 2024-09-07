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
  title: "Education",
  company: "UC Berkeley",
  startDate: "August 2018",
  endDate: "May 2022",
  description:
    "I am currently a senior at UC Berkeley studying computer science. I have taken courses in data structures, algorithms, and software engineering. I have also taken courses in machine learning and artificial intelligence.",
};

const educationNTNU = {
  title: "Education",
  company: "NTNU",
  startDate: "August 2016",
  endDate: "May 2018",
  description:
    "I studied computer science at NTNU in Norway. I took courses in algorithms, data structures, and software engineering.",
};

const educationUIT = {
  title: "Education",
  company: "UIT",
  startDate: "August 2014",
  endDate: "May 2016",
  description:
    "I studied computer science at UIT in Norway. I took courses in algorithms, data structures, and software engineering.",
};

export const education = [educationBerkeley, educationNTNU, educationUIT];

// Experience

const experienceECIT = {
  title: "Experience",
  company: "ECIT",
  startDate: "August 2020",
  endDate: "May 2021",
  description:
    "I worked as a software engineer at ECIT in Norway. I worked on a team that developed software for the oil and gas industry.",
};

const experienceNTNU = {
  title: "Experience",
  company: "NTNU",
  startDate: "August 2019",
  endDate: "May 2020",
  description:
    "I worked as a research assistant at NTNU in Norway. I worked on a team that developed machine learning algorithms for medical imaging.",
};

const experienceBankkom = {
  title: "Experience",
  company: "Bankkom",
  startDate: "August 2018",
  endDate: "May 2019",
  description:
    "I worked as a software engineer at Bankkom in Norway. I worked on a team that developed software for the banking industry.",
};

const experienceNTNUIGolf = {
  title: "Experience",
  company: "NTNUIGolf",
  startDate: "August 2017",
  endDate: "May 2018",
  description:
    "I worked as a software engineer at NTNUIGolf in Norway. I worked on a team that developed software for the golf industry.",
};

export const experience = [
  experienceECIT,
  experienceNTNU,
  experienceBankkom,
  experienceNTNUIGolf,
];

// Technologies
const technologyJava = {
  name: "Java",
  image: null,
};

const technologyReact = {
  name: "React",
  image: null,
};

export const technologies = [technologyJava, technologyReact];
