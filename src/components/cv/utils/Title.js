import React from 'react';

const Title = (props) => (
    <div>
         <h1 className="custom-title__title">{props.title}</h1>
        <hr className="custom-title__titleline" />
    </div>
);

export default Title;