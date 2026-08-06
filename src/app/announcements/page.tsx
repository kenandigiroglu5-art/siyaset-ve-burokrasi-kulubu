import type { Metadata } from "next";
import Announcements from "@/components/sections/Announcements";

export const metadata: Metadata = {
  title: "Duyurular",
  description: "İMÜ Siyaset ve Bürokrasi Topluluğu duyuruları — doğrulanmış etkinlik haberleri.",
};

export default function AnnouncementsPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, var(--color-bg-base), var(--color-bg-elevated))" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>Duyurular</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "var(--color-text-primary)" }}>Topluluktan Haberler</h1>
        <p className="mt-4 text-base" style={{ color: "var(--color-text-muted)" }}>Doğrulanmış, kronolojik duyuru akışı</p>
      </div>
      <Announcements />
    </div>
  );
}
