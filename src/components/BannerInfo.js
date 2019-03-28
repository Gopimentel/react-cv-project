import React from "react";

const BannerInfo = props => (
  <div className="bannerInfo">
    <img src={props.image} className="infoIcon" />
    {props.url && <a target="_blank" href={props.url+props.text} className="banner-info-text">{props.text}</a>}
    {!props.url && <p className="banner-info-text">{props.text}</p>}
  </div>
);

export default BannerInfo;
