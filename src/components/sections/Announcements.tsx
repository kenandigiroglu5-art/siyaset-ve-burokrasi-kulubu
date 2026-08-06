"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { announcements } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Announcements() {
  const { t } = useLocale();
  // En yeniden en eskiye
  const ordered = [...announcements].reverse();

  return (
    <section
      id="announcements"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--color-bg-base) 0%, var(--color-bg-deep) 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.announcements.eyebrow}
          title={t.announcements.title}
          subtitle={t.announcements.subtitle}
        />

        {ordered.length === 0 ? (
          <div
            className="rounded-3xl p-12 text-center"
            style={{ background: "var(--surface-1)", border: "1px solid var(--border-1)" }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{t.announcements.empty}</p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-4"
          >
            {ordered.map((a) => {
              const content = (
                <>
                  <div className="flex items-center gap-2 mb-2" style={{ color: "var(--color-text-muted)" }}>
                    <Calendar size={12} />
                    <span className="text-xs">{a.date}</span>
                    {a.sourceLabel && (
                      <span
                        className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                        style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c" }}
                      >
                        {a.sourceLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: "var(--color-text-heading)" }}>
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {a.excerpt}
                  </p>
                </>
              );

              return (
                <motion.div key={a.id} variants={fadeInUp}>
                  {a.eventSlug ? (
                    <Link
                      href={`/events/${a.eventSlug}`}
                      className="block rounded-2xl p-6 card-shine group transition-all duration-300"
                      style={{ background: "var(--surface-1)", border: "1px solid var(--border-1)" }}
                    >
                      {content}
                      <span
                        className="inline-flex items-center gap-1 text-xs font-medium mt-3 transition-all group-hover:gap-2"
                        style={{ color: "#60a5fa" }}
                      >
                        {t.announcements.viewDetail} <ArrowUpRight size={12} />
                      </span>
                    </Link>
                  ) : (
                    <div
                      className="rounded-2xl p-6 card-shine"
                      style={{ background: "var(--surface-1)", border: "1px solid var(--border-1)" }}
                    >
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
