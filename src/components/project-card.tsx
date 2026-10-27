import Link from "next/link";
import type { Project } from "@/lib/projects";
import { PhoneCluster } from "@/components/phone-cluster";
import { Reveal } from "@/components/reveal";

const panel = {
  terracotta: {
    bg: "bg-[#f3ded4]",
    glow: "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 55%)",
    ink: "text-[#7a3a29]",
  },
  sage: {
    bg: "bg-[#dbe7e3]",
    glow: "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 55%)",
    ink: "text-[#2f5551]",
  },
};

export function ProjectCard({
  project,
  reverse = false,
  eager = false,
}: {
  project: Project;
  reverse?: boolean;
  eager?: boolean;
}) {
  const p = panel[project.accent];

  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
        aria-label={`Read the ${project.name} case study`}
      >
        <div
          className={`relative lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
        >
          <div
            className={`relative aspect-[5/4] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ${p.bg}`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: p.glow }}
            />
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -left-2 top-2 select-none font-serif text-[clamp(6rem,16vw,13rem)] leading-none opacity-[0.07] ${p.ink}`}
            >
              {project.index}
            </span>
            <div className="absolute inset-0 flex items-center justify-center px-4 pt-10 sm:px-8">
              <div className="w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.03]">
                <PhoneCluster screens={project.cardScreens} priority={eager} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-6" : "lg:pl-2"}`}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-muted">
              {project.index}
            </span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-muted">
              {project.category}
            </span>
          </div>

          <h3 className="mt-5 font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.03em]">
            {project.name}
          </h3>

          <p className="mt-4 max-w-[42ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            {project.cardSummary}
          </p>

          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-5 text-[0.8125rem]">
            <div>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Role
              </dt>
              <dd className="mt-1.5 text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Timeline
              </dt>
              <dd className="mt-1.5 text-ink">{project.timeline}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Platform
              </dt>
              <dd className="mt-1.5 text-ink">{project.platform}</dd>
            </div>
          </dl>

          <span className="arrow-slide mt-8 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[0.9375rem] font-medium text-ink transition-colors group-hover:border-plum group-hover:text-plum">
            Read case study
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
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
