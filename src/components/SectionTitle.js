import React from 'react';

const SectionTitle = (props) => (
    <div>
         <h1 className="accomplishments__title">{props.title}</h1>
        <hr className="accomplishments__titleline" />
    </div>
);

export default SectionTitle;