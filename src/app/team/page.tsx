import type { Metadata } from "next";
import ManagementBoard from "@/components/sections/ManagementBoard";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description: "İMÜ Siyaset ve Bürokrasi Kulübü yönetim kurulu üyeleri.",
};

export default function TeamPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, #08152e, #0d1f3c)" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>Ekibimiz</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "rgb(248,250,252)" }}>Yönetim Kurulu</h1>
        <p className="mt-4 text-base" style={{ color: "rgb(138,155,184)" }}>Kulübümüzü ileri taşıyan liderlik kadrosu</p>
      </div>
      <ManagementBoard />
    </div>
  );
}
