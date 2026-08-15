"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mic2, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { pastEvents } from "@/lib/data";
import { categoryStyle, categoryIcons } from "@/lib/eventStyles";
import { staggerContainer, scaleIn, viewportConfig } from "@/lib/animations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function EventGallery() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { t } = useLocale();

  return (
    <section
      id="event-gallery"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--color-bg-base) 0%, var(--color-bg-deep) 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.eventGallery.eyebrow}
          title={t.eventGallery.title}
          subtitle={t.eventGallery.subtitle}
        />

        {pastEvents.length === 0 ? (
          <div
            className="rounded-3xl p-12 text-center"
            style={{ background: "var(--surface-1)", border: "1px solid var(--border-1)" }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{t.eventGallery.empty}</p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            style={{ gridAutoFlow: "dense" }}
          >
            {pastEvents.map((event, i) => {
              const style = categoryStyle(event.category);
              const Icon = categoryIcons[event.category];
              const isHovered = hovered === event.id;
              const featured = i % 5 === 0;

              return (
                <motion.div
                  key={event.id}
                  variants={scaleIn}
                  className={featured ? "sm:col-span-2" : ""}
                >
                  <Link
                    href={`/events/${event.slug}`}
                    onMouseEnter={() => setHovered(event.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="rounded-2xl overflow-hidden relative group block h-full"
                    style={{
                      border: isHovered ? "1px solid rgba(201,168,76,0.35)" : "1px solid var(--border-1)",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    {/* Cover */}
                    <div
                      className={`relative overflow-hidden flex items-center justify-center ${featured ? "h-56" : "h-40"}`}
                      style={!event.image ? { background: `linear-gradient(135deg, rgba(13,31,60,1) 0%, ${style.bg.replace("0.2", "0.35").replace("0.15", "0.3")} 150%)` } : undefined}
                    >
                      {event.image ? (
                        <>
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes={featured ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,21,46,0.05) 0%, rgba(8,21,46,0.55) 100%)" }} />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-grid opacity-40" />
                          <Icon size={featured ? 56 : 40} style={{ color: style.color, opacity: 0.35 }} />
                        </>
                      )}

                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: style.bg, color: style.color }}
                        >
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs"
                          style={{ background: "rgba(0,0,0,0.5)", color: "var(--color-text-muted)", backdropFilter: "blur(10px)" }}
                        >
                          {event.date}
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ background: "rgba(8,21,46,0.88)" }}
                      >
                        <span className="text-xs font-medium inline-flex items-center gap-1.5" style={{ color: "var(--color-text-primary)" }}>
                          {t.eventGallery.viewDetail} <ArrowUpRight size={13} />
                        </span>
                      </motion.div>
                    </div>

                    <div className="p-5" style={{ background: "var(--surface-1)" }}>
                      <h3 className="text-sm font-bold mb-3 leading-tight" style={{ color: "var(--color-text-heading)" }}>
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-1.5" style={{ color: "var(--color-text-muted)" }}>
                          <MapPin size={11} />
                          <span className="text-xs truncate max-w-[160px]">{event.location}</span>
                        </div>
                        {event.speakers && event.speakers.length > 0 && (
                          <div className="flex items-center gap-1.5" style={{ color: "var(--color-text-muted)" }}>
                            <Mic2 size={11} />
                            <span className="text-xs truncate max-w-[160px]">{event.speakers[0]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
