"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import ParticleCanvas from "@/components/common/ParticleCanvas";
import WorldMap from "@/components/common/WorldMap";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #08152e 0%, #0d1f3c 50%, #06101f 100%)" }}
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
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
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
            İstanbul Medeniyet Üniversitesi
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div variants={fadeInUp} className="mb-6">
          <h1 className="font-bold leading-[1.05] tracking-tight">
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3"
              style={{ color: "rgb(248,250,252)" }}
            >
              Siyaset ve
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gold-gradient"
            >
              Bürokrasi Kulübü
            </span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
          <div
            className="h-px w-32"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: "rgb(138,155,184)" }}
        >
          Geleceğin diplomatlarını, siyasetçilerini ve kamu yöneticilerini
          yetiştiren öğrenci topluluğu.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
            <span>Etkinlikleri İncele</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            {/* Ripple */}
            <span
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)" }}
            />
          </Link>

          <Link
            href="/contact"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#c9a84c",
              backdropFilter: "blur(10px)",
            }}
          >
            <span>Kulübe Katıl</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: "850+", label: "Üye" },
            { value: "120+", label: "Etkinlik" },
            { value: "5", label: "Yıl" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl md:text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #f0d483)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </p>
              <p className="text-xs font-medium tracking-wider uppercase mt-1" style={{ color: "rgb(138,155,184)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase" style={{ color: "rgb(138,155,184)" }}>
          Kaydır
        </span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
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
