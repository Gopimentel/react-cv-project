import React from "react";

const BannerInfo = props => (
  <div className="contact-info">
    <img src={props.image} />
    {props.url && <a target="_blank" href={props.url+props.text} className="contact-info__text">{props.text}</a>}
    {!props.url && <p className="contact-info__text">{props.text}</p>}
  </div>
);

export default BannerInfo;
