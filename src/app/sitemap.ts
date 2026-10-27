import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/resume", "/contact", "/work/nomad", "/work/tiny-threads"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-10-25"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/work") ? 0.8 : 0.6,
  }));
}
