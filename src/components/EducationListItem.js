import React from 'react';

const EducationListItem =  (props) => (
    <div className="educationlistitem-box">
        <p>{props.data.startYear} - {props.data.endYear}</p>
        <p>{props.data.course}</p>
        <p>{props.data.faculty}</p>
        <p>Final Grade : {props.data.grade}</p>
        <hr className="separator-line"/>
    </div>
);
export default EducationListItem;
