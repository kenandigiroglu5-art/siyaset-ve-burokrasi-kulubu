"use client";
import { motion } from "framer-motion";
import { Calendar, Star, Mic, Users, Trophy } from "lucide-react";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import SectionHeader from "@/components/common/SectionHeader";
import { statistics } from "@/lib/data";
import { staggerContainer, scaleIn, viewportConfig } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Star,
  Mic,
  Users,
  Trophy,
};

export default function Statistics() {
  return (
    <section id="statistics" className="section-padding relative overflow-hidden" style={{ background: "#06101f" }}>
      {/* Decorative */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(26,86,219,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Rakamlarla Biz"
          title="5 Yılda Büyük Adımlar"
          subtitle="Her rakam, öğrencilerimize sunduğumuz değeri ve kulübümüzün büyüyen etkisini yansıtıyor."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {statistics.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Star;
            return (
              <motion.div
                key={stat.id}
                variants={scaleIn}
                className="rounded-3xl p-6 text-center card-shine glass-hover relative overflow-hidden group"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: i % 2 === 0 ? "radial-gradient(circle at 50% 50%, rgba(26,86,219,0.08), transparent)" : "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.06), transparent)" }} />

                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: i % 2 === 0 ? "rgba(26,86,219,0.15)" : "rgba(201,168,76,0.12)" }}>
                  <Icon size={18} style={{ color: i % 2 === 0 ? "#60a5fa" : "#c9a84c" }} />
                </div>

                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d483)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-medium" style={{ color: "rgb(138,155,184)" }}>{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
