import React from "react";

const SkillListItem = ({ title, startDate, endDate, titles, description }) => (
  <div>
    {title && <h3 className="skillList__title">{title}</h3>}
    {startDate && (
      <p className ="skillList__date">
        {startDate} - {endDate}
      </p>
    )}
    {titles && (
      <div>
        {titles.map((elem, index) => (
          <p key={index} className = "skillList__titles">
            {elem.startDate} - {elem.endDate} : <u>{elem.title} </u> 
          </p>
        ))}
      </div>
    )}
    <p className = "skilList__description">{description}</p>
  </div>
);

export default SkillListItem;
