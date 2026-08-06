"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/common/SectionHeader";
import Timeline from "@/components/sections/Timeline";
import { Eye, Target, Heart } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function About() {
  const { t } = useLocale();
  const cards = [
    {
      icon: Target,
      title: t.about.missionTitle,
      description: t.about.missionText,
      color: "#1a56db",
      bg: "rgba(26,86,219,0.12)",
      source: t.about.missionSource,
    },
    {
      icon: Heart,
      title: t.about.stanceTitle,
      description: t.about.stanceText,
      color: "#c9a84c",
      bg: "rgba(201,168,76,0.12)",
      source: t.about.stanceSource,
    },
    {
      icon: Eye,
      title: t.about.visionTitle,
      description: t.about.visionText,
      color: "#60a5fa",
      bg: "rgba(96,165,250,0.12)",
      source: undefined as string | undefined,
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--color-bg-base) 0%, var(--color-bg-elevated) 50%, var(--color-bg-base) 100%)" }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,86,219,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        {/* Mission Vision Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {cards.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="rounded-3xl p-7 card-shine glass-hover"
              style={{ border: "1px solid var(--border-1)" }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: item.bg }}>
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-text-muted)" }}>{item.description}</p>
              {item.source && (
                <p className="text-[11px] uppercase tracking-wider" style={{ color: "var(--color-text-faintest)" }}>
                  {item.source}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <Timeline />
      </div>
    </section>
  );
}
