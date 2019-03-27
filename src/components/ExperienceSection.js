import React from "react";
import ExperienceListItem from "./ExperienceListItem";
import SectionTitle from "./SectionTitle";
const ExperienceSection = props => (
  <div className = "experienceList">
    <SectionTitle title={props.title} />
    {props.data.map((elem, index) => (
      <ExperienceListItem key={index} {...elem} />
    ))}
  </div>
);

export default ExperienceSection;
