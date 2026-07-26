"use client";
import { motion } from "framer-motion";
import { Network, Briefcase, Globe, Crown, BookOpen, Award } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { whyJoinItems } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Briefcase,
  Globe,
  Crown,
  BookOpen,
  Award,
};

export default function WhyJoinUs() {
  return (
    <section id="why-join" className="section-padding relative overflow-hidden" style={{ background: "#06101f" }}>
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Neden Biz?"
          title="Kulübümüze Neden Katılmalısınız?"
          subtitle="Her üyemize özel fırsatlar sunuyoruz. Kariyer, ağ, deneyim ve gelişim için doğru yerdesiniz."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {whyJoinItems.map((item, i) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="rounded-3xl p-7 card-shine glass-hover group relative overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: i % 3 === 0 ? "rgba(26,86,219,0.05)" : i % 3 === 1 ? "rgba(201,168,76,0.05)" : "rgba(96,165,250,0.05)" }}
                />
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: i % 3 === 0 ? "rgba(26,86,219,0.15)" : i % 3 === 1 ? "rgba(201,168,76,0.12)" : "rgba(96,165,250,0.12)" }}
                >
                  <Icon size={20} style={{ color: i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#c9a84c" : "#93c5fd" }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "rgb(248,250,252)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgb(138,155,184)" }}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #c9a84c, #a07c2e)", color: "#08152e", boxShadow: "0 8px 32px rgba(201,168,76,0.3)" }}
          >
            Hemen Üye Ol
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
