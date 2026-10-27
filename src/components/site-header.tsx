"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-paper"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-baseline gap-2.5"
            aria-label="Praneetha Gandikota — home"
            onClick={(e) => {
              setOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className="font-serif text-[1.5rem] italic leading-none text-plum transition-transform duration-500 group-hover:-rotate-6">
              PG
            </span>
            <span className="text-[0.8125rem] font-medium tracking-[-0.01em] text-ink">
              Praneetha Gandikota
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active =
                item.href === "/about"
                  ? pathname.startsWith("/about")
                  : item.href === "/resume"
                    ? pathname.startsWith("/resume")
                    : item.href === "/contact"
                      ? pathname.startsWith("/contact")
                      : pathname.startsWith("/work");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                    active ? "text-plum" : "text-ink-soft hover:text-ink"
                  }`}
                  onClick={(e) => {
                    if (item.href.includes("#") && pathname === "/") {
                      const id = item.href.split("#")[1];
                      const el = document.getElementById(id);
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="btn btn-primary hidden px-5 py-2.5 text-[0.8125rem] md:inline-flex"
            >
              Let&apos;s talk
              <span aria-hidden="true">↗</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line-strong md:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span
                aria-hidden="true"
                className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-paper md:hidden"
          >
            <div className="shell flex min-h-[calc(100dvh-4.5rem)] flex-col justify-between pb-10 pt-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.06 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between py-5"
                      onClick={(e) => {
                        setOpen(false);
                        if (item.href.includes("#") && pathname === "/") {
                          const id = item.href.split("#")[1];
                          const el = document.getElementById(id);
                          if (el) {
                            e.preventDefault();
                            el.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                    >
                      <span className="font-serif text-[2.25rem] leading-none tracking-[-0.02em]">
                        {item.label}
                      </span>
                      <span className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-muted">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-10 space-y-4">
                <p className="eyebrow">Get in touch</p>
                <a
                  href={`mailto:${site.email}`}
                  className="block font-serif text-[1.5rem] leading-tight text-ink"
                >
                  {site.email}
                </a>
                <p className="text-sm text-ink-muted">
                  {site.location} · {site.availability}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
