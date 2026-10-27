import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function CaseSection({
  id,
  number,
  title,
  intro,
  children,
}: {
  id: string;
  number: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-line py-14 sm:py-20"
    >
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-plum">
            {number}
          </span>
          <h2 className="h2">{title}</h2>
        </div>
        {intro ? (
          <p className="mt-5 max-w-[58ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
            {intro}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
