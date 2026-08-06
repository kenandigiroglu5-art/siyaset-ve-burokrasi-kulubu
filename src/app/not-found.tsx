"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function NotFound() {
  const { t } = useLocale();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "var(--color-bg-base)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,86,219,0.1), transparent)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {/* 404 */}
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[120px] md:text-[180px] font-black leading-none mb-6"
          style={{
            background: "linear-gradient(135deg, rgba(26,86,219,0.4), rgba(201,168,76,0.4))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
          {t.notFound.title}
        </h1>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "var(--color-text-muted)" }}>
          {t.notFound.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1a56db, #0a3d9e)",
              color: "white",
              boxShadow: "0 8px 24px rgba(26,86,219,0.3)",
            }}
          >
            <Home size={15} />
            {t.notFound.home}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:scale-105"
            style={{
              border: "1px solid var(--border-3)",
              color: "var(--color-text-primary)",
              background: "var(--surface-3)",
            }}
          >
            <ArrowLeft size={15} />
            {t.notFound.back}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
