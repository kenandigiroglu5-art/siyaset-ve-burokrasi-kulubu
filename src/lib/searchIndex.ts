import { pastEvents, upcomingEvents, announcements, teamMembers, committees, faqs, SOURCES } from "@/lib/data";

export interface SearchItem {
  label: string;
  sublabel?: string;
  href: string;
  category: string;
  external?: boolean;
}

export function getSearchIndex(): SearchItem[] {
  const pages: SearchItem[] = [
    { label: "Ana Sayfa", href: "/", category: "Sayfa" },
    { label: "Hakkımızda", href: "/about", category: "Sayfa" },
    { label: "Etkinlikler", href: "/events", category: "Sayfa" },
    { label: "Yönetim Kurulu", href: "/team", category: "Sayfa" },
    { label: "Duyurular", href: "/announcements", category: "Sayfa" },
    { label: "İletişim", href: "/contact", category: "Sayfa" },
  ];

  const events: SearchItem[] = [...upcomingEvents, ...pastEvents].map((e) => ({
    label: e.title,
    sublabel: [e.date, ...(e.speakers ?? [])].join(" · "),
    href: `/events/${e.slug}`,
    category: "Etkinlik",
  }));

  const news: SearchItem[] = announcements.map((a) => ({
    label: a.title,
    sublabel: a.date,
    href: a.eventSlug ? `/events/${a.eventSlug}` : "/announcements",
    category: "Duyuru",
  }));

  const people: SearchItem[] = teamMembers
    .filter((m) => m.name)
    .map((m) => ({
      label: m.name as string,
      sublabel: m.role,
      href: "/team",
      category: "Yönetim Kurulu",
    }));

  const committeeMembers: SearchItem[] = committees.flatMap((c) => [
    { label: c.head, sublabel: `${c.name} · Komite Başkanı`, href: "/team", category: "Komite" },
    ...c.members.map((m) => ({
      label: m,
      sublabel: c.name,
      href: "/team",
      category: "Komite",
    })),
  ]);

  const questions: SearchItem[] = faqs.map((f) => ({
    label: f.question,
    href: "/contact",
    category: "SSS",
  }));

  const social: SearchItem[] = [
    { label: "Instagram", href: SOURCES.instagram, category: "Sosyal Medya", external: true },
    { label: "LinkedIn", href: SOURCES.linkedin, category: "Sosyal Medya", external: true },
    { label: "WhatsApp Grubu", href: SOURCES.whatsapp, category: "Sosyal Medya", external: true },
  ];

  return [...pages, ...events, ...news, ...people, ...committeeMembers, ...questions, ...social];
}
