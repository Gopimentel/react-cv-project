import React from "react";
import Accomplishments from "./Accomplishments";
import Banner from "./Banner";
import Introduction from "./Introduction";
import SkillSection from "./SkillSection";
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
        <SkillSection title="Experience" data={userData.experience} />
        <SkillSection title="Awards" data={userData.awards} />
      </div>
    </div>
  </div>
);

export default CVPage;
