"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, X, FileText, CalendarDays, Megaphone, UserRound, HelpCircle, Link2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSearchIndex } from "@/lib/searchIndex";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const categoryIcons: Record<string, React.ElementType> = {
  Sayfa: FileText,
  Etkinlik: CalendarDays,
  Duyuru: Megaphone,
  "Yönetim Kurulu": UserRound,
  SSS: HelpCircle,
  "Sosyal Medya": Link2,
};

function normalize(text: string) {
  return text.toLocaleLowerCase("tr-TR");
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { t } = useLocale();
  const index = useMemo(() => getSearchIndex(), []);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const openHandler = () => setOpen((v) => !v);
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("open-command-menu", openHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("open-command-menu", openHandler);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return index.slice(0, 8);
    return index
      .filter((item) => normalize(item.label).includes(q) || (item.sublabel && normalize(item.sublabel).includes(q)))
      .slice(0, 12);
  }, [query, index]);

  const navigate = (href: string, external?: boolean) => {
    setOpen(false);
    setQuery("");
    if (external || href.startsWith("http")) window.open(href, "_blank", "noopener,noreferrer");
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
            className="fixed top-1/4 left-1/2 -translate-x-1/2 z-[9991] w-full max-w-lg"
            style={{ padding: "0 1rem" }}
            role="dialog"
            aria-modal="true"
            aria-label="Site içi arama"
          >
            <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(13,31,60,0.98)", border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>
              <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--surface-5)" }}>
                <Search size={16} style={{ color: "var(--color-text-muted)" }} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.search.placeholder}
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "var(--color-text-primary)", caretColor: "#c9a84c" }}
                />
                <button onClick={() => setOpen(false)} aria-label={t.search.close}><X size={14} style={{ color: "var(--color-text-muted)" }} /></button>
              </div>
              <div className="py-2 max-h-96 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="px-4 py-6 text-sm text-center" style={{ color: "var(--color-text-muted)" }}>
                    {t.search.noResults}
                  </p>
                ) : (
                  filtered.map((item) => {
                    const Icon = categoryIcons[item.category] ?? FileText;
                    return (
                      <button
                        key={`${item.category}-${item.label}-${item.href}`}
                        onClick={() => navigate(item.href, item.external)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/5"
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(26,86,219,0.2)" }}>
                          {item.external ? (
                            <ExternalLink size={13} style={{ color: "#60a5fa" }} />
                          ) : (
                            <Icon size={13} style={{ color: "#60a5fa" }} />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm truncate" style={{ color: "var(--color-text-primary)" }}>{item.label}</p>
                          {item.sublabel && (
                            <p className="text-xs truncate" style={{ color: "var(--color-text-faint)" }}>{item.sublabel}</p>
                          )}
                        </div>
                        <span className="text-xs flex-shrink-0" style={{ color: "var(--color-text-muted)" }}>{item.category}</span>
                      </button>
                    );
                  })
                )}
              </div>
              <div className="px-4 py-2 border-t text-xs flex gap-4" style={{ borderColor: "var(--surface-5)", color: "var(--color-text-muted)" }}>
                <span><kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--border-2)" }}>↵</kbd> {t.search.select}</span>
                <span><kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--border-2)" }}>Esc</kbd> {t.search.close}</span>
                <span className="ml-auto"><kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--border-2)" }}>⌘K</kbd></span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
