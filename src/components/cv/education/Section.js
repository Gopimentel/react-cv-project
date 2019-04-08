import React from "react";
import SectionListItem from "./SectionListItem";
import Title from "../utils/Title";

const Section= props => (
  <div>
   <Title title = {props.title}/>
    {props.data.map((elem, index) => (
      <SectionListItem key={index} data={elem} />
    ))}
    </div>
    );
export default Section;