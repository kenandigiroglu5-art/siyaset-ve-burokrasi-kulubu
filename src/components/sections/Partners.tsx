"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { partners } from "@/lib/data";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="section-padding relative overflow-hidden" style={{ background: "#06101f" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="İş Ortaklarımız"
          title="Kurumsal İşbirliklerimiz"
          subtitle="Köklü kurumlar ve düşünce kuruluşlarıyla birlikte çalışıyor, öğrencilerimize en geniş ağı sunuyoruz."
        />
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden" style={{ mask: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        <div className="flex animate-marquee gap-8 py-4" style={{ width: "max-content" }}>
          {doubled.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className="flex-shrink-0 px-8 py-5 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                minWidth: "160px",
              }}
            >
              <span className="text-sm font-semibold text-center" style={{ color: "rgb(138,155,184)" }}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
