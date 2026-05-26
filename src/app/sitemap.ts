import type { MetadataRoute } from "next";
import { strategySections } from "@/data/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://safa-promax.vercel.app";
  const routes = [
    "",
    "/foundation",
    "/visibility",
    "/growth",
    "/delivery",
    "/smart-tools",
    "/strategy-index",
    "/contact",
    "/download-prospectus",
    ...strategySections.map((section) => section.href),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-05-26"),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
