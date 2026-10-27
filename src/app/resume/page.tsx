import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Praneetha Gandikota — UI/UX designer with a background in artificial intelligence. Experience, projects, education and skills.",
};

const experience = [
  {
    role: "UI/UX Designer Intern",
    company: "Skratcher Inc.",
    period: "Apr 2026 – Jun 2026",
    points: [
      "Redesigned 20+ application screens by auditing existing workflows, resolving interaction inconsistencies and building interactive Figma prototypes, enabling stakeholders and developers to validate redesigned experiences before implementation.",
      "Revamped 25% of the application's design after major functionality changes, restructuring affected workflows and interfaces to support revised requirements while maintaining system consistency.",
      "Translated requirements for 15+ product features and 50+ user stories into structured workflows and Jira documentation, aligning design and engineering teams throughout implementation.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "ProDiscover Forensics",
    period: "Sep 2024 – Dec 2024",
    points: [
      "Collaborated with UX designers and stakeholders to refine end-to-end investigation workflows in ProDiscover Pro, used by 50+ organisations, translating complex forensic processes into clearer, more consistent interactions.",
      "Contributed to the design and implementation of an automated bank-statement processing workflow that reduced manual verification time by roughly 10%.",
      "Designed and implemented the supporting workflow for 5+ bank-statement formats and 500+ transactions, structuring complex financial data for easier investigation and reporting.",
    ],
  },
];

const projects = [
  {
    name: "Nomad — Personalized local discovery",
    points: [
      "Conducted an end-to-end UX case study with 6 user interviews and benchmarking of 8 discovery platforms, synthesising 4 core insights around fragmented discovery, contextual relevance, decision confidence and choice overload.",
      "Designed the information architecture, 3 core user flows, wireframes and high-fidelity prototype across 5 primary navigation areas in Figma; evaluated usability through task completion, misclicks and navigation behaviour.",
      "Completed 5+ design iterations based on usability findings, improving navigation, hierarchy and interaction clarity while achieving the highest task success rate across tested tasks.",
    ],
  },
  {
    name: "Tiny Threads — Children's resale marketplace",
    points: [
      "Synthesised secondary research and competitive analysis of 10 resale platforms into 6 recurring behavioural patterns, identifying tensions around seller effort, buyer confidence, transaction value and child-specific shopping behaviour.",
      "Designed a two-sided marketplace experience with separate buyer and seller journeys, covering 7+ key workflows including AI-assisted listing, condition and flaw assessment, discovery, cart, seller management and post-purchase fulfilment.",
      "Refined the experience through usability review and iteration, resolving 10+ usability issues involving filter clarity, cart visibility, product transparency, terminology and listing controls.",
    ],
  },
];

const skills = [
  {
    label: "Design & prototyping",
    value:
      "Figma, FigJam, wireframing, interactive prototyping, design systems, typography, colour theory, Gestalt principles.",
  },
  {
    label: "Research & UX",
    value:
      "Ideation, user research, interviews, personas, journey mapping, empathy mapping, affinity diagramming, usability testing, Maze, information architecture, usability heuristics, accessibility (WCAG), design thinking, design sprints.",
  },
  {
    label: "Technical & collaboration",
    value:
      "Python, HTML, CSS, PostgreSQL, Jira, cross-functional collaboration, stakeholder presentations.",
  },
];

export default function ResumePage() {
  return (
    <div className="shell py-10 sm:py-16">
      <div className="mx-auto max-w-[46rem]">
        <div className="no-print mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">Résumé</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary px-5 py-2.5 text-[0.8125rem]"
            >
              Download PDF
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn btn-ghost px-5 py-2.5 text-[0.8125rem]"
            >
              Email me
            </a>
          </div>
        </div>

        <article className="print-page rounded-[1.25rem] border border-line bg-white px-6 py-10 sm:px-12 sm:py-14">
          <header className="border-b border-line pb-8">
            <h1 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] leading-none tracking-[-0.03em]">
              Praneetha Gandikota
            </h1>
            <p className="mt-3 text-[0.9375rem] text-ink-soft">
              UI/UX Designer · Chicago, IL
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-muted">
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                linkedin.com/in/praneetha-gandikota
              </a>
            </div>
          </header>

          <section className="mt-8">
            <h2 className="resume-heading">Summary</h2>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-ink-soft">
              UI/UX designer with a background in artificial intelligence and
              software development. Experienced in end-to-end research,
              information architecture, interaction design and high-fidelity
              prototyping. Comfortable translating complex, technical workflows
              into clear interfaces — and working closely with engineers to ship
              them.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="resume-heading">Work experience</h2>
            <div className="mt-4 space-y-6">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
                      {job.role} — {job.company}
                    </h3>
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-ink-muted">
                      {job.period}
                    </p>
                  </div>
                  <ul className="mt-2.5 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-[0.875rem] leading-[1.6] text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-line-strong"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="resume-heading">Projects</h2>
            <div className="mt-4 space-y-5">
              {projects.map((project) => (
                <div key={project.name}>
                  <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
                    {project.name}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-[0.875rem] leading-[1.6] text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-line-strong"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="resume-heading">Education</h2>
            <div className="mt-4 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
                DePaul University — M.S. in Artificial Intelligence
              </h3>
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-ink-muted">
                Expected Mar 2027
              </p>
            </div>
            <p className="mt-1 text-[0.875rem] text-ink-muted">
              Chicago, IL · Relevant coursework: Introduction to User-Centered
              Design, covering research, analysis, ideation, prototyping and
              usability evaluation.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="resume-heading">Skills</h2>
            <dl className="mt-3 space-y-2.5">
              {skills.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-4"
                >
                  <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-ink-muted sm:pt-[0.2rem]">
                    {group.label}
                  </dt>
                  <dd className="text-[0.875rem] leading-[1.6] text-ink-soft">
                    {group.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-8">
            <h2 className="resume-heading">Certifications</h2>
            <div className="mt-3 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
                Google UX Design Professional Certificate
              </h3>
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-ink-muted">
                Aug 2026
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
