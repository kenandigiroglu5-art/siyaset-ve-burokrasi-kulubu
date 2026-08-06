"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Mic } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";
import { timeline } from "@/lib/data";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Timeline() {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  return (
    <div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "var(--color-text-primary)" }}>
          {t.about.timelineTitle}
        </h3>
        <p className="text-sm text-center mb-12 max-w-lg mx-auto" style={{ color: "var(--color-text-muted)" }}>
          {t.about.timelineSubtitle}
        </p>
      </motion.div>

      {timeline.length === 0 ? (
        <div
          className="rounded-3xl p-12 text-center"
          style={{ background: "var(--surface-2)", border: "1px solid var(--border-1)" }}
        >
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{t.about.timelineEmpty}</p>
        </div>
      ) : (
        <div ref={containerRef} className="relative">
          {/* Static track */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border-2)" }}
          />
          {/* Scroll-driven progress line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px hidden md:block origin-top"
            style={{
              height: "100%",
              scaleY: progress,
              background: "linear-gradient(180deg, #1a56db, #c9a84c)",
              boxShadow: "0 0 12px rgba(201,168,76,0.5)",
            }}
          />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 md:w-1/2">
                  <div
                    className="rounded-2xl p-6 card-shine"
                    style={{
                      background: item.highlight ? "rgba(201,168,76,0.08)" : "var(--surface-2)",
                      border: item.highlight ? "1px solid rgba(201,168,76,0.25)" : "1px solid var(--border-1)",
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-1 block"
                      style={{ color: item.highlight ? "#c9a84c" : "#1a56db" }}
                    >
                      {item.year}
                    </span>
                    <h4 className="text-base font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>{item.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.4 }}
                  className="hidden md:flex w-10 h-10 rounded-full flex-shrink-0 items-center justify-center z-10"
                  style={{
                    background: item.highlight ? "linear-gradient(135deg, #c9a84c, #f0d483)" : "linear-gradient(135deg, #1a56db, #0a3d9e)",
                    boxShadow: item.highlight ? "0 0 20px rgba(201,168,76,0.4)" : "0 0 20px rgba(26,86,219,0.4)",
                  }}
                >
                  {item.highlight ? <Mic size={14} className="text-white" /> : <Calendar size={14} className="text-white" />}
                </motion.div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
