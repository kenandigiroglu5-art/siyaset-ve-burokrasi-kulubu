import type { Metadata } from "next";
import Blog from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "İMÜ Siyaset ve Bürokrasi Kulübü blog — siyaset, diplomasi ve kamu yönetimi üzerine analizler.",
};

export default function BlogPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, #08152e, #0d1f3c)" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>Analiz & Görüş</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "rgb(248,250,252)" }}>Blog</h1>
        <p className="mt-4 text-base" style={{ color: "rgb(138,155,184)" }}>Derinlikli analizler ve özgün bakış açıları</p>
      </div>
      <Blog />
    </div>
  );
}
