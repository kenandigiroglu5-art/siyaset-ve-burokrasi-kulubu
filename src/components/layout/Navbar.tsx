"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8,21,46,0.92)"
            : "rgba(8,21,46,0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(26,86,219,0.4), rgba(201,168,76,0.3))",
                border: "1px solid rgba(201,168,76,0.35)",
              }}
            >
              <span
                className="text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #f0d483)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SBK
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgb(138,155,184)" }}>
                İMÜ
              </p>
              <p className="text-sm font-semibold leading-tight" style={{ color: "rgb(248,250,252)" }}>
                Siyaset & Bürokrasi
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 animated-underline"
                    style={{
                      color: active ? "rgb(248,250,252)" : "rgb(138,155,184)",
                    }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true });
                window.dispatchEvent(event);
              }}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:bg-white/5"
              style={{
                color: "rgb(138,155,184)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-label="Ara"
            >
              <Search size={13} />
              <span>Ara</span>
              <kbd
                className="px-1.5 py-0.5 rounded text-[10px]"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                ⌘K
              </kbd>
            </button>

            <Link
              href="/events"
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1a56db, #0a3d9e)",
                color: "white",
                boxShadow: "0 4px 16px rgba(26,86,219,0.3)",
              }}
            >
              Etkinlikleri İncele
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgb(248,250,252)",
              }}
              aria-label="Menü"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[99] lg:hidden flex flex-col pt-[72px]"
            style={{ background: "rgba(8,21,46,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-medium transition-all"
                      style={{
                        color: pathname === item.href ? "rgb(248,250,252)" : "rgb(138,155,184)",
                        background: pathname === item.href ? "rgba(255,255,255,0.06)" : "transparent",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/events"
                  className="flex items-center justify-center w-full py-4 rounded-2xl text-base font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #1a56db, #0a3d9e)",
                    color: "white",
                    boxShadow: "0 8px 32px rgba(26,86,219,0.3)",
                  }}
                >
                  Etkinlikleri İncele
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 rounded-2xl text-base font-semibold mt-3"
                  style={{
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#c9a84c",
                  }}
                >
                  Kulübe Katıl
                </Link>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="px-6 pb-8 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="text-xs text-center mb-4" style={{ color: "rgb(138,155,184)" }}>
                Bizi takip edin
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/siyasetveburokrasi_imu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgb(248,250,252)" }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
