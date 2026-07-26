import Link from "next/link";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { Instagram } from "@/components/common/SocialIcons";

const footerLinks = {
  Keşfet: [
    { label: "Hakkımızda", href: "/about" },
    { label: "Etkinlikler", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Yönetim Kurulu", href: "/team" },
  ],
  Kaynaklar: [
    { label: "İletişim", href: "/contact" },
    { label: "Kulübe Katıl", href: "/contact" },
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Kullanım Koşulları", href: "#" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
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
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(26,86,219,0.4), rgba(201,168,76,0.3))",
                  border: "1px solid rgba(201,168,76,0.35)",
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #f0d483)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SBK
                </span>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgb(138,155,184)" }}>
                  İstanbul Medeniyet Üniversitesi
                </p>
                <p className="text-base font-semibold" style={{ color: "rgb(248,250,252)" }}>
                  Siyaset ve Bürokrasi Kulübü
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgb(138,155,184)" }}>
              Geleceğin diplomatlarını, siyasetçilerini ve kamu yöneticilerini yetiştiren öğrenci topluluğu.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/siyasetveburokrasi_imu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgb(138,155,184)",
                }}
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="mailto:siyasetburokrasi@imu.edu.tr"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgb(138,155,184)",
                }}
                aria-label="E-posta"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: "#c9a84c" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm animated-underline transition-colors duration-200 hover:text-white"
                      style={{ color: "rgb(138,155,184)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div
          className="flex flex-wrap gap-4 py-6 border-t border-b mb-6"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <a
            href="https://maps.google.com/?q=Istanbul+Medeniyet+University"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "rgb(138,155,184)" }}
          >
            <MapPin size={14} style={{ color: "#c9a84c" }} />
            İMÜ Kadıköy Kampüsü, İstanbul
          </a>
          <a
            href="mailto:siyasetburokrasi@imu.edu.tr"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "rgb(138,155,184)" }}
          >
            <Mail size={14} style={{ color: "#c9a84c" }} />
            siyasetburokrasi@imu.edu.tr
          </a>
          <a
            href="https://www.instagram.com/siyasetveburokrasi_imu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "rgb(138,155,184)" }}
          >
            <ExternalLink size={14} style={{ color: "#c9a84c" }} />
            @siyasetveburokrasi_imu
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgb(138,155,184)" }}>
            © {year} İMÜ Siyaset ve Bürokrasi Kulübü. Tüm hakları saklıdır.
          </p>
          <p className="text-xs" style={{ color: "rgb(138,155,184)" }}>
            İstanbul Medeniyet Üniversitesi
          </p>
        </div>
      </div>
    </footer>
  );
}
