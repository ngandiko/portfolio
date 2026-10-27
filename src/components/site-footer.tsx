import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-paper sm:mt-32">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-paper/60">Next step</p>
            <h2 className="mt-5 max-w-[14ch] font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
              Let&apos;s make something people{" "}
              <em className="text-terracotta">trust</em>.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-3 border-b border-paper/25 pb-1.5 text-[1.0625rem] text-paper transition-colors hover:border-terracotta hover:text-terracotta sm:text-[1.25rem]"
            >
              {site.email}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:items-end lg:text-right">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper/60">
                {site.availability}
              </span>
            </div>

            <div className="space-y-1.5 text-sm text-paper/60">
              <p>{site.location}</p>
              <p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  LinkedIn ↗
                </a>
              </p>
              <p>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  Résumé (PDF) ↗
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-paper/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-paper/55">
            © 2026 Praneetha Gandikota · Designed &amp; built with care
          </p>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-paper/60 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#top"
              className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-paper/60 transition-colors hover:text-paper"
            >
              Back to top ↑
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
