"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { teamMembers } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function initialsOf(text: string) {
  return text
    .split(" ")
    .filter((w) => w.length > 0)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ManagementBoard() {
  const { t } = useLocale();
  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-bg-base)" }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(26,86,219,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow={t.team.eyebrow}
          title={t.team.title}
          subtitle={t.team.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="rounded-3xl p-6 text-center card-shine group relative overflow-hidden"
              style={{ border: "1px solid var(--border-1)" }}
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(26,86,219,0.08) 0%, transparent 60%)",
                }}
              />

              {/* Avatar */}
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${
                      i % 4 === 0
                        ? "rgba(26,86,219,0.4), rgba(26,86,219,0.1)"
                        : i % 4 === 1
                        ? "rgba(201,168,76,0.35), rgba(201,168,76,0.1)"
                        : i % 4 === 2
                        ? "rgba(96,165,250,0.3), rgba(96,165,250,0.1)"
                        : "rgba(168,85,247,0.3), rgba(168,85,247,0.1)"
                    })`,
                    border: "1px solid var(--border-2)",
                  }}
                >
                  <span
                    style={{
                      background:
                        i % 4 === 0
                          ? "linear-gradient(135deg, #60a5fa, #1a56db)"
                          : i % 4 === 1
                          ? "linear-gradient(135deg, #c9a84c, #f0d483)"
                          : i % 4 === 2
                          ? "linear-gradient(135deg, #93c5fd, #60a5fa)"
                          : "linear-gradient(135deg, #c084fc, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {initialsOf(member.name ?? member.role)}
                  </span>
                </div>
              </div>

              {/* Info */}
              {member.name ? (
                <>
                  <p className="text-sm font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>
                    {member.name}
                  </p>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#c9a84c" }}>
                    {member.role}
                  </p>
                  {member.sourceLabel && (
                    <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-faintest)" }}>
                      {t.team.source}: {member.sourceLabel}
                    </p>
                  )}
                </>
              ) : (
                <>
                  <p className="text-sm font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
                    {member.role}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {t.team.updating}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs mt-10" style={{ color: "var(--color-text-faint)" }}>
          {t.team.footnote}
        </p>
      </div>
    </section>
  );
}
