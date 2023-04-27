import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  next,
  firebase,
  styledComponents,
  facebook,
  twitter,
  github,
  instagram,
  linkedIn,
  google,
  traveling,
  reading,
  running,
  writing,
  music,
  swimming,
  portfolio,
  bankist,
  bonik,
  expenses,
  fitClub,
  foodOrder,
  mapty,
  shareme,
  shoppy,
  youtube,
  bankistLanding,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Me",
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

export const socialMedia = [
  {
    url: "https://www.linkedin.com/in/mark-nasser-3252211b4/",
    app: "linked-In",
    icon: linkedIn,
  },
  { url: "mailto:marknasser20@gmail.com", app: "google", icon: google },
  { url: "https://github.com/marknasser", app: "github", icon: github },
  { url: "#", app: "instagram", icon: instagram },
  // {
  //   url: "https://www.facebook.com/mark.nasser.12",
  //   app: "facebook",
  //   icon: facebook,
  // },
  { url: "#", app: "twitter", icon: twitter },
];
const services = [
  {
    title: "Authentication",
    icon: web,
    description: [
      "URLs protection for non authenticated users",
      "Authenticate with Firebase",
    ],
  },
  {
    title: "User Interface",
    icon: mobile,
    description: [
      "Friendlily designs",
      "Responsive interface to match all the screens dimensions",
    ],
  },
  {
    title: "User Experience",
    icon: backend,
    description: [
      "avoiding unnecessary asynchronous calls with side-effect",
      "Handling all possible errors",
    ],
  },
  {
    title: "Clean Code",
    icon: creator,
    description: [
      "Following the Abstraction approach especially for side-effect and reusable code",
      "Refactoring all duplicated code as a function or a custom hook",
      "Files and folders structure and to have a descriptive name",
    ],
  },
  {
    title: "24/7 Support",
    icon: creator,
    description: [
      "Communicate clearly and effectively with clients",
      "management to quickly resolve issues and ensure customer satisfaction.",
    ],
  },
];

const information = {
  taps: [
    {
      id: "personal",
      title: "Personal info",
    },
    {
      id: "languages",
      title: "Languages",
    },
    {
      id: "interests",
      title: "Interests",
    },
  ],
  personalData: [
    { address: "Full Name", info: "Mark Nasser Boules" },
    { address: "Email", info: "marknasser20@gmail.com" },
    { address: "Birth Date", info: "February 17,1996" },
    { address: "Address", info: "Alexandria , Egypt" },
    { address: "Phone", info: "01203577900" },
    { address: "Freelance ", info: "Available" },
  ],
  languages: [
    { name: "Arabic", level: 6, description: "mother tough" },
    {
      name: "English",
      level: 4,
      description:
        "B2 can effortlessly speak fluently on a wide variety of topics.",
    },
  ],
  interests: [
    { habit: "Traveling", icon: traveling },
    { habit: "Writing", icon: writing },
    { habit: "Reading", icon: reading },
    { habit: "Music", icon: music },
    { habit: "Running", icon: running },
    { habit: "Swimming", icon: swimming },
  ],
};

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
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
    name: "Styled Component",
    icon: styledComponents,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Portfolio",
    description:
      "where can i show my skills and experience through real-world examples of my work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/marknasser/portfolio",
    demo: "#",
    category: "react",
  },
  {
    name: "Shareme",
    description:
      "Full stack Social media app that allows you share awesome images with people. still working on it ...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase/AUTH",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/marknasser/sharem-app-frontend",

    demo: "https://marknasser.github.io/sharem-app-frontend/",
  },
  {
    name: "Youtube-clone",
    description: "Where you can search and watch videos on YouTube",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/marknasser/youtube-clone",
    demo: "https://marknasser.github.io/youtube-clone/",
  },
  {
    name: "Bonik",
    description: "E-commerce where you can but your stuffs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Context-Api",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
      {
        name: "emotion/react",
        color: "pink-text-gradient",
      },
    ],
    image: bonik,
    source_code_link: "https://github.com/marknasser/Bonik-Ecommerice",
    demo: "https://marknasser.github.io/Bonik-Ecommerice/",
  },
  {
    name: "Shoppy-Dashboard",
    description: "Dashboard built using Syncfusion library",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Context-Api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "pink-text-gradient",
      },
    ],
    image: shoppy,
    source_code_link: "https://github.com/marknasser/Shoppy-Dashboard",
    demo: "https://marknasser.github.io/Shoppy-Dashboard/",
  },
  {
    name: "Fit-Club GYM",
    description:
      "Animation-rich landing page built using Framer-Motion library",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "green-text-gradient",
      },

      {
        name: "Styled component",
        color: "pink-text-gradient",
      },
      // {
      //   name: "Styled component",
      //   color: "pink-text-gradient",
      // },
    ],
    image: fitClub,
    source_code_link: "https://github.com/marknasser/Fit-Club",
    demo: "https://marknasser.github.io/Fit-Club/",
  },
  {
    name: "Expenses App",
    description: "Very Simple application to display annual expenses",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      // {
      //   name: "Styled component",
      //   color: "pink-text-gradient",
      // },
    ],
    image: expenses,
    source_code_link: "https://github.com/marknasser/expenses-app",
    demo: "https://marknasser.github.io/expenses-app/",
  },
  {
    name: "Food Order App",
    description: "Very Simple e-commerce ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Context-Api",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: foodOrder,
    source_code_link: "https://github.com/marknasser/delivery-app",
    demo: "https://marknasser.github.io/delivery-app/",
  },
  {
    name: "Bankist",
    description:
      "simple bank simulation app by which users can transfer money to each other",
    tags: [
      {
        name: "vanilla javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Web Api",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link: "https://github.com/marknasser/bankist",
    demo: "https://marknasser.github.io/bankist/",
  },
  {
    name: "Mapty",
    description: "advanced landing page using Vanilla Javascript ",
    tags: [
      {
        name: "vanilla javascript",
        color: "blue-text-gradient",
      },
      {
        name: " BOM APIs(geolocation…)",
        color: "green-text-gradient",
      },
      {
        name: " Leaflet",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/marknasser/mapty",
    demo: "https://marknasser.github.io/mapty/",
  },
  {
    name: "Bankist landing page",
    description:
      "advanced landing page to deal wit DOM using Vanilla Javascript",
    tags: [
      {
        name: "vanilla javascript",
        color: "blue-text-gradient",
      },
      {
        name: " BOM APIs(geolocation…)",
        color: "green-text-gradient",
      },
      {
        name: "Leaflet",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bankistLanding,
    source_code_link: "https://github.com/marknasser/bankist-landing-page",
    demo: "https://marknasser.github.io/bankist-landing-page/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  information,
};
