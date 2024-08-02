import {
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
  starbucks,
  tesla,
  carrent,
  jobit,
  
} from "../assets";

import wuzzn from "../assets/wuzzn.png"
import homes from "../assets/homes.png"
import game from "../assets/game.png"
import alhusayni from "../assets/alhusayni.png"
import icbschools from "../assets/icbschools.png"
import way14 from "../assets/way14.png"
import Furni from "../assets/Furni.png"
import ecommerce from "../assets/ecommerce.png"
import minysoft from "../assets/minysoft.png"
import Bakery from "../assets/Bakery.png"
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
    title: "React Js ",
    icon: reactjs,
  },
  {
    title: "next js ",
    icon: docker,
  },
  {
    title: "JavaScript",
    icon: javascript,
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
    name: "TypeScript",
    icon: typescript,
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
    title: "Front-End Web development Reactjs",
    icon: starbucks,
    iconBg: "#383E56",
    date: `2023 – 2024
Ruote Academy`,
    date1: `2023 – 2024
Ruote Academy`,
    points: [
      `Ruote Academy Diploma in Information Technology (Web Development),  Path, 2023 – 2024: During this program, I undertook comprehensive training in Front-End Web development (Reactjs), acquiring proficiency in both front-end and back-end technologies. Subsequently, I specialized further in Front-End Web Development and React, refining my skills in creating responsive and dynamic user interfaces. This education equipped me with a solid foundation in modern web development practices, enabling me to contribute effectively to projects that prioritize usability and innovation`
    ],
  },
  {
    title: "Front-End Web development Reactjs",
    company_name: "Online Courses",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      `I have completed courses in front-end web development and specialized in React. These courses provided me with practical skills in building user-friendly interfaces and dynamic web applications`
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
    name: "Medical centers",
    description:
      `website is now live and ready for action! Excited to share my latest project
Cosmetic products, clinics and medical centers Distinguished in the Kingdom of
Saudi Arabia
`
    ,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://krz.sa/",
  },
  {
    name: "E- commerce",
    description: `e-commerce website  starts with you from the first authentication to
then displaying all products, booking products, purchasing products, and then reaching
online payment`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://abdulrahmanahmedzaghloul.github.io/cart-E-Commerce/",
  },
  {
    name: "homes have",
    description:
      `A website that sells all products, such as washing machines, refrigerators, computer screens, and mobile phones`
    , tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: homes,
    source_code_link: "https://homeshave.sa/en",
  },

  {
    name: "carat Auction",
    description:
  "A website that sells all products, such as washing machines, refrigerators, computer screens, and mobile phones"
    ,
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: wuzzn,
    source_code_link: "https://abdulrahmanahmedzaghloul.github.io/Wazin/",
  },
  {
    name: "Game Reviews",
    description: `Game website  starts with you from the first authentication to
                  then displaying all Games, booking Games, purchasing Games,`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://gamereact-five.vercel.app/#/",
  },
  {
    name: "alhusayni",
    description:`               
              alhusayni – medical and e-services Ltd.Co.
                COUNTRIES OF OUR BUSINESS

`
    , tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: alhusayni,
    source_code_link: "https://alhusayni.com/",
  },

  {
    name: "icbschools",
    description:
`ICBS is a new type of educational organization and unique society in which you will learn all types of science fields including engineering, medicine, economy, Etc. so that Students learn to be professional master`    ,
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: icbschools,
    source_code_link: "https://icbschools.com/",
  },
  {
    name: "way14",
    description: `Way14 group of companies for artistic production`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: way14,
    source_code_link: "https://way14.com/en",
  },
  {
    name: "Furni",
    description:`               
              alhusayni – medical and e-services Ltd.Co.
                COUNTRIES OF OUR BUSINESS

`
    , tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: Furni,
    source_code_link: "https://abdulrahmanahmedzaghloul.github.io/Furni/",
  },
  
  {
    name: "ecommerce",
    description:`               
              alhusayni – medical and e-services Ltd.Co.
                COUNTRIES OF OUR BUSINESS

`
    , tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://abdulrahmanahmedzaghloul.github.io/ecommerce/",
  },
  {
    name: "Bakery",
    description:`               
              alhusayni – medical and e-services Ltd.Co.
                COUNTRIES OF OUR BUSINESS

`
    , tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: Bakery,
    source_code_link: "https://abdulrahmanahmedzaghloul.github.io/Bakery/",
  },
  {
    name: "minysoft",
    description:`               
              alhusayni – medical and e-services Ltd.Co.
                COUNTRIES OF OUR BUSINESS

`
    , tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: minysoft,
    source_code_link: "https://abdulrahmanahmedzaghloul.github.io/minysoft/",
  },
];

export { services, technologies, experiences, testimonials, projects };
