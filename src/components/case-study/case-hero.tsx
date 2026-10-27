import Link from "next/link";
import type { Project } from "@/lib/projects";
import { PhoneCluster } from "@/components/phone-cluster";

const tones = {
  terracotta: {
    bg: "bg-[#f3ded4]",
    glow: "radial-gradient(110% 90% at 50% 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
  },
  sage: {
    bg: "bg-[#dbe7e3]",
    glow: "radial-gradient(110% 90% at 50% 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
  },
};

export function CaseHero({ project }: { project: Project }) {
  const tone = tones[project.accent];

  return (
    <header>
      <div className="shell pt-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[0.75rem] text-ink-muted transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span> All work
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <p className="eyebrow">
              Case study {project.index}
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">{project.category}</span>
            </p>
            <h1 className="mt-4 font-serif text-[clamp(3.25rem,8.6vw,6.75rem)] leading-[0.9] tracking-[-0.04em]">
              {project.name}
            </h1>
            <p className="lede mt-6 max-w-[44ch]">{project.tagline}</p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 self-end border-t border-line pt-6 lg:col-span-4">
            <div>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Role
              </dt>
              <dd className="mt-1.5 text-[0.9375rem]">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Timeline
              </dt>
              <dd className="mt-1.5 text-[0.9375rem]">{project.timeline}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Platform
              </dt>
              <dd className="mt-1.5 text-[0.9375rem]">{project.platform}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                Scope
              </dt>
              <dd className="mt-1.5 text-[0.9375rem]">{project.scope}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-10 sm:mt-14">
        <div
          className={`relative mx-3 overflow-hidden rounded-[1.5rem] sm:mx-5 sm:rounded-[2rem] ${tone.bg}`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: tone.glow }}
          />
          <div className="relative flex h-[clamp(320px,42vw,540px)] items-center justify-center px-6">
            <div className="w-full max-w-[660px]">
              <PhoneCluster screens={project.heroScreens} priority />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function NextProject({ next }: { next: Project }) {
  const tone = tones[next.accent];

  return (
    <section className="mt-24 sm:mt-32">
      <div className="shell">
        <Link
          href={`/work/${next.slug}`}
          className="group block rounded-[1.75rem] border border-line bg-paper-warm p-8 transition-colors hover:border-line-strong sm:p-12"
        >
          <div className="flex items-center justify-between gap-6">
            <p className="eyebrow">Next project · {next.index}</p>
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-500 group-hover:border-plum group-hover:bg-plum group-hover:text-paper"
            >
              →
            </span>
          </div>

          <div className="mt-8 grid items-end gap-8 sm:grid-cols-[1fr_auto] sm:gap-12">
            <div>
              <h2 className="h1">{next.name}</h2>
              <p className="mt-3 max-w-[44ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                {next.tagline}
              </p>
            </div>
            <div
              className={`relative hidden h-40 w-56 shrink-0 overflow-hidden rounded-2xl sm:block ${tone.bg}`}
            >
              <div className="absolute inset-0 flex items-center justify-center px-3 pt-4">
                <div className="w-[92%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                  <PhoneCluster screens={next.cardScreens} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
