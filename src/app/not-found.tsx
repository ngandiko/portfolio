import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col justify-center py-20">
      <p className="eyebrow">404 — Page not found</p>
      <h1 className="display mt-6 max-w-[16ch]">
        This page took a different <em className="text-plum">turn</em>.
      </h1>
      <p className="lede mt-6 max-w-[44ch]">
        The link may be out of date, or the page may have moved. The work is
        still where you left it.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Back home
        </Link>
        <Link href="/#work" className="btn btn-ghost">
          View selected work
        </Link>
      </div>
    </section>
  );
}
