import type { Metadata } from "next";
import ManagementBoard from "@/components/sections/ManagementBoard";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description: "İMÜ Siyaset ve Bürokrasi Topluluğu yönetim kurulu üyeleri.",
};

export default function TeamPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, var(--color-bg-base), var(--color-bg-elevated))" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>Ekibimiz</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "var(--color-text-primary)" }}>Yönetim Kurulu</h1>
        <p className="mt-4 text-base" style={{ color: "var(--color-text-muted)" }}>Topluluğumuzu ileri taşıyan liderlik kadrosu</p>
      </div>
      <ManagementBoard />
    </div>
  );
}
