"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { faqs } from "@/lib/data";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { t } = useLocale();

  return (
    <section id="faq" className="section-padding relative overflow-hidden" style={{ background: "var(--color-bg-deep)" }}>
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: i * 0.04 }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                aria-expanded={openId === faq.id}
                className="w-full text-left rounded-2xl p-5 transition-all duration-300 card-shine"
                style={{
                  background: openId === faq.id ? "rgba(26,86,219,0.1)" : "var(--surface-2)",
                  border: openId === faq.id ? "1px solid rgba(26,86,219,0.3)" : "1px solid var(--border-1)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold" style={{ color: openId === faq.id ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
                    {faq.question}
                  </span>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: openId === faq.id ? "rgba(26,86,219,0.3)" : "var(--surface-5)" }}
                  >
                    {openId === faq.id ? (
                      <Minus size={12} style={{ color: "#60a5fa" }} />
                    ) : (
                      <Plus size={12} style={{ color: "var(--color-text-muted)" }} />
                    )}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm leading-relaxed pt-4" style={{ color: "var(--color-text-muted)" }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
