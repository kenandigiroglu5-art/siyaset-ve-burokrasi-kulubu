"use client";
import { motion } from "framer-motion";
import { Crown, User } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { committees } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Committees() {
  const { t } = useLocale();
  return (
    <section
      id="committees"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-bg-deep)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow={t.committees.eyebrow}
          title={t.committees.title}
          subtitle={t.committees.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {committees.map((committee) => (
            <motion.div
              key={committee.id}
              variants={fadeInUp}
              className="rounded-3xl p-6 card-shine relative overflow-hidden"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border-1)" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                {committee.name}
              </h3>

              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <Crown size={14} style={{ color: "#c9a84c" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                      {committee.head}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                      {t.committees.headLabel}
                    </p>
                  </div>
                </li>

                {committee.members.map((member) => (
                  <li key={member} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--surface-5)", border: "1px solid var(--border-1)" }}
                    >
                      <User size={14} style={{ color: "var(--color-text-muted)" }} />
                    </div>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {member}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
