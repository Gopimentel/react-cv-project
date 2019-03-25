import React from 'react';

const SectionTitle = (props) => (
    <div>
         <h1 className="accomplisments__title">{props.title}</h1>
        <hr className="accomplisments__titleline" />
    </div>
);

export default SectionTitle;