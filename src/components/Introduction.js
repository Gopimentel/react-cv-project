import React from "react";
import SectionTitle from './SectionTitle';
const Introduction = props => (
  <div className = "introduction">
    <SectionTitle title={"Introduction"} />
    <div className="introduction__text">
      <p>{props.text}</p>
    </div>
  </div>
);

export default Introduction;
