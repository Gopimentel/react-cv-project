import React from "react";

const ProgressBar = (props) => (
  <div className="progress-bar">
    <div className="progress-fill" style={{ width: `${props.percentage}%` }}>
    </div>
  </div>
);

export default ProgressBar;
