"use client";

import { useState, useEffect } from "react";

//Styles
import "./navbar.css";
import { NavLink } from "../page";
import { nearestIndex } from "./ui/scrollHiglightNavbar";

interface navbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<navbarProps> = ({ navLinks }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const startIndex = 0;
      const endIndex = navLinks.length - 1;
      const index = nearestIndex(
        currentPosition,
        startIndex,
        endIndex,
        navLinks,
        window.innerHeight
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  return (
    <div className="navbar">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={link.index == activeIndex ? "active " : ""}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
