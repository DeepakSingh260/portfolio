// import infyLogo from "../../assets/infy-logo.png";
// import iqviaLogo from "../../assets/iqvia-logo.png";

// import exposysLogo from "../../assets/robots.png";
import { ExperienceProps } from "../ui/exp-card";

const EXPERIENCE_ITEMS: ExperienceProps[] = [
  {
    logo: "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/infy-logo.png?alt=media&token=57e76c7b-5860-46f9-8915-05ccccb167f6",
    title: "Infosys",
    orgLink: "https://www.infosys.com/",
    duration: "Feb 2023 - Present",
    descList: [
      "Developed a Python and Xpress-based module, resulting in an impressive 12% reduction in delivery costs for product shipments.Ensured code quality and reliability by writing comprehensive unit test cases for the project.",
      "Developed and led the implementation of an efficient front-end dashboard using React Js, Vite, and Mui modules,catering to a user base of 250,000 employees.",
      "Contributed to the backend using Node.js for an internal project, enhancing overall functionality. Collaborated with cross-functional teams to elevate data visualizations for the Supply and Demand project"
    ]
  },
  {
    logo: "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/iqvia-logo.png?alt=media&token=9bd6259e-3494-4f37-9f25-356e764c232f",
    title: "IQVIA",
    orgLink: "https://www.iqvia.com/",
    duration: "Feb 2022 - Aug 2022  ",
    descList: [
      "Employed advanced SQL skills to streamline the processing and analysis of patient information within the Argus Safety software platform. This significantly contributed to the accurate management of adverse event data, ensuring data integrity and compliance."

    ],
  },
  {
    logo: "https://firebasestorage.googleapis.com/v0/b/portfolio-ffccf.appspot.com/o/robots.png?alt=media&token=a3447857-6823-4c9d-8a75-f3de9ac8d288",
    title: "Exposys Data Labs",
    orgLink: "http://exposysdata.com/",
    duration: "Sep 2021 - Oct 2021",
    descList: [
      "Developed a real-time chat application using Firebase as the backend, enabling seamless communication within Exposys Datalabs.",
      "Built a Node.js server for Firebase Cloud Messaging (FCM), facilitating push notifications and enhancing user engagement in the chat application."
    ],
  },
];

export default EXPERIENCE_ITEMS;
