import React from "react";
import Accomplishments from "./Accomplishments";
import Banner from "./Banner";
import Introduction from "./Introduction";
import ExperienceSection from "./ExperienceSection";
import { userData } from "../fixtures/userData";

const CVPage = () => (
  <div className="cvPage">
    <div className="about-section">
      <img src={userData.imgUrl} className="userPicture" />
      <Banner {...userData} />
      <Accomplishments accomplishments={userData.accomplishments} />
    </div>
    <div className="skills-section">
      <Introduction text={userData.introduction} />
      <div className ="bannerSection">
        <ExperienceSection title="Experience" data={userData.experience} />
    
      </div>
    </div>
  </div>
);

export default CVPage;
