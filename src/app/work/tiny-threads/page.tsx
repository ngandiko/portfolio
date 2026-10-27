import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/case-study";
import { getProject } from "@/lib/projects";

const project = getProject("tiny-threads")!;
const screens = project.finalDesign.screens;

const finalGroups = [
  {
    title: "Buying",
    blurb:
      "Six screens that take a parent from “what does my kid need?” to a confident purchase — with condition and fit visible before checkout.",
    screens: screens.slice(0, 6),
  },
  {
    title: "Selling",
    blurb:
      "A five-step listing flow designed to take minutes, not evenings, with a review step before anything goes live.",
    screens: screens.slice(6),
  },
];

export const metadata: Metadata = {
  title: "Tiny Threads — Children's resale marketplace",
  description:
    "A two-sided resale marketplace for pre-loved children's clothing, designed to reduce seller effort and build buyer confidence. UX case study by Praneetha Gandikota.",
};

export default function TinyThreadsPage() {
  return <CaseStudy project={project} finalGroups={finalGroups} />;
}
