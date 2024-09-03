import React from "react";

//Styles
import "./header.css";

//Components
import HeaderText from "./ui/headerText";
import { header } from "../text";

//Images
import climbing from "../../../public/climbing.jpeg";
import Image from "next/image";
import arrowDown from "../../../public/icons/arrowDown.svg";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <Image src={climbing} alt="photo" width={250} className="headerImage" />
        <div className="headerTextDiv">
          <HeaderText
            title={header.headerTitle}
            subTitle={header.headerSubTitle}
            bread={header.headerBread}
          />
          <button className="font-bold py-2 px-4 border-b-4 rounded startButton">
            Begin
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
