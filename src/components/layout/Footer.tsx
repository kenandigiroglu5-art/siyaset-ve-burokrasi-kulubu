"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { Instagram, Linkedin } from "@/components/common/SocialIcons";
import { SOURCES } from "@/lib/data";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: t.footer.explore,
      links: [
        { label: t.nav.about, href: "/about" },
        { label: t.nav.events, href: "/events" },
        { label: t.nav.announcements, href: "/announcements" },
        { label: t.nav.team, href: "/team" },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        { label: t.nav.contact, href: "/contact" },
        { label: t.nav.joinUs, href: SOURCES.whatsapp },
      ],
    },
  ];

  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "var(--surface-5)",
        background: "linear-gradient(180deg, rgba(8,21,46,0) 0%, rgba(5,12,28,1) 100%)",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="İMÜ Siyaset ve Bürokrasi Topluluğu logosu"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "var(--color-text-muted)" }}>
                  İstanbul Medeniyet Üniversitesi
                </p>
                <p className="text-base font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  Siyaset ve Bürokrasi Topluluğu
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--color-text-muted)" }}>
              {t.footer.tagline}
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={SOURCES.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "var(--surface-5)",
                  border: "1px solid var(--border-2)",
                  color: "var(--color-text-muted)",
                }}
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href={SOURCES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "var(--surface-5)",
                  border: "1px solid var(--border-2)",
                  color: "var(--color-text-muted)",
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={SOURCES.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "var(--surface-5)",
                  border: "1px solid var(--border-2)",
                  color: "var(--color-text-muted)",
                }}
                aria-label="WhatsApp Grubu"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: "#c9a84c" }}
              >
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-sm animated-underline transition-colors duration-200 hover:text-white"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div
          className="flex flex-wrap gap-4 py-6 border-t border-b mb-6"
          style={{ borderColor: "var(--surface-5)" }}
        >
          <a
            href="https://maps.google.com/?q=Istanbul+Medeniyet+University+Kuzey+Kampus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "var(--color-text-muted)" }}
          >
            <MapPin size={14} style={{ color: "#c9a84c" }} />
            İMÜ Kuzey Kampüs, İstanbul
          </a>
          <a
            href={SOURCES.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "var(--color-text-muted)" }}
          >
            <MessageCircle size={14} style={{ color: "#c9a84c" }} />
            WhatsApp
          </a>
          <a
            href={SOURCES.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ExternalLink size={14} style={{ color: "#c9a84c" }} />
            @siyasetveburokrasi_imu
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {year} İMÜ Siyaset ve Bürokrasi Topluluğu. {t.footer.rights}
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            İstanbul Medeniyet Üniversitesi
          </p>
        </div>
      </div>
    </footer>
  );
}
