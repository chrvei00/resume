import React from "react";

//Styles
import "./subSection.css";

interface SubSectionProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const SubSection: React.FC<SubSectionProps> = ({
  title,
  company,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="subSection">
      <h3 className="title">{title}</h3>
      <p className="company">{company}</p>
      <p className="date">
        {startDate} - {endDate}
      </p>
      <p className="description">{description}</p>
    </div>
  );
};

export default SubSection;
