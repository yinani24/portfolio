import { ProjectsProps } from "./interfaces"
import ARImage from '../../public/ar-image.png'
import { GrContact } from "react-icons/gr";
import React from "react";
import { MdWork } from "react-icons/md";
import CNN from '../../public/projects/butterflycnn.png'
import simulation from '../../public/projects/simulation.png'
import FISC from '../../public/projects/fisc.png'
import TextEditor from '../../public/projects/texteditor.png'
import Shell from '../../public/projects/sshell.png'
import APInt from '../../public/projects/extendedintc.png'
import Synthia from '../../public/projects/synthia.png'
import Tiktok from '../../public/projects/tiktokpets.png';
import waterlevels from '../../public/projects/waterlevels.png'

export const navname = [
    {'route':"/", 'title': 'Home'},
    {'route':'#about', 'title': 'About'},
    {'route': '#experience', 'title': 'Experience'},
    // {'route':'#skills', 'title': 'Skills'},
    {'route':'#projects', 'title': 'Projects'},
    {'route':'#contact', 'title': 'Contact'},
]

export const projects: ProjectsProps[] = [
    {'title': "Simulation: Crypto Currency", "description": "A customizable cryptocurrency platform that enables all users to act as miners and traders across multiple simulated environments.", 
    "link": "https://github.com/yinani24/simulation", 'tags':  ['Golang', 'MongoDB', 'Fiber', 'GORM', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS', 'All'], 
    'image': simulation, width: 500, height: 500},
    {'title': "Text Editor", "description": "A command line-based text editor addressing the need for insertion, deletion, undo, redo functionalities, and seamless cursor movement.", "link": "https://github.com/yinani24/Text-Editor",
    'tags': ['C++', 'All'], 'image': TextEditor, width: 250, height: 200},
    {'title': "Shell", "description": "UNIX shell program written in C that handles command parsing, execution, and management, including input/output redirection, piping, and background process execution.", "link": "https://github.com/yinani24/shell",
    'tags': ['C', 'All'], 'image': Shell, width: 500, height: 500},
    {'title': "Arbitrary Precision Int in C", "description": "APInt in C, optimizing memory usage and performance for efficient arithmetic operations such as addition, multiplication, left shift, power, and comparison.", "link": "https://github.com/yinani24/Extended-Int-C",
    'tags': ['C', 'All'], 'image': APInt, width: 500, height: 500},
    {'title': "FISC/SISC", "description": "FISC and SISC (Four/Six Instruction Set Computer) assembler and simulator for translating and executing FISC assembly code, featuring label handling, efficient opcode conversion, and cycle-by-cycle simulation.", "link": "https://github.com/yinani24/fisc_sisc",
    'tags':  ['C++', 'All'], 'image': FISC, width: 500, height: 500},
    {'title': "Synthia AI", "description": "Cost-effective and convenient solution to conduct practice interviews, considering the difficulty of scheduling sessions with others on external platforms.", "link": "https://github.com/yinani24/calhacks_2023",
    'tags': ['Flask', 'Python', 'React', 'JavaScript', 'OpenAI', 'Hume API', 'All'], 'image': Synthia, width: 400, height: 400},
    {'title': "Butterfly or Moth CNN", "description": "CNN model capable of accurately classifying 100 different types of butterflies or moths.", "link": "https://github.com/yinani24/Butterfly-cnn",
    'tags': ['Python', 'Keras', 'Pandas', 'Tensorflow', 'All'], 'image': CNN, width: 800, height: 800},
    {'title': "Waterlevels", "description": "A website allowing users to view the water levels of various lakes in California, with the added feature of selecting a specific month to observe historical water levels", "link": "https://github.com/yinani24/waterlevels",
    'tags': ['React', 'JavaScript','Charts', 'CSS', 'All'], 'image': waterlevels, width: 800, height: 800},
    {'title': "TikTok Pets", "description": "A game that allows users to vote on pet videos and determine the best one based on collective preferences.", "link": "https://github.com/yinani24/tiktok_pets",
    'tags': ['Node', 'Express', 'MySQL', 'JavaScript', 'CSS', 'All'], 'image': Tiktok, width: 500, height: 500},
] as const;

export const tags = [
    "All", "React", "Node", "Python", "C++", "C", "Flask", "Golang", "MongoDB", "Fiber", "GORM", "PostgreSQL", "TypeScript", "TailwindCSS", "Keras", "Pandas", "Tensorflow", "CSS", "Express", "MySQL", "JavaScript"
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