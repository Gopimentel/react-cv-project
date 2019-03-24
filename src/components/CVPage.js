import React from "react";
import EducationList from "./EducationList";

const userData = {
  imgUrl:
    "https://media.licdn.com/dms/image/C4D03AQHYaqBF_hvCOA/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=sOk5oplUYfaB-KmiXPr7-iccRDbsacZ3SygcQKybTZ4",
  name: "Gonçalo Pimentel",
  age: "27",
  birthDate: "28/03/1991", //use moment here
  nationality: "portuguese",
  education: [
    {
      startYear: "2013",
      endYear: "2015",
      course: "Msc. Biomedical Engineering",
      faculty: "Faculty of Engineering, University of Porto",
      grade: "17/20"
    },
    {
      startYear: "2009",
      endYear: "2013",
      course: "Bsc. Technological Physics",
      faculty: "Faculty of Sciences, University of Porto",
      grade: "14/20"
    }
  ]
};

const CVPage = () => (
  <div>
    CV PAGE
    <div className="about-section">
      <img src={userData.imgUrl} className="userPicture" />
      <div className="namebanner">
        <h2 >{userData.name}</h2>
        <h3>{userData.age} years old, {userData.nationality}</h3>
      </div>
      <EducationList education={userData.education} />
    </div>
  </div>
);

export default CVPage;
