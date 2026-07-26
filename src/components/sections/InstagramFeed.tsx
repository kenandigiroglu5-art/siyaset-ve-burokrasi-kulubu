"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { Instagram } from "@/components/common/SocialIcons";
import SectionHeader from "@/components/common/SectionHeader";
import { instagramPosts } from "@/lib/data";
import { staggerContainer, scaleIn, viewportConfig } from "@/lib/animations";

// Gradient backgrounds for mock instagram posts
const postGradients = [
  "linear-gradient(135deg, #0d1f3c 0%, #1a3a6e 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #0d1f3c 0%, #2c1654 100%)",
  "linear-gradient(135deg, #1a2a1a 0%, #0d3b1e 100%)",
  "linear-gradient(135deg, #2a1a0d 0%, #3b1f0d 100%)",
  "linear-gradient(135deg, #0a1628 0%, #1a56db 200%)",
];

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="section-padding relative overflow-hidden"
      style={{ background: "#08152e" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Instagram"
          title="Bizi Takip Edin"
          subtitle="@siyasetveburokrasi_imu hesabımızdan en güncel etkinlik ve içeriklerimizi takip edin."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
        >
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              variants={scaleIn}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl overflow-hidden aspect-square relative group cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Mock post visual */}
              <div
                className="absolute inset-0"
                style={{ background: postGradients[i % postGradients.length] }}
              />

              {/* Grid pattern */}
              <div className="absolute inset-0 bg-grid opacity-30" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Instagram size={20} style={{ color: "rgba(255,255,255,0.5)" }} />
                </div>
              </div>

              {/* Caption preview */}
              <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                <p className="text-[10px] leading-tight line-clamp-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {post.caption}
                </p>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{ background: "rgba(8,21,46,0.85)" }}
              >
                <div className="flex gap-6">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart size={16} />
                    <span className="text-sm font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <MessageCircle size={16} />
                    <span className="text-sm font-semibold">{post.comments}</span>
                  </div>
                </div>
                <div
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.12)", color: "white" }}
                >
                  <ExternalLink size={11} />
                  Instagram'da Gör
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/siyasetveburokrasi_imu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(225,48,108,0.8), rgba(193,53,132,0.8))",
              color: "white",
              boxShadow: "0 8px 24px rgba(225,48,108,0.25)",
            }}
          >
            <Instagram size={16} />
            @siyasetveburokrasi_imu Takip Et
          </a>
        </motion.div>
      </div>
    </section>
  );
}
