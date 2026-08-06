"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { upcomingEvents } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { categoryStyle } from "@/lib/eventStyles";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function UpcomingEvents() {
  const { t } = useLocale();
  return (
    <section
      id="events"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-bg-base)" }}
    >
      <div
        className="absolute top-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow={t.upcomingEvents.eyebrow}
          title={t.upcomingEvents.title}
          subtitle={t.upcomingEvents.subtitle}
        />

        {upcomingEvents.length === 0 ? (
          <div
            className="rounded-3xl p-12 text-center mb-12"
            style={{ background: "var(--surface-1)", border: "1px solid var(--border-1)" }}
          >
            <p className="text-base font-semibold mb-2" style={{ color: "var(--color-text-heading)" }}>
              {t.upcomingEvents.emptyTitle}
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              {t.upcomingEvents.emptyBody}
            </p>
          </div>
        ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {upcomingEvents.map((event, i) => {
            const catStyle = categoryStyle(event.category);
            return (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="rounded-3xl overflow-hidden card-shine group relative"
                style={{ border: "1px solid var(--border-1)" }}
              >
                {/* Top gradient bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(90deg, #1a56db, #c9a84c)"
                      : "linear-gradient(90deg, #c9a84c, #1a56db)",
                  }}
                />

                <div
                  className="p-7"
                  style={{ background: "var(--surface-1)" }}
                >
                  {/* Category + date row */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: catStyle.bg, color: catStyle.color }}
                    >
                      {event.category}
                    </span>
                    <div className="flex items-center gap-1.5" style={{ color: "var(--color-text-muted)" }}>
                      <Calendar size={12} />
                      <span className="text-xs">{event.date}</span>
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 leading-tight group-hover:text-white transition-colors"
                    style={{ color: "var(--color-text-heading)" }}
                  >
                    {event.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-1.5" style={{ color: "var(--color-text-muted)" }}>
                      <Clock size={12} />
                      <span className="text-xs">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5" style={{ color: "var(--color-text-muted)" }}>
                      <MapPin size={12} />
                      <span className="text-xs">{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-1.5" style={{ color: "var(--color-text-muted)" }}>
                        <Users size={12} />
                        <span className="text-xs">{event.attendees} {t.upcomingEvents.capacity}</span>
                      </div>
                    )}
                  </div>

                  {/* Speakers */}
                  {event.speakers && event.speakers.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-medium mb-2" style={{ color: "var(--color-text-muted)" }}>{t.upcomingEvents.speakers}</p>
                      <div className="flex flex-wrap gap-2">
                        {event.speakers.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-lg text-xs"
                            style={{ background: "var(--surface-4)", color: "var(--color-text-secondary)" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <a
                      href={event.registrationUrl || "#"}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 hover:gap-3"
                      style={{
                        background: "linear-gradient(135deg, #1a56db, #0a3d9e)",
                        color: "white",
                        boxShadow: "0 4px 16px rgba(26,86,219,0.3)",
                      }}
                    >
                      {t.upcomingEvents.register}
                      <ArrowRight size={12} />
                    </a>
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-xs font-medium transition-colors"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t.upcomingEvents.details}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        )}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid var(--border-3)",
              color: "var(--color-text-primary)",
              background: "var(--surface-3)",
            }}
          >
            {t.upcomingEvents.viewAll}
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
