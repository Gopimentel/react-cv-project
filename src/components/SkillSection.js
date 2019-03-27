import React from "react";
import SectionTitle from "./SectionTitle";
import ProgressBar from "./ProgressBar";

const SkillSection = props => (
  <div className="skill-section">
    <SectionTitle title={props.title} />
    <div className="progressItemList">
      <div>
        {props.data.map(elem => (
          <div className="progressItem">
            <div className="progressLabel">
              {elem.title}
            </div>
            <div className="progressBarDiv">
              <ProgressBar percentage={elem.level * 10} />
            </div>
          </div>
        ))}
      </div>
    
    </div>
  </div>
);
export default SkillSection;
