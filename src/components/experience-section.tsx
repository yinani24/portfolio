const experience = [
  { company: "Payabli", role: "Software engineering", description: "Building software in financial technology." },
  { company: "Kolign", role: "Software engineering intern", description: "Working on existing products and developing new ones." },
  { company: "UC Davis", role: "AI / ML research", description: "Studying bias in language models with Professor Rafatirad.", href: "#research", link: "Read the paper" },
  { company: "Truckpedia / CodeLab", role: "React Native development", description: "Building mobile software for trucking logistics." },
];

const toolGroups = [
  { label: "Languages", tools: ["TypeScript", "JavaScript", "Python", "Go", "C", "C++"] },
  { label: "Web & mobile", tools: ["React", "Next.js", "React Native", "Node.js", "Express", "GraphQL"] },
  { label: "AI & data", tools: ["PyTorch", "NumPy", "Pandas", "PostgreSQL", "MySQL", "MongoDB"] },
  { label: "Collaboration", tools: ["Git", "Jira"] },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="background-heading">
      <div className="experience-heading">
        <div>
          <p className="section-label">Experience & community</p>
          <h2 id="background-heading">Where I&apos;ve built.</h2>
        </div>
        <a className="resume-link" href="/Yash_Inani_Resume.pdf">Full résumé <span aria-hidden="true">↗</span></a>
      </div>

      <div className="experience-layout">
        <div>
          <div className="current-role">
            <p className="role-eyebrow">Currently</p>
            <h3>Velanir</h3>
            <p className="current-role-title">Founding AI engineer</p>
            <p>Building AI systems. Contributing to the open-source tools behind them.</p>
            <a href="#open-source">Explore my OpenClaw contributions <span aria-hidden="true">↗</span></a>
          </div>
          <ul className="experience-timeline" aria-label="More experience">
            {experience.map(({ company, role, description, href, link }) => (
              <li key={company}>
                <div className="experience-role-heading">
                  <h3>{company}</h3>
                  <span>{role}</span>
                </div>
                <p>{description}{href && <> <a href={href}>{link} <span aria-hidden="true">↗</span></a></>}</p>
              </li>
            ))}
          </ul>
          <a className="experience-link" href="https://www.linkedin.com/in/yash-inani">More on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>

        <section id="skills" className="toolkit" aria-labelledby="skills-heading">
          <p className="section-label">The toolkit</p>
          <h3 id="skills-heading">Languages & tools</h3>
          <p className="toolkit-intro">From C and C++ to full-stack apps and machine learning.</p>
          {toolGroups.map(({ label, tools }) => (
            <div className="tool-group" key={label}>
              <h4>{label}</h4>
              <ul aria-label={label}>
                {tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          ))}
        </section>
      </div>

      <div className="beyond-code">
        <div>
          <h3>Building community, too.</h3>
          <p><strong>Google Developer Student Club, UC Davis</strong> — operations, fundraising, and technical workshops.</p>
          <p><strong>SacHacks</strong> — outreach and sponsorship support.</p>
        </div>
        <div className="away-from-keyboard">
          <p className="section-label">Away from the keyboard</p>
          <p>Badminton. Bike rides.<br />Business and finance podcasts.</p>
        </div>
      </div>
    </section>
  );
}
