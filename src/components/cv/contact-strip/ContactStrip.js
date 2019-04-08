import React from "react";
import ContactInfo from './ContactInfo';

const ContactStrip = ({ name, age, nationality, address, phone, mail }) => (
  <div className="contact-strip">
    <div className="contact-strip__name">
      <h2>{name}</h2>
      <h3>
        {age} years old, {nationality}
      </h3>
      <div />
     
    </div>
    <div className="contact-strip__contacts">
    <ContactInfo image={"https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"} text = {address} url ={"https://www."}/>
    <ContactInfo image={"https://image.flaticon.com/icons/svg/131/131155.svg"} text = {mail} url ={"mailto:"}/>
    <ContactInfo image={"https://image.flaticon.com/icons/svg/685/685799.svg"} text = {phone} url={"tel:"}/>
   </div>
  </div>
);

export default ContactStrip;
