"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Play, Layers } from "lucide-react";
import { Instagram } from "@/components/common/SocialIcons";
import SectionHeader from "@/components/common/SectionHeader";
import { staggerContainer, scaleIn, viewportConfig } from "@/lib/animations";
import { SOURCES } from "@/lib/data";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/dictionary";
import type { InstagramFeedState } from "@/lib/instagram";
import type { InstagramPost } from "@/types";

const INSTAGRAM_URL = SOURCES.instagram;

function formatCaption(caption: string | undefined, fallback: string) {
  if (!caption) return fallback;
  const firstLine = caption.split("\n")[0].trim();
  if (firstLine.length <= 90) return firstLine;
  return `${firstLine.slice(0, 87).trim()}...`;
}

function PostCard({ post, locale }: { post: InstagramPost; locale: Locale }) {
  const { t } = useLocale();
  const caption = formatCaption(post.caption, t.instagram.title);
  const date = post.timestamp
    ? new Date(post.timestamp).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <motion.a
      variants={scaleIn}
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl overflow-hidden aspect-square relative group cursor-pointer block"
      style={{ border: "1px solid var(--border-1)" }}
      aria-label={`Instagram: ${caption}`}
    >
      <Image
        src={post.displayImageUrl}
        alt={caption}
        fill
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Medya türü rozeti */}
      {(post.mediaType === "VIDEO" || post.mediaType === "CAROUSEL_ALBUM") && (
        <div
          className="absolute top-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(8,21,46,0.65)" }}
          aria-label={post.mediaType === "VIDEO" ? t.instagram.videoBadge : t.instagram.albumBadge}
        >
          {post.mediaType === "VIDEO" ? (
            <Play size={13} style={{ color: "white" }} fill="white" />
          ) : (
            <Layers size={13} style={{ color: "white" }} />
          )}
        </div>
      )}

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ background: "rgba(8,21,46,0.88)" }}
      >
        <p className="text-sm font-semibold line-clamp-3" style={{ color: "white" }}>
          {caption}
        </p>
        {date && (
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.65)" }}>
            {date}
          </p>
        )}
        <div
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
          style={{ background: "var(--border-3)", color: "white" }}
        >
          <ExternalLink size={11} />
          {t.instagram.viewOnInstagram}
        </div>
      </motion.div>
    </motion.a>
  );
}

function FallbackCard() {
  const { t } = useLocale();
  return (
    <div
      className="col-span-2 md:col-span-3 rounded-2xl flex flex-col items-center justify-center text-center gap-4 py-16 px-6"
      style={{ border: "1px solid var(--border-1)", background: "var(--surface-2)" }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(225,48,108,0.12)" }}
      >
        <Instagram size={20} style={{ color: "#e1306c" }} />
      </div>
      <div>
        <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>
          {t.instagram.fallbackTitle}
        </p>
        <p className="text-sm max-w-sm" style={{ color: "var(--color-text-muted)" }}>
          {t.instagram.fallbackBody}
        </p>
      </div>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, rgba(225,48,108,0.8), rgba(193,53,132,0.8))",
          color: "white",
        }}
      >
        <Instagram size={15} />
        {t.instagram.viewOnInstagram}
      </a>
    </div>
  );
}

export default function InstagramFeedClient({ feed }: { feed: InstagramFeedState }) {
  const { t, locale } = useLocale();
  const posts = feed.status === "ok" ? feed.posts : [];

  return (
    <section
      id="instagram"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-bg-base)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow={t.instagram.eyebrow} title={t.instagram.title} subtitle={t.instagram.subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
        >
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} locale={locale} />)
          ) : (
            <FallbackCard />
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
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
            {t.instagram.follow}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
