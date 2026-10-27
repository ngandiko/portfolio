import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Praneetha Gandikota is a UI/UX designer with a background in artificial intelligence, based in Chicago. Research-led product design, interaction design and visual craft.",
};

const experience = [
  {
    role: "UI/UX Designer Intern",
    company: "Skratcher Inc.",
    period: "Apr – Jun 2026",
    points: [
      "Redesigned 20+ application screens by auditing existing workflows, resolving interaction inconsistencies and building interactive Figma prototypes for stakeholder and developer validation.",
      "Revamped 25% of the application's design after major functionality changes, restructuring affected workflows while keeping the system consistent.",
      "Translated requirements for 15+ product features and 50+ user stories into structured workflows and Jira documentation, keeping design and engineering aligned.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "ProDiscover Forensics",
    period: "Sep – Dec 2024",
    points: [
      "Worked with UX designers and stakeholders to refine end-to-end investigation workflows in ProDiscover Pro, used by 50+ organisations.",
      "Contributed to an automated bank-statement processing workflow that reduced manual verification time by roughly 10%.",
      "Designed and implemented the supporting workflow for 5+ bank-statement formats and 500+ transactions.",
    ],
  },
];

const skills = [
  {
    title: "Design & prototyping",
    items: [
      "Figma",
      "FigJam",
      "Wireframing",
      "Interactive prototyping",
      "Design systems",
      "Typography",
      "Colour theory",
      "Gestalt principles",
    ],
  },
  {
    title: "Research & UX",
    items: [
      "User interviews",
      "User personas",
      "Journey mapping",
      "Affinity diagramming",
      "Usability testing",
      "Maze",
      "Information architecture",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Technical & collaboration",
    items: [
      "Python",
      "HTML & CSS",
      "PostgreSQL",
      "Jira",
      "Cross-functional collaboration",
      "Stakeholder presentations",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="shell pt-10 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h1 className="h1 mt-5 max-w-[16ch]">
              A designer who likes the messy middle.
            </h1>
            <p className="lede mt-7 max-w-[52ch]">
              I came to design through artificial intelligence and software
              development. That path taught me to ask what a system actually
              needs before deciding what it should show — and to treat craft as
              something that has to survive build.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand">
              <Image
                src="/images/shared/portrait.jpg"
                alt="Praneetha Gandikota, UI/UX designer"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_28%] saturate-[0.94]"
              />
            </div>
            <p className="mt-4 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
              {site.location} · {site.availability}
            </p>
          </div>
        </div>
      </section>

      <section className="shell pt-20 sm:pt-28">
        <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">01 — The short version</p>
          </div>
          <div className="space-y-6 lg:col-span-8">
            <p className="prose-body max-w-[58ch]">
              Working on forensic tools taught me how much clarity matters when
              the stakes are high. Studying AI taught me to question what a
              product is really optimising for. Now I design digital products
              end to end — research, structure, interface and prototype — and I
              like the part where the brief is still vague.
            </p>
            <p className="prose-body max-w-[58ch]">
              I care about interfaces that are calm, legible and honest. I care
              about the states nobody screenshots: empty, loading, error,
              first-time. And I care about shipping, because a design that
              can&apos;t be built isn&apos;t finished.
            </p>
            <p className="prose-body max-w-[58ch]">
              I&apos;m currently finishing an M.S. in Artificial Intelligence at
              DePaul University and looking for a full-time product design role
              where research and craft are treated as part of the job.
            </p>
          </div>
        </div>
      </section>

      <section className="shell pt-20 sm:pt-28">
        <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">02 — Experience</p>
            <h2 className="h2 mt-4 max-w-[12ch]">Where I&apos;ve worked.</h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="space-y-10">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 0.06}>
                  <li className="border-t border-line pt-6 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-serif text-[1.5rem] leading-tight tracking-[-0.02em]">
                        {job.role}
                      </h3>
                      <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-1 text-[0.9375rem] text-plum">
                      {job.company}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-line-strong"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="shell pt-20 sm:pt-28">
        <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">03 — Education</p>
            <h2 className="h2 mt-4 max-w-[12ch]">And what I studied.</h2>
          </div>
          <div className="grid gap-10 lg:col-span-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Expected March 2027
              </p>
              <h3 className="mt-2 font-serif text-[1.375rem] leading-tight">
                M.S. Artificial Intelligence
              </h3>
              <p className="mt-1 text-[0.9375rem] text-plum">
                DePaul University · Chicago, IL
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                Relevant coursework: Introduction to User-Centered Design —
                covering the end-to-end process from research and analysis
                through ideation, prototyping and usability evaluation.
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Issued August 2026
              </p>
              <h3 className="mt-2 font-serif text-[1.375rem] leading-tight">
                Google UX Design
              </h3>
              <p className="mt-1 text-[0.9375rem] text-plum">
                Professional Certificate
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                A full UX foundation: research, wireframing, prototyping,
                usability testing and accessible design practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pt-20 sm:pt-28">
        <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">04 — Toolkit</p>
            <h2 className="h2 mt-4 max-w-[12ch]">What I work with.</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {skills.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 text-[0.75rem] leading-none text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell pt-20 sm:pt-28">
        <div className="flex flex-col gap-6 rounded-[1.75rem] bg-paper-warm p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <p className="eyebrow">Next</p>
            <p className="mt-3 max-w-[34ch] font-serif text-[1.75rem] leading-tight tracking-[-0.02em]">
              See how the thinking holds up in the work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#work" className="btn btn-primary">
              View case studies
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
