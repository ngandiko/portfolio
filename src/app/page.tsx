import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";
import { site, tools } from "@/lib/site";

export const metadata: Metadata = {
  title: "Praneetha Gandikota — UI/UX Designer",
  description: site.description,
};

const approach = [
  {
    n: "01",
    title: "Research before pixels",
    body: "I start with the messy part — interviews, competitive teardowns and the language people actually use. Opinions are cheap; patterns aren't.",
  },
  {
    n: "02",
    title: "Structure over decoration",
    body: "Hierarchy, flows and states come first. Visual polish is the last 20% of the work, not the first thing I reach for.",
  },
  {
    n: "03",
    title: "Craft that survives build",
    body: "I prototype in Figma, speak enough code to design within real constraints, and document decisions engineers can act on.",
  },
];

const facts = [
  { label: "Based in", value: "Chicago, IL" },
  { label: "Studying", value: "M.S. Artificial Intelligence, DePaul University" },
  { label: "Certified", value: "Google UX Design Professional Certificate" },
  { label: "Previously", value: "Skratcher Inc. · ProDiscover Forensics" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <div className="shell pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper-warm/70 px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-soft">
                    {site.availability}
                  </span>
                </span>
                <span className="eyebrow">{site.location}</span>
              </div>

              <h1 className="display mt-8">
                I turn messy problems into interfaces that feel{" "}
                <em className="text-plum">obvious</em>.
              </h1>

              <p className="lede mt-8 max-w-[48ch]">
                I&apos;m Praneetha, a UI/UX designer with a background in
                artificial intelligence. I work across research, interaction
                design and visual craft — and I care about the small decisions
                that make a product feel trustworthy.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn btn-primary">
                  View selected work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 2v10M3 8l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link href="/about" className="btn btn-ghost">
                  About me
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[2.25rem] border border-line"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-sand sm:aspect-[4/5]">
                  <Image
                    src="/images/shared/portrait.jpg"
                    alt="Praneetha Gandikota, UI/UX designer, photographed in Chicago"
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[50%_30%] saturate-[0.92]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span className="rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-soft backdrop-blur">
                      Praneetha Gandikota
                    </span>
                    <span className="rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-soft backdrop-blur">
                      UI/UX Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-[0.8125rem] leading-snug text-ink-muted">
                <p>
                  M.S. Artificial Intelligence
                  <br />
                  DePaul University · 2027
                </p>
                <p className="text-right">
                  Previously
                  <br />
                  Skratcher · ProDiscover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={tools} />

      <section id="work" className="scroll-mt-24 pt-20 sm:pt-28">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">01 — Selected work</p>
                <h2 className="h2 mt-4 max-w-[20ch]">
                  Two products. Two very different constraints.
                </h2>
              </div>
              <p className="max-w-[36ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                One is about deciding where to go. The other is about making a
                low-value transaction worth the effort. Both started with the
                same question: what is actually getting in the way?
              </p>
            </div>
          </Reveal>

          <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                reverse={i % 2 === 1}
                eager={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 sm:pt-32">
        <div className="shell border-t border-line pt-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">02 — How I work</p>
              <h2 className="h2 mt-4 max-w-[14ch]">
                Research first. Craft always.
              </h2>
              <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                I like problems that don&apos;t arrive neatly scoped. My job is
                to find the real constraint, then design the smallest, clearest
                thing that resolves it.
              </p>
            </Reveal>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
              {approach.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <div className="flex h-full flex-col border-t border-line pt-5">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-plum">
                      {step.n}
                    </span>
                    <h3 className="h3 mt-5">{step.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 sm:pt-32">
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 rounded-[1.75rem] bg-paper-warm p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">03 — About</p>
                <h2 className="h2 mt-4 max-w-[13ch]">
                  A designer who likes the messy middle.
                </h2>
                <Link
                  href="/about"
                  className="arrow-slide mt-7 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[0.9375rem] font-medium text-ink transition-colors hover:border-plum hover:text-plum"
                >
                  More about me
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className="lg:col-span-7">
                <p className="prose-body max-w-[52ch]">
                  I came to design through AI and software. That path left me
                  with two habits that show up in every project: I ask how
                  something will be built before I fall in love with how it
                  looks, and I don&apos;t trust a decision until I&apos;ve
                  watched someone use it.
                </p>
                <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-[0.9375rem] leading-snug text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
