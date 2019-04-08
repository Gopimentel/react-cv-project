import React from "react";
import Title from "../utils/Title";
import ProgressBar from "./ProgressBar";

const SkillSection = props => (
  <div className="skill-section">
    <Title title={props.title} />
    <div className="skill-section__list">
      <div>
        {props.data.map((elem, index) => (
          <div key={"sl" + index} className="skill-section__list__item">
            <div className="progress-label">{elem.title}</div>
            <ProgressBar percentage={elem.level * 10} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default SkillSection;
