import React from "react";

const BannerInfo = props => (
  <div className="bannerInfo">
    <img src={props.image} className="infoIcon" />
    <p className="banner-info-text">{props.text}</p>
  </div>
);

export default BannerInfo;
