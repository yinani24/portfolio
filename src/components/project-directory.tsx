"use client";

import { useState } from "react";

type Project = { title: string; description: string; link: string; tags: string[] };

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="project-directory">
      {projects.map((project) => (
        <li key={project.link}>
          <a href={project.link}>{project.title}</a>
          <p>{project.description}</p>
          <small className="project-tools">{project.tags.join(" / ")}</small>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDirectory({ projects, featuredTitles }: { projects: Project[]; featuredTitles: string[] }) {
  const [tag, setTag] = useState("All");
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();
  const featured = featuredTitles.flatMap((title) => projects.filter((project) => project.title === title));
  const archive = projects.filter((project) => !featuredTitles.includes(project.title));
  const filtered = projects.filter((project) => project.tags.includes(tag));

  return (
    <>
      <div className="project-filter">
        <label htmlFor="project-language">Browse by technology</label>{" "}
        <select id="project-language" value={tag} onChange={(event) => setTag(event.target.value)}>
          <option>All</option>
          {tags.map((name) => <option key={name}>{name}</option>)}
        </select>
      </div>
      {tag === "All" ? (
        <>
          <ProjectList projects={featured} />
          <details>
            <summary>More projects ({archive.length})</summary>
            <ProjectList projects={archive} />
          </details>
        </>
      ) : (
        <div aria-live="polite">
          <p>{filtered.length} {filtered.length === 1 ? "project" : "projects"} using {tag}.</p>
          <ProjectList projects={filtered} />
        </div>
      )}
    </>
  );
}
