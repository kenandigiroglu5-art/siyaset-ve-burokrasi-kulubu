"use client";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/common/SectionHeader";
import { timeline } from "@/lib/data";
import { Eye, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #08152e 0%, #0d1f3c 50%, #08152e 100%)" }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,86,219,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Hakkımızda"
          title="Türkiye'nin En Dinamik Siyaset Kulübü"
          subtitle="2020 yılında kurulan kulübümüz, siyaset, bürokrasi ve diplomasi alanlarında akademik ve pratik gelişime odaklanan bir öğrenci topluluğudur."
        />

        {/* Mission Vision Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {[
            {
              icon: Target,
              title: "Misyonumuz",
              description: "Öğrencilere siyaset, diplomasi ve kamu yönetimi alanlarında teorik bilgi ile pratik deneyimi bir arada sunmak; mezunlarımızı akademik ve profesyonel hayata en iyi şekilde hazırlamak.",
              color: "#1a56db",
              bg: "rgba(26,86,219,0.12)",
            },
            {
              icon: Eye,
              title: "Vizyonumuz",
              description: "Türkiye'nin siyasi ve bürokratik sahnesini şekillendirecek lider profilleri yetiştirmek; ulusal ve uluslararası arenada etkin rol oynayan mezunlardan oluşan güçlü bir ağ kurmak.",
              color: "#c9a84c",
              bg: "rgba(201,168,76,0.12)",
            },
            {
              icon: Heart,
              title: "Değerlerimiz",
              description: "Akademik dürüstlük, kapsayıcılık, eleştirel düşünce, liderlik, sürekli öğrenme ve sivil sorumluluk bilinci; kulübümüzün her etkinliğinde ve faaliyetinde bu değerleri yaşatıyoruz.",
              color: "#60a5fa",
              bg: "rgba(96,165,250,0.12)",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="rounded-3xl p-7 card-shine glass-hover"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: item.bg }}>
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "rgb(248,250,252)" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgb(138,155,184)" }}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: "rgb(248,250,252)" }}>
            Tarihimiz
          </h3>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(180deg, transparent, rgba(26,86,219,0.4), rgba(201,168,76,0.4), transparent)" }} />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`flex items-center gap-8 ${ i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse" }`}
              >
                <div className="flex-1 md:w-1/2">
                  <div
                    className="rounded-2xl p-6 card-shine"
                    style={{
                      background: item.highlight ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                      border: item.highlight ? "1px solid rgba(201,168,76,0.25)" : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-1 block"
                      style={{ color: item.highlight ? "#c9a84c" : "#1a56db" }}
                    >
                      {item.year}
                    </span>
                    <h4 className="text-base font-bold mb-2" style={{ color: "rgb(248,250,252)" }}>{item.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgb(138,155,184)" }}>{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-10 h-10 rounded-full flex-shrink-0 items-center justify-center z-10" style={{
                  background: item.highlight ? "linear-gradient(135deg, #c9a84c, #f0d483)" : "linear-gradient(135deg, #1a56db, #0a3d9e)",
                  boxShadow: item.highlight ? "0 0 20px rgba(201,168,76,0.4)" : "0 0 20px rgba(26,86,219,0.4)",
                }}>
                  <span className="text-xs font-bold text-white">{item.year.slice(2)}</span>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
