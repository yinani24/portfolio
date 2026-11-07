import { projects } from "@/components/constants";
import ProjectDirectory from "@/components/project-directory";
import PlainContactForm from "@/components/plain-contact-form";

const featuredTitles = ["Synthia AI", "Simulation: Crypto Currency", "Shell", "Butterfly or Moth CNN"];

export default function HomePage() {
  const directory = projects.map(({ title, description, link, tags }) => ({
    title, description,
    link: title === "Text Editor" ? "https://github.com/yinani24/text_editor" : link,
    tags: tags.filter((tag) => tag !== "All"),
  }));

  return (
    <main className="personal-site" id="top">
      <header>
        <h1>Yash Inani&apos;s Home Page</h1>
        <p><em>Software engineer · San Francisco</em></p>
        <nav aria-label="Personal links">
          <a href="https://github.com/yinani24">GitHub</a>{" "}
          <a href="https://www.linkedin.com/in/yash-inani">LinkedIn</a>{" "}
          <a href="/Yash_Inani_Resume.pdf">Résumé (PDF)</a>{" "}
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <hr />
      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">Hello, I&apos;m Yash.</h2>
        <p>I build software, work with AI, and enjoy figuring out how things work. I&apos;m a founding AI engineer at Velanir.</p>
        <p>I studied Computer Science at UC Davis and grew up in Dubai. This is my little corner of the web.</p>
      </section>
      <hr />
      <section id="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Things I&apos;ve worked on</h2>
        <ProjectDirectory projects={directory} featuredTitles={featuredTitles} />
        <p><a href="https://github.com/yinani24?tab=repositories">More code on GitHub →</a></p>
      </section>
      <hr />
      <section id="experience" aria-labelledby="background-heading">
        <h2 id="background-heading">A little background</h2>
        <p>My work has taken me through AI, financial technology, and full-stack development. At UC Davis, I also worked on research into bias in language models.</p>
        <p>Away from the keyboard: badminton, bike rides, and business and finance podcasts.</p>
        <details>
          <summary>Experience and community</summary>
          <ul>
            <li><strong>Velanir:</strong> Founding AI engineer.</li>
            <li><strong>Payabli:</strong> Software engineering in financial technology.</li>
            <li><strong>Kolign:</strong> Software engineering internship, working on existing and new products.</li>
            <li><strong>UC Davis:</strong> AI/ML research with Professor Rafatirad, studying bias in language models.</li>
            <li><strong>Truckpedia / CodeLab:</strong> React Native development for trucking logistics.</li>
            <li><strong>Google Developer Student Club:</strong> Operations, fundraising, and technical workshops at UC Davis.</li>
            <li><strong>SacHacks:</strong> Outreach and sponsorship support.</li>
          </ul>
          <p><a href="https://www.linkedin.com/in/yash-inani">Full experience on LinkedIn</a> · <a href="/Yash_Inani_Resume.pdf">Download my résumé</a></p>
        </details>
        <details id="skills">
          <summary>Languages and tools</summary>
          <p>TypeScript, JavaScript, Python, Go, C, C++, React, Next.js, React Native, Node.js, Express, GraphQL, PostgreSQL, MySQL, MongoDB, PyTorch, NumPy, Pandas, Git, and Jira.</p>
        </details>
      </section>
      <hr />
      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Say hello</h2>
        <p>Have something interesting to build or talk about?</p>
        <p><a href="https://www.linkedin.com/in/yash-inani">Find me on LinkedIn</a></p>
        <details>
          <summary>Send me a message</summary>
          <PlainContactForm />
        </details>
      </section>
      <hr />
      <footer>
        <p><small><em>Last updated: <time dateTime="2026-11-07">November 7, 2026</time></em></small></p>
        <p>Thanks for visiting. <a href="#top">Back to top</a></p>
      </footer>
    </main>
  );
}
