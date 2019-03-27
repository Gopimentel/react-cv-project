import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const ExperienceListItem = ({ title, totalYears, totalMonths,endDate, titles }) => (
  <div>
    {title && <h3 className="experienceList__title">{title}</h3>}
    { (
      <p className="experienceList__date">
       {totalYears>0  && <span>{ totalYears } {totalYears > 1 ? "years" : "year"},</span> }
       {totalYears>0  && <span>{ totalMonths%12 } {totalMonths%12 > 1 ? "Months" : "Month"}  </span> }
      </p>
    )}
    {titles && (
      <Timeline className="timelineList">
        {titles.map((elem, index) => (
          <TimelineItem key={index} className="timelineItem">
            
              <p className="experienceList__dates">
               { elem.endDate ? `${elem.startDate} - ${elem.endDate}` :   `${elem.startDate}`}
              </p>
            
            <p className="experienceList__titles">
              <u>{elem.title}</u>{" "}
            </p>
          </TimelineItem>
        ))}
      </Timeline>
    )}
  </div>
);

export default ExperienceListItem;
