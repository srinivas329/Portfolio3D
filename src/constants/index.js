import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  connectSecure,
  digilogo,
  nxtwave,
  html,
  pythonlogo,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  mysql,
  tesla,
  shopify,
  covid,
  jobbyApp,
  jobit,
  tripguide,
  threejs,
  shopping,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "UI Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Python",
    icon: pythonlogo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Consecure Technologies Pvt Ltd",
    icon: connectSecure,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Developed and maintained web applications using modern frameworks such as React and Redux Toolkit, ensuring optimal performance and seamless user experiences",
      "Collaborated with cross-functional teams to design and implement user-centric features, improving project efficiency and delivering high-quality results",
      "Optimized front-end performance through code refactoring, use of Tailwind CSS, and applying best practices, resulting in improved loading times and responsiveness",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "DigitalPetro Pvt Ltd",
    icon: digilogo,
    iconBg: "#E6DEDD",
    date: "July 2024 - October 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Business Development Associate",
    company_name: "Nxtwave Disruptive Technologies Pvt Ltd",
    icon: nxtwave,
    iconBg: "#383E56",
    date: "Jan 2024 - July 2024",
    points: [
      "Managed customer outreach through calls and emails, effectively promoting company products and services to drive sales growth",
      "Built and maintained strong client relationships, leading to increased customer satisfaction and retention.",
      "Analyzed market trends and customer feedback to identify potential business opportunities, contributing to revenue growth.",
      "Collaborated with sales and marketing teams to develop and implement strategies that improved lead generation and conversion rates.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Covid19 Dashboard",
    description:
      "This is a COVID-19 dashboard that provides users with real-time data and statistics related to the ongoing pandemic. It likely includes regional breakdown to display the number of cases, deaths, and recoveries by location. The app may also include charts and graphs to help users visualize trends and patterns in the data and other important metrics. With your app, users can stay informed and up-to-date on the latest COVID-19 statistics and trends.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    source_code_link: "https://github.com/srinivas329/CovidProject",
    website_link: "https://srinucovid19.ccbp.tech/",
  },
  {
    name: "Nxt Trendz (Clone)",
    description:
      "This is an e-commerce platform that enables users to shop online and purchase a variety of products. It likely includes features such as product listings, search functionality, and a shopping cart for users to add items to their order. The app may also include product categories and filters, customer reviews and ratings, and a checkout process to complete the purchase. User Details - usernames : rahul, praneetha, raja ~Passwords : rahul@2021, praneeth@2021, raja@2021",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shopping,
    source_code_link: "https://github.com/srinivas329/NxtTrends",
    website_link: "https://srinunxtrendz.ccbp.tech/login",
  },
  {
    name: "Jobby Application",
    description:
      " It likely includes a search function that allows users to enter keywords or job titles and filter results by location, salary range, or other criteria. The app may also display job listings with details such as job description, company information, and application instructions. With your app, job seekers can easily browse and apply for open positions, making the job search process more efficient and effective. User Details usernames : rahul, raja Passwords : rahul@2021, raja@2021 ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobbyApp,
    source_code_link: "https://github.com/srinivas329/jobbyApp",
    website_link: "https://srinujobbyweb.ccbp.tech/login",
  },
];

export { services, technologies, experiences, testimonials, projects };
