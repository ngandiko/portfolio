"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function CaseStudyNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const total = root.scrollHeight - root.clientHeight;
      setProgress(total > 0 ? Math.min(1, root.scrollTop / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[70] h-[2px] bg-plum transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />

      <nav aria-label="Case study contents" className="min-w-0 lg:hidden">
        <p className="eyebrow">Jump to</p>
        <div className="-mx-5 mt-3 flex scroll-pl-5 snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`snap-start whitespace-nowrap rounded-full border px-3.5 py-2 text-[0.75rem] transition-colors ${
                  isActive
                    ? "border-plum bg-plum text-paper"
                    : "border-line-strong text-ink-soft"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      <nav aria-label="Case study contents" className="hidden lg:block">
        <div className="sticky top-28">
          <p className="eyebrow">Contents</p>
          <ul className="mt-4 border-l border-line">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-[-1px] w-[2px] bg-plum"
                    />
                  ) : null}
                  <a
                    href={`#${item.id}`}
                    className={`block py-1.5 pl-4 text-[0.8125rem] transition-colors ${
                      isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <Link
            href="/#work"
            className="mt-8 inline-flex items-center gap-2 text-[0.75rem] text-ink-muted transition-colors hover:text-ink"
          >
            <span aria-hidden="true">←</span> All work
          </Link>
        </div>
      </nav>
    </>
  );
}
