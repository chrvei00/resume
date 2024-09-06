import React from "react";

//Components
import HeaderText from "./ui/headerText";
import SubSection from "./subSection";

//Styles
import "./section.css";
import Image from "next/image";

interface SectionProps {
  title: string;
  subsections: SubSectionObject[];
  image: any;
  side: boolean;
}

interface SubSectionObject {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subsections,
  image,
  side,
}) => {
  side = side ? true : false;
  return (
    <>
      <div className="section">
        {side ? (
          <Image src={image} alt="photo" width={250} className="sectionImage" />
        ) : null}
        <div className="sectionTextDiv">
          <HeaderText title={title} subTitle="" bread="" />
          {subsections.map((subSectionElement) => (
            <SubSection
              {...subSectionElement}
              key={subSectionElement.company}
            />
          ))}
        </div>
        {side ? null : (
          <Image src={image} alt="photo" width={250} className="sectionImage" />
        )}
      </div>
    </>
  );
};

export default Section;
