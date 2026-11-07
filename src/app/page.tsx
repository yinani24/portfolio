import { homepageProjects } from "@/components/homepage-projects";
import ProjectDirectory from "@/components/project-directory";
import PlainContactForm from "@/components/plain-contact-form";
import Image from "next/image";
import headshot from "../../public/yash-inani-headshot.jpg";

const featuredTitles = ["Synthia AI", "Simulation: Crypto Currency", "Shell", "Butterfly or Moth CNN"];

export default function HomePage() {
  return (
    <main className="personal-site" id="top">
      <header>
        <h1>Yash Inani&apos;s Home Page</h1>
        <p><em>Software engineer · San Francisco</em></p>
        <nav aria-label="Personal links">
          <a href="https://github.com/yinani24">Personal GitHub</a>{" "}
          <a href="https://github.com/velanir-ai-manager">Work GitHub</a>{" "}
          <a href="https://www.linkedin.com/in/yash-inani">LinkedIn</a>{" "}
          <a href="/Yash_Inani_Resume.pdf">Résumé (PDF)</a>{" "}
          <a href="#contact">Contact</a>
        </nav>
        <nav aria-label="On this page">
          <a href="#projects">Projects</a>
          <a href="#open-source">Open source</a>
          <a href="#research">Research</a>
          <a href="#judging">Judging</a>
        </nav>
      </header>
      <hr />
      <section id="about" className="personal-intro" aria-labelledby="about-heading">
        <div>
        <h2 id="about-heading">Hello, I&apos;m Yash.</h2>
        <p>I build software, work with AI, and enjoy figuring out how things work. I&apos;m a founding AI engineer at Velanir.</p>
        <p>I studied Computer Science at UC Davis and grew up in Dubai. This is my little corner of the web.</p>
        </div>
        <Image className="personal-portrait" src={headshot} alt="Yash Inani" width={168} height={168} sizes="(max-width: 520px) 140px, 168px" priority />
      </section>
      <hr />
      <section id="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Things I&apos;ve worked on</h2>
        <p>Two chapters of building: before and after AI became part of my coding process. “Pre-AI” and “post-AI” describe how I wrote the code, not whether the project itself uses AI.</p>
        <ProjectDirectory projects={homepageProjects} featuredTitles={featuredTitles} />
        <p><a href="https://github.com/yinani24?tab=repositories">More code on GitHub →</a></p>
      </section>
      <hr />
      <section id="open-source" aria-labelledby="open-source-heading">
        <h2 id="open-source-heading">Open source</h2>
        <p>I also contribute as <a href="https://github.com/velanir-ai-manager">velanir-ai-manager</a>. My work on OpenClaw includes these merged fixes:</p>
        <ul className="project-directory">
          <li>
            <a href="https://github.com/openclaw/openclaw/pull/101856">Make Teams quote replies understandable to the agent</a>
            <p>Preserves quoted message text in Microsoft Teams replies, with full-text retrieval for one-to-one chats and a preview fallback.</p>
            <small>OpenClaw #101856 · Merged July 9, 2026 · Built with Claude Code</small>
          </li>
          <li>
            <a href="https://github.com/openclaw/openclaw/pull/101036">Keep internal reasoning markers out of replies</a>
            <p>Sanitizes streamed assistant text so provider markers don’t appear in user-facing messages and scheduled summaries.</p>
            <small>OpenClaw #101036 · Merged July 6, 2026</small>
          </li>
        </ul>
        <p><a href="https://github.com/openclaw/openclaw/pulls?q=is%3Apr+author%3Avelanir-ai-manager">All my OpenClaw pull requests →</a></p>
      </section>
      <hr />
      <section id="research" aria-labelledby="research-heading">
        <h2 id="research-heading">Research</h2>
        <p><a href="https://arxiv.org/abs/2511.14153">A Comprehensive Study of Implicit and Explicit Biases in Large Language Models</a></p>
        <p><small>Fatima Kazi, Alex Young, <strong>Yash Inani</strong>, and Setareh Rafatirad · arXiv preprint · November 2025</small></p>
        <p>We studied how language models detect explicit and implicit social biases, using benchmarks including StereoSet and CrowS-Pairs. The work explores a bias-identification framework and ways to improve detection through prompting, fine-tuning, and data augmentation.</p>
        <p><a href="https://arxiv.org/abs/2511.14153">Abstract and citation</a> · <a href="https://arxiv.org/pdf/2511.14153">Read the paper (PDF)</a></p>
      </section>
      <hr />
      <section id="judging" aria-labelledby="judging-heading">
        <h2 id="judging-heading">Judging, mentoring &amp; community</h2>
        <p>I also review other people&apos;s work, from hackathon demos to AI safety research.</p>
        <h3>Events I&apos;ve judged</h3>
        <ul>
          <li><a href="https://www.calhacks.io/">Cal Hacks 13.0</a> — judge, October 23–25, 2026, San Francisco.</li>
          <li><a href="https://ucsc-ai-hackathon.devpost.com/">UCSC AI Hackathon (Hack.dev)</a> — Round 1 judge, October 11, 2026.</li>
          <li><a href="https://apartresearch.com/sprints/ai-collusion-research-sprint-2026-10-23-to-2026-10-25">AI Collusion Research Sprint</a>, Apart Research — reviewed eight research projects following the October 23–25, 2026 sprint.</li>
        </ul>
        <h3>Other roles</h3>
        <ul>
          <li><a href="https://munichtechexpo.com/hackathons">MunichTech EXPO hackathons</a> — listed as a judge representing Velanir AI.</li>
          <li><a href="https://luma.com/xdzhu4tn">DNAForge &amp; MTC Berkeley: AI × Biology Hackathon</a> — lunch mentor, helping teams think through model evaluation. November 14, 2026, Berkeley (upcoming).</li>
        </ul>
        <p>At UC Davis, I also helped organize technical workshops and events through Google Developer Student Club and supported outreach at SacHacks.</p>
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
