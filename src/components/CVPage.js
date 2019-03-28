import React from "react";
import { userData } from "../fixtures/userData";

import Accomplishments from "./Accomplishments";
import Banner from "./Banner";
import Introduction from "./Introduction";
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillSection";


const technologies = "This page has been developed using React as Javascript Framework, SASS - for stylying, Webpack for bundling (of Javascript and CSS files) and Babel for code transpiling ( to transform modern Javascript into ES5 to be run in older browsers)."
const tested = "Page tested in : Chrome, IE11, Mozila Firefox X.1 , Iphone 5s ."

const CVPage = () => (
<div>
  
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

  <div className = "footer" >
  <p>
    <span>This page has been developed using <span className="footer-keyword">React</span> as Javascript Framework, </span>
    <span><span className="footer-keyword">SASS</span> - for stylying, </span>
    <span><span className="footer-keyword">Webpack</span> for bundling ( of Javascript and CSS files ) </span> 
    <span>and <span className="footer-keyword">Babel</span> for code transpiling ( to transform modern Javascript into ES5 to be run in older browsers ).</span></p>
  <p>{tested}</p>
</div>
  </div>
);

export default CVPage;
