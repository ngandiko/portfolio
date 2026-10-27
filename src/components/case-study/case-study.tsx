import Image from "next/image";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { CaseHero, NextProject } from "@/components/case-study/case-hero";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseSection } from "@/components/case-study/case-section";
import { Reveal } from "@/components/reveal";
import { withBase } from "@/lib/site";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The problem" },
  { id: "research", label: "Research" },
  { id: "archetypes", label: "Archetypes" },
  { id: "insights", label: "Insights" },
  { id: "process", label: "Process" },
  { id: "design", label: "Final design" },
  { id: "impact", label: "Impact" },
  { id: "learnings", label: "Learnings" },
];

type FinalGroup = {
  title: string;
  blurb: string;
  screens: Project["finalDesign"]["screens"];
};

const quoteTone = {
  terracotta: "bg-terracotta-soft/55",
  sage: "bg-sage-soft/60",
};

const impactTone = {
  terracotta: "text-terracotta",
  sage: "text-sage-soft",
};

export function CaseStudy({
  project,
  finalGroups,
}: {
  project: Project;
  finalGroups?: FinalGroup[];
}) {
  return (
    <article>
      <CaseHero project={project} />

      <div className="shell mt-16 sm:mt-20">
        <div className="grid gap-12 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16">
          <CaseStudyNav items={toc} />

          <div className="min-w-0">
            <CaseSection id="overview" number="01" title="Overview">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
                <p className="prose-body max-w-[54ch]">
                  {project.overview.body}
                </p>
                <ul className="space-y-0">
                  {project.overview.features.map((feature) => (
                    <li
                      key={feature.title}
                      className="border-t border-line py-4 first:border-t-0 first:pt-0 last:pb-0"
                    >
                      <h3 className="text-[1rem] font-sans font-medium tracking-[-0.01em] text-ink">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {feature.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </CaseSection>

            <CaseSection id="problem" number="02" title="The problem">
              <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
                <p className="prose-body max-w-[54ch]">{project.problem.body}</p>
                <Reveal>
                  <blockquote
                    className={`rounded-2xl p-7 sm:p-8 ${quoteTone[project.accent]}`}
                  >
                    <p className="font-serif text-[clamp(1.375rem,2.1vw,1.75rem)] leading-[1.28] tracking-[-0.015em] text-ink">
                      “{project.problem.quote.text}”
                    </p>
                    <footer className="mt-5 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                      {project.problem.quote.source}
                    </footer>
                  </blockquote>
                </Reveal>
              </div>
            </CaseSection>

            <CaseSection id="research" number="03" title="Research">
              <div className="grid gap-4 sm:grid-cols-3">
                {project.research.methods.map((method, i) => (
                  <Reveal key={method.title} delay={i * 0.06}>
                    <div className="h-full rounded-2xl border border-line bg-paper-warm/50 p-5">
                      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-plum">
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.25rem] leading-tight tracking-[-0.01em]">
                        {method.title}
                      </h3>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-soft">
                        {method.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-12">
                <p className="eyebrow">What I heard</p>
                <ul className="mt-5 grid gap-x-10 gap-y-0 sm:grid-cols-2">
                  {project.research.findings.map((finding, i) => (
                    <li
                      key={finding}
                      className="flex gap-4 border-t border-line py-4"
                    >
                      <span className="mt-1 font-mono text-[0.5625rem] tracking-[0.1em] text-plum">
                        0{i + 1}
                      </span>
                      <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                        {finding}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </CaseSection>

            <CaseSection
              id="archetypes"
              number="04"
              title="Who I designed for"
              intro="Three behavioural archetypes, built from the interviews rather than from demographics alone."
            >
              <div className="grid gap-10 md:grid-cols-3 md:gap-8">
                {project.archetypes.map((persona, i) => (
                  <Reveal key={persona.name} delay={i * 0.07}>
                    <div className="h-full border-t border-line pt-6">
                      <div className="flex items-center gap-3.5">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-sand">
                          <Image
                            src={withBase(persona.image)}
                            alt={`${persona.name} archetype`}
                            fill
                            sizes="48px"
                            className="object-cover object-[50%_25%]"
                          />
                        </div>
                        <div>
                          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                            {persona.meta}
                          </p>
                          <h3 className="mt-1 font-serif text-[1.375rem] leading-tight tracking-[-0.015em]">
                            {persona.name}
                          </h3>
                        </div>
                      </div>

                      <blockquote className="mt-5 min-h-[4.4em] font-serif text-[1.125rem] italic leading-[1.45] text-ink-soft">
                        “{persona.quote}”
                      </blockquote>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {persona.details.map((detail) => (
                          <li
                            key={detail}
                            className="rounded-full border border-line px-2.5 py-1 text-[0.75rem] leading-snug text-ink-muted"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="insights" number="05" title="What the research changed">
              <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
                {project.insights.map((insight, i) => (
                  <Reveal key={insight.title} delay={i * 0.05}>
                    <div className="border-t border-line py-6">
                      <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-plum">
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.375rem] leading-[1.2] tracking-[-0.015em]">
                        {insight.title}
                      </h3>
                      <p className="mt-2 max-w-[42ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                        {insight.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="process" number="06" title="Ideation & design process">
              <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {project.process.steps.map((step, i) => (
                  <li key={step.title} className="border-t border-line pt-4">
                    <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-plum">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-[0.9375rem] font-medium tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>

              <Reveal>
                <div className="mt-10 rounded-2xl bg-paper-warm p-5 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <p className="eyebrow">Low-fidelity wireframes</p>
                    <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                      {project.process.wireframes.length} frames
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
                    {project.process.wireframes.map((wireframe, i) => (
                      <div key={wireframe.src} className="relative">
                        <div className="relative aspect-[597/1213]">
                          <Image
                            src={withBase(wireframe.src)}
                            alt={`${project.name} wireframe ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 30vw, 16vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </CaseSection>

            <CaseSection
              id="design"
              number="07"
              title="Final design"
              intro={project.finalDesign.intro}
            >
              {finalGroups ? (
                <div className="space-y-16">
                  {finalGroups.map((group) => (
                    <div key={group.title}>
                      <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-serif text-[1.5rem] tracking-[-0.02em]">
                          {group.title}
                        </h3>
                        <p className="max-w-[46ch] text-[0.875rem] leading-relaxed text-ink-muted">
                          {group.blurb}
                        </p>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3">
                        {group.screens.map((screen) => (
                          <DesignCard key={screen.src} screen={screen} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3">
                  {project.finalDesign.screens.map((screen) => (
                    <DesignCard key={screen.src} screen={screen} />
                  ))}
                </div>
              )}
            </CaseSection>

            <CaseSection id="impact" number="08" title="Impact">
              <Reveal>
                <div className="rounded-2xl bg-ink p-7 text-paper sm:p-10">
                  <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-paper/55">
                    What changed
                  </p>
                  <dl className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {project.impact.map((item) => (
                      <div key={item.label}>
                        <dt
                          className={`font-serif text-[clamp(2.25rem,3.4vw,3rem)] leading-none tracking-[-0.03em] ${impactTone[project.accent]}`}
                        >
                          {item.value}
                        </dt>
                        <dd className="mt-3 max-w-[22ch] text-[0.8125rem] leading-relaxed text-paper/65">
                          {item.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-9 border-t border-paper/12 pt-5 text-[0.6875rem] leading-relaxed text-paper/55">
                    Findings from moderated usability testing and design review.
                    These are qualitative signals from a small test group, not
                    production analytics.
                  </p>
                </div>
              </Reveal>
            </CaseSection>

            <CaseSection id="learnings" number="09" title="Learnings">
              <div className="grid gap-8 sm:grid-cols-3">
                {project.learnings.map((learning, i) => (
                  <Reveal key={learning.title} delay={i * 0.06}>
                    <div className="border-t border-line pt-4">
                      <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-plum">
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                        {learning.title}
                      </h3>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-soft">
                        {learning.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </CaseSection>
          </div>
        </div>
      </div>

      <NextProject
        next={
          projects.find((p) => `/work/${p.slug}` === project.next.href) ??
          projects[0]
        }
      />
    </article>
  );
}

function DesignCard({
  screen,
}: {
  screen: Project["finalDesign"]["screens"][number];
}) {
  return (
    <Reveal>
      <figure>
        <div className="relative overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-line/70">
          <div className="relative aspect-[597/1213]">
            <Image
              src={withBase(screen.src)}
              alt={screen.label}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
              className="object-contain"
            />
          </div>
        </div>
        <figcaption className="mt-4">
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-plum">
            {screen.label}
          </p>
          <p className="mt-1.5 max-w-[34ch] text-[0.8125rem] leading-relaxed text-ink-soft">
            {screen.caption}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
