import React from "react";
import EducationListItem from "./EducationListItem";

const EducationList = props => (
  <div className="educationlist">
    <h1 className="about-title">Education</h1>
    <hr className="about-title-line" />
    {props.education.map((elem, index) => (
      <EducationListItem key={index} data={elem} />
    ))}
  </div>
);

export default EducationList;
