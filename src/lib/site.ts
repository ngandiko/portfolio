export const site = {
  name: "Praneetha Gandikota",
  shortName: "Praneetha",
  // Placeholder until the production domain is confirmed.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://praneethagandikota.com",
  role: "UI/UX Designer",
  email: "gnspraneetha@gmail.com",
  location: "Chicago, IL",
  linkedin: "https://www.linkedin.com/in/praneetha-gandikota",
  resume: "/praneetha-gandikota-resume.pdf",
  availability: "Open to UI/UX design roles",
  description:
    "Praneetha Gandikota is a UI/UX designer with a background in artificial intelligence. She turns research into clear, warm, considered product experiences.",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const tools = [
  "Figma",
  "FigJam",
  "Prototyping",
  "Design systems",
  "User research",
  "Usability testing",
  "Information architecture",
  "Maze",
  "Accessibility",
  "HTML & CSS",
];

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string): string {
  return `${basePath}${path}`;
}
