"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Instagram as InstagramIcon, Linkedin as LinkedinIcon } from "@/components/common/SocialIcons";
import { heroItem, heroStagger } from "@/lib/animations";

// Decorative, non-critical background layers: loaded in a separate chunk so
// their JS doesn't compete with the critical hero text during initial
// hydration. Same visual result — they just mount a beat after first paint.
const ParticleCanvas = dynamic(() => import("@/components/common/ParticleCanvas"), { ssr: false });
const WorldMap = dynamic(() => import("@/components/common/WorldMap"), { ssr: false });
import { pastEvents, SOURCES } from "@/lib/data";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const latestEvent = pastEvents[pastEvents.length - 1];

const quickLinks = [
  { icon: InstagramIcon, label: "Instagram", href: SOURCES.instagram },
  { icon: LinkedinIcon, label: "LinkedIn", href: SOURCES.linkedin },
  { icon: MessageCircle, label: "WhatsApp", href: SOURCES.whatsapp },
];

export default function Hero() {
  const { t } = useLocale();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--color-bg-base) 0%, var(--color-bg-elevated) 50%, var(--color-bg-deep) 100%)" }}
    >
      {/* Background layers */}
      <WorldMap />
      <ParticleCanvas />

      {/* Radial glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,86,219,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,86,219,0.05) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Main content */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        {/* Badge */}
        <motion.div variants={heroItem} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#c9a84c",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#c9a84c" }}
            />
            {t.hero.badgeUniversity}
          </div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase"
            style={{
              background: "rgba(26,86,219,0.12)",
              border: "1px solid rgba(96,165,250,0.25)",
              color: "#93c5fd",
            }}
          >
            {t.hero.badgeTerm}
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div variants={heroItem} className="mb-6">
          <h1 className="font-bold leading-[1.05] tracking-tight">
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              {t.hero.titleLine1}
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gold-gradient"
            >
              {t.hero.titleLine2}
            </span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div variants={heroItem} className="flex justify-center mb-8">
          <div
            className="h-px w-32"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={heroItem}
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.p
          variants={heroItem}
          className="text-sm sm:text-base leading-relaxed mb-12 max-w-xl mx-auto"
          style={{ color: "var(--color-text-faint)" }}
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            href="/events"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1a56db, #0a3d9e)",
              color: "white",
              boxShadow: "0 8px 32px rgba(26,86,219,0.4)",
            }}
          >
            <span>{t.hero.exploreEvents}</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            {/* Ripple */}
            <span
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)" }}
            />
          </Link>

          <Link
            href={SOURCES.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--surface-3)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#c9a84c",
              backdropFilter: "blur(10px)",
            }}
          >
            <span>{t.hero.joinUs}</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Quick social links */}
        <motion.div variants={heroItem} className="flex items-center justify-center gap-3 mb-10">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: "var(--surface-4)", border: "1px solid var(--border-2)", color: "var(--color-text-body)" }}
            >
              <link.icon size={16} />
            </a>
          ))}
        </motion.div>

        {/* Latest activity ticker */}
        {latestEvent && (
          <motion.div variants={heroItem} className="flex justify-center">
            <Link
              href={`/events/${latestEvent.slug}`}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--color-text-muted)" }}
            >
              <span
                className="px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontSize: "10px" }}
              >
                {t.hero.latestActivity}
              </span>
              <span className="max-w-[220px] sm:max-w-none truncate">{latestEvent.title}</span>
              <ArrowRight size={12} />
            </Link>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase" style={{ color: "var(--color-text-muted)" }}>
          {t.hero.scroll}
        </span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid var(--border-4)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full"
            style={{ background: "rgba(201,168,76,0.7)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
