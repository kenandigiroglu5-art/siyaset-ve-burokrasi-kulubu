import type { MetadataRoute } from "next";
import { pastEvents, upcomingEvents } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/events`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/team`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/announcements`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const eventRoutes: MetadataRoute.Sitemap = [...upcomingEvents, ...pastEvents].map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...eventRoutes];
}
