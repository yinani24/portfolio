import { ProjectsProps } from "./interfaces"
import ARImage from '../../public/ar-image.png'
import { GrContact } from "react-icons/gr";
import React from "react";
import { MdWork } from "react-icons/md";
import GDSC from '../../public/GDSC.svg'

export const navname = [
    {'route':"/", 'title': 'Home'},
    {'route':'#about', 'title': 'About'},
    {'route': '#experience', 'title': 'Experience'},
    // {'route':'#skills', 'title': 'Skills'},
    {'route':'#projects', 'title': 'Projects'},
    {'route':'#contact', 'title': 'Contact'},
]

// export const names = [
//     {'name': "Yash Inani", "time": 1000},
//     {'name': "a Developer", "time": 1000},
// ]

export const projects: ProjectsProps[] = [
    {'title': "Project 1", "description": "Description 1", "link": "Link 1", 
    'tags': ['React', 'Node','All'], 'image': ARImage},
    {'title': "Project 2", "description": "Description 2", "link": "Link 2",
    'tags': ['React', 'Node', 'All'], 'image': ARImage},
    {'title': "Project 3", "description": "Description 3", "link": "Link 3",
    'tags': ['React', 'All'], 'image': ARImage},
    {'title': "Project 4", "description": "Description 4", "link": "Link 4",
    'tags': ['React', 'Node','All'], 'image': ARImage},
    {'title': "Project 5", "description": "Description 5", "link": "Link 5",
    'tags': ['React', 'Node','All'], 'image': ARImage},
    {'title': "Project 6", "description": "Description 6", "link": "Link 6",
    'tags': ['React', 'All'], 'image': ARImage},
] as const;

export const experiences = [
    {'title': "Student Researcher", "description": "AI/ML research to identify and help negate the biases in current LLM models under Professor Rafatirad", "timeline": "11 months", "Icon": React.createElement(MdWork), "date": "May 2023 - Present", "link": "https://web.cs.ucdavis.edu/~srafatir/pages/research.html", "linkTitle": "Professor Rafatirad's Page"},
    {'title': "VP of Operations - GDSC @ UC Davis", "description": "Spearheaded events and finance for a 150+ member technical club, leading planning for 20+ events and workshop", "timeline": "5 months", "Icon": React.createElement(MdWork), "date": "Aug 2022 - Dec 2023", "link": "https://gdscucdavis.com/", "linkTitle": "GDSC Website"},
    {'title': "SDE @ Truckpedia (Codelab)", "description": "Collaborated cross-functionally on an agile team to develop an interactive React Native mobile dashboard with visualizations for a trucking logisitics company", "timeline": "3 months", "Icon": React.createElement(MdWork), "date": "Oct 2023 - Dec 2023", "link": "https://www.truckpedia.io/", "linkTitle": "Truckpedia Website"},
    {'title': "Finance Director - GDSC @ UC Davis", "description": "Spearheaded financing efforts raising over $2,500 in department and corporate sponsorships and managed event budgets up to $2,000 for the club's largest mid-year and annual showcase events", "timeline": "11 months", "Icon": React.createElement(MdWork), "date": "Sep 2022 - Jul 2023", "link": "https://gdscucdavis.com/", "linkTitle": "GDSC Website"},
    {'title': "Outreach Associate @ SacHacks", "description": "Assisted in securing sponsorships to support participants' project development efforts, resulting in a 20% increase in overall participation", "timeline": "4 months", "Icon": React.createElement(MdWork), "date": "Jul 2022 - Oct 2022", "link": "https://sachacks.io/", "linkTitle": "SacHacks Website"},
    {'title': "Tech Lead - GDSC @ UC Davis", "description": "Conducted a two-day workshop on the fundamentals of ML/AI, culminating in a project focused on developing a CNN model for the MNIST digit dataset", "timeline": "3 months", "Icon": React.createElement(MdWork), "date": "Jan 2022 - Jun 2022", "link": "https://youtu.be/oIObOsipPrk?si=z4ww2swiS4F9RqUd", "linkTitle": "Youtube Video"},
] as const;

export const description = [
    "I'm Yash, a full-time caffeine addict ☕️ and part-time software developer. I'm currently in my senior year studying Computer Science at UC Davis 🐄.",
    "I'm passionate about building web apps and have experience working with the MERN stack, Git, and more. How, you ask? Through intense late-night coding sessions fueled by coffee and personal projects 💻 beyond just my coursework. I am even working on AI/ML research ith Professor Rafatirad.",
    "When I manage to peel myself away from my computer, you can find me wielding a badminton racket 🏸, biking 🚲 around Davis, listening to business 💰 and finance podcasts, or attempting fancy cardistry card tricks (it's been while since I've practiced though).",
    "I'm currently on the hunt for full-time SWE roles 👨‍💻 where I can expand my skills and build meaningful products. I'm open to joining startups to help drive innovation and change in my first role after graduation.",
    "Feel free to check out some of my past projects 👇 or feel free to connect via my contact page 💬. I'm always down for a good conversation over coffee or to get any career advice!"
]