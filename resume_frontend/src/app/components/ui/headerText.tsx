import React from "react";

//Styles
import "./headerText.css";

interface HeaderTextProps {
  title: string;
  subTitle: string;
  bread: string;
}
const HeaderText: React.FC<HeaderTextProps> = ({ title, subTitle, bread }) => {
  return (
    <div>
      <h1 className="headerTitle">{title}</h1>
      <h3 className="headerSubTitle">{subTitle}</h3>
      <h3 className="headerBread">{bread}</h3>
    </div>
  );
};

export default HeaderText;
