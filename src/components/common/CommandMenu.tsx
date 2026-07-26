"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Calendar, Users, BookOpen, Mail, Home, X } from "lucide-react";
import { useRouter } from "next/navigation";

const commands = [
  { icon: Home, label: "Ana Sayfa", href: "/", category: "Sayfalar" },
  { icon: Users, label: "Hakkımızda", href: "/about", category: "Sayfalar" },
  { icon: Calendar, label: "Etkinlikler", href: "/events", category: "Sayfalar" },
  { icon: Users, label: "Yönetim Kurulu", href: "/team", category: "Sayfalar" },
  { icon: BookOpen, label: "Blog", href: "/blog", category: "Sayfalar" },
  { icon: Mail, label: "İletişim", href: "/contact", category: "Sayfalar" },
  { icon: ExternalLink, label: "Instagram", href: "https://www.instagram.com/siyasetveburokrasi_imu/", category: "Sosyal Medya" },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = (href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("http")) window.open(href, "_blank");
    else router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9990]"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 z-[9991] w-full max-w-md"
            style={{ padding: "0 1rem" }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(13,31,60,0.98)", border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>
              <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <Search size={16} style={{ color: "rgb(138,155,184)" }} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ara veya git..."
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "rgb(248,250,252)", caretColor: "#c9a84c" }}
                />
                <button onClick={() => setOpen(false)}><X size={14} style={{ color: "rgb(138,155,184)" }} /></button>
              </div>
              <div className="py-2 max-h-72 overflow-y-auto">
                {filtered.map((cmd) => (
                  <button
                    key={cmd.href}
                    onClick={() => navigate(cmd.href)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/5"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(26,86,219,0.2)" }}>
                      <cmd.icon size={13} style={{ color: "#60a5fa" }} />
                    </div>
                    <span className="text-sm" style={{ color: "rgb(248,250,252)" }}>{cmd.label}</span>
                    <span className="ml-auto text-xs" style={{ color: "rgb(138,155,184)" }}>{cmd.category}</span>
                  </button>
                ))}
              </div>
              <div className="px-4 py-2 border-t text-xs flex gap-4" style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgb(138,155,184)" }}>
                <span><kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.08)" }}>↵</kbd> Seç</span>
                <span><kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.08)" }}>Esc</kbd> Kapat</span>
                <span className="ml-auto"><kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.08)" }}>⌘K</kbd></span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
