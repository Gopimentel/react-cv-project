import React from "react";
import SectionListItem from "./SectionListItem";
import SectionTitle from "./SectionTitle";

const Section= props => (
  <div>
   <SectionTitle title = {props.title}/>
    {props.data.map((elem, index) => (
      <SectionListItem key={index} data={elem} />
    ))}
    </div>
    );
export default Section;