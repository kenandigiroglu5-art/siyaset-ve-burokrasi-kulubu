import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "İletişim",
  description: "İMÜ Siyaset ve Bürokrasi Topluluğu ile iletişime geçin — topluluğa katılım, etkinlikler ve işbirliği için.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, var(--color-bg-base), var(--color-bg-elevated))" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>İletişim</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "var(--color-text-primary)" }}>Bize Ulaşın</h1>
        <p className="mt-4 text-base" style={{ color: "var(--color-text-muted)" }}>Sorularınız için buradayız</p>
      </div>
      <Contact />
      <FAQ />
    </div>
  );
}
