import Header from "./components/header";
import Section from "./components/section";
import Technologies from "./components/technologies";
import Contact from "./components/contact";

//Text and images
import { education, experience, technologies } from "./text";
import educationImage from "../../public/calfootball.jpeg";
import experienceImage from "../../public/besseggen.jpeg";

const educationProps = {
  title: "Education",
  subsections: education,
  image: educationImage,
};

const experienceProps = {
  title: "Experience",
  subsections: experience,
  image: experienceImage,
};

export default function Home() {
  return (
    <main>
      <Header />
      <div id="education" />
      <Section {...educationProps} side={false} />
      <Section {...experienceProps} side={true} />
      <Technologies technologies={technologies} />
      <Contact />
    </main>
  );
}
