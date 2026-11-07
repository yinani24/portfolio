"use client";

import { useState } from "react";
import type { HomepageProject } from "./homepage-projects";

function ProjectList({ projects }: { projects: HomepageProject[] }) {
  return (
    <ul className="project-directory">
      {projects.map((project) => (
        <li key={project.link}>
          <a href={project.link}>{project.title}</a>
          <p>{project.description}</p>
          <small className="project-tools">{project.tags.join(" / ")}</small>
          {project.credit && <p className="project-credit"><small><a href={project.credit.url}>{project.credit.label}</a></small></p>}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDirectory({ projects, featuredTitles }: { projects: HomepageProject[]; featuredTitles: string[] }) {
  const [tag, setTag] = useState("All");
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();
  const filtered = projects.filter((project) => tag === "All" || project.tags.includes(tag));
  const assisted = filtered.filter((project) => project.era === "ai-assisted");
  const earlier = filtered.filter((project) => project.era === "earlier");
  const featured = featuredTitles.flatMap((title) => earlier.filter((project) => project.title === title));
  const archive = earlier.filter((project) => !featuredTitles.includes(project.title));

  return (
    <>
      <div className="project-filter">
        <label htmlFor="project-language">Browse by technology</label>{" "}
        <select id="project-language" value={tag} onChange={(event) => setTag(event.target.value)}>
          <option>All</option>
          {tags.map((name) => <option key={name}>{name}</option>)}
        </select>
      </div>
      <p className="project-count" role="status">{filtered.length} {filtered.length === 1 ? "project" : "projects"}{tag !== "All" ? ` using ${tag}` : " across two chapters"}.</p>
      <div className="project-chapters">
      <section aria-labelledby="ai-projects-heading">
        <p className="chapter-date">2026 · With AI coding assistants</p>
        <h3 id="ai-projects-heading">Post-AI</h3>
        <p>Newer work with AI coding tools as part of the process. Each entry links to its development credit.</p>
        {assisted.length ? <ProjectList projects={assisted} /> : <p>No projects in this chapter use {tag}.</p>}
      </section>
      <section aria-labelledby="earlier-projects-heading">
        <p className="chapter-date">2022–2024 · Independently coded</p>
        <h3 id="earlier-projects-heading">Pre-AI</h3>
        <p>My original projects, written without ChatGPT, Claude Code, or other AI coding assistance. Some explore AI as a subject; the code was my own.</p>
        {tag === "All" ? (
          <>
            <ProjectList projects={featured} />
            <details>
              <summary>More earlier projects ({archive.length})</summary>
              <ProjectList projects={archive} />
            </details>
          </>
        ) : earlier.length ? <ProjectList projects={earlier} /> : <p>No projects in this chapter use {tag}.</p>}
      </section>
      </div>
    </>
  );
}
