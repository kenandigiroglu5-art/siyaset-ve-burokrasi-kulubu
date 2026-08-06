import type { MetadataRoute } from "next";
import { pastEvents, upcomingEvents } from "@/lib/data";

const BASE_URL = "https://siyaset-ve-burokrasi-kulubu.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/events`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/team`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/announcements`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const eventRoutes: MetadataRoute.Sitemap = [...upcomingEvents, ...pastEvents].map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...eventRoutes];
}
