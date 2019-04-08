import React from "react";
import Section from "./Section";

const Accomplishments= props => (
  <div className="accomplishments">
   <Section title = "Education" data = {props.accomplishments.education}/>
   <Section title = "Certificates" data = {props.accomplishments.certificates}/>
   <Section title = "Interests" data = {props.accomplishments.interests}/>
  </div>
);

export default Accomplishments;
