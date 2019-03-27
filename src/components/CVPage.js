import React from "react";
import { userData } from "../fixtures/userData";

import Accomplishments from "./Accomplishments";
import Banner from "./Banner";
import Introduction from "./Introduction";
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillSection";


const CVPage = () => (
  <div className="cvPage">
    <div className="about-section">
      <img src={userData.imgUrl} className="userPicture" />
      <Banner {...userData} />
      <div className="compensateBanner"/>
      <Accomplishments accomplishments={userData.accomplishments} />
    </div>
    <div className="right-section">
      <Introduction text={userData.introduction} />
      <div className="compensateBanner"/>
      <div >
        <ExperienceSection title="Experience" data={userData.experience} />
      <SkillSection title="Technical Skills" data={userData.skills}/>
      </div>
    </div>
  </div>
);

export default CVPage;
