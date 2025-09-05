import coulonImg from './project-files/nature/coulon.jpg';
import ranierImg from './project-files/nature/ranier.jpg';
import oregonImg from './project-files/nature/oregon.jpg';
import rustonImg from './project-files/nature/ruston.jpg';
import blancaImg from './project-files/nature/blanca.jpg';

import homepageImg from './project-files/web-project/homepage.png';
import aboutMeImg from './project-files/web-project/aboutMe.png';
import projectsImg from './project-files/web-project/projects.png';
import contactImg from './project-files/web-project/contact.png';

export const aboutMeGallery = [
  { 
    src: coulonImg, 
    alt: 'Sunset view over the water at Gene Coulon Memorial Beach Park in Renton, WA' 
  },
  { 
    src: ranierImg, 
    alt: 'Above clouds sunset at Mount Rainier Sunset point' 
  },
  { 
    src: oregonImg, 
    alt: 'The sea coast at Seaside in Oregon' 
  },
  { 
    src: rustonImg, 
    alt: 'The Ruston Point ship vessel at Ruston in Tacoma, WA' 
  },
  { 
    src: blancaImg, 
    alt: 'The vibrant turquoise water of Blanca Lake in the Cascade mountains' 
  }
];

export const projects = [
  {
    id: 1,
    title: "PE project",
    description: "Another project",
    imageUrls: [
        "https://placehold.co/600x400/8d82c4/ffffff?text=PE+Image+1",
        "https://placehold.co/600x400/8d82c4/ffffff?text=PE+Image+2",
        "https://placehold.co/600x400/8d82c4/ffffff?text=PE+Image+3",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/rPhoenix10"
  },
  {
    id: 2,
    title: "Ancora Training Portfolio",
    description: "This personal portfolio website, built with React and modern CSS, showcases the skills I developed during the Ancora Training program.",
    imageUrls: [
        homepageImg,
        aboutMeImg,
        projectsImg,
        contactImg,
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/rPhoenix10"
  },

  {
    id: 3,
    title: "Digital Keys (Capstone Project)",
    description: "A collaborative web application developed as a capstone project at Bellevue College, focusing on secure digital asset management.",
    imageUrls: [
        "https://placehold.co/600x400/8d82c4/ffffff?text=DK+Image+1",
        "https://placehold.co/600x400/8d82c4/ffffff?text=DK+Image+2",
        "https://placehold.co/600x400/8d82c4/ffffff?text=DK+Image+3",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/rPhoenix10"
  },
];

export const personalInfo = {
  name: 'Julius Sale',
  tagline: 
    'Nature Lover. Code Enthusiast.|Crafting Web & App Solutions.|Aspiring Platform Engineer.'
};

export const aboutMe = {
  paragraphs: [
    "I'm a passionate web developer based in Kent, WA, with a knack for creating intuitive and dynamic user experiences. My journey into tech was fueled by the Web & App Development Program at Ancora Training, where I dove deep into modern web fundamentals, from advanced JavaScript and APIs to React.",
    "I thrive in collaborative environments and enjoyed contributing to the Digital Keys capstone project at Bellevue College. I'm eager to apply my skills in a professional setting and help build amazing applications."
  ]
};

export const github = {
  username: 'rPhoenix10'
};

export const links = {
  github: 'https://github.com/rPhoenix10',
  linkedin: 'https://www.linkedin.com/in/kim-julius-sale-0722531a0/',
  resumePdf: '/project-files/Julius Sale CV.pdf'
};

