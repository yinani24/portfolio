import { homepageProjects } from "@/components/homepage-projects";
import ProjectDirectory from "@/components/project-directory";
import PlainContactForm from "@/components/plain-contact-form";
import ExperienceSection from "@/components/experience-section";
import Image from "next/image";
import headshot from "../../public/yash-inani-headshot.jpg";

const featuredTitles = ["Synthia AI", "Simulation: Crypto Currency", "Shell", "Butterfly or Moth CNN"];

export default function HomePage() {
  return (
    <main className="personal-site" id="top">
      <header>
        <h1>Yash Inani</h1>
        <p className="site-subtitle">Founding AI engineer · San Francisco</p>
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
          <a href="#experience">Experience</a>
        </nav>
      </header>
      <hr />
      <section id="about" className="personal-intro" aria-labelledby="about-heading">
        <div>
          <p className="section-label">Engineering · Open source · Research</p>
          <h2 id="about-heading">I build AI systems and the tools that make them work.</h2>
          <p className="intro-lead">I&apos;m a founding AI engineer at Velanir, an OpenClaw contributor, and a coauthor of research on bias in large language models.</p>
          <p>I studied Computer Science at UC Davis and grew up in Dubai. My work spans AI agents, financial infrastructure, and full-stack software.</p>
          <p className="intro-links"><a href="#open-source">Explore my contributions →</a><a href="#research">Read my research →</a></p>
        </div>
        <Image className="personal-portrait" src={headshot} alt="Yash Inani" width={260} height={260} sizes="(max-width: 767px) 160px, 260px" priority />
      </section>
      <hr />
      <section id="open-source" aria-labelledby="open-source-heading">
        <p className="section-label">Open source · Two merged contributions</p>
        <h2 id="open-source-heading">Contributing to OpenClaw</h2>
        <p className="section-intro">I contribute to OpenClaw as <a href="https://github.com/velanir-ai-manager">velanir-ai-manager</a>, improving how agents understand conversations and deliver reliable responses. Both contributions below were merged upstream.</p>
        <ul className="project-directory contribution-grid">
          <li>
            <p className="contribution-status">Merged · Microsoft Teams</p>
            <h3><a href="https://github.com/openclaw/openclaw/pull/101856">Giving agents the context they were missing</a></h3>
            <p>Teams quote replies were losing the message being referenced. My fix brings that context into the agent&apos;s conversation, retrieves the full message in one-to-one chats, and preserves a preview fallback.</p>
            <small>OpenClaw #101856 · Merged July 9, 2026 · Built with Claude Code</small>
          </li>
          <li>
            <p className="contribution-status">Merged · Agent reliability</p>
            <h3><a href="https://github.com/openclaw/openclaw/pull/101036">Keeping internal model markers out of user replies</a></h3>
            <p>Provider reasoning markers could leak into streamed replies and scheduled summaries. My fix applies OpenClaw&apos;s visible-text sanitizer before those messages reach users.</p>
            <small>OpenClaw #101036 · Merged July 6, 2026</small>
          </li>
        </ul>
        <p><a href="https://github.com/openclaw/openclaw/pulls?q=is%3Apr+author%3Avelanir-ai-manager">All my OpenClaw pull requests →</a></p>
      </section>
      <hr />
      <section id="projects" aria-labelledby="projects-heading">
        <p className="section-label">Selected projects</p>
        <h2 id="projects-heading">Two chapters of building</h2>
        <p className="section-intro">From writing every line myself to building alongside AI coding assistants. The distinction is how I developed each project.</p>
        <ProjectDirectory projects={homepageProjects} featuredTitles={featuredTitles} />
        <p><a href="https://github.com/yinani24?tab=repositories">More code on GitHub →</a></p>
      </section>
      <hr />
      <div className="research-community">
      <section id="research" aria-labelledby="research-heading">
        <h2 id="research-heading">Research</h2>
        <p><a href="https://arxiv.org/abs/2511.14153">A Comprehensive Study of Implicit and Explicit Biases in Large Language Models</a></p>
        <p><small>Fatima Kazi, Alex Young, <strong>Yash Inani</strong>, and Setareh Rafatirad · arXiv preprint · November 2025</small></p>
        <p>We studied how language models detect explicit and implicit social biases, using benchmarks including StereoSet and CrowS-Pairs. The work explores a bias-identification framework and ways to improve detection through prompting, fine-tuning, and data augmentation.</p>
        <p><a href="https://arxiv.org/abs/2511.14153">Abstract and citation</a> · <a href="https://arxiv.org/pdf/2511.14153">Read the paper (PDF)</a></p>
      </section>
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
      </div>
      <hr />
      <ExperienceSection />
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
