"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Instagram } from "@/components/common/SocialIcons";
import SectionHeader from "@/components/common/SectionHeader";
import { staggerContainer, scaleIn, viewportConfig } from "@/lib/animations";
import { instagramHighlights, SOURCES } from "@/lib/data";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const INSTAGRAM_URL = SOURCES.instagram;

const cardGradients = [
  "linear-gradient(135deg, var(--color-bg-elevated) 0%, #1a3a6e 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, var(--color-bg-elevated) 0%, #2c1654 100%)",
  "linear-gradient(135deg, #1a2a1a 0%, #0d3b1e 100%)",
  "linear-gradient(135deg, #2a1a0d 0%, #3b1f0d 100%)",
  "linear-gradient(135deg, var(--color-bg-deep) 0%, #1a3a6e 100%)",
];

export default function InstagramFeed() {
  const { t } = useLocale();
  return (
    <section
      id="instagram"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-bg-base)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.instagram.eyebrow}
          title={t.instagram.title}
          subtitle={t.instagram.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
        >
          {instagramHighlights.map((post, i) => (
            <motion.a
              key={post.id}
              variants={scaleIn}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl overflow-hidden aspect-square relative group cursor-pointer"
              style={{ border: "1px solid var(--border-1)" }}
              aria-label={`Instagram: ${post.topic}`}
            >
              <div className="absolute inset-0" style={{ background: cardGradients[i % cardGradients.length] }} />
              <div className="absolute inset-0 bg-grid opacity-30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--border-2)" }}
                >
                  <Instagram size={20} style={{ color: "rgba(255,255,255,0.5)" }} />
                </div>
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                >
                  {post.category}
                </span>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{ background: "rgba(8,21,46,0.9)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "white" }}>{post.topic}</p>
                <div
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "var(--border-3)", color: "white" }}
                >
                  <ExternalLink size={11} />
                  {t.instagram.viewOnInstagram}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(225,48,108,0.8), rgba(193,53,132,0.8))",
              color: "white",
              boxShadow: "0 8px 24px rgba(225,48,108,0.25)",
            }}
          >
            <Instagram size={16} />
            @siyasetveburokrasi_imu {t.instagram.follow}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
