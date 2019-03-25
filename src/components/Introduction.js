import React from "react";
import SectionTitle from './SectionTitle';
const Introduction = props => (
  <div className = "introduction">
    <SectionTitle title={"Introduction"} />
    <p>{props.text}</p>
  </div>
);

export default Introduction;
