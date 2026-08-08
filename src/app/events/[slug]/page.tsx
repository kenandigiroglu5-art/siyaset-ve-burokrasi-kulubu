import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Mic2, ExternalLink, ArrowUpRight } from "lucide-react";
import { pastEvents, upcomingEvents } from "@/lib/data";
import { categoryStyle, categoryIcons } from "@/lib/eventStyles";
import { parseTurkishDateToISO } from "@/lib/parseEventDate";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import type { Event } from "@/types";

const BASE_URL = SITE_URL;
const allEvents: Event[] = [...upcomingEvents, ...pastEvents];

function findEvent(slug: string) {
  return allEvents.find((e) => e.slug === slug);
}

export function generateStaticParams() {
  return allEvents.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) return { title: "Etkinlik Bulunamadı" };
  return {
    title: event.title,
    description: event.description,
    alternates: { canonical: `${BASE_URL}/events/${event.slug}` },
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
      url: `${BASE_URL}/events/${event.slug}`,
    },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) notFound();

  const style = categoryStyle(event.category);
  const Icon = categoryIcons[event.category];

  const related = allEvents.filter((e) => e.id !== event.id && e.category === event.category).slice(0, 3);
  const isUpcoming = upcomingEvents.some((e) => e.id === event.id);
  const isoDate = parseTurkishDateToISO(event.date);

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    ...(isoDate && { startDate: isoDate }),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: "İstanbul Medeniyet Üniversitesi, İstanbul, Türkiye",
    },
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    ...(event.speakers &&
      event.speakers.length > 0 && {
        performer: event.speakers.map((s) => ({ "@type": "Person", name: s })),
      }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Etkinlikler", item: `${BASE_URL}/events` },
      { "@type": "ListItem", position: 3, name: event.title, item: `${BASE_URL}/events/${event.slug}` },
    ],
  };

  return (
    <div className="pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Cover */}
      <div
        className="relative overflow-hidden flex items-center justify-center h-64 md:h-80"
        style={{ background: `linear-gradient(135deg, rgba(13,31,60,1) 0%, ${style.bg.replace("0.2", "0.35").replace("0.15", "0.3")} 150%)` }}
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Icon size={72} style={{ color: style.color, opacity: 0.35 }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: "var(--color-text-muted)" }}
        >
          <ArrowLeft size={14} />
          Tüm Etkinlikler
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: style.bg, color: style.color }}
          >
            {event.category}
          </span>
          {isUpcoming && (
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80" }}
            >
              Yaklaşan
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "var(--color-text-primary)" }}>
          {event.title}
        </h1>

        <div className="flex flex-wrap gap-5 mb-8 pb-8 border-b" style={{ borderColor: "var(--border-2)" }}>
          <div className="flex items-center gap-2" style={{ color: "var(--color-text-body)" }}>
            <Calendar size={15} style={{ color: "#c9a84c" }} />
            <span className="text-sm">{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2" style={{ color: "var(--color-text-body)" }}>
              <Clock size={15} style={{ color: "#c9a84c" }} />
              <span className="text-sm">{event.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2" style={{ color: "var(--color-text-body)" }}>
            <MapPin size={15} style={{ color: "#c9a84c" }} />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-body)" }}>
          {event.description}
        </p>

        {event.speakers && event.speakers.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--color-text-primary)" }}>
              <Mic2 size={14} style={{ color: "#c9a84c" }} />
              Konuşmacı{event.speakers.length > 1 ? "lar" : ""}
            </h3>
            <div className="flex flex-wrap gap-2">
              {event.speakers.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg text-sm"
                  style={{ background: "var(--surface-4)", color: "var(--color-text-secondary)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-12">
          {event.registrationUrl && event.registrationUrl !== "#" && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1a56db, #0a3d9e)", color: "white" }}
            >
              Kayıt Ol
            </a>
          )}
          {event.sourceUrl && (
            <a
              href={event.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs transition-colors hover:text-white"
              style={{ color: "var(--color-text-faint)" }}
            >
              <ExternalLink size={12} />
              Kaynak: {event.sourceLabel ?? "Sosyal medya"}
            </a>
          )}
        </div>

        {related.length > 0 && (
          <div className="pt-8 border-t" style={{ borderColor: "var(--border-2)" }}>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--color-text-primary)" }}>
              Benzer Etkinlikler
            </h3>
            <div className="flex flex-col gap-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/events/${r.slug}`}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors group"
                  style={{ background: "var(--surface-1)", border: "1px solid var(--surface-5)", color: "var(--color-text-body)" }}
                >
                  <span>{r.title}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
