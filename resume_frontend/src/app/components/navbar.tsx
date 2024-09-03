import react from "react";

//Styles
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#home">Start</a>
        </li>
        <li>
          <a href="#about">Education</a>
        </li>
        <li>
          <a href="#about">Experience</a>
        </li>
        <li>
          <a href="#about">Technologies</a>
        </li>
        <li>
          <a href="#about">Projects</a>
        </li>
        <li>
          <a href="#about">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
