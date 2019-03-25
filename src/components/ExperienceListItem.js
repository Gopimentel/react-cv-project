import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const ExperienceListItem = ({ title, startDate, endDate, titles }) => (
  <div>
    {title && <h3 className="skillList__title">{title}</h3>}
    {startDate && (
      <p className="skillList__date">
        { endDate ? `${startDate} - ${endDate}` :   `${startDate}`}
      </p>
    )}
    {titles && (
      <Timeline className="timelineList">
        {titles.map((elem, index) => (
          <TimelineItem key={index} className="timelineItem">
            
              <p className="skillList__dates">
               { elem.endDate ? `${elem.startDate} - ${elem.endDate}` :   `${elem.startDate}`}
              </p>
            
            <p className="skillList__titles">
              <u>{elem.title}</u>{" "}
            </p>
          </TimelineItem>
        ))}
      </Timeline>
    )}
  </div>
);

export default ExperienceListItem;
