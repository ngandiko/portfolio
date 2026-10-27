import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/case-study";
import { getProject } from "@/lib/projects";

const project = getProject("nomad")!;

export const metadata: Metadata = {
  title: "Nomad — Personalized local discovery",
  description:
    "A mobile discovery app that finds places which fit your mood, budget and company. End-to-end UX case study by Praneetha Gandikota.",
};

export default function NomadPage() {
  return <CaseStudy project={project} />;
}
