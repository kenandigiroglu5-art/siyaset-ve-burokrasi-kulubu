"use client";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "@/components/common/SocialIcons";
import SectionHeader from "@/components/common/SectionHeader";
import { teamMembers } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

export default function ManagementBoard() {
  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden"
      style={{ background: "#08152e" }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(26,86,219,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Yönetim Kurulu"
          title="Ekibimizle Tanışın"
          subtitle="Kulübümüzü ileri taşıyan, kararlı ve deneyimli liderlik kadromuz."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="rounded-3xl p-6 text-center card-shine group relative overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(26,86,219,0.08) 0%, transparent 60%)",
                }}
              />

              {/* Avatar */}
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${
                      i % 4 === 0
                        ? "rgba(26,86,219,0.4), rgba(26,86,219,0.1)"
                        : i % 4 === 1
                        ? "rgba(201,168,76,0.35), rgba(201,168,76,0.1)"
                        : i % 4 === 2
                        ? "rgba(96,165,250,0.3), rgba(96,165,250,0.1)"
                        : "rgba(168,85,247,0.3), rgba(168,85,247,0.1)"
                    })`,
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      background:
                        i % 4 === 0
                          ? "linear-gradient(135deg, #60a5fa, #1a56db)"
                          : i % 4 === 1
                          ? "linear-gradient(135deg, #c9a84c, #f0d483)"
                          : i % 4 === 2
                          ? "linear-gradient(135deg, #93c5fd, #60a5fa)"
                          : "linear-gradient(135deg, #c084fc, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                {/* Online indicator */}
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2"
                  style={{
                    background: "#22c55e",
                    borderColor: "#08152e",
                  }}
                />
              </div>

              {/* Info */}
              <h3
                className="text-sm font-bold mb-1"
                style={{ color: "rgb(248,250,252)" }}
              >
                {member.name}
              </h3>
              <p
                className="text-xs font-semibold mb-1"
                style={{ color: "#c9a84c" }}
              >
                {member.role}
              </p>
              <p
                className="text-[11px] mb-4"
                style={{ color: "rgb(138,155,184)" }}
              >
                {member.department} · {member.year}
              </p>

              {/* Bio */}
              <p
                className="text-xs leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "rgb(138,155,184)" }}
              >
                {member.bio.slice(0, 80)}...
              </p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgb(138,155,184)",
                    }}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={13} />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgb(138,155,184)",
                    }}
                    aria-label={`${member.name} Instagram`}
                  >
                    <Instagram size={13} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgb(138,155,184)",
                    }}
                    aria-label={`${member.name} E-posta`}
                  >
                    <Mail size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
