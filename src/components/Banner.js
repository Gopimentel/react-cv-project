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
    <BannerInfo image={"https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"} text = {address} url ={"https://www."}/>
    <BannerInfo image={"https://image.flaticon.com/icons/svg/131/131155.svg"} text = {mail} url ={"mailto:"}/>
    <BannerInfo image={"https://image.flaticon.com/icons/svg/685/685799.svg"} text = {phone} url={"tel:"}/>
   </div>
  </div>
);

export default Banner;
