"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, CheckCircle, MessageCircle, AlertCircle, Loader2 } from "lucide-react";
import { Instagram, Linkedin } from "@/components/common/SocialIcons";
import SectionHeader from "@/components/common/SectionHeader";
import { fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";
import { SOURCES } from "@/lib/data";
import { useLocale } from "@/lib/i18n/LocaleProvider";

// Doğrulanmış kampüs adresi (medeniyet.edu.tr): Ünalan Mah. Ünalan Sok.
// D-100 Karayolu Yanyol, 34700 Üsküdar/İstanbul. API anahtarı gerektirmeyen
// adres tabanlı embed kullanılır; uydurma koordinat girilmemiştir.
const MAP_QUERY = encodeURIComponent(
  "İstanbul Medeniyet Üniversitesi Kuzey Kampüs, Ünalan Mahallesi, Ünalan Sokak, D-100 Karayolu Yanyol, 34700 Üsküdar/İstanbul"
);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", company: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--color-bg-deep) 0%, var(--color-bg-base) 100%)" }}>
      <div className="absolute top-1/3 right-0 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06), transparent)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {[
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Topluluğa Katıl",
                href: SOURCES.whatsapp,
                color: "#4ade80",
                bg: "rgba(74,222,128,0.12)",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@siyasetveburokrasi_imu",
                href: SOURCES.instagram,
                color: "#f472b6",
                bg: "rgba(244,114,182,0.12)",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Siyaset Ve Burokrasi Topluluğu",
                href: SOURCES.linkedin,
                color: "#60a5fa",
                bg: "rgba(96,165,250,0.12)",
              },
              {
                icon: MapPin,
                label: "Üniversite",
                value: "İstanbul Medeniyet Üniversitesi, Kuzey Kampüs",
                href: `https://maps.google.com/?q=${MAP_QUERY}`,
                color: "#c9a84c",
                bg: "rgba(201,168,76,0.12)",
              },
            ].map((info) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 glass-hover"
                style={{ border: "1px solid var(--border-1)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: info.bg }}>
                  <info.icon size={18} style={{ color: info.color }} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>{info.label}</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>{info.value}</p>
                </div>
              </a>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden flex-1 min-h-48" style={{ border: "1px solid var(--border-1)" }}>
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "200px", filter: "invert(90%) hue-rotate(180deg) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                title="İMÜ Kuzey Kampüs Haritası"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl p-8 h-full" style={{ background: "var(--surface-2)", border: "1px solid var(--border-1)" }}>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center gap-4 py-12"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.15)" }}>
                    <CheckCircle size={28} style={{ color: "#22c55e" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--color-text-primary)" }}>{t.contact.sentTitle}</h3>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{t.contact.sentBody}</p>
                  <button
                    onClick={() => {
                      setForm({ name: "", email: "", subject: "", message: "", company: "" });
                      setStatus("idle");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-medium"
                    style={{ background: "var(--surface-5)", color: "var(--color-text-primary)" }}
                  >
                    {t.contact.newMessage}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>{t.contact.formTitle}</h3>

                  {/* Honeypot: botlar için görünür, ekran okuyucular ve gerçek kullanıcılar için gizli */}
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute opacity-0 pointer-events-none -z-10"
                    style={{ left: "-9999px", width: "1px", height: "1px" }}
                  />

                  {status === "error" && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl text-sm"
                      style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#f87171" }}
                      role="alert"
                    >
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">{t.contact.errorTitle}</p>
                        <p className="mt-0.5" style={{ color: "var(--color-text-muted)" }}>{t.contact.errorBody}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium mb-2" style={{ color: "var(--color-text-muted)" }}>{t.contact.name}</label>
                      <input
                        id="contact-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: "var(--surface-4)", border: "1px solid var(--border-2)", color: "var(--color-text-primary)", caretColor: "#c9a84c" }}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium mb-2" style={{ color: "var(--color-text-muted)" }}>{t.contact.email}</label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: "var(--surface-4)", border: "1px solid var(--border-2)", color: "var(--color-text-primary)", caretColor: "#c9a84c" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium mb-2" style={{ color: "var(--color-text-muted)" }}>{t.contact.subject}</label>
                    <input
                      id="contact-subject"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ background: "var(--surface-4)", border: "1px solid var(--border-2)", color: "var(--color-text-primary)", caretColor: "#c9a84c" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium mb-2" style={{ color: "var(--color-text-muted)" }}>{t.contact.message}</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{ background: "var(--surface-4)", border: "1px solid var(--border-2)", color: "var(--color-text-primary)", caretColor: "#c9a84c" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #1a56db, #0a3d9e)", color: "white", boxShadow: "0 8px 24px rgba(26,86,219,0.35)" }}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        {t.contact.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
