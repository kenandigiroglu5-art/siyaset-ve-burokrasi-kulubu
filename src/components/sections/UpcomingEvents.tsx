"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { upcomingEvents } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import type { EventCategory } from "@/types";
import Link from "next/link";

const categoryColors: Record<EventCategory, { bg: string; color: string }> = {
  Panel: { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" },
  Konferans: { bg: "rgba(201,168,76,0.2)", color: "#c9a84c" },
  Workshop: { bg: "rgba(34,197,94,0.15)", color: "#4ade80" },
  Seminer: { bg: "rgba(168,85,247,0.15)", color: "#c084fc" },
  Söyleşi: { bg: "rgba(244,114,182,0.15)", color: "#f472b6" },
  Sosyal: { bg: "rgba(96,165,250,0.15)", color: "#60a5fa" },
};

export default function UpcomingEvents() {
  return (
    <section
      id="events"
      className="section-padding relative overflow-hidden"
      style={{ background: "#08152e" }}
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
          eyebrow="Yaklaşan Etkinlikler"
          title="Sizi Bekliyoruz"
          subtitle="Uzman konuşmacılar, interaktif atölyeler ve güçlü bir toplulukla dolu etkinlik takvimine katılın."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {upcomingEvents.map((event, i) => {
            const catStyle = categoryColors[event.category] ?? { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" };
            return (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="rounded-3xl overflow-hidden card-shine group relative"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
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
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Category + date row */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: catStyle.bg, color: catStyle.color }}
                    >
                      {event.category}
                    </span>
                    <div className="flex items-center gap-1.5" style={{ color: "rgb(138,155,184)" }}>
                      <Calendar size={12} />
                      <span className="text-xs">{event.date}</span>
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 leading-tight group-hover:text-white transition-colors"
                    style={{ color: "rgb(228,235,248)" }}
                  >
                    {event.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgb(138,155,184)" }}>
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-1.5" style={{ color: "rgb(138,155,184)" }}>
                      <Clock size={12} />
                      <span className="text-xs">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5" style={{ color: "rgb(138,155,184)" }}>
                      <MapPin size={12} />
                      <span className="text-xs">{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-1.5" style={{ color: "rgb(138,155,184)" }}>
                        <Users size={12} />
                        <span className="text-xs">{event.attendees} katılımcı kapasitesi</span>
                      </div>
                    )}
                  </div>

                  {/* Speakers */}
                  {event.speakers && event.speakers.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-medium mb-2" style={{ color: "rgb(138,155,184)" }}>Konuşmacılar</p>
                      <div className="flex flex-wrap gap-2">
                        {event.speakers.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-lg text-xs"
                            style={{ background: "rgba(255,255,255,0.05)", color: "rgb(210,220,240)" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <a
                    href={event.registrationUrl || "#"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 hover:gap-3"
                    style={{
                      background: "linear-gradient(135deg, #1a56db, #0a3d9e)",
                      color: "white",
                      boxShadow: "0 4px 16px rgba(26,86,219,0.3)",
                    }}
                  >
                    Kayıt Ol
                    <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgb(248,250,252)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            Tüm Etkinlikleri Gör
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
