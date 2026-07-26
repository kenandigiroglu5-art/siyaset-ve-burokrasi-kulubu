import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  goldTitle?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  goldTitle = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "#c9a84c" }}
        >
          <span className="w-6 h-px" style={{ background: "#c9a84c" }} />
          {eyebrow}
          <span className="w-6 h-px" style={{ background: "#c9a84c" }} />
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          goldTitle ? "text-gold-gradient" : ""
        }`}
        style={goldTitle ? {} : { color: "rgb(248,250,252)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgb(138,155,184)" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
