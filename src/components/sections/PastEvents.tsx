"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Eye } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { pastEvents } from "@/lib/data";
import { staggerContainer, scaleIn, viewportConfig } from "@/lib/animations";
import type { EventCategory } from "@/types";

const categoryColors: Record<EventCategory, { bg: string; color: string }> = {
  Panel: { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" },
  Konferans: { bg: "rgba(201,168,76,0.2)", color: "#c9a84c" },
  Workshop: { bg: "rgba(34,197,94,0.15)", color: "#4ade80" },
  Seminer: { bg: "rgba(168,85,247,0.15)", color: "#c084fc" },
  Söyleşi: { bg: "rgba(244,114,182,0.15)", color: "#f472b6" },
  Sosyal: { bg: "rgba(96,165,250,0.15)", color: "#60a5fa" },
};

export default function PastEvents() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="past-events"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #08152e 0%, #06101f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Geçmiş Etkinlikler"
          title="İzimizi Bıraktık"
          subtitle="Her etkinlik, kulübümüzün büyümesine ve üyelerimizin gelişimine katkı sağladı."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pastEvents.map((event) => {
            const catStyle = categoryColors[event.category] ?? { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" };
            const isHovered = hovered === event.id;

            return (
              <motion.div
                key={event.id}
                variants={scaleIn}
                onMouseEnter={() => setHovered(event.id)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl overflow-hidden relative cursor-pointer group"
                style={{
                  border: isHovered ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s ease",
                }}
              >
                {/* Image placeholder with gradient */}
                <div
                  className="h-40 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(13,31,60,1) 0%, rgba(26,86,219,0.3) 100%)`,
                  }}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 bg-grid opacity-40"
                  />
                  {/* Category label overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-4xl font-black opacity-10"
                      style={{ color: catStyle.color }}
                    >
                      {event.category.charAt(0)}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ background: "rgba(8,21,46,0.85)" }}
                  >
                    <Eye size={20} style={{ color: "#c9a84c" }} />
                    <span className="text-xs font-medium" style={{ color: "rgb(248,250,252)" }}>
                      Detaylar
                    </span>
                  </motion.div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: catStyle.bg, color: catStyle.color }}
                    >
                      {event.category}
                    </span>
                  </div>

                  {/* Date badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        color: "rgb(138,155,184)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {event.date}
                    </span>
                  </div>
                </div>

                <div className="p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <h3 className="text-sm font-bold mb-3 leading-tight" style={{ color: "rgb(228,235,248)" }}>
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5" style={{ color: "rgb(138,155,184)" }}>
                      <MapPin size={11} />
                      <span className="text-xs truncate max-w-[120px]">{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-1.5" style={{ color: "rgb(138,155,184)" }}>
                        <Users size={11} />
                        <span className="text-xs">{event.attendees}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
