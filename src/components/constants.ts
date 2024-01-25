import { ProjectsProps } from "./interfaces"
import ARImage from '../../public/ar-image.png'
import { GrContact } from "react-icons/gr";
import React from "react";

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
    'tags': ['React', 'Node'], 'image': ARImage},
    {'title': "Project 2", "description": "Description 2", "link": "Link 2",
    'tags': ['React', 'Node'], 'image': ARImage},
    {'title': "Project 3", "description": "Description 3", "link": "Link 3",
    'tags': ['React', 'Node'], 'image': ARImage},
    {'title': "Project 4", "description": "Description 4", "link": "Link 4",
    'tags': ['React', 'Node'], 'image': ARImage},
    {'title': "Project 5", "description": "Description 5", "link": "Link 5",
    'tags': ['React', 'Node'], 'image': ARImage},
    {'title': "Project 6", "description": "Description 6", "link": "Link 6",
    'tags': ['React', 'Node'], 'image': ARImage},
] as const;

export const experiences = [
    {'title': "Experience 1", "description": "Description 1", "Icon": React.createElement(GrContact), "date": "2020-2021"},
    {'title': "Experience 2", "description": "Description 2", "Icon": React.createElement(GrContact), "date": "2020-2021"},
    {'title': "Experience 3", "description": "Description 3", "Icon": React.createElement(GrContact), "date": "2020-2021"}
] as const;