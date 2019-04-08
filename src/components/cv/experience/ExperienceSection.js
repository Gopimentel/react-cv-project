import React from "react";
import ExperienceListItem from "./ExperienceListItem";
import Title from "../utils/Title";
const ExperienceSection = props => (
  <div className = "experienceList">
    <Title title={props.title} />
    {props.data.map((elem, index) => (
      <ExperienceListItem key={index} {...elem} />
    ))}
  </div>
);

export default ExperienceSection;
