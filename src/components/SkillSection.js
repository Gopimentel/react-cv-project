import React from "react";
import SkillListItem from "./SkillListItem";
import SectionTitle from "./SectionTitle";
const SkillSection = props => (
  <div>
    <SectionTitle title={props.title} />
    {props.data.map((elem, index) => (
      <SkillListItem key={index} {...elem} />
    ))}
  </div>
);

export default SkillSection;
