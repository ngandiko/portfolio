import Image from "next/image";

type Screen = { src: string; alt: string };

export function Phone({
  screen,
  className = "",
  sizes = "(max-width: 768px) 40vw, 24vw",
  priority = false,
}: {
  screen: Screen;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative aspect-[597/1213] ${className}`}>
      <Image
        src={screen.src}
        alt={screen.alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="object-contain drop-shadow-[0_18px_40px_rgba(23,19,15,0.14)]"
      />
    </div>
  );
}

export function PhoneCluster({
  screens,
  className = "",
  priority = false,
}: {
  screens: [Screen, Screen, Screen];
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none flex w-full items-center justify-center ${className}`}
    >
      <div className="w-[27%] translate-y-[7%] rotate-[-6deg]">
        <Phone screen={screens[0]} priority={priority} />
      </div>
      <div className="z-10 -mx-[4%] w-[34%] -translate-y-[3%]">
        <Phone screen={screens[1]} priority={priority} />
      </div>
      <div className="w-[27%] translate-y-[7%] rotate-[6deg]">
        <Phone screen={screens[2]} priority={priority} />
      </div>
    </div>
  );
}
