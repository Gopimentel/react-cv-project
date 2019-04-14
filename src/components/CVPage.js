import React from "react";
import {connect} from 'react-redux';
import Accomplishments from "./cv/education/Accomplishments";
import Banner from "./cv/contact-strip/ContactStrip";
import Introduction from "./cv/introduction/Introduction";
import ExperienceSection from "./cv/experience/ExperienceSection";
import SkillSection from "./cv/skills/SkillSection";


const technologies = "This page has been developed using React as Javascript Framework, CSS/SASS for stylying, Webpack for bundling ( of Javascript and CSS files ) and Babel for code transpiling ( to transform modern Javascript into ES5 to be run in older browsers )."
const tested = "Page tested in : Windows 10 with Chrome 73.0, IE 11.648, Mozila Firefox 65.0 and in Iphone 5s with iOS 12.1.2 with Chrome and Safari."

const CVPage = (props) => (
<div className="main-div">
  
  <div className="cvPage">
  

    <div className="about-section">
      <img src={props.userData.imgUrl} className="userPicture" />
      <Banner {...props.userData} />
      <div className="compensateBanner"/>
      <Accomplishments accomplishments={props.userData.accomplishments} />
    </div>
    <div className="right-section">
      <Introduction text={props.userData.introduction} />
      <div className="compensateBanner"/>
      <div >
        <ExperienceSection title="Experience" data={props.userData.experience} />
      <SkillSection title="Technical Skills" data={props.userData.skills}/>
      </div>
    </div>
  </div>

  <div className = "footer" >
  <p>
    <span>This page has been developed using <span className="footer__keyword">React</span> as Javascript Framework, </span>
    <span><span className="footer__keyword">SASS</span> - for stylying, </span>
    <span><span className="footer__keyword">Webpack</span> for bundling ( of Javascript and CSS files ) </span> 
    <span>and <span className="footer__keyword">Babel</span> for code transpiling ( to transform modern Javascript into ES5 to be run in older browsers ).</span></p>
  <p>{tested}</p>
</div>
  </div>
);

const mapStateToProps = (state) => {
  return {  userData : state.userData }
};

export default connect(mapStateToProps)(CVPage);
