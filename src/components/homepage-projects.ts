import { projects } from "./constants";

export type HomepageProject = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  era: "earlier" | "ai-assisted";
  credit?: { label: string; url: string };
};

// Earlier work is grouped by its original portfolio history, not an assumed
// absence of AI assistance. Explicit credits support the AI-assisted entries.
export const homepageProjects: HomepageProject[] = [
  {
    title: "Finance Tracker",
    description: "A tool that reads credit card statements, breaks down spending, and compares which cards would earn more rewards.",
    link: "https://github.com/yinani24/finance-tracker",
    tags: ["Python", "TypeScript", "Next.js"],
    era: "ai-assisted",
    credit: { label: "Developed with Claude", url: "https://github.com/yinani24/finance-tracker/commit/b98702763dad77a9a95a6dc9ce19b424cd1171f4" },
  },
  {
    title: "Warmth",
    description: "An open-source tool that reviews customer conversations against Paul Graham’s ‘Do Things that Don’t Scale’ and suggests specific ways to give customers more personal attention.",
    link: "https://github.com/yinani24/warmth-scorer",
    tags: ["Python", "Claude Agent SDK", "Composio"],
    era: "ai-assisted",
    credit: { label: "Developed with Claude", url: "https://github.com/yinani24/warmth-scorer/commit/c5bb7736b5a87a14e2aacf00e67614a77a05ac1f" },
  },
  {
    title: "Valentine Creator",
    description: "A small, playful app for making a personalized Valentine’s page with photos, messages, music, and a link to share.",
    link: "https://github.com/yinani24/valentines-day",
    tags: ["React", "JavaScript", "Firebase", "TailwindCSS"],
    era: "ai-assisted",
    credit: { label: "Claude-assisted updates", url: "https://github.com/yinani24/valentines-day/commit/9b7af00f26f8a980d4b72b8cb6493f41d3e30f11" },
  },
  {
    title: "This home page",
    description: "An old-web home for my projects, research, and open-source work. Redesigned in 2026 with Codex, keeping the simplicity of a ’90s HTML page.",
    link: "https://github.com/yinani24/portfolio",
    tags: ["Next.js", "TypeScript", "CSS"],
    era: "ai-assisted",
    credit: { label: "Redesigned with Codex", url: "https://github.com/yinani24/portfolio/pull/1" },
  },
  ...projects.map(({ title, description, link, tags }): HomepageProject => ({
    title,
    description,
    link: title === "Text Editor" ? "https://github.com/yinani24/text_editor" : link,
    tags: tags.filter((tag) => tag !== "All"),
    era: "earlier",
  })),
];
