import React from "react";
import BannerInfo from './BannerInfo';

const Banner = ({ name, age, nationality, address, phone, mail }) => (
  <div className="banner">
    <div className="banner__name">
      <h2>{name}</h2>
      <h3>
        {age} years old, {nationality}
      </h3>
      <div />
     
    </div>
    <div className="banner__icons">
    <BannerInfo image={"https://image.flaticon.com/icons/svg/771/771600.svg"} text = {address}/>
    <BannerInfo image={"https://image.flaticon.com/icons/svg/685/685799.svg"} text = {phone}/>
    <BannerInfo image={"https://image.flaticon.com/icons/svg/131/131155.svg"} text = {mail}/>
    </div>
  </div>
);

export default Banner;
