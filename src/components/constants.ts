import { ProjectsProps } from "./interfaces"
import ARImage from '../../public/ar-image.png'
import { GrContact } from "react-icons/gr";
import React from "react";
import { MdWork } from "react-icons/md";

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
    {'title': "Experience 1", "description": "Description 1", "timeline": "3 months", "Icon": React.createElement(MdWork), "date": "2020-2021"},
    {'title': "Experience 2", "description": "Description 2", "timeline": "3 months", "Icon": React.createElement(MdWork), "date": "2020-2021"},
    {'title': "Experience 3", "description": "Description 3", "timeline": "3 months", "Icon": React.createElement(MdWork), "date": "2020-2021"},
] as const;

export const description = [
    "I'm Yash, a full-time caffeine addict ☕️ and part-time software developer 👨‍💻. I'm currently in my senior year studying Computer Science 🖥️ at UC Davis 🐄.",
    "I'm passionate about building web apps and have experience working with the MERN stack, Git, and more. How, you ask? 🤔 Through intense late-night coding sessions fueled by coffee ☕️ and personal projects 💻 beyond just my coursework 📚. I am even working on AI/ML research 🤖 ith Professor Rafatirad.",
    "When I manage to peel myself away from my computer 💻, you can find me wielding a badminton racket 🏸, biking 🚲 around Davis, listening to business 💰 and finance 📈 podcasts, or attempting fancy cardistry card tricks (it's been while since I've practiced though).",
    "I'm currently on the hunt for full-time SWE roles 👨‍💻 where I can expand my skills and build meaningful products. I'm open to joining startups to help drive innovation and change in my first role after graduation 🎓.",
    "Feel free to check out some of my past projects 👇 or feel free to connect via my contact page 💬. I'm always down for a good conversation over coffee ☕️ or to get any career advice!"
]