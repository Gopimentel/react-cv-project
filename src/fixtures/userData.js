import moment from 'moment';

export const userData = {
  imgUrl:
    "https://media.licdn.com/dms/image/C4D03AQHYaqBF_hvCOA/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=sOk5oplUYfaB-KmiXPr7-iccRDbsacZ3SygcQKybTZ4",
  name: "Gonçalo Pimentel",
  age: moment().diff(moment("19910328","YYYYMMDD"),'years'),
  birthDate: moment("19910328","YYYYMMDD"), //use moment here
  nationality: "portuguese",
  address: "linkedin.com/in/gopimentel",
  phone: "+351 911057731",
  mail: "golpimentel@gmail.com",
  accomplishments: {
    education: [
      {
        startYear: "2013",
        endYear: "2015",
        name: "Msc. Biomedical Engineering",
        faculty: "Faculty of Engineering, University of Porto",
        grade: "17/20"
      },
      {
        startYear: "2009",
        endYear: "2013",
        name: "Bsc. Technological Physics",
        faculty: "Faculty of Sciences, University of Porto",
        grade: "14/20"
      }
    ],
    certificates: [
      {
        startYear: "2015",
        name: "Pedagogic Competences Certificate (CCP)",
        note: "Certificate No. F619503",
        grade: "5/5"
      }
    ],
    interests: [
      { name: "Running" },
      { name: "SnowBoard" },
      { name: "Travelling" }
    ]
  },

  introduction: ["Currently, I am a software developer who sees himself as a strong team player that seeks to improve and help the group to meet their goals and deliver the best product possible. Throughout the last 2 years I have specialized purely in web development. From the first line of Javascript, through the Java webservice into the database sql insertion, I have helped my company develop web applications from both ends. However, my passion has always been Javascript and the frontend stack. Therefore, in my free time, I look for new approaches to web development, which led to me found React. That is why I am now seeking a new opportunity to specialize in the front end development recurring to state-of-the-art technology and where my work can reach millions of people."],
  experience:[
    {
      title: "Freelancer",
    
      titles : [ {
        startDate: "Current",
        title:"Frontend Web Developer (React)",

      }   ],
       
    },

    {
      title: "Application Developer – Accenture",
      totalYears:moment().diff(moment("20170124","YYYYMMDD"),'years'),
      totalMonths:moment().diff(moment("20170124","YYYYMMDD"),'months'),
      titles:[
        {startDate: "December 2018",
        endDate: "Current",
        title: "Software Engineering Senior Analyst"},
        {startDate: "June 2018",
        endDate: "December 2018",
        title: "Software Engineering Analyst"},
        {startDate: "June 2017",
        endDate: "June 2018",
        title: "Software Engineering Associate"},
        {startDate: "January 2017",
        endDate: "June 2017",
        title: "Trainee"}
      ],
      description : "Web Applications were developed in SAP Cloud Platform (SAPUI5+HANA). JavaScript (SAPUI5), HTML5/XML and CSS3 were the main technologies used to achieve the desired goals. REST services were also created recurring to JAVA. Work developed in a SCRUM environment."
    }
  ],
  skills : [ 
    {title: "Java", level: 7 },
    {title: "React/Redux", level: 7 },
    {title: "Javascript", level: 9 },
    {title: "CSS/SASS", level: 8 },
    {title: "Jest", level: 6 },
    {title: "Webpack", level: 5 }]
};
