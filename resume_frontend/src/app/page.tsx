import Header from "./components/header";
import Section from "./components/section";

import { education } from "./text";

import educationImage from "../../public/calfootball.jpeg";
const educationProps = {
  title: "Education",
  subsections: education,
  image: educationImage,
};

export default function Home() {
  return (
    <main>
      <Header />
      <Section {...educationProps} side={false} />
    </main>
  );
}
