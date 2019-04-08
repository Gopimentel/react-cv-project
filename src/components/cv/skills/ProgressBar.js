import React from "react";

const ProgressBar = props => (
  <div className="progress-bar">
    <div className="progress-bar__inner">
      <div
        className="progress-bar__inner__fill"
        style={{ width: `${props.percentage}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
