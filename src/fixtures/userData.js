import moment from 'moment';

export const userData = {
  imgUrl:
    "https://media.licdn.com/dms/image/C4D03AQHYaqBF_hvCOA/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=sOk5oplUYfaB-KmiXPr7-iccRDbsacZ3SygcQKybTZ4",
  name: "Gonçalo Pimentel",
  age: "27",
  birthDate: "28/03/1991", //use moment here
  nationality: "portuguese",
  address: "A Random Address should appear here eoifjeofbwoifweujfiwepofhew",
  phone: "+351 XXXXXXXXX",
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

  introduction: ["I am former Researcher made Software Engineer. While my focus throughout my academic years has been in research, I always had a passion for developing software solutions to meet/ease our projects. This has led me, to leave the academic environment and completely embrace the software world I had so much interest in. Throughout this time, I have been continuously improving my skills in web development (JavaScript, HTML5/XML as well as in JAVA), and gaining experience in this fast-paced industry. Some of my best qualities are the tenacity to never give up and to be always eager to learn more. Together with my continuous search for improvement and academic background I am searching for defying challenges that can make me thrive as well"],

  experience:[
    {
      title: "Freelancer",
    
      titles : [ {
        startDate: "Current",
        title:"Frontend Web Developer (React)",

      }   ],
       
    },

    {
      title: "Application Developer – ??????????",
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
    {title: "React", level: 7 },
    {title: "Redux", level: 6 },
    {title: "Webpack + babel", level: 5 },
    {title: "Javascript", level: 9 },
    {title: "CSS/SASS", level: 7 },
    {title: "Testing/Jest", level: 7 }]
};
