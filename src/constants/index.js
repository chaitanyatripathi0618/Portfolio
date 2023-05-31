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
    game,
    unity,
    boots,
    java,
    election,
    game1,
    vacation,
    
  } from "../assets/assets";
  
  const navLink = [
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
  // export default navLink;
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: game,
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
      name: "React JS",
      icon: reactjs,
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
      name: "unity",
      icon: unity,
   },
   {
      name: "java",
      icon: java,
   }
  ];
  
  const experiences = [
    {
      title: "Lodging Loop",
      company_name: "MERN Project",
      icon: vacation,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "A traveling website where you can book hotels, flights, and plan your upcoming trips.",
        "Features include a calendar that shows the availability of the hotel and can have a proper view of your stay.",
        "Authentication is done using JWT and the password is hashed using bcrypt. only the user can see his/her bookings.",
        "The user can also give feedback and ratings to the hotels and can also see the ratings given by other users.",
      ],
    },
    {
      title: "Bazar",
      company_name: "React Project",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2023",
      points: [
        "E-commerce website where you can buy and sell products.",
        "Features include a cart where you can add and remove products.",
        "Users credentials are stored in the localstorage and can be accessed from there.",
        "The user can also give feedback and ratings to the products.",
      ],
    },
    {
      title: "Scavenger Hunt ",
      company_name: "Unity based Project",
      icon: game1,
      iconBg: "#383E56",
      date: "Apr 2023",
      points: [
        "Mission-based game where you have to find the hidden Diamond.",
        "Enemy AI is implemented using NavMesh and that is following you throughout the mission.",
        "There is various obstacle in the game and you have to find the diamond before the enemy hits you.",
        "Game in not completed unitl you find the last diamond that is inside the cave also if you missed any other diamond you can go back and find it.",
      ],
    },
    {
      title: "MatDaan",
      company_name: "Android based Project <Group Project>",
      icon: election,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - May 2021",
      points: [
        "An android application where you can vote for your favorite candidate.",
        "Features include a login page where you can login using your credentials and OTP is sent to the user's mobile number for verification from firebase.",
        "The user can also put complaints and get to know about the latest news.",
        "UI is made using XML and the backend is done using Java.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Introduction to front-end development ",
      name: "Simplilearn",
    },
    {
      testimonial:
        "Code-A-Thon ",
      name: "Programming Pathshala",
    },
    {
      testimonial:
        "Winter Pep Tranining Program on React JS ",
      name: "Programming Pathshala",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { navLink, services, technologies, experiences, testimonials, projects};
  