type MarqueeRowProps = { items: string[]; hidden?: boolean };

function MarqueeRow({ items, hidden = false }: MarqueeRowProps) {
  return (
    <div
      className="flex shrink-0 items-center gap-8 pr-8"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-muted">
            {item}
          </span>
          <span aria-hidden="true" className="text-[0.625rem] text-plum/60">
            ✳
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee overflow-hidden border-y border-line py-4">
      <div className="marquee-track flex w-max">
        <MarqueeRow items={items} />
        <MarqueeRow items={items} hidden />
      </div>
    </div>
  );
}
