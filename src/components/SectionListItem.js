import React from 'react';

const SectionListItem =  (props) => (
    
    <div className="sectionlistitem-box">
        {props.data.startYear && !props.data.endYear &&  <p>{props.data.startYear}</p> }
        {props.data.startYear && props.data.endYear &&  <p>{props.data.startYear} - {props.data.endYear}</p> }
        {props.data.name && <p>{props.data.name}</p>}
        {props.data.faculty && <p>{props.data.faculty}</p>}
        {props.data.grade && <p>Final Grade : {props.data.grade}</p>}
        <hr className="separator-line"/>
    </div>
);
export default SectionListItem;
