import React from "react";
import Title from '../utils/Title';
const Introduction = props => (
  <div className = "introduction">
    <Title title={"Introduction"} />
    <div className="introduction__text">
      <p>{props.text}</p>
    </div>
  </div>
);

export default Introduction;
