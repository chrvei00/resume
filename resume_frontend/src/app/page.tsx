"use client";
import React, { useRef } from "react";

//Components
import Navbar from "./components/navbar";
import Header from "./components/header";
import Section from "./components/section";
import Technologies from "./components/technologies";
import Projects from "./components/projects";
import Contact from "./components/contact";

//Text and images
import { education, experience, technologies, projects } from "./text";
import educationImage from "../../public/calfootball.jpeg";
import experienceImage from "../../public/besseggen.jpeg";
export interface NavLink {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
  title: string;
  index: number;
}

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
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const navLinks: NavLink[] = [
    { id: "education", ref: educationRef, title: "Education", index: 0 },
    { id: "experience", ref: experienceRef, title: "Experience", index: 1 },
    {
      id: "technologies",
      ref: technologiesRef,
      title: "Technologies",
      index: 2,
    },
    { id: "projects", ref: projectsRef, title: "Projects", index: 3 },
    { id: "contact", ref: contactRef, title: "Contact", index: 4 },
  ];

  return (
    <main className="main">
      <Header />
      <Navbar navLinks={navLinks} />
      <div id="education" ref={educationRef} />
      <Section {...educationProps} side={false} />
      <div id="experience" ref={experienceRef} />
      <Section {...experienceProps} side={true} />
      <div id="technologies" ref={technologiesRef} />
      <Technologies technologies={technologies} />
      <div id="projects" ref={projectsRef} />
      <Projects projects={projects} />
      <div id="contact" ref={contactRef} />
      <Contact />
    </main>
  );
}
