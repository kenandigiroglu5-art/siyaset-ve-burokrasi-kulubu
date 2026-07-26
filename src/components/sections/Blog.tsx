"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { blogPosts } from "@/lib/data";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import Link from "next/link";
import type { BlogCategory } from "@/types";

const categoryColors: Record<BlogCategory, { bg: string; color: string }> = {
  Diplomasi: { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" },
  Siyaset: { bg: "rgba(201,168,76,0.2)", color: "#c9a84c" },
  "Kamu Yönetimi": { bg: "rgba(34,197,94,0.15)", color: "#4ade80" },
  "Uluslararası İlişkiler": { bg: "rgba(168,85,247,0.15)", color: "#c084fc" },
  Analiz: { bg: "rgba(244,114,182,0.15)", color: "#f472b6" },
};

const postGradients = [
  "linear-gradient(135deg, #0d1f3c, #1a3a6e)",
  "linear-gradient(135deg, #1a2a1a, #0d3b1e)",
  "linear-gradient(135deg, #1a1a2e, #0f3460)",
  "linear-gradient(135deg, #2a1a0d, #3b2010)",
  "linear-gradient(135deg, #0d1f3c, #2c1654)",
  "linear-gradient(135deg, #1a2010, #2a3a20)",
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #08152e 0%, #06101f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Analiz ve Görüşler"
          subtitle="Siyaset bilimi, diplomasi ve kamu yönetimi üzerine derinlikli analizler ve özgün bakış açıları."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {blogPosts.map((post, i) => {
            const catStyle = categoryColors[post.category] ?? { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" };
            return (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="rounded-3xl overflow-hidden card-shine group flex flex-col"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Image area */}
                <div
                  className="h-44 relative overflow-hidden"
                  style={{ background: postGradients[i % postGradients.length] }}
                >
                  <div className="absolute inset-0 bg-grid opacity-30" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: catStyle.bg, color: catStyle.color, backdropFilter: "blur(10px)" }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs"
                      style={{ background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.7)", backdropFilter: "blur(10px)" }}
                    >
                      <Clock size={9} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(8,21,46,0.6)" }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                      style={{ background: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(10px)" }}
                    >
                      Oku <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="p-6 flex flex-col flex-1"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <h3
                    className="text-base font-bold mb-3 leading-snug group-hover:text-white transition-colors"
                    style={{ color: "rgb(228,235,248)" }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "rgb(138,155,184)" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium"
                        style={{ background: "rgba(255,255,255,0.05)", color: "rgb(138,155,184)" }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author + Read link */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold"
                        style={{ background: "rgba(26,86,219,0.2)", color: "#60a5fa" }}
                      >
                        {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: "rgb(210,220,240)" }}>
                          {post.author}
                        </p>
                        <p className="text-[10px]" style={{ color: "rgb(138,155,184)" }}>
                          {post.date}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-medium transition-all group/link hover:gap-2"
                      style={{ color: "#c9a84c" }}
                    >
                      Oku
                      <ArrowRight size={11} className="transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgb(248,250,252)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            Tüm Yazıları Gör
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
