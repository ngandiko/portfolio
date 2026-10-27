import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Praneetha Gandikota, a UI/UX designer based in Chicago and open to full-time product design roles.",
};

const lookingFor = [
  "Full-time UI/UX or product design roles",
  "Teams where research is part of the process, not a phase",
  "Products with real users and unglamorous constraints",
];

export default function ContactPage() {
  return (
    <>
      <section className="shell pt-12 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-6 max-w-[12ch]">
              Let&apos;s talk.
            </h1>
            <p className="lede mt-8 max-w-[46ch]">
              I&apos;m looking for a full-time design role where research and
              craft are treated as part of the job. If that sounds like your
              team — or you just want to compare notes — my inbox is open.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <div className="rounded-[1.5rem] border border-line bg-paper-warm p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-soft">
                  {site.availability}
                </span>
              </div>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                Based in {site.location}. Open to on-site, hybrid and remote
                roles across the US.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="btn btn-primary mt-6 w-full justify-center"
              >
                Email me
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pt-16 sm:pt-20">
        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="group bg-paper p-7 transition-colors hover:bg-paper-warm sm:col-span-2 sm:p-9"
          >
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
              Email
            </p>
            <p className="mt-4 break-all font-serif text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-plum">
              {site.email}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] text-ink-muted">
              The fastest way to reach me <span aria-hidden="true">↗</span>
            </p>
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group bg-paper p-7 transition-colors hover:bg-paper-warm sm:p-9"
          >
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
              LinkedIn
            </p>
            <p className="mt-4 font-serif text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-plum">
              /in/praneetha-gandikota
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] text-ink-muted">
              Work history and updates <span aria-hidden="true">↗</span>
            </p>
          </a>

          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="group bg-paper p-7 transition-colors hover:bg-paper-warm sm:p-9"
          >
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
              Résumé
            </p>
            <p className="mt-4 font-serif text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-plum">
              Download the PDF
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] text-ink-muted">
              One page, updated 2026 <span aria-hidden="true">↗</span>
            </p>
          </a>
        </div>
      </section>

      <section className="shell pt-20 sm:pt-28">
        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">What I&apos;m looking for</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-0">
              {lookingFor.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-t border-line py-5 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-plum">
                    0{i + 1}
                  </span>
                  <p className="font-serif text-[clamp(1.25rem,2vw,1.625rem)] leading-snug tracking-[-0.015em] text-ink">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-muted">
              Want the longer version first?{" "}
              <Link
                href="/about"
                className="link-underline text-ink"
              >
                Read about how I work
              </Link>{" "}
              or{" "}
              <Link href="/#work" className="link-underline text-ink">
                go straight to the case studies
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
